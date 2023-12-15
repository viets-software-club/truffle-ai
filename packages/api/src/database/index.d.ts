import { Tables, Database } from '../../types/supabase'

type ExpandIdColumnsAndRemoveInternalColumns<T extends keyof Database['public']['Tables']> = {
  [K in Exclude<keyof Tables<T>, '_created_at' | `${T}_id`> as K extends `${infer Name}_id`
    ? `${Extract<Name, keyof Database['public']['Tables']>}`
    : K]: K extends `${infer Name}_id`
    ? ExpandIdColumnsAndRemoveInternalColumns<Extract<Name, keyof Database['public']['Tables']>>
    : Tables<T>[K]
} & {}
export type IDColumns = `${Extract<'any', keyof Database['public']['Tables'] | 'user'>}_id`
export type TableNames = keyof Database['public']['Tables']

/*
removes _id from T table name
expands _id column that is passed into U as Array and appends 's' character as all id columns are in singular
user_id has to be hacked because its not a table
*/
export type StringWithS<T extends string> = `${T}s`
export type StringWithID<T extends string> = `${T}_id`
export type RealTable<T extends keyof Database['public']['Tables']> = Tables<T> & {
  [e in StringWithID<T>]: string
}

export type ExpandOnlySpecificIdColumnsAsArrayAndRemoveInternalColumns<
  T extends keyof Database['public']['Tables'],
  U extends keyof Database['public']['Tables'] = never
> = {
  [K in Exclude<keyof Tables<T>, '_created_at' | `${T}_id`> as K extends `${infer Name}_id`
    ? Name extends U
      ? StringWithS<`${Extract<Name, keyof Database['public']['Tables']>}`>
      : `${Extract<Name, keyof Database['public']['Tables'] | 'user'>}_id`
    : K]: K extends `${infer Name}_id`
    ? Name extends U
      ? ExpandOnlySpecificIdColumnsAsArrayAndRemoveInternalColumns<
          Extract<Name, keyof Database['public']['Tables']>,
          U
        >[]
      : Tables<T>[K]
    : Tables<T>[K]
} & {}

type DBTables = Database['public']['Tables']
type PublicDBTables = Database['public']['Tables']

type DBTable<T extends keyof DBTables> = Tables<T> & {
  [K in T as `${K}_id`]: unknown | never
}

type RemoveInternalDBColsFromDBTable<T extends keyof DBTables> = Omit<
  DBTable<T>,
  '_created_at' | `${T}_id`
>
type RemoveInternalDBColsExceptIds<T> = Omit<T, '_created_at'>
type RemoveCols<T, K extends string | number | symbol> = Omit<T, K>
type RemoveColsAsId<T, K extends string> = Omit<T, `${K}_id`>
type OmitAnyIds<T> = {
  [K in keyof T as K extends `${infer Prefix}_id` ? never : K]: T[K]
}
type OmitAnyIdsRecursively<T> = {
  [K in keyof T as K extends `${infer Prefix}_id` ? never : K]: OmitAnyIdsRecursively<T[K]>
} & {}
type OmitPublicDBTableIds<T> = {
  [K in keyof T as K extends `${infer TableName}_id`
    ? TableName extends Extract<TableName, keyof PublicDBTables>
      ? never
      : K
    : K]: T[K]
}
type RecursiveOmit<T, K extends keyof any> = T extends object
  ? T extends Array<infer U>
    ? Array<RecursiveOmit<U, K>>
    : {
        [P in Exclude<keyof T, K>]: P extends K ? never : RecursiveOmit<T[P], K>
      }
  : T
type RemoveInternalDBColsRecursively<T> = RecursiveOmit<T, '_created_at'>
// removes tables _id passed in as ID
type ExpandIdsRecursivlyWithDBTables<T, ID> = {
  [K in Exclude<keyof T, ID> as K extends `${infer TableName}_id`
    ? Extract<TableName, keyof DBTables> extends never
      ? `${TableName}_id`
      : `${Extract<TableName, keyof DBTables>}`
    : K]: K extends `${infer TableName}_id`
    ? Extract<TableName, keyof DBTables> extends never
      ? T[K]
      : ExpandIdsRecursivlyWithDBTables<
          DBTable<Extract<TableName, keyof DBTables>>,
          `${TableName}_id`
        >[]
    : T[K]
} & {}
// // removes tables _id passed in as ID
type ExpandSetIdsRecursivlyWithDBTables<
  T,
  ID,
  ExpandObject extends keyof DBTables | undefined = undefined,
  ExpandArray extends keyof DBTables | undefined = undefined
> = {
  [K in Exclude<keyof T, ID> as K extends `${infer TableName}_id`
    ? Extract<TableName, keyof DBTables> extends never
      ? `${TableName}_id`
      : TableName extends ExpandObject
        ? `${Extract<TableName, keyof DBTables>}`
        : TableName extends ExpandArray
          ? `${Extract<TableName, keyof DBTables>}`
          : never
    : K]: K extends `${infer TableName}_id`
    ? Extract<TableName, keyof DBTables> extends never
      ? T[K]
      : TableName extends ExpandObject
        ? ExpandSetIdsRecursivlyWithDBTables<
            DBTable<Extract<TableName, keyof DBTables>>,
            `${TableName}_id`,
            ExpandObject,
            ExpandArray
          >
        : TableName extends ExpandArray
          ? ExpandSetIdsRecursivlyWithDBTables<
              DBTable<Extract<TableName, keyof DBTables>>,
              `${TableName}_id`,
              ExpandObject,
              ExpandArray
            >[]
          : T[K]
    : T[K]
} & {}

type ExpandDBTableByIdsRecursivly<T extends keyof DBTables> = ExpandIdsRecursivlyWithDBTables<
  DBTable<T>,
  `${T}_id`
>
type ExpandDBTableByIdsRecursivelyAndRemoveInternalDBColsRecursively<T extends keyof DBTables> =
  RemoveInternalDBColsRecursively<ExpandDBTableByIdsRecursivly<T>>
type DBTableWithoutInternalDBCols<T extends keyof DBTables> = RemoveInternalDBColsRecursively<
  DBTable<T>
>
type ExpandDBTableSetIdsRecursivelyAndRemoveInternalDBColsRecursively<
  T extends keyof DBTables,
  ExpandObject extends keyof DBTables | undefined = undefined,
  ExpandArray extends keyof DBTables | undefined = undefined
> = RemoveInternalDBColsRecursively<
  ExpandSetIdsRecursivlyWithDBTables<DBTable<T>, `${T}_id`, ExpandObject, ExpandArray>
>

type DBTableWithoutInternalDBColsAndWithoutOwnId<T extends keyof DBTables> = RemoveColsAsId<
  RemoveInternalDBColsRecursively<DBTable<T>>,
  T
>
type DBTableWithoutInternalDBColsAndWithoutSetIds<
  T extends keyof DBTables,
  IDs extends keyof DBTables
> = RemoveColsAsId<RemoveColsAsId<RemoveInternalDBColsRecursively<DBTable<T>>, T>, IDs>
type X = ExpandDBTableByIdsRecursivelyAndRemoveInternalDBColsRecursively<'github_repo'>
type DBTableWithoutAnyIds<T extends keyof DBTables> = OmitAnyIds<DBTable<T>>
type DBTableWithoutInternalDBColsAndWithoutAnyIds<T extends keyof DBTables> =
  RemoveInternalDBColsRecursively<OmitAnyIds<DBTable<T>>>
type DBTableWithoutInternalDBColsAndWithoutPublicDBIds<T extends keyof DBTables> =
  RemoveInternalDBColsRecursively<OmitPublicDBTableIds<DBTable<T>>>
type FirstUnionType<T> = T extends (infer U)[] ? U : T
export type CombineOneOrMultipleDBTableWithDBTables<
  T extends keyof DBTables,
  U extends (keyof DBTables)[]
> = {
  [K in T]: DBTable<T>
} & {
  [K in U[number] as `${K}s`]: {
    [L in keyof Tables<K>]: Tables<K>[L]
  }[]
}

export type CombineOneOrMultipleDBTableWithDBTablesWithoutInternalDBCols<
  T extends keyof DBTables,
  U extends (keyof DBTables)[]
> = RemoveInternalDBColsRecursively<CombineOneOrMultipleDBTableWithDBTables<T, U>>

export type CombineOneOrMultipleDBTableWithDBTablesWithoutInternalDBColsAndWithoutAnyIds<
  T extends keyof DBTables,
  U extends (keyof DBTables)[]
> = OmitAnyIds<RemoveInternalDBColsRecursively<CombineOneOrMultipleDBTableWithDBTables<T, U>>>
export type CombineOneOrMultipleDBTableWithDBTablesWithoutInternalDBColsAndWithoutAnyIdsRecursively<
  T extends keyof DBTables,
  U extends (keyof DBTables)[]
> = OmitAnyIdsRecursively<
  RemoveInternalDBColsRecursively<CombineOneOrMultipleDBTableWithDBTables<T, U>>
> & {}
export type ColId = unknown

export type TableNameArray = (keyof Database['public']['Tables'])[]
export type CombineTableWithTables<
  T extends keyof Database['public']['Tables'],
  U extends (keyof Database['public']['Tables'])[]
> = {
  [K in Exclude<keyof Tables<T>, '_created_at' | `${T}_id`>]: Tables<T>[K]
} & {
  [K in U[number] as `${K}s`]: {
    [L in Exclude<keyof Tables<K>, '_created_at' | `${K}_id`>]: Tables<K>[L]
  }[] & {}
}
export type InsertProjectRepo = Omit<
  ExpandDBTableSetIdsRecursivelyAndRemoveInternalDBColsRecursively<
    'project_repo',
    'project_repo_metadata' | 'github_repo'
  >,
  'github_repo'
> & {
  github_repo: InsertGithubRepo
  hackernews_storys: CombineOneOrMultipleDBTableWithDBTablesWithoutInternalDBColsAndWithoutAnyIdsRecursively<
    'hackernews_story',
    ['hackernews_tag']
  >[]
  twitter_searchs: CombineOneOrMultipleDBTableWithDBTablesWithoutInternalDBColsAndWithoutAnyIdsRecursively<
    'twitter_search',
    ['twitter_user']
  >[]
  linkedin_profile_searchs: CombineOneOrMultipleDBTableWithDBTablesWithoutInternalDBColsAndWithoutAnyIdsRecursively<
    'linkedin_profile_search',
    ['linkedin_profile_search_update']
  >[]
}
export type InsertGithubOwner =
  | {
      self: ExpandDBTableByIdsRecursivelyAndRemoveInternalDBColsRecursively<'github_owner'> & {
        type: 'User'
      }
      github_user: ExpandDBTableByIdsRecursivelyAndRemoveInternalDBColsRecursively<'github_user'>
    }
  | {
      self: ExpandDBTableByIdsRecursivelyAndRemoveInternalDBColsRecursively<'github_owner'> & {
        type: 'Organization'
      }
      github_organization: ExpandDBTableByIdsRecursivelyAndRemoveInternalDBColsRecursively<'github_organization'>
    }
export type InsertGithubRepo = {
  self: DBTableWithoutInternalDBColsAndWithoutAnyIds<'github_repo'>
  github_owner: InsertGithubOwner

  github_languages: ExpandDBTableByIdsRecursivelyAndRemoveInternalDBColsRecursively<'github_language'>[]
  github_repo_contributors: {
    self: DBTableWithoutInternalDBColsAndWithoutAnyIds<'github_repo_contributor'>
    github_owner: InsertGithubOwner
  }[]
  github_star_historys: DBTableWithoutInternalDBColsAndWithoutAnyIds<'github_star_history'>[]
  github_issue_historys: DBTableWithoutInternalDBColsAndWithoutAnyIds<'github_issue_history'>[]
  github_fork_historys: DBTableWithoutInternalDBColsAndWithoutAnyIds<'github_fork_history'>[]
}
