package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	"github.com/gorilla/websocket"

	"github.com/viets-software-club/truffle-ai/graphql-server/controller"
	"github.com/viets-software-club/truffle-ai/graphql-server/graph"
)

const defaultPort = "3002"

func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("Request URI: %s\n", r.RequestURI)
		fmt.Printf("Method: %s\n", r.Method)
		fmt.Printf("Remote Addr: %s\n", r.RemoteAddr)
		next.ServeHTTP(w, r)
	})
}
func main() {
	port := os.Getenv("GRAPHQL_SERVER_PORT")
	if port == "" {
		port = defaultPort
	}
	router := chi.NewRouter()

	controller.RunCronjobs()
	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{
		Controller: controller.ControllerInstance,
	}}))
	srv.AddTransport(transport.Options{})
	srv.AddTransport(transport.POST{})
	srv.AddTransport(transport.GRAPHQL{})
	srv.AddTransport(transport.GET{})
	srv.AroundOperations(func(ctx context.Context, next graphql.OperationHandler) graphql.ResponseHandler {
		oc := graphql.GetOperationContext(ctx)
		fmt.Printf("around: %s %s", oc.OperationName, oc.RawQuery)
		return next(ctx)
	})
	srv.AddTransport(&transport.Websocket{
		Upgrader: websocket.Upgrader{
			CheckOrigin: func(r *http.Request) bool {
				// Check against your desired domains here
				return true
			},
			ReadBufferSize:  1024,
			WriteBufferSize: 1024,
		},
	})
	// controller.ControllerInstance.RecreateTrending("monthly")

	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, router))
}
