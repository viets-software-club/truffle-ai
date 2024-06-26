package github

import (
	"github.com/shurcooL/githubv4"
)

type GetRepositoryOwnerOrganization struct {
	CreatedAt       githubv4.DateTime
	Description     githubv4.String
	DescriptionHtml githubv4.String `graphql:"descriptionHTML"`
	OrgEmail        githubv4.String `graphql:"OrgEmail: email"`
	Name            githubv4.String
	TwitterUsername githubv4.String
	WebsiteUrl      githubv4.URI
}
type GetRepositoryOwnerUser struct {
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
}
type GetRepositoryOwner struct {
	AvatarUrl    githubv4.URI
	Login        githubv4.String
	Repositories struct {
		TotalCount githubv4.Int
	}
	Url          githubv4.URI
	Organization GetRepositoryOwnerOrganization `graphql:"... on Organization"`
	User         GetRepositoryOwnerUser         `graphql:"... on User"`
}
type GetRepositoryLanguages struct {
	Edges []struct {
		Node struct {
			Color githubv4.String
			Name  githubv4.String
		}
	}
}
type GetRepositoryRepositoryTopics struct {
	Edges []struct {
		Node struct {
			Topic struct {
				Name           githubv4.String
				StargazerCount githubv4.Int
			}
		}
	}
}
type GetRepository struct {
	Repository struct {
		RepositoryTopics GetRepositoryRepositoryTopics `graphql:"repositoryTopics(first: 10)"`
		DefaultBranchRef struct {
			Name githubv4.String
		}
		CreatedAt        githubv4.DateTime
		Description      githubv4.String
		ForkCount        githubv4.Int
		HomepageUrl      githubv4.URI
		IsInOrganization githubv4.Boolean
		Issues           struct {
			TotalCount githubv4.Int
		}
		Languages    GetRepositoryLanguages `graphql:"languages(first: 100)"`
		Name         githubv4.String
		Owner        GetRepositoryOwner
		PullRequests struct {
			TotalCount githubv4.Int
		}
		Url            githubv4.URI
		StargazerCount githubv4.Int
	} `graphql:"repository(owner: $owner, name: $name)"`
}
