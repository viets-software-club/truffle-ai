package github

import (
	"github.com/shurcooL/githubv4"
)

type GetUser struct {
	User struct {
		AvatarUrl    githubv4.URI
		Login        githubv4.String
		Repositories struct {
			TotalCount githubv4.Int
		}
		Url         githubv4.URI
		Bio         githubv4.String
		BioHtml     githubv4.String `graphql:"bioHTML"`
		Company     githubv4.String
		CompanyHtml githubv4.String `graphql:"companyHTML"`
		CreatedAt   githubv4.DateTime
		UserEmail   githubv4.String `graphql:"UserEmail: email"`
		Followers   struct {
			TotalCount githubv4.Int
		}
		Name            githubv4.String
		TwitterUsername githubv4.String
		WebsiteUrl      githubv4.URI
	} `graphql:"user(login: $login)"`
}
