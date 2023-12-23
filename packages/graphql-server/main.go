package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller"
	"github.com/viets-software-club/truffle-ai/graphql-server/graph"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	c := controller.New()
	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{
		Controller: c,
	}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

// func main() {
// 	uuidStr := "997cd1f0-a7b7-4eeb-9702-0f839ea7fa22"
// 	parsedUUID, err := uuid.Parse(uuidStr)
// 	if err != nil {
// 		log.Fatalf("Failed to parse UUID: %v", err)
// 	}

// 	var uuidBytes [16]byte
// 	copy(uuidBytes[:], parsedUUID[:])
// 	fmt.Println(uuidBytes)
// }

// var dummy db.Insert_project_repo = db.Insert_project_repo{
// 	Github_repo: db.Insert_github_repo{
// 		Created_at:                time.Now(),
// 		Description:               "",
// 		Fork_count:                4,
// 		Homepage_url:              "",
// 		Is_in_organization:        true,
// 		Issues_total_count:        2,
// 		Name:                      "",
// 		Pull_requests_total_count: 2,
// 		Url:                       "",
// 		Stargazer_count:           2,
// 		Github_repo_contributors: []db.Insert_github_repo_contributor{
// 			{Contributions: 5, Github_owner: db.Insert_github_owner{
// 				Owner_type:               "Organization",
// 				Avatar_url:               "",
// 				Login:                    "max",
// 				Url:                      "",
// 				Repositories_total_count: 5,
// 				Github_organization: db.Insert_github_organization{
// 					Created_at:       time.Now(),
// 					Description:      "What",
// 					Description_html: "",
// 					Email:            "",
// 					Name:             "hey",
// 					Twitter_username: "",
// 					Website_url:      "",
// 				},
// 			}},
// 		},
// 		Github_owner: db.Insert_github_owner{
// 			Owner_type:               "Organization",
// 			Avatar_url:               "",
// 			Login:                    "",
// 			Url:                      "",
// 			Repositories_total_count: 5,
// 			Github_organization: db.Insert_github_organization{
// 				Created_at:       time.Now(),
// 				Description:      "",
// 				Description_html: "",
// 				Email:            "",
// 				Name:             "",
// 				Twitter_username: "",
// 				Website_url:      "",
// 			},
// 		},
// 		Github_star_histories: []db.Insert_github_star_history{
// 			{Star_date: time.Now().Add(-time.Duration(rand.Intn(7) * 24))},
// 		},
// 		Github_issue_histories: []db.Insert_github_issue_history{
// 			{Issue_date: time.Now().Add(-time.Duration(rand.Intn(7) * 24))},
// 		},
// 		Github_fork_histories: []db.Insert_github_fork_history{
// 			{Fork_date: time.Now().Add(-time.Duration(rand.Intn(7) * 24))},
// 		},
// 		Github_languages: []db.Insert_github_language{
// 			{Name: "java", Color: "green"},
// 		},
// 	},
// 	Hackernews_stories: []db.Insert_hackernews_story{
// 		{Hackernews_tags: []db.Insert_hackernews_tag{
// 			{Title: "tag_story"},
// 		}, Query: "", Title: "", Url: "test2", Author: "", Points: 4, Story_text: ""},
// 	},
// 	Hackernews_comments: []db.Insert_hackernews_comment{
// 		{Hackernews_tags: []db.Insert_hackernews_tag{
// 			{Title: "tag_comment"},
// 		},
// 			Query: "", Comment_text: "", Story_id: 4, Story_title: "", Story_url: "test", Created_at: time.Now().Add(-time.Duration(rand.Intn(7) * 24)), Updated_at: time.Now().Add(-time.Duration(rand.Intn(7) * 24))},
// 	},
// }

// func main() {
// 	// fmt.Println("hmm2")
// 	var d db.Database = db.Database{}
// 	d.Open()
// 	err := d.CallInsertBookmarkWithCategories()

// 	if err != nil {
// 		log.Fatal("Fatal", err)
// 	}
// 	d.Close()

// gApi := github.New()
// fmt.Println(*gApi.QueryData("viets-software-club", "truffle-ai"))

// sbot := scrapingbot.New()
// // result1, err1 := linkedin.GetLinkedinCompany(sbot, "google")

// // if err1 != nil {
// // 	fmt.Println(err1)
// // }
// // fmt.Println(result1)

// // result2, err2 := linkedin.GetLinkedinProfile(sbot, "philipp czernitzki")
// // if err2 != nil {
// // 	fmt.Println(err2)
// // }

// result2, err2 := linkedin.GetLinkedInProfileSearch(sbot, "philipp czernitzki")
// if err2 != nil {
// 	fmt.Println(err2)
// }
// 	// fmt.Println(result2)

// 	// fmt.Println(hackernews.GetStoriesForQuery("ai"))
// }
