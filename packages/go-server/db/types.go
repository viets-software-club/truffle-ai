package db

import "time"

// hackernews_story
type Table_hackernews_story struct {
	hackernews_story_id int
	_created_at         time.Time
	query               string
	title               string
	url                 string
	author              string
	points              int
	story_text          string
	created_at          time.Time
	updated_at          time.Time
}
type TableInsert_hackernews_story struct {
	query      string
	title      string
	url        string
	author     string
	points     int
	story_text string
	created_at time.Time
	updated_at time.Time
}
type TableInsertValues_hackernews_story struct {
	query      string
	title      string
	url        string
	author     string
	points     int
	story_text string
	created_at time.Time
	updated_at time.Time
}

// hackernews_story_and_hackernews_tag
type Table_hackernews_story_and_hackernews_tags struct {
	_created_at         time.Time
	hackernews_story_id int
	hackernews_tag_id   int
}
type TableInsert_hackernews_story_and_hackernews_tags struct {
	hackernews_story_id int
	hackernews_tag_id   int
}
type TableInsertValues_hackernews_story_and_hackernews_tags struct {
	hackernews_story_id int
	hackernews_tag_id   int
}

// hackernews_comment_and_hackernews_tag
type Table_hackernews_comment_and_hackernews_tag struct {
	_created_at           time.Time
	hackernews_comment_id int
	hackernews_tag_id     int
}
type TableInsert_hackernews_comment_and_hackernews_tag struct {
	hackernews_comment_id int
	hackernews_tag_id     int
}
type TableInsertValues_hackernews_comment_and_hackernews_tag struct {
	hackernews_comment_id int
	hackernews_tag_id     int
}

// hackernews_comment
type Table_hackernews_comment struct {
	hackernews_comment_id int
	_created_at           time.Time
	query                 string
	comment_text          string
	story_id              int
	story_title           string
	story_url             string
	created_at            time.Time
	updated_at            time.Time
}
type TableInsert_hackernews_comment struct {
	query        string
	comment_text string
	story_id     int
	story_title  string
	story_url    string
	created_at   time.Time
	updated_at   time.Time
}
type TableInsertValues_hackernews_comment struct {
	query        string
	comment_text string
	story_id     int
	story_title  string
	story_url    string
	created_at   time.Time
	updated_at   time.Time
}

// github_language
type Table_github_language struct {
	Github_language_id int
	_Created_at        string
	Name               string
	Color              string
}
type TableInsert_github_language struct {
	Name  string
	Color string
}
type TableInsertValues_github_language struct {
	Name  string
	Color string
}

// github_fork_history
type Table_github_fork_history struct {
	Github_fork_history_id int
	_Created_at            string
	Github_repo_id         int
	Fork_date              string
	Amount                 int
}
type TableInsert_github_fork_history struct {
	Github_repo_id int
	Fork_date      string
	Amount         int
}
type TableInsertValues_github_fork_history struct {
	Fork_date string
	Amount    int
}

// github_issue_history
type Table_github_issue_history struct {
	Github_fork_history_id int
	_Created_at            string
	Github_repo_id         int
	Fork_date              string
	Amount                 int
}
type TableInsert_github_issue_history struct {
	Github_repo_id int
	Fork_date      string
	Amount         int
}
type TableInsertValues_github_issue_history struct {
	Fork_date string
	Amount    int
}

// github_star_history
type Table_github_star_history struct {
	Github_star_history_id int
	_Created_at            string
	Github_repo_id         int
	Star_date              string
	Amount                 int
}
type TableInsert_github_star_history struct {
	Github_repo_id int
	Star_date      string
	Amount         int
}
type TableInserValues_github_star_history struct {
	Star_date string
	Amount    int
}

// github_owner
type Table_github_owner struct {
	Github_owner_id          int
	_Created_at              string
	Owner_type               string
	Avatar_url               string
	Login                    string
	Url                      string
	Repositories_total_count int
}
type TableInsert_github_owner struct {
	Owner_type               string
	Avatar_url               string
	Login                    string
	Url                      string
	Repositories_total_count int
}
type TableInsertValues_github_owner struct {
	Owner_type               string
	Avatar_url               string
	Login                    string
	Url                      string
	Repositories_total_count int
}

// github_repo
type Table_github_repo struct {
	Github_repo_id            int
	_Created_at               string
	Created_at                string
	Description               string
	Fork_count                int
	Homepage_url              string
	Is_in_organization        bool
	Issues_total_count        int
	Name                      string
	Github_owner_id           int
	Pull_requests_total_count int
	Url                       string
	Stargazer_count           int
}
type TableInsert_github_repo struct {
	Created_at                string
	Description               string
	Fork_count                int
	Homepage_url              string
	Is_in_organization        bool
	Issues_total_count        int
	Name                      string
	Github_owner_id           int
	Pull_requests_total_count int
	Url                       string
	Stargazer_count           int
}
type TableInsertValues_github_repo struct {
	Created_at                string
	Description               string
	Fork_count                int
	Homepage_url              string
	Is_in_organization        bool
	Issues_total_count        int
	Name                      string
	Pull_requests_total_count int
	Url                       string
	Stargazer_count           int
}

// github_organization
type Table_github_organization struct {
	Github_organization_id int
	_Created_at            string
	Created_at             string
	Description            string
	Description_html       string
	Email                  string
	Name                   string
	Twitter_username       string
	Website_url            string
}
type TableInsert_github_organization struct {
	Created_at       string
	Description      string
	Description_html string
	Email            string
	Name             string
	Twitter_username string
	Website_url      string
}
type TableInsertValues_github_organization struct {
	Created_at       string
	Description      string
	Description_html string
	Email            string
	Name             string
	Twitter_username string
	Website_url      string
}

// github_repo_contributor
type Table_github_repo_contributor struct {
	Github_repo_id  int
	_Created_at     string
	Github_owner_id int
	Contributions   int
}
type TableInsert_github_repo_contributor struct {
	Github_repo_id  int
	Github_owner_id int
	Contributions   int
}
type TableInsertValues_github_repo_contributor struct {
	Contributions int
}

// hackernews_tag
type Table_hackernews_tag struct {
	Hackernews_tag_id int
	_Created_at       string
	Title             string
}
type TableInsert_hackernews_tag struct {
	Title string
}
type TableInsertValues_hackernews_tag struct {
	Title string
}

// github_user
type Table_github_user struct {
	Github_user_id        int
	_Created_at           string
	Bio                   string
	Bio_html              string
	Company               string
	Company_html          string
	Created_at            string
	Email                 string
	Followers_total_count int
	Name                  string
	Twitter_username      string
	Website_url           string
}
type TableInsert_github_user struct {
	Bio                   string
	Bio_html              string
	Company               string
	Company_html          string
	Created_at            string
	Email                 string
	Followers_total_count int
	Name                  string
	Twitter_username      string
	Website_url           string
}
type TableInsertValues_github_user struct {
	Bio                   string
	Bio_html              string
	Company               string
	Company_html          string
	Created_at            string
	Email                 string
	Followers_total_count int
	Name                  string
	Twitter_username      string
	Website_url           string
}

type Table_github_repo_and_github_language struct {
	Github_language_id int
	_Created_at        string
	Color              string
	Name               string
}
type TableInsert_github_repo_and_github_language struct {
	Color string
	Name  string
}

type Table_project_repo struct {
	Project_repo_id          int
	_Created_at              string
	Github_repo_id           int
	Note                     string
	Project_repo_metadata_id int
}

type TableInsert_project_repo struct {
	Github_repo_id           int
	Note                     string
	Project_repo_metadata_id int
}
type Insert_github_repo_contributor struct {
	Github_owner  Insert_github_owner
	Contributions int
}
type Insert_github_organization struct {
	Created_at       time.Time
	Description      string
	Description_html string
	Email            string
	Name             string
	Twitter_username string
	Website_url      string
}
type Insert_github_user struct {
	Bio                   string
	Bio_html              string
	Company               string
	Company_html          string
	Created_at            time.Time
	Email                 string
	Followers_total_count int
	Name                  string
	Twitter_username      string
	Website_url           string
}
type Insert_github_owner struct {
	Owner_type               string
	Avatar_url               string
	Login                    string
	Url                      string
	Repositories_total_count int
	Github_organization      Insert_github_organization
	Github_user              Insert_github_user
}
type Insert_github_language struct {
	Name  string
	Color string
}
type Insert_github_fork_history struct {
	Fork_date time.Time
	Amount    int
}
type Insert_github_star_history struct {
	Star_date time.Time
	Amount    int
}
type Insert_github_issue_history struct {
	Issue_date time.Time
	Amount     int
}
type Insert_hackernews_tag struct {
	Title string
}
type Insert_github_repo struct {
	Created_at                time.Time
	Description               string
	Fork_count                int
	Homepage_url              string
	Is_in_organization        bool
	Issues_total_count        int
	Name                      string
	Pull_requests_total_count int
	Url                       string
	Stargazer_count           int
	Github_owner              Insert_github_owner
	Github_star_histories     []Insert_github_star_history
	Github_fork_histories     []Insert_github_fork_history
	Github_issue_histories    []Insert_github_issue_history
	Github_repo_contributors  []Insert_github_repo_contributor
	Github_languages          []Insert_github_language
}
type Insert_hackernews_story struct {
	Query           string
	Title           string
	Url             string
	Author          string
	Points          int
	Story_text      string
	Created_at      time.Time
	Updated_at      time.Time
	Hackernews_tags []Insert_hackernews_tag
}
type Insert_hackernews_comment struct {
	Query           string
	Comment_text    string
	Story_id        int
	Story_title     string
	Story_url       string
	Created_at      time.Time
	Updated_at      time.Time
	Hackernews_tags []Insert_hackernews_tag
}
type Insert_project_repo struct {
	Note                string
	Github_repo         Insert_github_repo
	Hackernews_stories  []Insert_hackernews_story
	Hackernews_comments []Insert_hackernews_comment
}
