import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
};

export type Mutation = {
	__typename?: "Mutation";
	createBookmark: Scalars["Boolean"]["output"];
	removeBookmark: Scalars["Boolean"]["output"];
	removeBookmarkByProjRepoId: Scalars["Boolean"]["output"];
};

export type MutationCreateBookmarkArgs = {
	categories: Array<Scalars["String"]["input"]>;
	repo: RepositoryInput;
};

export type MutationRemoveBookmarkArgs = {
	projBookmarkId: Scalars["Int"]["input"];
};

export type MutationRemoveBookmarkByProjRepoIdArgs = {
	projRepoId: Scalars["Int"]["input"];
};

export type Query = {
	__typename?: "Query";
	helloWorld: Scalars["String"]["output"];
	suggestedCategoriesForProjRepo: Array<Scalars["String"]["output"]>;
};

export type QuerySuggestedCategoriesForProjRepoArgs = {
	projRepoId: Scalars["Int"]["input"];
};

export type RepositoryInput = {
	name: Scalars["String"]["input"];
	owner: Scalars["String"]["input"];
};

export type CreateBookmarkMutationVariables = Exact<{
	repo: RepositoryInput;
	categories: Array<Scalars["String"]["input"]> | Scalars["String"]["input"];
}>;

export type CreateBookmarkMutation = {
	__typename?: "Mutation";
	createBookmark: boolean;
};

export const CreateBookmarkDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "CreateBookmark" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "repo" } },
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "RepositoryInput" },
						},
					},
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "categories" },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String" },
								},
							},
						},
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "createBookmark" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "repo" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "repo" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "categories" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "categories" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	CreateBookmarkMutation,
	CreateBookmarkMutationVariables
>;
