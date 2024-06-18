/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
	query: "Query";
	mutation: "Mutation";
	subscription: never;
	types: {
		RepositoryInput: {
			kind: "INPUT_OBJECT";
			name: "RepositoryInput";
			inputFields: [
				{
					name: "owner";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
					defaultValue: null;
				},
				{
					name: "name";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
					defaultValue: null;
				},
			];
		};
		String: unknown;
		Query: {
			kind: "OBJECT";
			name: "Query";
			fields: {
				helloWorld: {
					name: "helloWorld";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				suggestedCategoriesForProjRepo: {
					name: "suggestedCategoriesForProjRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "SCALAR"; name: "String"; ofType: null };
							};
						};
					};
				};
			};
		};
		Int: unknown;
		Mutation: {
			kind: "OBJECT";
			name: "Mutation";
			fields: {
				createBookmark: {
					name: "createBookmark";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					};
				};
				removeBookmark: {
					name: "removeBookmark";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					};
				};
				removeBookmarkByProjRepoId: {
					name: "removeBookmarkByProjRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					};
				};
			};
		};
		Boolean: unknown;
	};
};

import * as gqlTada from "gql.tada";

declare module "gql.tada" {
	interface setupSchema {
		introspection: introspection;
	}
}
