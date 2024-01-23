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

const defaultPort = "3002"

func main() {
	port := os.Getenv("GRAPHQL_SERVER_PORT")
	if port == "" {
		port = defaultPort
	}

	// controller.ControllerInstance.RecreateTrending("daily")
	controller.RunCronjobs()
	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{
		Controller: controller.ControllerInstance,
	}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, nil))
}
