import postgres from 'postgres'
import {
  type InsertProjectRepo,
  type InsertGithubRepo,
  type DBTables,
  DBTable,
  ColId,
  InsertGithubOwner
} from './index.d'

const connectionString = process.env.SUPABASE_DATABASE_URL

const stripKeys = <T extends Record<string, unknown>>(obj: T, ...keys: string[]) => {
  for (const key of keys) {
    delete obj[key]
  }
  return obj
}
type TransactionSql = postgres.TransactionSql<{}>
class Database {
  sql: postgres.Sql<{}> = postgres(connectionString, {
    debug: (connection, query) => {
      console.log(query)
    }
  })
  open() {
    this.sql = postgres(connectionString)
  }
  close() {
    return this.sql.end()
  }

  insertBookmark(projectRepo: InsertProjectRepo) {
    return this.sql.begin(async (sql: TransactionSql) => {
      await this._insertProjectRepo(sql, projectRepo)
      return []
    })
  }

  _insertProjectRepo(sql: TransactionSql, project_repo: InsertProjectRepo) {
    return Promise.all([
      this._insertGithubRepo(sql, project_repo.github_repo)
      // this._insertJunctionForManyToManyUsingArrayOfOneToMany(
      //   sql,
      //   { name: 'twitter_search', conflictCols: ['search'] },
      //   { name: 'twitter_user' },
      //   'twitter_search_and_twitter_user',
      //   project_repo.twitter_searchs as any
      // )
      this._insertJunctionForManyToManyUsingArrayOfOneToMany(
        sql,
        { name: 'hackernews_story', conflictCols: []},
        'hackernews_tag',
        'hackernews_story_and_hackernews_tag',
        project_repo.hackernews_storys as any
      )
    ])
  }
  async _insertHackernews(sql: TransactionSql, github_owner: InsertGithubOwner) {


  }

  /* Inserts Github Owner
   * @return githubOwnerResult
   */
  async _insertGithubOwner(sql: TransactionSql, github_owner: InsertGithubOwner) {
    const githubOwnerResult = await this._upsert(sql, {
      name: 'github_owner',
      data: github_owner.self,
      conflictCols: ['login'],
      hasReturning: true
    })
    const githubOwnerId = githubOwnerResult[0].github_owner_id
    if ('github_organization' in github_owner) {
      this._upsert(sql, {
        name: 'github_organization',
        data: {
          ...github_owner.github_organization,
          github_organization_id: githubOwnerId
        },
        conflictCols: ['github_organization_id']
      })
    } else {
      this._upsert(sql, {
        name: 'github_user',
        data: {
          ...github_owner.github_user,
          github_user_id: githubOwnerId
        },
        conflictCols: ['github_user_id']
      })
    }
    return [githubOwnerResult]
  }

  async _insertGithubRepo(sql: TransactionSql, github_repo: InsertGithubRepo) {
    const promises: any[] = []

    const [githubOwnerResult] = await this._insertGithubOwner(sql, github_repo.github_owner)
    const githubOwnerId = githubOwnerResult[0].github_owner_id

    const githubRepoResult = await this._upsert(sql, {
      name: 'github_repo',
      data: {
        ...github_repo.self,
        github_owner_id: githubOwnerId
      },
      conflictCols: ['name'],
      hasReturning: true
    })
    const githubRepoId = githubRepoResult[0].github_repo_id

    return Promise.all([
      ...github_repo.github_repo_contributors.map(async (github_contributor) => {
        const [githubOwnerResult] = await this._insertGithubOwner(
          sql,
          github_contributor.github_owner
        )
        return this._upsert(sql, {
          name: 'github_repo_contributor',
          data: {
            ...github_contributor.self,
            github_repo_id: githubRepoId,
            github_owner_id: githubOwnerResult[0].github_owner_id
          },
          conflictCols: ['github_repo_id', 'github_owner_id'],
          hasReturning: true
        })
      }),
      this._upsertJunctionForIdToMany(
        sql,
        {
          name: 'github_repo',
          id: githubRepoId
        },
        {
          name: 'github_language',
          data: github_repo.github_languages,
          conflictCols: ['name']
        },
        'github_repo_and_github_language'
      ),
      this._upsert(sql, {
        name: 'github_star_history',
        data: github_repo.github_star_historys.map((github_star_history) => ({
          ...github_star_history,
          github_repo_id: githubRepoId
        })),
        conflictCols: ['star_date', 'github_repo_id']
      }),
      this._upsert(sql, {
          name: 'github_fork_history',
          data: github_repo.github_fork_historys.map((github_fork_history) => ({
            ...github_fork_history,
            github_repo_id: githubRepoId
          })),
          conflictCols: ['fork_date', 'github_repo_id']
        }),
      this._upsert(sql, {
          name: 'github_issue_history',
          data: github_repo.github_issue_historys.map((github_issue_history) => ({
            ...github_issue_history,
            github_repo_id: githubRepoId
          })),
          conflictCols: ['issue_date', 'github_repo_id']
        })
    ])
  }

  async _insertJunctionForManyToManyUsingArrayOfOneToMany<
    T extends keyof DBTables,
    U extends keyof DBTables,
    V extends keyof DBTables
  >(
    sql: postgres.TransactionSql,
    one: { name: T; conflictCols: string[] },
    many: { name: U; conflictCols: string[] },
    junctionTableName: V,
    data: ({
      [K in T]: object
    } & {
      [O in U as `${O}s`]: object[]
    })[]
  ) {
    return Promise.all(
      data.map((item) => {
        const manyTableData = item[`${many.name}s`] as object[]
        return this._insertJunctionForOneToMany(
          sql,
          { name: one.name, data: item[one.name] as object, conflictCols: one.conflictCols },
          { name: many.name, data: manyTableData, conflictCols: many.conflictCols },
          junctionTableName
        )
      })
    )
  }

  async _upsertJunctionForIdToMany<
    T extends keyof DBTables,
    U extends keyof DBTables,
    V extends keyof DBTables
  >(
    sql: postgres.TransactionSql,
    one: { name: T; id: unknown },
    many: { name: U; data: object[]; conflictCols: string[] },
    junctionTableName: V
  ) {
    // console.log('results?')
    const manyResults = await this._upsert<U>(sql, {
      name: many.name,
      data: many.data,
      conflictCols: many.conflictCols,
      hasReturning: true
    })
    // console.log('many: ', manyResults)
    const mappingData = manyResults.map((result) => {
      return {
        [`${one.name}_id`]: one.id,
        [`${many.name}_id`]: result[`${many.name}_id`]
      }
    })
    this._upsert<V>(sql, {
      name: junctionTableName,
      data: mappingData,
      conflictCols: [`${one.name}_id`, `${many.name}_id`]
    })
  }

  async _insertJunctionForOneToMany<
    T extends keyof DBTables,
    U extends keyof DBTables,
    V extends keyof DBTables
  >(
    sql: postgres.TransactionSql,
    one: { name: T; data: object; conflictCols: string[] },
    many: { name: U; data: object[]; conflictCols: string[] },
    junctionTableName: V
  ) {
    const [oneResults, manyResults] = await Promise.all(
      [
        this._upsert<T>(sql, {
          name: one.name,
          data: one.data,
          conflictCols: one.conflictCols,
          hasReturning: true
        }),
        this._upsert<U>(sql, {
          name: many.name,
          data: many.data,
          conflictCols: many.conflictCols,
          hasReturning: true
        })
      ].flat()
    )
    const oneResult = oneResults[0] as DBTable<T>
    const mappingData = manyResults.map((result) => {
      const resultAsTable = result as DBTable<U>
      return {
        [`${one.name}_id`]: oneResult[`${one.name}_id`],
        [`${many.name}_id`]: resultAsTable[`${many.name}_id`]
      }
    })
    this._upsert<V>(sql, {
      name: junctionTableName,
      data: mappingData,
      conflictCols: [`${one.name}_id`, `${many.name}_id`]
    })
  }

  _upsert<T extends keyof DBTables>(
    sql: postgres.TransactionSql<{}>,
    options: {
      name: T
      data: object[] | object
      conflictCols: string[]
      identifierCols?: string[]
      updateCols?: string[]
      hasReturning?: boolean
    }
  ) {
    const updateCols =
      options.updateCols ||
      (Array.isArray(options.data)
        ? options.data?.length > 0
          ? Object.keys(options.data[0])
          : []
        : Object.keys(options.data))
    const onConflictWhere = Array.isArray(options.identifierCols)
      ? sql`WHERE ${options.identifierCols.map(
          (identifierCol) => sql`${sql(identifierCol)} = EXCLUDED.${sql(identifierCol)}`
        )}`
      : sql``
    const onConflictUpdate = sql`DO UPDATE SET${updateCols.map(
      (key, i) =>
        sql`${sql(key)} = EXCLUDED.${sql(key)}${i !== updateCols.length - 1 ? sql`,` : sql``}`
    )}`
    const onConflicClause = sql`ON CONFLICT (${sql(
      options.conflictCols
    )}) ${onConflictUpdate} ${onConflictWhere}`
    if (options.hasReturning)
      return sql<DBTable<T>[]>`INSERT INTO ${sql(options.name as string)} ${sql(
        options.data
      )} ${onConflicClause} RETURNING *`
    return sql<DBTable<T>[]>`INSERT INTO ${sql(options.name as string)} ${sql(
      options.data
    )} ${onConflicClause}`
  }
}

export default Database
