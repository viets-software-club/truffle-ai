package db

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/jackc/pgx/v5/tracelog"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

type Database struct {
	pool *pgxpool.Pool
	ctx  context.Context
}

func New() *Database {
	return &Database{}
}

func (d *Database) Close() {
	d.pool.Close()
}

func getConfig(hasLogging bool) (*pgxpool.Config, error) {
	config, err := pgxpool.ParseConfig(os.Getenv("SUPABASE_DATABASE_URL"))
	if hasLogging {
		config.ConnConfig.Tracer = &tracelog.TraceLog{
			Logger:   Log{},
			LogLevel: tracelog.LogLevelTrace,
		}
	}
	config.AfterConnect = func(ctx context.Context, conn *pgx.Conn) error {
		for _, typeName := range types.DatabaseTypes {
			dataType, err := conn.LoadType(ctx, typeName)
			if err != nil {
				fmt.Println("what", dataType, typeName)
				return err
			}
			conn.TypeMap().RegisterType(dataType)
		}
		return nil
	}
	return config, err
}

func (d *Database) Open(hasLogging bool) error {
	var err error
	d.ctx = context.Background()
	config, err := getConfig(hasLogging)
	if err != nil {
		return err
	}

	d.pool, err = pgxpool.NewWithConfig(d.ctx, config)
	if err != nil {
		return err
	}
	return nil
}

// select f_insert_gthb_owner(
//
//	Row(
//	  'avatar_url',
//	  NULL,
//	  'User'::d_gthb_owner_type,
//	  'gthb_owner_login',
//	  'gthb_owner_url',
//	  Row(
//	    'bio',
//	    'bio_html',
//	    'company',
//	    'company_html',
//	    NOW(),
//	    'email',
//	    123,
//	    'gthb_user_name',
//	    'twitter_username',
//	    'website_url'
//	  )::t_ivals_gthb_user,
//	  5000
//	)::t_f_insert_gthb_owner
//
// );

func (d *Database) CallInsertProjBookmarkWCats(projectBookmarkWithCategories *types.T_f_insert_proj_bookmark_w_cats) error {

	_, err := d.pool.Exec(d.ctx, "SELECT f_insert_proj_bookmark_w_cats($1)", &projectBookmarkWithCategories)
	if err != nil {
		return err
	}

	return nil
}

func (d *Database) CallInsertGthbTrendings(githubTrendings []types.T_f_insert_gthb_trending) error {

	_, err := d.pool.Exec(d.ctx, "SELECT f_insert_gthb_trendings($1)", &githubTrendings)
	if err != nil {
		return err
	}

	return nil
}
func (d *Database) CallInsertGthbOwner(githubOwner types.T_f_insert_gthb_owner) error {

	_, err := d.pool.Exec(d.ctx, "SELECT f_insert_gthb_owner($1)", &githubOwner)
	if err != nil {
		return err
	}

	return nil
}

func (d *Database) CallDeleteProjBookmark(projBookmarkId int) error {

	_, err := d.pool.Exec(d.ctx, "SELECT f_insert_gthb_owner($1)", &projBookmarkId)
	if err != nil {
		return err
	}

	return nil
}

func (d *Database) CallDeleteProjBookmarkByProjRepoId(projRepoId int) error {

	_, err := d.pool.Exec(d.ctx, "SELECT f_insert_gthb_owner($1)", &projRepoId)
	if err != nil {
		return err
	}

	return nil
}

func (d *Database) CallInsertProjClassifier(classifierArray *pgtype.FlatArray[types.T_ivals_proj_classifier]) error {

	_, err := d.pool.Exec(d.ctx, "Insert into proj_classifier(classifier) select * from unnest($1::t_ivals_proj_classifier[])", nil)
	if err != nil {
		return err
	}

	return nil
}

// func (d *Database) UpsertGithubOwner(tx pgx.Tx, github_owner Insert_github_owner) (int, error) {

// 	// Insert github_owner
// 	var scannedGithubOwner Table_github_owner
// 	err := tx.QueryRow(d.ctx, "insert into github_owner(type,avatar_url,login,url,repositories_total_count) values($1, $2, $3, $4, $5) on conflict(login) do update set type=excluded.type, avatar_url=excluded.avatar_url, login=excluded.login, url=excluded.url, repositories_total_count=excluded.repositories_total_count returning github_owner_id, type", github_owner.Owner_type, github_owner.Avatar_url, github_owner.Login, github_owner.Url, github_owner.Repositories_total_count).Scan(&scannedGithubOwner.Github_owner_id, &scannedGithubOwner.Owner_type)
// 	if err != nil {
// 		return -1, err
// 	}

// 	// Insert github_organization or github_user
// 	if github_owner.Owner_type == "Organization" {
// 		github_organization := github_owner.Github_organization
// 		_, err := tx.Exec(d.ctx, "insert into github_organization(github_organization_id,created_at,description,description_html,email, name, twitter_username, website_url) values($1, $2, $3, $4, $5, $6, $7, $8) on conflict(github_organization_id) do update set created_at=excluded.created_at, description=excluded.description, description_html=excluded.description_html, email=excluded.email, name=excluded.name, twitter_username=excluded.twitter_username, website_url=excluded.website_url", scannedGithubOwner.Github_owner_id, github_organization.Created_at, github_organization.Description, github_organization.Description_html, github_organization.Email, github_organization.Name, github_organization.Twitter_username, github_organization.Website_url)
// 		if err != nil {
// 			return -1, err
// 		}
// 	} else {
// 		github_user := github_owner.Github_user
// 		_, err := tx.Exec(d.ctx, "insert into github_user(github_user_id,bio,bio_html,company,company_html, created_at, email, followers_total_count, name, twitter_username, website_url) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) on conflict(github_user_id) do update set bio=excluded.bio, bio_html=excluded.bio_html, company=excluded.company_html, created_at=excluded.created_at, email=excluded.email, followers_total_count=excluded.followers_total_count, name=excluded.name, twitter_username=excluded.twitter_username, website_url=excluded.website_url", scannedGithubOwner.Github_owner_id, github_user.Bio, github_user.Bio_html, github_user.Company, github_user.Company_html, github_user.Created_at, github_user.Email, github_user.Followers_total_count, github_user.Name, github_user.Twitter_username, github_user.Website_url)
// 		if err != nil {
// 			return -1, err
// 		}
// 	}
// 	return scannedGithubOwner.Github_owner_id, nil
// }

// func (d *Database) InsertGithubRepoContributors(tx pgx.Tx, github_repo_id int, contributors []Insert_github_repo_contributor) error {
// 	var ownerIds []int
// 	for _, contributor := range contributors {
// 		ownerId, err := d.UpsertGithubOwner(tx, contributor.Github_owner)
// 		if err != nil {
// 			return err
// 		}
// 		ownerIds = append(ownerIds, ownerId)
// 	}
// 	contributorBatch := &pgx.Batch{}
// 	for index, contributor := range contributors {
// 		contributorBatch.Queue("insert into github_repo_contributor(github_repo_id, github_owner_id, contributions) values($1, $2, $3) on conflict(github_repo_id, github_owner_id) do update set contributions=excluded.contributions", github_repo_id, ownerIds[index], contributor.Contributions)
// 	}
// 	batchResults := tx.SendBatch(d.ctx, contributorBatch)
// 	err := batchResults.Close()
// 	if err != nil {
// 		return err
// 	}
// 	return nil
// }

// func (d *Database) UpsertGithubOwnerForEveryContributorAndAddtoBatch(tx pgx.Tx, batch *pgx.Batch, github_repo_id int, contributors []Insert_github_repo_contributor) error {
// 	var ownerIds []int
// 	for _, contributor := range contributors {
// 		ownerId, err := d.UpsertGithubOwner(tx, contributor.Github_owner)
// 		if err != nil {
// 			return err
// 		}
// 		ownerIds = append(ownerIds, ownerId)
// 	}
// 	for index, contributor := range contributors {
// 		batch.Queue("insert into github_repo_contributor(github_repo_id, github_owner_id, contributions) values($1, $2, $3) on conflict(github_repo_id, github_owner_id) do update set contributions=excluded.contributions", github_repo_id, ownerIds[index], contributor.Contributions)
// 	}
// 	return nil
// }
// func (d *Database) InsertGithubForkHistory(tx pgx.Tx, github_repo_id int, github_fork_histories []Insert_github_fork_history) error {
// 	batch := &pgx.Batch{}
// 	for _, fork_history := range github_fork_histories {
// 		batch.Queue("insert into github_fork_history(github_repo_id, fork_date, amount) values($1, $2, $3) on conflict(fork_date, github_repo_id) do update set amount=excluded.amount", github_repo_id, fork_history.Fork_date, fork_history.Amount)
// 	}
// 	batchResults := tx.SendBatch(d.ctx, batch)
// 	err := batchResults.Close()
// 	if err != nil {
// 		return err
// 	}
// 	return nil
// }
// func (d *Database) AddGithubForkHistoryToBatch(batch *pgx.Batch, github_repo_id int, github_fork_histories []Insert_github_fork_history) {
// 	for _, fork_history := range github_fork_histories {
// 		batch.Queue("insert into github_fork_history(github_repo_id, fork_date, amount) values($1, $2, $3) on conflict(fork_date, github_repo_id) do update set amount=excluded.amount", github_repo_id, fork_history.Fork_date, fork_history.Amount)
// 	}
// }
// func (d *Database) InsertGithubIssueHistory(tx pgx.Tx, github_repo_id int, github_issue_histories []Insert_github_issue_history) error {
// 	batch := &pgx.Batch{}
// 	for _, issue_history := range github_issue_histories {
// 		batch.Queue("insert into github_issue_history(github_repo_id, issue_date, amount) values($1, $2, $3) on conflict(issue_date, github_repo_id) do update set amount=excluded.amount", github_repo_id, issue_history.Issue_date, issue_history.Amount)
// 	}
// 	batchResults := tx.SendBatch(d.ctx, batch)
// 	err := batchResults.Close()
// 	if err != nil {
// 		return err
// 	}
// 	return nil
// }
// func (d *Database) AddGithubIssueHistoryToBatch(batch *pgx.Batch, github_repo_id int, github_issue_histories []Insert_github_issue_history) {
// 	for _, issue_history := range github_issue_histories {
// 		batch.Queue("insert into github_issue_history(github_repo_id, issue_date, amount) values($1, $2, $3) on conflict(issue_date, github_repo_id) do update set amount=excluded.amount", github_repo_id, issue_history.Issue_date, issue_history.Amount)
// 	}
// }
// func (d *Database) InsertGithubStarHistory(tx pgx.Tx, github_repo_id int, github_star_histories []Insert_github_star_history) error {
// 	batch := &pgx.Batch{}
// 	for _, star_history := range github_star_histories {
// 		batch.Queue("insert into github_star_history(github_repo_id, star_date, amount) values($1, $2, $3) on conflict(star_date, github_repo_id) do update set amount=excluded.amount", github_repo_id, star_history.Star_date, star_history.Amount)
// 	}
// 	batchResults := tx.SendBatch(d.ctx, batch)
// 	err := batchResults.Close()
// 	if err != nil {
// 		return err
// 	}
// 	return nil
// }

// func (d *Database) AddGithubStarHistoryToBatch(batch *pgx.Batch, github_repo_id int, github_star_histories []Insert_github_star_history) {
// 	for _, star_history := range github_star_histories {
// 		batch.Queue("insert into github_star_history(github_repo_id, star_date, amount) values($1, $2, $3) on conflict(star_date, github_repo_id) do update set amount=excluded.amount", github_repo_id, star_history.Star_date, star_history.Amount)
// 	}
// }
// func (d *Database) InsertHistories(tx pgx.Tx, github_repo_id int, github_star_histories []Insert_github_star_history, github_issue_histories []Insert_github_issue_history, github_fork_histories []Insert_github_fork_history) error {
// 	batch := &pgx.Batch{}
// 	for _, star_history := range github_star_histories {
// 		batch.Queue("insert into github_star_history(github_repo_id, star_date, amount) values($1, $2, $3) on conflict(star_date, github_repo_id) do update set amount=excluded.amount", github_repo_id, star_history.Star_date, star_history.Amount)
// 	}
// 	for _, issue_history := range github_issue_histories {
// 		batch.Queue("insert into github_issue_history(github_repo_id, issue_date, amount) values($1, $2, $3) on conflict(issue_date, github_repo_id) do update set amount=excluded.amount", github_repo_id, issue_history.Issue_date, issue_history.Amount)
// 	}
// 	for _, fork_history := range github_fork_histories {
// 		batch.Queue("insert into github_fork_history(github_repo_id, fork_date, amount) values($1, $2, $3) on conflict(fork_date, github_repo_id) do update set amount=excluded.amount", github_repo_id, fork_history.Fork_date, fork_history.Amount)
// 	}
// 	batchResults := tx.SendBatch(d.ctx, batch)
// 	err := batchResults.Close()
// 	if err != nil {
// 		return err
// 	}
// 	return nil
// }
// func (d *Database) UpsertGithubLanguageAndAddToBatch(tx pgx.Tx, batch *pgx.Batch, github_repo_id int, github_languages []Insert_github_language) error {
// 	githubLanguageBatch := &pgx.Batch{}
// 	for _, github_language := range github_languages {
// 		githubLanguageBatch.Queue("insert into github_language(name, color) values($1, $2) on conflict(name) do update set color=excluded.color returning github_language_id", github_language.Name, github_language.Color)
// 	}
// 	githubLanguageBatchResults := tx.SendBatch(d.ctx, githubLanguageBatch)
// 	rows, err := githubLanguageBatchResults.Query()
// 	if err != nil {
// 		return err
// 	}

// 	for rows.Next() {
// 		var scannedGithubLanguage Table_github_language
// 		rows.Scan(&scannedGithubLanguage.Github_language_id)
// 		batch.Queue("insert into github_repo_and_github_language(github_repo_id, github_language_id) values($1, $2) on conflict do nothing", github_repo_id, scannedGithubLanguage.Github_language_id)
// 	}
// 	err = githubLanguageBatchResults.Close()
// 	if err != nil {
// 		return err
// 	}
// 	return nil
// }
// func (d *Database) InsertGithubLanguage(tx pgx.Tx, github_repo_id int, github_languages []Insert_github_language) error {
// 	githubLanguageBatch := &pgx.Batch{}
// 	for _, github_language := range github_languages {
// 		githubLanguageBatch.Queue("insert into github_language(name, color) values($1, $2) on conflict(name) do update set color=excluded.color returning github_language_id", github_language.Name, github_language.Color)
// 	}
// 	githubLanguageBatchResults := tx.SendBatch(d.ctx, githubLanguageBatch)
// 	rows, err := githubLanguageBatchResults.Query()
// 	if err != nil {
// 		return err
// 	}

// 	githubRepoAndGithubLanguageBatch := &pgx.Batch{}
// 	for rows.Next() {
// 		var scannedGithubLanguage Table_github_language
// 		rows.Scan(&scannedGithubLanguage.Github_language_id)
// 		githubRepoAndGithubLanguageBatch.Queue("insert into github_repo_and_github_language(github_repo_id, github_language_id) values($1, $2) on conflict do nothing", github_repo_id, scannedGithubLanguage.Github_language_id)
// 	}
// 	err = githubLanguageBatchResults.Close()
// 	if err != nil {
// 		return err
// 	}
// 	githubRepoAndGithubLanguageBatchResults := tx.SendBatch(d.ctx, githubLanguageBatch)
// 	err = githubRepoAndGithubLanguageBatchResults.Close()
// 	if err != nil {
// 		return err
// 	}
// 	return nil
// }

// func (d *Database) AddHackernewsStoryToBatch(tx pgx.Tx, batch *pgx.Batch, project_repo_id int, hackernews_stories []Insert_hackernews_story) error {

// batch := &pgx.Batch{}

// batch.Queue("with story as (
//     insert into hackernews_story(
//         query,
//         title,
//         url,
//         author,
//         points,
//         story_text,
//         created_at,
//         updated_at
//       )
//     values($1, $2, $3, $4, $5, $6, $7, $8) on conflict(url) do
//     update
//     set title = excluded.title,
//       url = excluded.url,
//       author = excluded.author,
//       points = excluded.points,
//       story_text = excluded.story_text,
//       created_at = excluded.created_at,
//       updated_at = excluded.updated_at
//     returning hackernews_story_id
//   ),
//   tag as (
//     insert into hackernews_tag(title)
//     values($9) on conflict(title) do
//     update
//     set title = excluded.title
//     returning hackernews_tag_id
//   ),
//   project as (
//     insert into project_repo_and_hackernews_story (project_repo_id, hackernews_story_id)
//     select $10,
//       hackernews_story_id
//     from story on conflict(project_repo_id, hackernews_story_id) do nothing
//   )
//   insert into hackernews_story_and_hackernews_tag(hackernews_story_id, hackernews_tag_id)
//   select hackernews_story_id,
//     hackernews_tag_id
//   from story,
//     tag on conflict (hackernews_story_id, hackernews_tag_id) do nothing")

// storyUrlToTagAmount := make(map[string]int)
// for _, hackernews_story := range hackernews_stories {
// 	batch2.Queue("insert into hackernews_story(query, title, url, author, points, story_text, created_at, updated_at) values($1, $2, $3, $4, $5, $6, $7, $8) on conflict(url) do update set title=excluded.title, url=excluded.url, author=excluded.author, points=excluded.points, story_text=excluded.story_text,created_at=excluded.created_at, updated_at=excluded.updated_at returning hackernews_story_id, url", hackernews_story.Query, hackernews_story.Title, hackernews_story.Url, hackernews_story.Author, hackernews_story.Points, hackernews_story.Story_text, hackernews_story.Created_at, hackernews_story.Updated_at)

// 	for _, hackernews_tag := range hackernews_story.Hackernews_tags {
// 		storyUrlToTagAmount[hackernews_story.Url] = storyUrlToTagAmount[hackernews_story.Url] + 1
// 		fmt.Println("whatever")
// 		batch2.Queue("insert into hackernews_tag(title) values($1) on conflict(title) do update set title=excluded.title returning hackernews_tag_id", hackernews_tag.Title)
// 	}
// }

// batchResults := tx.SendBatch(d.ctx, batch2)
// batchRows, err := batchResults.Query()
// if err != nil {
// 	return err
// }
// fmt.Println(batchRows.Err())
// fmt.Println(batchRows.Next())
// fmt.Println(batchRows.Next())

// batchRows2, err := batchResults.Query()
// fmt.Println(batchRows.Next())
// fmt.Println("affect", batchRows.Err(), batchRows2.Err(), batchRows.CommandTag().RowsAffected(), batchRows2.RawValues())
// var row1 int
// var row2 string
// pgx.ForEachRow(batchRows, []any{&row1, &row2}, func() error {
// 	fmt.Println("what", row1, row2)
// 	return nil
// })

// batchRows2, err := batchResults.Query()
// if err != nil {
// 	return err
// }
// fmt.Println(batchRows.Next())

// fmt.Println(batchRows.Next())
// fmt.Println("affect", batchRows.CommandTag().RowsAffected(), batchRows.RawValues())

// pgx.ForEachRow(batchRows2, []any{&row1, &row2}, func() error {
// 	fmt.Println("what2", row1, row2)
// 	return nil
// })
// vals, err := batchRows.Values()
// fmt.Println(vals)
// fmt.Println("desc", batchRows)
// var hackernews_story_id int
// var url string

// err := batchRows.Scan(&hackernews_story_id, &url)
// batchRows = batchResults.QueryRow()
// if err != nil {
// 	return err
// }
// var hackernews_tag_id int
// err = batchRows.Scan(&hackernews_tag_id)
// fmt.Println("desc3", hackernews_story_id, url, hackernews_tag_id)
// rows := batchResults.QueryRow()
// fmt.Println("hmm", rows)
// batch.Queue("insert into hackernews_story_and_hackernews_tag(hackernews_story_id, hackernews_tag_id) values($1, $2) on conflict(hackernews_story_id, hackernews_tag_id) do nothing", hackernews_story_id, hackernews_tag_id)
// batchRows2, err := batchResults.Query()
// fmt.Println("desc2", batchRows2.FieldDescriptions())

// if err != nil {
// 	return err
// }

// for {

// 	var hackernews_story_id int
// 	var url string
// 	err := batchResults.QueryRow().Scan(&hackernews_story_id, &url)
// 	if errors.Is(err, pgx.ErrNoRows) {
// 		log.Println(err)

// 		break
// 	} else if err != nil && !errors.Is(err, pgx.ErrNoRows) {
// 		log.Println(err)

// 		return err
// 	}
// 	for i := 0; i < storyUrlToTagAmount[url]; i++ {
// 		var hackernews_tag_id int

// 		err := batchResults.QueryRow().Scan(&hackernews_tag_id)
// 		if errors.Is(err, pgx.ErrNoRows) {
// 			log.Println(err)

// 			break
// 		} else if err != nil && !errors.Is(err, pgx.ErrNoRows) {
// 			log.Println(err)
// 			return err
// 		}

// 		log.Println("tagid", hackernews_story_id, hackernews_tag_id)
// 		batch.Queue("insert into hackernews_story_and_hackernews_tag(hackernews_story_id, hackernews_tag_id) values($1, $2) on conflict(hackernews_story_id, hackernews_tag_id) do nothing", hackernews_story_id, hackernews_tag_id)
// 	}
// }
// 	batchRows, err = batchResults.Query()
// 	if err != nil {
// 		return err
// 	}
// }
// err = batchResults.Close()
// if err != nil {
// 	return err
// }

// 	return nil
// }

// func (d *Database) UpsertGithubRepoAndAddToBatch(tx pgx.Tx, batch *pgx.Batch, github_repo Insert_github_repo) error {
// 	log.Println("what3")

// 	ownerId, err := d.UpsertGithubOwner(tx, github_repo.Github_owner)
// 	if err != nil {
// 		return err
// 	}
// 	var githubRepo Table_github_repo
// 	tx.QueryRow(d.ctx, "insert into github_repo(created_at,description,fork_count,homepage_url,is_in_organization, issues_total_count, name, pull_requests_total_count, url, stargazer_count, github_owner_id) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) on conflict(name) do update set created_at=excluded.created_at, description=excluded.description, fork_count=excluded.fork_count, homepage_url=excluded.homepage_url, is_in_organization=excluded.is_in_organization, issues_total_count=excluded.issues_total_count, name=excluded.name, pull_requests_total_count=excluded.pull_requests_total_count, url=excluded.url, stargazer_count=excluded.stargazer_count returning github_repo_id", github_repo.Created_at, github_repo.Description, github_repo.Fork_count, github_repo.Homepage_url, github_repo.Is_in_organization, github_repo.Issues_total_count, github_repo.Name, github_repo.Pull_requests_total_count, github_repo.Url, github_repo.Stargazer_count, ownerId).Scan(&githubRepo.Github_repo_id)

// 	err = d.UpsertGithubOwnerForEveryContributorAndAddtoBatch(tx, batch, githubRepo.Github_repo_id, github_repo.Github_repo_contributors)
// 	if err != nil {
// 		return err
// 	}
// 	err = d.UpsertGithubLanguageAndAddToBatch(tx, batch, githubRepo.Github_repo_id, github_repo.Github_languages)
// 	if err != nil {
// 		return err
// 	}
// 	d.AddGithubForkHistoryToBatch(batch, githubRepo.Github_repo_id, github_repo.Github_fork_histories)
// 	d.AddGithubIssueHistoryToBatch(batch, githubRepo.Github_repo_id, github_repo.Github_issue_histories)
// 	d.AddGithubStarHistoryToBatch(batch, githubRepo.Github_repo_id, github_repo.Github_star_histories)
// 	batchResults := tx.SendBatch(d.ctx, batch)
// 	err = batchResults.Close()
// 	if err != nil {
// 		return err
// 	}
// 	return nil
// }

// func (d *Database) UpsertProjectRepo(tx pgx.Tx, project_repo Insert_project_repo) error {
// 	batch := &pgx.Batch{}
// 	err := d.UpsertGithubRepoAndAddToBatch(tx, batch, project_repo.Github_repo)
// 	if err != nil {
// 		return err
// 	}
// 	err = d.InsertHackernewsStoryAndAddToBatch(tx, batch, 5, project_repo.Hackernews_stories)
// 	if err != nil {
// 		return err
// 	}
// 	batchResults := tx.SendBatch(d.ctx, batch)
// 	err = batchResults.Close()
// 	if err != nil {
// 		return err
// 	}
// 	return nil
// }

// getBulkInsertSQLSimple is a helper function to prepare a SQL query for a bulk insert.
// getBulkInsertSQLSimple is used over getBulkInsertSQL when all of the values are plain question
// marks (e.g. a 1-for-1 value insertion).
// // The example given for getBulkInsertSQL is such a query.
// func getBulkInsertSQLSimple(SQLString string, numArgsPerRow int, numRows int) string {
// 	questionMarks := make([]string, 0, numArgsPerRow)
// 	for i := 0; i < numArgsPerRow; i++ {
// 		questionMarks = append(questionMarks, "?")
// 	}
// 	rowValueSQL := strings.Join(questionMarks, ", ")
// 	return getBulkInsertSQL(SQLString, rowValueSQL, numRows)
// }
// func (d *Database) InsertBookmark(project_repo Insert_project_repo) error {
// 	// Rollback is safe to call even if the tx is already closed, so if
// the tx commits successfully, this is a no-op

// numArgsPerRow := 3

// batch := &pgx.Batch{}
// for i := 0; i < 60000; i++ {
// 	batch.Queue("insert into hackernews_tag(title) values($1) on conflict(title) do update set title=excluded.title", strconv.Itoa(i))
// }
// start := time.Now()
// valueArgs := make([]interface{}, 0, 1*60000)
// for i := 0; i < 60000; i++ {
// 	valueArgs = append(valueArgs, strconv.Itoa(i))
// }
// SQLString := getBulkInsertSQLSimple("insert into hackernews_tag(title) values %s on conflict(title) do update set title=excluded.title returning title", 1, 60000)

// defer tx.Rollback(d.ctx)

// d.UpsertProjectRepo(tx, project_repo)
// tx.Exec(d.ctx, SQLString, valueArgs...)
// if err != nil {
// 	return err
// }
// batchResults := tx.SendBatch(d.ctx, batch)
// batchResults.Close()
// 	for i := 0; i < 60000; i++ {

// 		tx, err := d.conn.Begin(d.ctx)
// 		if err != nil {
// 			return err
// 		}
// 		tx.Exec(d.ctx, "DELETE FROM hackernews_tag WHERE hackernews_tag_id = any (array(SELECT hackernews_tag_id FROM hackernews_tag LIMIT 1000));")

// 		err = tx.Commit(d.ctx)

// 		if err != nil {
// 			return err
// 		}
// 	}
// 	return nil
// }
