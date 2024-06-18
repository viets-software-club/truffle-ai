package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	"github.com/rs/cors"

	"github.com/viets-software-club/truffle-ai/graphql-server/controller"
	"github.com/viets-software-club/truffle-ai/graphql-server/graph"
)

const defaultPort = "3002"

func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Request: %s %s", r.Method, r.URL.Path)
		for name, values := range r.Header {
			// Loop over all values for the name.
			for _, value := range values {
				log.Printf("%s: %s", name, value)
			}
		}
		rw := &responseWriter{w, http.StatusOK}
		next.ServeHTTP(rw, r)
		if rw.status >= 400 {
			log.Printf("Error: %s %s %d", r.Method, r.URL.Path, rw.status)
		}
	})
}

type responseWriter struct {
	http.ResponseWriter
	status int
}

//	func loggingMiddleware(next http.Handler) http.Handler {
//		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
//			fmt.Printf("Request URI: %s\n", r.RequestURI)
//			fmt.Printf("Method: %s\n", r.Method)
//			fmt.Printf("Remote Addr: %s\n", r.RemoteAddr)
//			next.ServeHTTP(w, r)
//		})
//	}
func main() {
	port := os.Getenv("GRAPHQL_SERVER_PORT")
	if port == "" {
		port = defaultPort
	}
	router := chi.NewRouter()
	router.Use(loggingMiddleware)
	router.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
		AllowedHeaders:   []string{"*"},
		Debug:            os.Getenv("GO_ENV") == "development",
	}).Handler)

	controller.RunCronjobs()
	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{
		Controller: controller.ControllerInstance,
	}}))
	// srv.AddTransport(transport.Options{})
	// srv.AddTransport(transport.POST{})
	// srv.AddTransport(transport.GRAPHQL{})
	// srv.AddTransport(transport.GET{})
	// srv.AroundOperations(func(ctx context.Context, next graphql.OperationHandler) graphql.ResponseHandler {
	// 	oc := graphql.GetOperationContext(ctx)
	// 	fmt.Printf("around: %s %s", oc.OperationName, oc.RawQuery)
	// 	return next(ctx)
	// })
	// srv.AddTransport(&transport.Websocket{
	// 	Upgrader: websocket.Upgrader{
	// 		CheckOrigin: func(r *http.Request) bool {
	// 			// Check against your desired domains here
	// 			return true
	// 		},
	// 		ReadBufferSize:  1024,
	// 		WriteBufferSize: 1024,
	// 	},
	// })
	// controller.ControllerInstance.RecreateTrending("daily")
	// controller.ControllerInstance.RecreateTrending("weekly")

	// controller.ControllerInstance.RecreateTrending("monthly")

	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", srv)
	router.Handle("/query/", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, router))
}
