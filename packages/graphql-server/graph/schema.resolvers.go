package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.41

import (
	"context"
	"fmt"

	"github.com/viets-software-club/truffle-ai/graphql-server/graph/model"
)

// CreateBookmark is the resolver for the createBookmark field.
func (r *mutationResolver) CreateBookmark(ctx context.Context, repo model.RepositoryInput, categories []string) (bool, error) {
	err := r.Controller.CreateBookmarkWithCategories(repo.Owner, repo.Name, categories)
	if err != nil {
		fmt.Println(err)
		return false, err
	}
	return true, nil
	// panic(fmt.Errorf("not implemented: CreateBookmark - createBookmark"))
}

// RemoveBookmark is the resolver for the removeBookmark field.
func (r *mutationResolver) RemoveBookmark(ctx context.Context, repo model.RepositoryInput) (bool, error) {
	return true, nil
}

// HelloWorld is the resolver for the helloWorld field.
func (r *queryResolver) HelloWorld(ctx context.Context) (string, error) {
	return "Hello world!", nil
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
