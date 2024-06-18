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
		AlgoHnComment: {
			kind: "OBJECT";
			name: "AlgoHnComment";
			fields: {
				algoHnCommentAndAlgoHnTagCollection: {
					name: "algoHnCommentAndAlgoHnTagCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnCommentAndAlgoHnTagConnection";
							ofType: null;
						};
					};
				};
				algoHnCommentId: {
					name: "algoHnCommentId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				algoHnCommentObjectId: {
					name: "algoHnCommentObjectId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				algoHnQuery: {
					name: "algoHnQuery";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "AlgoHnQuery"; ofType: null };
					};
				};
				algoHnQueryId: {
					name: "algoHnQueryId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				author: {
					name: "author";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				commentText: {
					name: "commentText";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				createdAt: {
					name: "createdAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				storyId: {
					name: "storyId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				storyTitle: {
					name: "storyTitle";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				storyUrl: {
					name: "storyUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				updatedAt: {
					name: "updatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
			};
		};
		AlgoHnCommentAndAlgoHnTag: {
			kind: "OBJECT";
			name: "AlgoHnCommentAndAlgoHnTag";
			fields: {
				algoHnComment: {
					name: "algoHnComment";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "AlgoHnComment"; ofType: null };
					};
				};
				algoHnCommentId: {
					name: "algoHnCommentId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				algoHnTag: {
					name: "algoHnTag";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "AlgoHnTag"; ofType: null };
					};
				};
				algoHnTagId: {
					name: "algoHnTagId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
			};
		};
		AlgoHnCommentAndAlgoHnTagConnection: {
			kind: "OBJECT";
			name: "AlgoHnCommentAndAlgoHnTagConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "AlgoHnCommentAndAlgoHnTagEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		AlgoHnCommentAndAlgoHnTagDeleteResponse: {
			kind: "OBJECT";
			name: "AlgoHnCommentAndAlgoHnTagDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "AlgoHnCommentAndAlgoHnTag";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		AlgoHnCommentAndAlgoHnTagEdge: {
			kind: "OBJECT";
			name: "AlgoHnCommentAndAlgoHnTagEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnCommentAndAlgoHnTag";
							ofType: null;
						};
					};
				};
			};
		};
		AlgoHnCommentAndAlgoHnTagFilter: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnCommentAndAlgoHnTagFilter";
			inputFields: [
				{
					name: "algoHnCommentId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnTagId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "AlgoHnCommentAndAlgoHnTagFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "AlgoHnCommentAndAlgoHnTagFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "AlgoHnCommentAndAlgoHnTagFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
			];
		};
		AlgoHnCommentAndAlgoHnTagInsertInput: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnCommentAndAlgoHnTagInsertInput";
			inputFields: [
				{
					name: "algoHnCommentId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnTagId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnCommentAndAlgoHnTagInsertResponse: {
			kind: "OBJECT";
			name: "AlgoHnCommentAndAlgoHnTagInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "AlgoHnCommentAndAlgoHnTag";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		AlgoHnCommentAndAlgoHnTagOrderBy: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnCommentAndAlgoHnTagOrderBy";
			inputFields: [
				{
					name: "algoHnCommentId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnTagId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnCommentAndAlgoHnTagUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnCommentAndAlgoHnTagUpdateInput";
			inputFields: [
				{
					name: "algoHnCommentId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnTagId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnCommentAndAlgoHnTagUpdateResponse: {
			kind: "OBJECT";
			name: "AlgoHnCommentAndAlgoHnTagUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "AlgoHnCommentAndAlgoHnTag";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		AlgoHnCommentConnection: {
			kind: "OBJECT";
			name: "AlgoHnCommentConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "AlgoHnCommentEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		AlgoHnCommentDeleteResponse: {
			kind: "OBJECT";
			name: "AlgoHnCommentDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "AlgoHnComment"; ofType: null };
							};
						};
					};
				};
			};
		};
		AlgoHnCommentEdge: {
			kind: "OBJECT";
			name: "AlgoHnCommentEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "AlgoHnComment"; ofType: null };
					};
				};
			};
		};
		AlgoHnCommentFilter: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnCommentFilter";
			inputFields: [
				{
					name: "algoHnCommentId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnCommentObjectId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnQueryId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "AlgoHnCommentFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "author";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "commentText";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "AlgoHnCommentFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "AlgoHnCommentFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "storyId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "storyTitle";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "storyUrl";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "updatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnCommentInsertInput: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnCommentInsertInput";
			inputFields: [
				{
					name: "algoHnCommentObjectId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnQueryId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "author";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "commentText";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "storyId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "storyTitle";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "storyUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "updatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnCommentInsertResponse: {
			kind: "OBJECT";
			name: "AlgoHnCommentInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "AlgoHnComment"; ofType: null };
							};
						};
					};
				};
			};
		};
		AlgoHnCommentOrderBy: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnCommentOrderBy";
			inputFields: [
				{
					name: "algoHnCommentId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnCommentObjectId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnQueryId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "author";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "commentText";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "storyId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "storyTitle";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "storyUrl";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "updatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnCommentUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnCommentUpdateInput";
			inputFields: [
				{
					name: "algoHnCommentObjectId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnQueryId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "author";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "commentText";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "storyId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "storyTitle";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "storyUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "updatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnCommentUpdateResponse: {
			kind: "OBJECT";
			name: "AlgoHnCommentUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "AlgoHnComment"; ofType: null };
							};
						};
					};
				};
			};
		};
		AlgoHnQuery: {
			kind: "OBJECT";
			name: "AlgoHnQuery";
			fields: {
				algoHnCommentCollection: {
					name: "algoHnCommentCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnCommentConnection";
							ofType: null;
						};
					};
				};
				algoHnQueryId: {
					name: "algoHnQueryId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				algoHnStoryCollection: {
					name: "algoHnStoryCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnStoryConnection";
							ofType: null;
						};
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				projRepoAndAlgoHnQueryCollection: {
					name: "projRepoAndAlgoHnQueryCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndAlgoHnQueryConnection";
							ofType: null;
						};
					};
				};
				query: {
					name: "query";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
			};
		};
		AlgoHnQueryConnection: {
			kind: "OBJECT";
			name: "AlgoHnQueryConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "AlgoHnQueryEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		AlgoHnQueryDeleteResponse: {
			kind: "OBJECT";
			name: "AlgoHnQueryDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "AlgoHnQuery"; ofType: null };
							};
						};
					};
				};
			};
		};
		AlgoHnQueryEdge: {
			kind: "OBJECT";
			name: "AlgoHnQueryEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "AlgoHnQuery"; ofType: null };
					};
				};
			};
		};
		AlgoHnQueryFilter: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnQueryFilter";
			inputFields: [
				{
					name: "algoHnQueryId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "AlgoHnQueryFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "AlgoHnQueryFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "AlgoHnQueryFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "query";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnQueryInsertInput: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnQueryInsertInput";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "query";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnQueryInsertResponse: {
			kind: "OBJECT";
			name: "AlgoHnQueryInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "AlgoHnQuery"; ofType: null };
							};
						};
					};
				};
			};
		};
		AlgoHnQueryOrderBy: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnQueryOrderBy";
			inputFields: [
				{
					name: "algoHnQueryId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "query";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnQueryUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnQueryUpdateInput";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "query";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnQueryUpdateResponse: {
			kind: "OBJECT";
			name: "AlgoHnQueryUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "AlgoHnQuery"; ofType: null };
							};
						};
					};
				};
			};
		};
		AlgoHnStory: {
			kind: "OBJECT";
			name: "AlgoHnStory";
			fields: {
				algoHnQuery: {
					name: "algoHnQuery";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "AlgoHnQuery"; ofType: null };
					};
				};
				algoHnQueryId: {
					name: "algoHnQueryId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				algoHnStoryAndAlgoHnTagCollection: {
					name: "algoHnStoryAndAlgoHnTagCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnStoryAndAlgoHnTagConnection";
							ofType: null;
						};
					};
				};
				algoHnStoryId: {
					name: "algoHnStoryId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				algoHnStoryObjectId: {
					name: "algoHnStoryObjectId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				algoHnStoryUrl: {
					name: "algoHnStoryUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				author: {
					name: "author";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				createdAt: {
					name: "createdAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				points: {
					name: "points";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				title: {
					name: "title";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				updatedAt: {
					name: "updatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
			};
		};
		AlgoHnStoryAndAlgoHnTag: {
			kind: "OBJECT";
			name: "AlgoHnStoryAndAlgoHnTag";
			fields: {
				algoHnStory: {
					name: "algoHnStory";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "AlgoHnStory"; ofType: null };
					};
				};
				algoHnStoryId: {
					name: "algoHnStoryId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				algoHnTag: {
					name: "algoHnTag";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "AlgoHnTag"; ofType: null };
					};
				};
				algoHnTagId: {
					name: "algoHnTagId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
			};
		};
		AlgoHnStoryAndAlgoHnTagConnection: {
			kind: "OBJECT";
			name: "AlgoHnStoryAndAlgoHnTagConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "AlgoHnStoryAndAlgoHnTagEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		AlgoHnStoryAndAlgoHnTagDeleteResponse: {
			kind: "OBJECT";
			name: "AlgoHnStoryAndAlgoHnTagDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "AlgoHnStoryAndAlgoHnTag";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		AlgoHnStoryAndAlgoHnTagEdge: {
			kind: "OBJECT";
			name: "AlgoHnStoryAndAlgoHnTagEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnStoryAndAlgoHnTag";
							ofType: null;
						};
					};
				};
			};
		};
		AlgoHnStoryAndAlgoHnTagFilter: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnStoryAndAlgoHnTagFilter";
			inputFields: [
				{
					name: "algoHnStoryId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnTagId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "AlgoHnStoryAndAlgoHnTagFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "AlgoHnStoryAndAlgoHnTagFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "AlgoHnStoryAndAlgoHnTagFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
			];
		};
		AlgoHnStoryAndAlgoHnTagInsertInput: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnStoryAndAlgoHnTagInsertInput";
			inputFields: [
				{
					name: "algoHnStoryId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnTagId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnStoryAndAlgoHnTagInsertResponse: {
			kind: "OBJECT";
			name: "AlgoHnStoryAndAlgoHnTagInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "AlgoHnStoryAndAlgoHnTag";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		AlgoHnStoryAndAlgoHnTagOrderBy: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnStoryAndAlgoHnTagOrderBy";
			inputFields: [
				{
					name: "algoHnStoryId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnTagId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnStoryAndAlgoHnTagUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnStoryAndAlgoHnTagUpdateInput";
			inputFields: [
				{
					name: "algoHnStoryId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnTagId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnStoryAndAlgoHnTagUpdateResponse: {
			kind: "OBJECT";
			name: "AlgoHnStoryAndAlgoHnTagUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "AlgoHnStoryAndAlgoHnTag";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		AlgoHnStoryConnection: {
			kind: "OBJECT";
			name: "AlgoHnStoryConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "AlgoHnStoryEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		AlgoHnStoryDeleteResponse: {
			kind: "OBJECT";
			name: "AlgoHnStoryDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "AlgoHnStory"; ofType: null };
							};
						};
					};
				};
			};
		};
		AlgoHnStoryEdge: {
			kind: "OBJECT";
			name: "AlgoHnStoryEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "AlgoHnStory"; ofType: null };
					};
				};
			};
		};
		AlgoHnStoryFilter: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnStoryFilter";
			inputFields: [
				{
					name: "algoHnQueryId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnStoryId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnStoryObjectId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnStoryUrl";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "AlgoHnStoryFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "author";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "AlgoHnStoryFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "AlgoHnStoryFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "points";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "title";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "updatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnStoryInsertInput: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnStoryInsertInput";
			inputFields: [
				{
					name: "algoHnQueryId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnStoryObjectId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnStoryUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "author";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "points";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "title";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "updatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnStoryInsertResponse: {
			kind: "OBJECT";
			name: "AlgoHnStoryInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "AlgoHnStory"; ofType: null };
							};
						};
					};
				};
			};
		};
		AlgoHnStoryOrderBy: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnStoryOrderBy";
			inputFields: [
				{
					name: "algoHnQueryId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnStoryId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnStoryObjectId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnStoryUrl";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "author";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "points";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "title";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "updatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnStoryUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnStoryUpdateInput";
			inputFields: [
				{
					name: "algoHnQueryId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnStoryObjectId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "algoHnStoryUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "author";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "points";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "title";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "updatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnStoryUpdateResponse: {
			kind: "OBJECT";
			name: "AlgoHnStoryUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "AlgoHnStory"; ofType: null };
							};
						};
					};
				};
			};
		};
		AlgoHnTag: {
			kind: "OBJECT";
			name: "AlgoHnTag";
			fields: {
				algoHnCommentAndAlgoHnTagCollection: {
					name: "algoHnCommentAndAlgoHnTagCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnCommentAndAlgoHnTagConnection";
							ofType: null;
						};
					};
				};
				algoHnStoryAndAlgoHnTagCollection: {
					name: "algoHnStoryAndAlgoHnTagCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnStoryAndAlgoHnTagConnection";
							ofType: null;
						};
					};
				};
				algoHnTagId: {
					name: "algoHnTagId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				title: {
					name: "title";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
			};
		};
		AlgoHnTagConnection: {
			kind: "OBJECT";
			name: "AlgoHnTagConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "AlgoHnTagEdge"; ofType: null };
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		AlgoHnTagDeleteResponse: {
			kind: "OBJECT";
			name: "AlgoHnTagDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "AlgoHnTag"; ofType: null };
							};
						};
					};
				};
			};
		};
		AlgoHnTagEdge: {
			kind: "OBJECT";
			name: "AlgoHnTagEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "AlgoHnTag"; ofType: null };
					};
				};
			};
		};
		AlgoHnTagFilter: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnTagFilter";
			inputFields: [
				{
					name: "algoHnTagId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "AlgoHnTagFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: { kind: "INPUT_OBJECT"; name: "AlgoHnTagFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "AlgoHnTagFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "title";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnTagInsertInput: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnTagInsertInput";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "title";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnTagInsertResponse: {
			kind: "OBJECT";
			name: "AlgoHnTagInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "AlgoHnTag"; ofType: null };
							};
						};
					};
				};
			};
		};
		AlgoHnTagOrderBy: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnTagOrderBy";
			inputFields: [
				{
					name: "algoHnTagId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "title";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnTagUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "AlgoHnTagUpdateInput";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "title";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		AlgoHnTagUpdateResponse: {
			kind: "OBJECT";
			name: "AlgoHnTagUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "AlgoHnTag"; ofType: null };
							};
						};
					};
				};
			};
		};
		BigFloat: unknown;
		BigFloatFilter: {
			kind: "INPUT_OBJECT";
			name: "BigFloatFilter";
			inputFields: [
				{
					name: "eq";
					type: { kind: "SCALAR"; name: "BigFloat"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gt";
					type: { kind: "SCALAR"; name: "BigFloat"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gte";
					type: { kind: "SCALAR"; name: "BigFloat"; ofType: null };
					defaultValue: null;
				},
				{
					name: "in";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "SCALAR"; name: "BigFloat"; ofType: null };
						};
					};
					defaultValue: null;
				},
				{
					name: "is";
					type: { kind: "ENUM"; name: "FilterIs"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lt";
					type: { kind: "SCALAR"; name: "BigFloat"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lte";
					type: { kind: "SCALAR"; name: "BigFloat"; ofType: null };
					defaultValue: null;
				},
				{
					name: "neq";
					type: { kind: "SCALAR"; name: "BigFloat"; ofType: null };
					defaultValue: null;
				},
			];
		};
		BigInt: unknown;
		BigIntFilter: {
			kind: "INPUT_OBJECT";
			name: "BigIntFilter";
			inputFields: [
				{
					name: "eq";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gt";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gte";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "in";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
						};
					};
					defaultValue: null;
				},
				{
					name: "is";
					type: { kind: "ENUM"; name: "FilterIs"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lt";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lte";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "neq";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		Boolean: unknown;
		BooleanFilter: {
			kind: "INPUT_OBJECT";
			name: "BooleanFilter";
			inputFields: [
				{
					name: "eq";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					defaultValue: null;
				},
				{
					name: "is";
					type: { kind: "ENUM"; name: "FilterIs"; ofType: null };
					defaultValue: null;
				},
			];
		};
		Cursor: unknown;
		Date: unknown;
		DateFilter: {
			kind: "INPUT_OBJECT";
			name: "DateFilter";
			inputFields: [
				{
					name: "eq";
					type: { kind: "SCALAR"; name: "Date"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gt";
					type: { kind: "SCALAR"; name: "Date"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gte";
					type: { kind: "SCALAR"; name: "Date"; ofType: null };
					defaultValue: null;
				},
				{
					name: "in";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "SCALAR"; name: "Date"; ofType: null };
						};
					};
					defaultValue: null;
				},
				{
					name: "is";
					type: { kind: "ENUM"; name: "FilterIs"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lt";
					type: { kind: "SCALAR"; name: "Date"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lte";
					type: { kind: "SCALAR"; name: "Date"; ofType: null };
					defaultValue: null;
				},
				{
					name: "neq";
					type: { kind: "SCALAR"; name: "Date"; ofType: null };
					defaultValue: null;
				},
			];
		};
		Datetime: unknown;
		DatetimeFilter: {
			kind: "INPUT_OBJECT";
			name: "DatetimeFilter";
			inputFields: [
				{
					name: "eq";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gte";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "in";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
						};
					};
					defaultValue: null;
				},
				{
					name: "is";
					type: { kind: "ENUM"; name: "FilterIs"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lte";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "neq";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		FilterIs: { kind: "ENUM"; name: "FilterIs"; type: "NOT_NULL" | "NULL" };
		Float: unknown;
		FloatFilter: {
			kind: "INPUT_OBJECT";
			name: "FloatFilter";
			inputFields: [
				{
					name: "eq";
					type: { kind: "SCALAR"; name: "Float"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gt";
					type: { kind: "SCALAR"; name: "Float"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gte";
					type: { kind: "SCALAR"; name: "Float"; ofType: null };
					defaultValue: null;
				},
				{
					name: "in";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
						};
					};
					defaultValue: null;
				},
				{
					name: "is";
					type: { kind: "ENUM"; name: "FilterIs"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lt";
					type: { kind: "SCALAR"; name: "Float"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lte";
					type: { kind: "SCALAR"; name: "Float"; ofType: null };
					defaultValue: null;
				},
				{
					name: "neq";
					type: { kind: "SCALAR"; name: "Float"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbForkHist: {
			kind: "OBJECT";
			name: "GthbForkHist";
			fields: {
				amount: {
					name: "amount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbForkHistDate: {
					name: "gthbForkHistDate";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				gthbForkHistId: {
					name: "gthbForkHistId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbRepo: {
					name: "gthbRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbRepo"; ofType: null };
					};
				};
				gthbRepoId: {
					name: "gthbRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
			};
		};
		GthbForkHistConnection: {
			kind: "OBJECT";
			name: "GthbForkHistConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "GthbForkHistEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		GthbForkHistDeleteResponse: {
			kind: "OBJECT";
			name: "GthbForkHistDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbForkHist"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbForkHistEdge: {
			kind: "OBJECT";
			name: "GthbForkHistEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbForkHist"; ofType: null };
					};
				};
			};
		};
		GthbForkHistFilter: {
			kind: "INPUT_OBJECT";
			name: "GthbForkHistFilter";
			inputFields: [
				{
					name: "amount";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbForkHistFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "gthbForkHistDate";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbForkHistId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "GthbForkHistFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbForkHistFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
			];
		};
		GthbForkHistInsertInput: {
			kind: "INPUT_OBJECT";
			name: "GthbForkHistInsertInput";
			inputFields: [
				{
					name: "amount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbForkHistDate";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbForkHistInsertResponse: {
			kind: "OBJECT";
			name: "GthbForkHistInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbForkHist"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbForkHistOrderBy: {
			kind: "INPUT_OBJECT";
			name: "GthbForkHistOrderBy";
			inputFields: [
				{
					name: "amount";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbForkHistDate";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbForkHistId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbForkHistUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "GthbForkHistUpdateInput";
			inputFields: [
				{
					name: "amount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbForkHistDate";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbForkHistUpdateResponse: {
			kind: "OBJECT";
			name: "GthbForkHistUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbForkHist"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbIssueHist: {
			kind: "OBJECT";
			name: "GthbIssueHist";
			fields: {
				amount: {
					name: "amount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbIssueHistDate: {
					name: "gthbIssueHistDate";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				gthbIssueHistId: {
					name: "gthbIssueHistId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbRepo: {
					name: "gthbRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbRepo"; ofType: null };
					};
				};
				gthbRepoId: {
					name: "gthbRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
			};
		};
		GthbIssueHistConnection: {
			kind: "OBJECT";
			name: "GthbIssueHistConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "GthbIssueHistEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		GthbIssueHistDeleteResponse: {
			kind: "OBJECT";
			name: "GthbIssueHistDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbIssueHist"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbIssueHistEdge: {
			kind: "OBJECT";
			name: "GthbIssueHistEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbIssueHist"; ofType: null };
					};
				};
			};
		};
		GthbIssueHistFilter: {
			kind: "INPUT_OBJECT";
			name: "GthbIssueHistFilter";
			inputFields: [
				{
					name: "amount";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbIssueHistFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "gthbIssueHistDate";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbIssueHistId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "GthbIssueHistFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbIssueHistFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
			];
		};
		GthbIssueHistInsertInput: {
			kind: "INPUT_OBJECT";
			name: "GthbIssueHistInsertInput";
			inputFields: [
				{
					name: "amount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbIssueHistDate";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbIssueHistInsertResponse: {
			kind: "OBJECT";
			name: "GthbIssueHistInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbIssueHist"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbIssueHistOrderBy: {
			kind: "INPUT_OBJECT";
			name: "GthbIssueHistOrderBy";
			inputFields: [
				{
					name: "amount";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbIssueHistDate";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbIssueHistId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbIssueHistUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "GthbIssueHistUpdateInput";
			inputFields: [
				{
					name: "amount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbIssueHistDate";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbIssueHistUpdateResponse: {
			kind: "OBJECT";
			name: "GthbIssueHistUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbIssueHist"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbLang: {
			kind: "OBJECT";
			name: "GthbLang";
			fields: {
				color: {
					name: "color";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				gthbLangId: {
					name: "gthbLangId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbLangName: {
					name: "gthbLangName";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				gthbRepoAndGthbLangCollection: {
					name: "gthbRepoAndGthbLangCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoAndGthbLangConnection";
							ofType: null;
						};
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
			};
		};
		GthbLangConnection: {
			kind: "OBJECT";
			name: "GthbLangConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbLangEdge"; ofType: null };
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		GthbLangDeleteResponse: {
			kind: "OBJECT";
			name: "GthbLangDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbLang"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbLangEdge: {
			kind: "OBJECT";
			name: "GthbLangEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbLang"; ofType: null };
					};
				};
			};
		};
		GthbLangFilter: {
			kind: "INPUT_OBJECT";
			name: "GthbLangFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbLangFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "color";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbLangId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbLangName";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: { kind: "INPUT_OBJECT"; name: "GthbLangFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbLangFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
			];
		};
		GthbLangInsertInput: {
			kind: "INPUT_OBJECT";
			name: "GthbLangInsertInput";
			inputFields: [
				{
					name: "color";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbLangName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbLangInsertResponse: {
			kind: "OBJECT";
			name: "GthbLangInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbLang"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbLangOrderBy: {
			kind: "INPUT_OBJECT";
			name: "GthbLangOrderBy";
			inputFields: [
				{
					name: "color";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbLangId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbLangName";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbLangUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "GthbLangUpdateInput";
			inputFields: [
				{
					name: "color";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbLangName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbLangUpdateResponse: {
			kind: "OBJECT";
			name: "GthbLangUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbLang"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbOrg: {
			kind: "OBJECT";
			name: "GthbOrg";
			fields: {
				createdAt: {
					name: "createdAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				descriptionHtml: {
					name: "descriptionHtml";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				email: {
					name: "email";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				gthbOrg: {
					name: "gthbOrg";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbOwner"; ofType: null };
					};
				};
				gthbOrgDescription: {
					name: "gthbOrgDescription";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				gthbOrgId: {
					name: "gthbOrgId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbOrgName: {
					name: "gthbOrgName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				twitterUsername: {
					name: "twitterUsername";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				websiteUrl: {
					name: "websiteUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
		GthbOrgConnection: {
			kind: "OBJECT";
			name: "GthbOrgConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbOrgEdge"; ofType: null };
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		GthbOrgDeleteResponse: {
			kind: "OBJECT";
			name: "GthbOrgDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbOrg"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbOrgEdge: {
			kind: "OBJECT";
			name: "GthbOrgEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbOrg"; ofType: null };
					};
				};
			};
		};
		GthbOrgFilter: {
			kind: "INPUT_OBJECT";
			name: "GthbOrgFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbOrgFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "descriptionHtml";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "email";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOrgDescription";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOrgId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOrgName";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: { kind: "INPUT_OBJECT"; name: "GthbOrgFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbOrgFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "twitterUsername";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "websiteUrl";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbOrgInsertInput: {
			kind: "INPUT_OBJECT";
			name: "GthbOrgInsertInput";
			inputFields: [
				{
					name: "createdAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "descriptionHtml";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "email";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOrgDescription";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOrgId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOrgName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "twitterUsername";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "websiteUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbOrgInsertResponse: {
			kind: "OBJECT";
			name: "GthbOrgInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbOrg"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbOrgOrderBy: {
			kind: "INPUT_OBJECT";
			name: "GthbOrgOrderBy";
			inputFields: [
				{
					name: "createdAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "descriptionHtml";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "email";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOrgDescription";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOrgId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOrgName";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "twitterUsername";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "websiteUrl";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbOrgUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "GthbOrgUpdateInput";
			inputFields: [
				{
					name: "createdAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "descriptionHtml";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "email";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOrgDescription";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOrgId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOrgName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "twitterUsername";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "websiteUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbOrgUpdateResponse: {
			kind: "OBJECT";
			name: "GthbOrgUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbOrg"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbOwner: {
			kind: "OBJECT";
			name: "GthbOwner";
			fields: {
				avatarUrl: {
					name: "avatarUrl";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				gthbOwner: {
					name: "gthbOwner";
					type: { kind: "OBJECT"; name: "GthbOrg"; ofType: null };
				};
				gthbOwnerId: {
					name: "gthbOwnerId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbOwnerLogin: {
					name: "gthbOwnerLogin";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				gthbOwnerType: {
					name: "gthbOwnerType";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Opaque"; ofType: null };
					};
				};
				gthbOwnerUrl: {
					name: "gthbOwnerUrl";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				gthbRepoCollection: {
					name: "gthbRepoCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoConnection";
							ofType: null;
						};
					};
				};
				gthbRepoContrCollection: {
					name: "gthbRepoContrCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoContrConnection";
							ofType: null;
						};
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				repositoriesTotalCount: {
					name: "repositoriesTotalCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
			};
		};
		GthbOwnerConnection: {
			kind: "OBJECT";
			name: "GthbOwnerConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbOwnerEdge"; ofType: null };
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		GthbOwnerDeleteResponse: {
			kind: "OBJECT";
			name: "GthbOwnerDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbOwner"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbOwnerEdge: {
			kind: "OBJECT";
			name: "GthbOwnerEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbOwner"; ofType: null };
					};
				};
			};
		};
		GthbOwnerFilter: {
			kind: "INPUT_OBJECT";
			name: "GthbOwnerFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbOwnerFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "avatarUrl";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerLogin";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerType";
					type: { kind: "INPUT_OBJECT"; name: "OpaqueFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerUrl";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: { kind: "INPUT_OBJECT"; name: "GthbOwnerFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbOwnerFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "repositoriesTotalCount";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbOwnerInsertInput: {
			kind: "INPUT_OBJECT";
			name: "GthbOwnerInsertInput";
			inputFields: [
				{
					name: "avatarUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerLogin";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerType";
					type: { kind: "SCALAR"; name: "Opaque"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "repositoriesTotalCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbOwnerInsertResponse: {
			kind: "OBJECT";
			name: "GthbOwnerInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbOwner"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbOwnerOrderBy: {
			kind: "INPUT_OBJECT";
			name: "GthbOwnerOrderBy";
			inputFields: [
				{
					name: "avatarUrl";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerLogin";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerType";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerUrl";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "repositoriesTotalCount";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbOwnerUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "GthbOwnerUpdateInput";
			inputFields: [
				{
					name: "avatarUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerLogin";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerType";
					type: { kind: "SCALAR"; name: "Opaque"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "repositoriesTotalCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbOwnerUpdateResponse: {
			kind: "OBJECT";
			name: "GthbOwnerUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbOwner"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbRepo: {
			kind: "OBJECT";
			name: "GthbRepo";
			fields: {
				contributorCount: {
					name: "contributorCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				createdAt: {
					name: "createdAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				forkCount: {
					name: "forkCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				forksPerContributor: {
					name: "forksPerContributor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbForkHistCollection: {
					name: "gthbForkHistCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbForkHistConnection";
							ofType: null;
						};
					};
				};
				gthbIssueHistCollection: {
					name: "gthbIssueHistCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbIssueHistConnection";
							ofType: null;
						};
					};
				};
				gthbOwner: {
					name: "gthbOwner";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbOwner"; ofType: null };
					};
				};
				gthbOwnerId: {
					name: "gthbOwnerId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbRepo: {
					name: "gthbRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "ProjRepo"; ofType: null };
					};
				};
				gthbRepoAndGthbLangCollection: {
					name: "gthbRepoAndGthbLangCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoAndGthbLangConnection";
							ofType: null;
						};
					};
				};
				gthbRepoAndGthbRepoTopicCollection: {
					name: "gthbRepoAndGthbRepoTopicCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoAndGthbRepoTopicConnection";
							ofType: null;
						};
					};
				};
				gthbRepoContrCollection: {
					name: "gthbRepoContrCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoContrConnection";
							ofType: null;
						};
					};
				};
				gthbRepoDescription: {
					name: "gthbRepoDescription";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				gthbRepoId: {
					name: "gthbRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbRepoName: {
					name: "gthbRepoName";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				gthbRepoUrl: {
					name: "gthbRepoUrl";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				gthbStarHistCollection: {
					name: "gthbStarHistCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbStarHistConnection";
							ofType: null;
						};
					};
				};
				gthbTrendingCollection: {
					name: "gthbTrendingCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbTrendingConnection";
							ofType: null;
						};
					};
				};
				homepageUrl: {
					name: "homepageUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				isInOrganization: {
					name: "isInOrganization";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					};
				};
				issuesPerContributor: {
					name: "issuesPerContributor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				issuesTotalCount: {
					name: "issuesTotalCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				pullRequestsPerContributor: {
					name: "pullRequestsPerContributor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				pullRequestsTotalCount: {
					name: "pullRequestsTotalCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				stargazerCount: {
					name: "stargazerCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				stargazersPerContributor: {
					name: "stargazersPerContributor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
			};
		};
		GthbRepoAndGthbLang: {
			kind: "OBJECT";
			name: "GthbRepoAndGthbLang";
			fields: {
				gthbLang: {
					name: "gthbLang";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbLang"; ofType: null };
					};
				};
				gthbLangId: {
					name: "gthbLangId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbRepo: {
					name: "gthbRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbRepo"; ofType: null };
					};
				};
				gthbRepoId: {
					name: "gthbRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
			};
		};
		GthbRepoAndGthbLangConnection: {
			kind: "OBJECT";
			name: "GthbRepoAndGthbLangConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "GthbRepoAndGthbLangEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		GthbRepoAndGthbLangDeleteResponse: {
			kind: "OBJECT";
			name: "GthbRepoAndGthbLangDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "GthbRepoAndGthbLang";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		GthbRepoAndGthbLangEdge: {
			kind: "OBJECT";
			name: "GthbRepoAndGthbLangEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoAndGthbLang";
							ofType: null;
						};
					};
				};
			};
		};
		GthbRepoAndGthbLangFilter: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoAndGthbLangFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbRepoAndGthbLangFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "gthbLangId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "GthbRepoAndGthbLangFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbRepoAndGthbLangFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
			];
		};
		GthbRepoAndGthbLangInsertInput: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoAndGthbLangInsertInput";
			inputFields: [
				{
					name: "gthbLangId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoAndGthbLangInsertResponse: {
			kind: "OBJECT";
			name: "GthbRepoAndGthbLangInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "GthbRepoAndGthbLang";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		GthbRepoAndGthbLangOrderBy: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoAndGthbLangOrderBy";
			inputFields: [
				{
					name: "gthbLangId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoAndGthbLangUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoAndGthbLangUpdateInput";
			inputFields: [
				{
					name: "gthbLangId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoAndGthbLangUpdateResponse: {
			kind: "OBJECT";
			name: "GthbRepoAndGthbLangUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "GthbRepoAndGthbLang";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		GthbRepoAndGthbRepoTopic: {
			kind: "OBJECT";
			name: "GthbRepoAndGthbRepoTopic";
			fields: {
				gthbRepo: {
					name: "gthbRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbRepo"; ofType: null };
					};
				};
				gthbRepoId: {
					name: "gthbRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbRepoTopic: {
					name: "gthbRepoTopic";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbRepoTopic"; ofType: null };
					};
				};
				gthbRepoTopicId: {
					name: "gthbRepoTopicId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
			};
		};
		GthbRepoAndGthbRepoTopicConnection: {
			kind: "OBJECT";
			name: "GthbRepoAndGthbRepoTopicConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "GthbRepoAndGthbRepoTopicEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		GthbRepoAndGthbRepoTopicDeleteResponse: {
			kind: "OBJECT";
			name: "GthbRepoAndGthbRepoTopicDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "GthbRepoAndGthbRepoTopic";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		GthbRepoAndGthbRepoTopicEdge: {
			kind: "OBJECT";
			name: "GthbRepoAndGthbRepoTopicEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoAndGthbRepoTopic";
							ofType: null;
						};
					};
				};
			};
		};
		GthbRepoAndGthbRepoTopicFilter: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoAndGthbRepoTopicFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbRepoAndGthbRepoTopicFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoTopicId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "GthbRepoAndGthbRepoTopicFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbRepoAndGthbRepoTopicFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
			];
		};
		GthbRepoAndGthbRepoTopicInsertInput: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoAndGthbRepoTopicInsertInput";
			inputFields: [
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoTopicId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoAndGthbRepoTopicInsertResponse: {
			kind: "OBJECT";
			name: "GthbRepoAndGthbRepoTopicInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "GthbRepoAndGthbRepoTopic";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		GthbRepoAndGthbRepoTopicOrderBy: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoAndGthbRepoTopicOrderBy";
			inputFields: [
				{
					name: "gthbRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoTopicId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoAndGthbRepoTopicUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoAndGthbRepoTopicUpdateInput";
			inputFields: [
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoTopicId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoAndGthbRepoTopicUpdateResponse: {
			kind: "OBJECT";
			name: "GthbRepoAndGthbRepoTopicUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "GthbRepoAndGthbRepoTopic";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		GthbRepoConnection: {
			kind: "OBJECT";
			name: "GthbRepoConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbRepoEdge"; ofType: null };
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		GthbRepoContr: {
			kind: "OBJECT";
			name: "GthbRepoContr";
			fields: {
				contributions: {
					name: "contributions";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbOwner: {
					name: "gthbOwner";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbOwner"; ofType: null };
					};
				};
				gthbOwnerId: {
					name: "gthbOwnerId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbRepo: {
					name: "gthbRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbRepo"; ofType: null };
					};
				};
				gthbRepoId: {
					name: "gthbRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
			};
		};
		GthbRepoContrConnection: {
			kind: "OBJECT";
			name: "GthbRepoContrConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "GthbRepoContrEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		GthbRepoContrDeleteResponse: {
			kind: "OBJECT";
			name: "GthbRepoContrDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbRepoContr"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbRepoContrEdge: {
			kind: "OBJECT";
			name: "GthbRepoContrEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbRepoContr"; ofType: null };
					};
				};
			};
		};
		GthbRepoContrFilter: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoContrFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbRepoContrFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "contributions";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "GthbRepoContrFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbRepoContrFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
			];
		};
		GthbRepoContrInsertInput: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoContrInsertInput";
			inputFields: [
				{
					name: "contributions";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoContrInsertResponse: {
			kind: "OBJECT";
			name: "GthbRepoContrInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbRepoContr"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbRepoContrOrderBy: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoContrOrderBy";
			inputFields: [
				{
					name: "contributions";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoContrUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoContrUpdateInput";
			inputFields: [
				{
					name: "contributions";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoContrUpdateResponse: {
			kind: "OBJECT";
			name: "GthbRepoContrUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbRepoContr"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbRepoDeleteResponse: {
			kind: "OBJECT";
			name: "GthbRepoDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbRepo"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbRepoEdge: {
			kind: "OBJECT";
			name: "GthbRepoEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbRepo"; ofType: null };
					};
				};
			};
		};
		GthbRepoFilter: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbRepoFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "contributorCount";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "forkCount";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "forksPerContributor";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoDescription";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoName";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoUrl";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "homepageUrl";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isInOrganization";
					type: { kind: "INPUT_OBJECT"; name: "BooleanFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "issuesPerContributor";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "issuesTotalCount";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: { kind: "INPUT_OBJECT"; name: "GthbRepoFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbRepoFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "pullRequestsPerContributor";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "pullRequestsTotalCount";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "stargazerCount";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "stargazersPerContributor";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoInsertInput: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoInsertInput";
			inputFields: [
				{
					name: "contributorCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "forkCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "forksPerContributor";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoDescription";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "homepageUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isInOrganization";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					defaultValue: null;
				},
				{
					name: "issuesPerContributor";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "issuesTotalCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "pullRequestsPerContributor";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "pullRequestsTotalCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "stargazerCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "stargazersPerContributor";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoInsertResponse: {
			kind: "OBJECT";
			name: "GthbRepoInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbRepo"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbRepoOrderBy: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoOrderBy";
			inputFields: [
				{
					name: "contributorCount";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "forkCount";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "forksPerContributor";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoDescription";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoName";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoUrl";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "homepageUrl";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isInOrganization";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "issuesPerContributor";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "issuesTotalCount";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "pullRequestsPerContributor";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "pullRequestsTotalCount";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "stargazerCount";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "stargazersPerContributor";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoTopic: {
			kind: "OBJECT";
			name: "GthbRepoTopic";
			fields: {
				gthbRepoAndGthbRepoTopicCollection: {
					name: "gthbRepoAndGthbRepoTopicCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoAndGthbRepoTopicConnection";
							ofType: null;
						};
					};
				};
				gthbRepoTopicId: {
					name: "gthbRepoTopicId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbRepoTopicName: {
					name: "gthbRepoTopicName";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				stargazerCount: {
					name: "stargazerCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
			};
		};
		GthbRepoTopicConnection: {
			kind: "OBJECT";
			name: "GthbRepoTopicConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "GthbRepoTopicEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		GthbRepoTopicDeleteResponse: {
			kind: "OBJECT";
			name: "GthbRepoTopicDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbRepoTopic"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbRepoTopicEdge: {
			kind: "OBJECT";
			name: "GthbRepoTopicEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbRepoTopic"; ofType: null };
					};
				};
			};
		};
		GthbRepoTopicFilter: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoTopicFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbRepoTopicFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "gthbRepoTopicId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoTopicName";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "GthbRepoTopicFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbRepoTopicFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "stargazerCount";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoTopicInsertInput: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoTopicInsertInput";
			inputFields: [
				{
					name: "gthbRepoTopicName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "stargazerCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoTopicInsertResponse: {
			kind: "OBJECT";
			name: "GthbRepoTopicInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbRepoTopic"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbRepoTopicOrderBy: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoTopicOrderBy";
			inputFields: [
				{
					name: "gthbRepoTopicId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoTopicName";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "stargazerCount";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoTopicUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoTopicUpdateInput";
			inputFields: [
				{
					name: "gthbRepoTopicName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "stargazerCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoTopicUpdateResponse: {
			kind: "OBJECT";
			name: "GthbRepoTopicUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbRepoTopic"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbRepoUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "GthbRepoUpdateInput";
			inputFields: [
				{
					name: "contributorCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "forkCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "forksPerContributor";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbOwnerId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoDescription";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "homepageUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isInOrganization";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					defaultValue: null;
				},
				{
					name: "issuesPerContributor";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "issuesTotalCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "pullRequestsPerContributor";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "pullRequestsTotalCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "stargazerCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "stargazersPerContributor";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbRepoUpdateResponse: {
			kind: "OBJECT";
			name: "GthbRepoUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbRepo"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbStarHist: {
			kind: "OBJECT";
			name: "GthbStarHist";
			fields: {
				amount: {
					name: "amount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbRepo: {
					name: "gthbRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbRepo"; ofType: null };
					};
				};
				gthbRepoId: {
					name: "gthbRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbStarHistDate: {
					name: "gthbStarHistDate";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				gthbStarHistId: {
					name: "gthbStarHistId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
			};
		};
		GthbStarHistConnection: {
			kind: "OBJECT";
			name: "GthbStarHistConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "GthbStarHistEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		GthbStarHistDeleteResponse: {
			kind: "OBJECT";
			name: "GthbStarHistDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbStarHist"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbStarHistEdge: {
			kind: "OBJECT";
			name: "GthbStarHistEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbStarHist"; ofType: null };
					};
				};
			};
		};
		GthbStarHistFilter: {
			kind: "INPUT_OBJECT";
			name: "GthbStarHistFilter";
			inputFields: [
				{
					name: "amount";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbStarHistFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbStarHistDate";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbStarHistId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "GthbStarHistFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbStarHistFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
			];
		};
		GthbStarHistInsertInput: {
			kind: "INPUT_OBJECT";
			name: "GthbStarHistInsertInput";
			inputFields: [
				{
					name: "amount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbStarHistDate";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbStarHistInsertResponse: {
			kind: "OBJECT";
			name: "GthbStarHistInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbStarHist"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbStarHistOrderBy: {
			kind: "INPUT_OBJECT";
			name: "GthbStarHistOrderBy";
			inputFields: [
				{
					name: "amount";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbStarHistDate";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbStarHistId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbStarHistUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "GthbStarHistUpdateInput";
			inputFields: [
				{
					name: "amount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbStarHistDate";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbStarHistUpdateResponse: {
			kind: "OBJECT";
			name: "GthbStarHistUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbStarHist"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbTrending: {
			kind: "OBJECT";
			name: "GthbTrending";
			fields: {
				dateRange: {
					name: "dateRange";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Opaque"; ofType: null };
					};
				};
				gthbRepo: {
					name: "gthbRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbRepo"; ofType: null };
					};
				};
				gthbRepoId: {
					name: "gthbRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbTrendingId: {
					name: "gthbTrendingId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				lang: {
					name: "lang";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
			};
		};
		GthbTrendingConnection: {
			kind: "OBJECT";
			name: "GthbTrendingConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "GthbTrendingEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		GthbTrendingDeleteResponse: {
			kind: "OBJECT";
			name: "GthbTrendingDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbTrending"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbTrendingEdge: {
			kind: "OBJECT";
			name: "GthbTrendingEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbTrending"; ofType: null };
					};
				};
			};
		};
		GthbTrendingFilter: {
			kind: "INPUT_OBJECT";
			name: "GthbTrendingFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbTrendingFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "dateRange";
					type: { kind: "INPUT_OBJECT"; name: "OpaqueFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbTrendingId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lang";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "GthbTrendingFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbTrendingFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
			];
		};
		GthbTrendingInsertInput: {
			kind: "INPUT_OBJECT";
			name: "GthbTrendingInsertInput";
			inputFields: [
				{
					name: "dateRange";
					type: { kind: "SCALAR"; name: "Opaque"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lang";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbTrendingInsertResponse: {
			kind: "OBJECT";
			name: "GthbTrendingInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbTrending"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbTrendingOrderBy: {
			kind: "INPUT_OBJECT";
			name: "GthbTrendingOrderBy";
			inputFields: [
				{
					name: "dateRange";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbTrendingId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lang";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbTrendingUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "GthbTrendingUpdateInput";
			inputFields: [
				{
					name: "dateRange";
					type: { kind: "SCALAR"; name: "Opaque"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lang";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbTrendingUpdateResponse: {
			kind: "OBJECT";
			name: "GthbTrendingUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbTrending"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbUser: {
			kind: "OBJECT";
			name: "GthbUser";
			fields: {
				bio: {
					name: "bio";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				bioHtml: {
					name: "bioHtml";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				company: {
					name: "company";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				companyHtml: {
					name: "companyHtml";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				createdAt: {
					name: "createdAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				email: {
					name: "email";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				followersTotalCount: {
					name: "followersTotalCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbUser: {
					name: "gthbUser";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbOwner"; ofType: null };
					};
				};
				gthbUserId: {
					name: "gthbUserId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				gthbUserName: {
					name: "gthbUserName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				twitterUsername: {
					name: "twitterUsername";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				websiteUrl: {
					name: "websiteUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
		GthbUserConnection: {
			kind: "OBJECT";
			name: "GthbUserConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbUserEdge"; ofType: null };
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		GthbUserDeleteResponse: {
			kind: "OBJECT";
			name: "GthbUserDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbUser"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbUserEdge: {
			kind: "OBJECT";
			name: "GthbUserEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbUser"; ofType: null };
					};
				};
			};
		};
		GthbUserFilter: {
			kind: "INPUT_OBJECT";
			name: "GthbUserFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbUserFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "bio";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "bioHtml";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "company";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "companyHtml";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "email";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "followersTotalCount";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbUserId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbUserName";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: { kind: "INPUT_OBJECT"; name: "GthbUserFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "GthbUserFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "twitterUsername";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "websiteUrl";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbUserInsertInput: {
			kind: "INPUT_OBJECT";
			name: "GthbUserInsertInput";
			inputFields: [
				{
					name: "bio";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "bioHtml";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "company";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "companyHtml";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "email";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "followersTotalCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbUserId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbUserName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "twitterUsername";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "websiteUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbUserInsertResponse: {
			kind: "OBJECT";
			name: "GthbUserInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbUser"; ofType: null };
							};
						};
					};
				};
			};
		};
		GthbUserOrderBy: {
			kind: "INPUT_OBJECT";
			name: "GthbUserOrderBy";
			inputFields: [
				{
					name: "bio";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "bioHtml";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "company";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "companyHtml";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "email";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "followersTotalCount";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbUserId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbUserName";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "twitterUsername";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "websiteUrl";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbUserUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "GthbUserUpdateInput";
			inputFields: [
				{
					name: "bio";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "bioHtml";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "company";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "companyHtml";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "createdAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "email";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "followersTotalCount";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbUserId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbUserName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "twitterUsername";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "websiteUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		GthbUserUpdateResponse: {
			kind: "OBJECT";
			name: "GthbUserUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "GthbUser"; ofType: null };
							};
						};
					};
				};
			};
		};
		ID: unknown;
		IDFilter: {
			kind: "INPUT_OBJECT";
			name: "IDFilter";
			inputFields: [
				{
					name: "eq";
					type: { kind: "SCALAR"; name: "ID"; ofType: null };
					defaultValue: null;
				},
			];
		};
		Instance1: {
			kind: "OBJECT";
			name: "Instance1";
			fields: {
				created_at: {
					name: "created_at";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				id: {
					name: "id";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				instance2Collection: {
					name: "instance2Collection";
					type: { kind: "OBJECT"; name: "Instance2Connection"; ofType: null };
				};
				name: {
					name: "name";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
			};
		};
		Instance1Connection: {
			kind: "OBJECT";
			name: "Instance1Connection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "Instance1Edge"; ofType: null };
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		Instance1DeleteResponse: {
			kind: "OBJECT";
			name: "Instance1DeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "Instance1"; ofType: null };
							};
						};
					};
				};
			};
		};
		Instance1Edge: {
			kind: "OBJECT";
			name: "Instance1Edge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Instance1"; ofType: null };
					};
				};
			};
		};
		Instance1Filter: {
			kind: "INPUT_OBJECT";
			name: "Instance1Filter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "Instance1Filter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "created_at";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "id";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "name";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: { kind: "INPUT_OBJECT"; name: "Instance1Filter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "Instance1Filter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
			];
		};
		Instance1InsertInput: {
			kind: "INPUT_OBJECT";
			name: "Instance1InsertInput";
			inputFields: [
				{
					name: "created_at";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "name";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		Instance1InsertResponse: {
			kind: "OBJECT";
			name: "Instance1InsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "Instance1"; ofType: null };
							};
						};
					};
				};
			};
		};
		Instance1OrderBy: {
			kind: "INPUT_OBJECT";
			name: "Instance1OrderBy";
			inputFields: [
				{
					name: "created_at";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "id";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "name";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		Instance1UpdateInput: {
			kind: "INPUT_OBJECT";
			name: "Instance1UpdateInput";
			inputFields: [
				{
					name: "created_at";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "name";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		Instance1UpdateResponse: {
			kind: "OBJECT";
			name: "Instance1UpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "Instance1"; ofType: null };
							};
						};
					};
				};
			};
		};
		Instance2: {
			kind: "OBJECT";
			name: "Instance2";
			fields: {
				created_at: {
					name: "created_at";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				for: {
					name: "for";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
				};
				id: {
					name: "id";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				instance1: {
					name: "instance1";
					type: { kind: "OBJECT"; name: "Instance1"; ofType: null };
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				share: {
					name: "share";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
		Instance2Connection: {
			kind: "OBJECT";
			name: "Instance2Connection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "Instance2Edge"; ofType: null };
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		Instance2DeleteResponse: {
			kind: "OBJECT";
			name: "Instance2DeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "Instance2"; ofType: null };
							};
						};
					};
				};
			};
		};
		Instance2Edge: {
			kind: "OBJECT";
			name: "Instance2Edge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Instance2"; ofType: null };
					};
				};
			};
		};
		Instance2Filter: {
			kind: "INPUT_OBJECT";
			name: "Instance2Filter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "Instance2Filter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "created_at";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "for";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "id";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: { kind: "INPUT_OBJECT"; name: "Instance2Filter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "Instance2Filter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "share";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		Instance2InsertInput: {
			kind: "INPUT_OBJECT";
			name: "Instance2InsertInput";
			inputFields: [
				{
					name: "created_at";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "for";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "share";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		Instance2InsertResponse: {
			kind: "OBJECT";
			name: "Instance2InsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "Instance2"; ofType: null };
							};
						};
					};
				};
			};
		};
		Instance2OrderBy: {
			kind: "INPUT_OBJECT";
			name: "Instance2OrderBy";
			inputFields: [
				{
					name: "created_at";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "for";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "id";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "share";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		Instance2UpdateInput: {
			kind: "INPUT_OBJECT";
			name: "Instance2UpdateInput";
			inputFields: [
				{
					name: "created_at";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "for";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "share";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		Instance2UpdateResponse: {
			kind: "OBJECT";
			name: "Instance2UpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "Instance2"; ofType: null };
							};
						};
					};
				};
			};
		};
		Int: unknown;
		IntFilter: {
			kind: "INPUT_OBJECT";
			name: "IntFilter";
			inputFields: [
				{
					name: "eq";
					type: { kind: "SCALAR"; name: "Int"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gt";
					type: { kind: "SCALAR"; name: "Int"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gte";
					type: { kind: "SCALAR"; name: "Int"; ofType: null };
					defaultValue: null;
				},
				{
					name: "in";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
						};
					};
					defaultValue: null;
				},
				{
					name: "is";
					type: { kind: "ENUM"; name: "FilterIs"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lt";
					type: { kind: "SCALAR"; name: "Int"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lte";
					type: { kind: "SCALAR"; name: "Int"; ofType: null };
					defaultValue: null;
				},
				{
					name: "neq";
					type: { kind: "SCALAR"; name: "Int"; ofType: null };
					defaultValue: null;
				},
			];
		};
		JSON: unknown;
		Mutation: {
			kind: "OBJECT";
			name: "Mutation";
			fields: {
				deleteFromAlgoHnCommentAndAlgoHnTagCollection: {
					name: "deleteFromAlgoHnCommentAndAlgoHnTagCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnCommentAndAlgoHnTagDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromAlgoHnCommentCollection: {
					name: "deleteFromAlgoHnCommentCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnCommentDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromAlgoHnQueryCollection: {
					name: "deleteFromAlgoHnQueryCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnQueryDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromAlgoHnStoryAndAlgoHnTagCollection: {
					name: "deleteFromAlgoHnStoryAndAlgoHnTagCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnStoryAndAlgoHnTagDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromAlgoHnStoryCollection: {
					name: "deleteFromAlgoHnStoryCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnStoryDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromAlgoHnTagCollection: {
					name: "deleteFromAlgoHnTagCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnTagDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromGthbForkHistCollection: {
					name: "deleteFromGthbForkHistCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbForkHistDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromGthbIssueHistCollection: {
					name: "deleteFromGthbIssueHistCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbIssueHistDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromGthbLangCollection: {
					name: "deleteFromGthbLangCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbLangDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromGthbOrgCollection: {
					name: "deleteFromGthbOrgCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbOrgDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromGthbOwnerCollection: {
					name: "deleteFromGthbOwnerCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbOwnerDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromGthbRepoAndGthbLangCollection: {
					name: "deleteFromGthbRepoAndGthbLangCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoAndGthbLangDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromGthbRepoAndGthbRepoTopicCollection: {
					name: "deleteFromGthbRepoAndGthbRepoTopicCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoAndGthbRepoTopicDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromGthbRepoCollection: {
					name: "deleteFromGthbRepoCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromGthbRepoContrCollection: {
					name: "deleteFromGthbRepoContrCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoContrDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromGthbRepoTopicCollection: {
					name: "deleteFromGthbRepoTopicCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoTopicDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromGthbStarHistCollection: {
					name: "deleteFromGthbStarHistCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbStarHistDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromGthbTrendingCollection: {
					name: "deleteFromGthbTrendingCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbTrendingDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromGthbUserCollection: {
					name: "deleteFromGthbUserCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbUserDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromInstance1Collection: {
					name: "deleteFromInstance1Collection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "Instance1DeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromInstance2Collection: {
					name: "deleteFromInstance2Collection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "Instance2DeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromProjBookmarkCollection: {
					name: "deleteFromProjBookmarkCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjBookmarkDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromProjCatAndProjBookmarkCollection: {
					name: "deleteFromProjCatAndProjBookmarkCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjCatAndProjBookmarkDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromProjCatCollection: {
					name: "deleteFromProjCatCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjCatDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromProjClassifierCollection: {
					name: "deleteFromProjClassifierCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjClassifierDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromProjRepoAndAlgoHnQueryCollection: {
					name: "deleteFromProjRepoAndAlgoHnQueryCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndAlgoHnQueryDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromProjRepoAndProjClassifierCollection: {
					name: "deleteFromProjRepoAndProjClassifierCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndProjClassifierDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromProjRepoAndSbotLinCompanyCollection: {
					name: "deleteFromProjRepoAndSbotLinCompanyCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndSbotLinCompanyDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromProjRepoAndSbotLinProfileCollection: {
					name: "deleteFromProjRepoAndSbotLinProfileCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndSbotLinProfileDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromProjRepoCollection: {
					name: "deleteFromProjRepoCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromSbotLinCompanyCollection: {
					name: "deleteFromSbotLinCompanyCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "SbotLinCompanyDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromSbotLinProfileCollection: {
					name: "deleteFromSbotLinProfileCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "SbotLinProfileDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromUserAdminCollection: {
					name: "deleteFromUserAdminCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "UserAdminDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromUserApiKeyCollection: {
					name: "deleteFromUserApiKeyCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "UserApiKeyDeleteResponse";
							ofType: null;
						};
					};
				};
				deleteFromUserWhitelistCollection: {
					name: "deleteFromUserWhitelistCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "UserWhitelistDeleteResponse";
							ofType: null;
						};
					};
				};
				fDeleteGthbTrendingByDateRange: {
					name: "fDeleteGthbTrendingByDateRange";
					type: { kind: "SCALAR"; name: "Opaque"; ofType: null };
				};
				fDeleteProjBookmark: {
					name: "fDeleteProjBookmark";
					type: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
				fDeleteProjBookmarkByGthbRepoName: {
					name: "fDeleteProjBookmarkByGthbRepoName";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
				fDeleteProjBookmarkByProjRepoId: {
					name: "fDeleteProjBookmarkByProjRepoId";
					type: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
				fDeleteUser: {
					name: "fDeleteUser";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
				fIsProjRepoBookmarked: {
					name: "fIsProjRepoBookmarked";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
				insertIntoAlgoHnCommentAndAlgoHnTagCollection: {
					name: "insertIntoAlgoHnCommentAndAlgoHnTagCollection";
					type: {
						kind: "OBJECT";
						name: "AlgoHnCommentAndAlgoHnTagInsertResponse";
						ofType: null;
					};
				};
				insertIntoAlgoHnCommentCollection: {
					name: "insertIntoAlgoHnCommentCollection";
					type: {
						kind: "OBJECT";
						name: "AlgoHnCommentInsertResponse";
						ofType: null;
					};
				};
				insertIntoAlgoHnQueryCollection: {
					name: "insertIntoAlgoHnQueryCollection";
					type: {
						kind: "OBJECT";
						name: "AlgoHnQueryInsertResponse";
						ofType: null;
					};
				};
				insertIntoAlgoHnStoryAndAlgoHnTagCollection: {
					name: "insertIntoAlgoHnStoryAndAlgoHnTagCollection";
					type: {
						kind: "OBJECT";
						name: "AlgoHnStoryAndAlgoHnTagInsertResponse";
						ofType: null;
					};
				};
				insertIntoAlgoHnStoryCollection: {
					name: "insertIntoAlgoHnStoryCollection";
					type: {
						kind: "OBJECT";
						name: "AlgoHnStoryInsertResponse";
						ofType: null;
					};
				};
				insertIntoAlgoHnTagCollection: {
					name: "insertIntoAlgoHnTagCollection";
					type: {
						kind: "OBJECT";
						name: "AlgoHnTagInsertResponse";
						ofType: null;
					};
				};
				insertIntoGthbForkHistCollection: {
					name: "insertIntoGthbForkHistCollection";
					type: {
						kind: "OBJECT";
						name: "GthbForkHistInsertResponse";
						ofType: null;
					};
				};
				insertIntoGthbIssueHistCollection: {
					name: "insertIntoGthbIssueHistCollection";
					type: {
						kind: "OBJECT";
						name: "GthbIssueHistInsertResponse";
						ofType: null;
					};
				};
				insertIntoGthbLangCollection: {
					name: "insertIntoGthbLangCollection";
					type: {
						kind: "OBJECT";
						name: "GthbLangInsertResponse";
						ofType: null;
					};
				};
				insertIntoGthbOrgCollection: {
					name: "insertIntoGthbOrgCollection";
					type: { kind: "OBJECT"; name: "GthbOrgInsertResponse"; ofType: null };
				};
				insertIntoGthbOwnerCollection: {
					name: "insertIntoGthbOwnerCollection";
					type: {
						kind: "OBJECT";
						name: "GthbOwnerInsertResponse";
						ofType: null;
					};
				};
				insertIntoGthbRepoAndGthbLangCollection: {
					name: "insertIntoGthbRepoAndGthbLangCollection";
					type: {
						kind: "OBJECT";
						name: "GthbRepoAndGthbLangInsertResponse";
						ofType: null;
					};
				};
				insertIntoGthbRepoAndGthbRepoTopicCollection: {
					name: "insertIntoGthbRepoAndGthbRepoTopicCollection";
					type: {
						kind: "OBJECT";
						name: "GthbRepoAndGthbRepoTopicInsertResponse";
						ofType: null;
					};
				};
				insertIntoGthbRepoCollection: {
					name: "insertIntoGthbRepoCollection";
					type: {
						kind: "OBJECT";
						name: "GthbRepoInsertResponse";
						ofType: null;
					};
				};
				insertIntoGthbRepoContrCollection: {
					name: "insertIntoGthbRepoContrCollection";
					type: {
						kind: "OBJECT";
						name: "GthbRepoContrInsertResponse";
						ofType: null;
					};
				};
				insertIntoGthbRepoTopicCollection: {
					name: "insertIntoGthbRepoTopicCollection";
					type: {
						kind: "OBJECT";
						name: "GthbRepoTopicInsertResponse";
						ofType: null;
					};
				};
				insertIntoGthbStarHistCollection: {
					name: "insertIntoGthbStarHistCollection";
					type: {
						kind: "OBJECT";
						name: "GthbStarHistInsertResponse";
						ofType: null;
					};
				};
				insertIntoGthbTrendingCollection: {
					name: "insertIntoGthbTrendingCollection";
					type: {
						kind: "OBJECT";
						name: "GthbTrendingInsertResponse";
						ofType: null;
					};
				};
				insertIntoGthbUserCollection: {
					name: "insertIntoGthbUserCollection";
					type: {
						kind: "OBJECT";
						name: "GthbUserInsertResponse";
						ofType: null;
					};
				};
				insertIntoInstance1Collection: {
					name: "insertIntoInstance1Collection";
					type: {
						kind: "OBJECT";
						name: "Instance1InsertResponse";
						ofType: null;
					};
				};
				insertIntoInstance2Collection: {
					name: "insertIntoInstance2Collection";
					type: {
						kind: "OBJECT";
						name: "Instance2InsertResponse";
						ofType: null;
					};
				};
				insertIntoProjBookmarkCollection: {
					name: "insertIntoProjBookmarkCollection";
					type: {
						kind: "OBJECT";
						name: "ProjBookmarkInsertResponse";
						ofType: null;
					};
				};
				insertIntoProjCatAndProjBookmarkCollection: {
					name: "insertIntoProjCatAndProjBookmarkCollection";
					type: {
						kind: "OBJECT";
						name: "ProjCatAndProjBookmarkInsertResponse";
						ofType: null;
					};
				};
				insertIntoProjCatCollection: {
					name: "insertIntoProjCatCollection";
					type: { kind: "OBJECT"; name: "ProjCatInsertResponse"; ofType: null };
				};
				insertIntoProjClassifierCollection: {
					name: "insertIntoProjClassifierCollection";
					type: {
						kind: "OBJECT";
						name: "ProjClassifierInsertResponse";
						ofType: null;
					};
				};
				insertIntoProjRepoAndAlgoHnQueryCollection: {
					name: "insertIntoProjRepoAndAlgoHnQueryCollection";
					type: {
						kind: "OBJECT";
						name: "ProjRepoAndAlgoHnQueryInsertResponse";
						ofType: null;
					};
				};
				insertIntoProjRepoAndProjClassifierCollection: {
					name: "insertIntoProjRepoAndProjClassifierCollection";
					type: {
						kind: "OBJECT";
						name: "ProjRepoAndProjClassifierInsertResponse";
						ofType: null;
					};
				};
				insertIntoProjRepoAndSbotLinCompanyCollection: {
					name: "insertIntoProjRepoAndSbotLinCompanyCollection";
					type: {
						kind: "OBJECT";
						name: "ProjRepoAndSbotLinCompanyInsertResponse";
						ofType: null;
					};
				};
				insertIntoProjRepoAndSbotLinProfileCollection: {
					name: "insertIntoProjRepoAndSbotLinProfileCollection";
					type: {
						kind: "OBJECT";
						name: "ProjRepoAndSbotLinProfileInsertResponse";
						ofType: null;
					};
				};
				insertIntoProjRepoCollection: {
					name: "insertIntoProjRepoCollection";
					type: {
						kind: "OBJECT";
						name: "ProjRepoInsertResponse";
						ofType: null;
					};
				};
				insertIntoSbotLinCompanyCollection: {
					name: "insertIntoSbotLinCompanyCollection";
					type: {
						kind: "OBJECT";
						name: "SbotLinCompanyInsertResponse";
						ofType: null;
					};
				};
				insertIntoSbotLinProfileCollection: {
					name: "insertIntoSbotLinProfileCollection";
					type: {
						kind: "OBJECT";
						name: "SbotLinProfileInsertResponse";
						ofType: null;
					};
				};
				insertIntoUserAdminCollection: {
					name: "insertIntoUserAdminCollection";
					type: {
						kind: "OBJECT";
						name: "UserAdminInsertResponse";
						ofType: null;
					};
				};
				insertIntoUserApiKeyCollection: {
					name: "insertIntoUserApiKeyCollection";
					type: {
						kind: "OBJECT";
						name: "UserApiKeyInsertResponse";
						ofType: null;
					};
				};
				insertIntoUserWhitelistCollection: {
					name: "insertIntoUserWhitelistCollection";
					type: {
						kind: "OBJECT";
						name: "UserWhitelistInsertResponse";
						ofType: null;
					};
				};
				test: {
					name: "test";
					type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
				updateAlgoHnCommentAndAlgoHnTagCollection: {
					name: "updateAlgoHnCommentAndAlgoHnTagCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnCommentAndAlgoHnTagUpdateResponse";
							ofType: null;
						};
					};
				};
				updateAlgoHnCommentCollection: {
					name: "updateAlgoHnCommentCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnCommentUpdateResponse";
							ofType: null;
						};
					};
				};
				updateAlgoHnQueryCollection: {
					name: "updateAlgoHnQueryCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnQueryUpdateResponse";
							ofType: null;
						};
					};
				};
				updateAlgoHnStoryAndAlgoHnTagCollection: {
					name: "updateAlgoHnStoryAndAlgoHnTagCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnStoryAndAlgoHnTagUpdateResponse";
							ofType: null;
						};
					};
				};
				updateAlgoHnStoryCollection: {
					name: "updateAlgoHnStoryCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnStoryUpdateResponse";
							ofType: null;
						};
					};
				};
				updateAlgoHnTagCollection: {
					name: "updateAlgoHnTagCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AlgoHnTagUpdateResponse";
							ofType: null;
						};
					};
				};
				updateGthbForkHistCollection: {
					name: "updateGthbForkHistCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbForkHistUpdateResponse";
							ofType: null;
						};
					};
				};
				updateGthbIssueHistCollection: {
					name: "updateGthbIssueHistCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbIssueHistUpdateResponse";
							ofType: null;
						};
					};
				};
				updateGthbLangCollection: {
					name: "updateGthbLangCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbLangUpdateResponse";
							ofType: null;
						};
					};
				};
				updateGthbOrgCollection: {
					name: "updateGthbOrgCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbOrgUpdateResponse";
							ofType: null;
						};
					};
				};
				updateGthbOwnerCollection: {
					name: "updateGthbOwnerCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbOwnerUpdateResponse";
							ofType: null;
						};
					};
				};
				updateGthbRepoAndGthbLangCollection: {
					name: "updateGthbRepoAndGthbLangCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoAndGthbLangUpdateResponse";
							ofType: null;
						};
					};
				};
				updateGthbRepoAndGthbRepoTopicCollection: {
					name: "updateGthbRepoAndGthbRepoTopicCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoAndGthbRepoTopicUpdateResponse";
							ofType: null;
						};
					};
				};
				updateGthbRepoCollection: {
					name: "updateGthbRepoCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoUpdateResponse";
							ofType: null;
						};
					};
				};
				updateGthbRepoContrCollection: {
					name: "updateGthbRepoContrCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoContrUpdateResponse";
							ofType: null;
						};
					};
				};
				updateGthbRepoTopicCollection: {
					name: "updateGthbRepoTopicCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbRepoTopicUpdateResponse";
							ofType: null;
						};
					};
				};
				updateGthbStarHistCollection: {
					name: "updateGthbStarHistCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbStarHistUpdateResponse";
							ofType: null;
						};
					};
				};
				updateGthbTrendingCollection: {
					name: "updateGthbTrendingCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbTrendingUpdateResponse";
							ofType: null;
						};
					};
				};
				updateGthbUserCollection: {
					name: "updateGthbUserCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "GthbUserUpdateResponse";
							ofType: null;
						};
					};
				};
				updateInstance1Collection: {
					name: "updateInstance1Collection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "Instance1UpdateResponse";
							ofType: null;
						};
					};
				};
				updateInstance2Collection: {
					name: "updateInstance2Collection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "Instance2UpdateResponse";
							ofType: null;
						};
					};
				};
				updateProjBookmarkCollection: {
					name: "updateProjBookmarkCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjBookmarkUpdateResponse";
							ofType: null;
						};
					};
				};
				updateProjCatAndProjBookmarkCollection: {
					name: "updateProjCatAndProjBookmarkCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjCatAndProjBookmarkUpdateResponse";
							ofType: null;
						};
					};
				};
				updateProjCatCollection: {
					name: "updateProjCatCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjCatUpdateResponse";
							ofType: null;
						};
					};
				};
				updateProjClassifierCollection: {
					name: "updateProjClassifierCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjClassifierUpdateResponse";
							ofType: null;
						};
					};
				};
				updateProjRepoAndAlgoHnQueryCollection: {
					name: "updateProjRepoAndAlgoHnQueryCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndAlgoHnQueryUpdateResponse";
							ofType: null;
						};
					};
				};
				updateProjRepoAndProjClassifierCollection: {
					name: "updateProjRepoAndProjClassifierCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndProjClassifierUpdateResponse";
							ofType: null;
						};
					};
				};
				updateProjRepoAndSbotLinCompanyCollection: {
					name: "updateProjRepoAndSbotLinCompanyCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndSbotLinCompanyUpdateResponse";
							ofType: null;
						};
					};
				};
				updateProjRepoAndSbotLinProfileCollection: {
					name: "updateProjRepoAndSbotLinProfileCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndSbotLinProfileUpdateResponse";
							ofType: null;
						};
					};
				};
				updateProjRepoCollection: {
					name: "updateProjRepoCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoUpdateResponse";
							ofType: null;
						};
					};
				};
				updateSbotLinCompanyCollection: {
					name: "updateSbotLinCompanyCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "SbotLinCompanyUpdateResponse";
							ofType: null;
						};
					};
				};
				updateSbotLinProfileCollection: {
					name: "updateSbotLinProfileCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "SbotLinProfileUpdateResponse";
							ofType: null;
						};
					};
				};
				updateUserAdminCollection: {
					name: "updateUserAdminCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "UserAdminUpdateResponse";
							ofType: null;
						};
					};
				};
				updateUserApiKeyCollection: {
					name: "updateUserApiKeyCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "UserApiKeyUpdateResponse";
							ofType: null;
						};
					};
				};
				updateUserWhitelistCollection: {
					name: "updateUserWhitelistCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "UserWhitelistUpdateResponse";
							ofType: null;
						};
					};
				};
			};
		};
		Node: {
			kind: "INTERFACE";
			name: "Node";
			fields: {
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
			};
			possibleTypes:
				| "AlgoHnComment"
				| "AlgoHnCommentAndAlgoHnTag"
				| "AlgoHnQuery"
				| "AlgoHnStory"
				| "AlgoHnStoryAndAlgoHnTag"
				| "AlgoHnTag"
				| "GthbForkHist"
				| "GthbIssueHist"
				| "GthbLang"
				| "GthbOrg"
				| "GthbOwner"
				| "GthbRepo"
				| "GthbRepoAndGthbLang"
				| "GthbRepoAndGthbRepoTopic"
				| "GthbRepoContr"
				| "GthbRepoTopic"
				| "GthbStarHist"
				| "GthbTrending"
				| "GthbUser"
				| "Instance1"
				| "Instance2"
				| "ProjBookmark"
				| "ProjCat"
				| "ProjCatAndProjBookmark"
				| "ProjClassifier"
				| "ProjRepo"
				| "ProjRepoAndAlgoHnQuery"
				| "ProjRepoAndProjClassifier"
				| "ProjRepoAndSbotLinCompany"
				| "ProjRepoAndSbotLinProfile"
				| "SbotLinCompany"
				| "SbotLinProfile"
				| "UserAdmin"
				| "UserApiKey"
				| "UserWhitelist";
		};
		Opaque: unknown;
		OpaqueFilter: {
			kind: "INPUT_OBJECT";
			name: "OpaqueFilter";
			inputFields: [
				{
					name: "eq";
					type: { kind: "SCALAR"; name: "Opaque"; ofType: null };
					defaultValue: null;
				},
				{
					name: "is";
					type: { kind: "ENUM"; name: "FilterIs"; ofType: null };
					defaultValue: null;
				},
			];
		};
		OrderByDirection: {
			kind: "ENUM";
			name: "OrderByDirection";
			type:
				| "AscNullsFirst"
				| "AscNullsLast"
				| "DescNullsFirst"
				| "DescNullsLast";
		};
		PageInfo: {
			kind: "OBJECT";
			name: "PageInfo";
			fields: {
				endCursor: {
					name: "endCursor";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				hasNextPage: {
					name: "hasNextPage";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					};
				};
				hasPreviousPage: {
					name: "hasPreviousPage";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					};
				};
				startCursor: {
					name: "startCursor";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
		ProjBookmark: {
			kind: "OBJECT";
			name: "ProjBookmark";
			fields: {
				authUsersId: {
					name: "authUsersId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				isPublic: {
					name: "isPublic";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				projBookmarkId: {
					name: "projBookmarkId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				projCatAndProjBookmarkCollection: {
					name: "projCatAndProjBookmarkCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjCatAndProjBookmarkConnection";
							ofType: null;
						};
					};
				};
				projRepo: {
					name: "projRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "ProjRepo"; ofType: null };
					};
				};
				projRepoId: {
					name: "projRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
			};
		};
		ProjBookmarkConnection: {
			kind: "OBJECT";
			name: "ProjBookmarkConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjBookmarkEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		ProjBookmarkDeleteResponse: {
			kind: "OBJECT";
			name: "ProjBookmarkDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "ProjBookmark"; ofType: null };
							};
						};
					};
				};
			};
		};
		ProjBookmarkEdge: {
			kind: "OBJECT";
			name: "ProjBookmarkEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "ProjBookmark"; ofType: null };
					};
				};
			};
		};
		ProjBookmarkFilter: {
			kind: "INPUT_OBJECT";
			name: "ProjBookmarkFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjBookmarkFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "authUsersId";
					type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isPublic";
					type: { kind: "INPUT_OBJECT"; name: "BooleanFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "ProjBookmarkFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjBookmarkFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "projBookmarkId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjBookmarkInsertInput: {
			kind: "INPUT_OBJECT";
			name: "ProjBookmarkInsertInput";
			inputFields: [
				{
					name: "authUsersId";
					type: { kind: "SCALAR"; name: "UUID"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isPublic";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjBookmarkInsertResponse: {
			kind: "OBJECT";
			name: "ProjBookmarkInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "ProjBookmark"; ofType: null };
							};
						};
					};
				};
			};
		};
		ProjBookmarkOrderBy: {
			kind: "INPUT_OBJECT";
			name: "ProjBookmarkOrderBy";
			inputFields: [
				{
					name: "authUsersId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isPublic";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projBookmarkId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjBookmarkUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "ProjBookmarkUpdateInput";
			inputFields: [
				{
					name: "authUsersId";
					type: { kind: "SCALAR"; name: "UUID"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isPublic";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjBookmarkUpdateResponse: {
			kind: "OBJECT";
			name: "ProjBookmarkUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "ProjBookmark"; ofType: null };
							};
						};
					};
				};
			};
		};
		ProjCat: {
			kind: "OBJECT";
			name: "ProjCat";
			fields: {
				authUsersId: {
					name: "authUsersId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				isPublic: {
					name: "isPublic";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				note: {
					name: "note";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				projCatAndProjBookmarkCollection: {
					name: "projCatAndProjBookmarkCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjCatAndProjBookmarkConnection";
							ofType: null;
						};
					};
				};
				projCatId: {
					name: "projCatId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				title: {
					name: "title";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
			};
		};
		ProjCatAndProjBookmark: {
			kind: "OBJECT";
			name: "ProjCatAndProjBookmark";
			fields: {
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				isPinned: {
					name: "isPinned";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				projBookmark: {
					name: "projBookmark";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "ProjBookmark"; ofType: null };
					};
				};
				projBookmarkId: {
					name: "projBookmarkId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				projCat: {
					name: "projCat";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "ProjCat"; ofType: null };
					};
				};
				projCatId: {
					name: "projCatId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
			};
		};
		ProjCatAndProjBookmarkConnection: {
			kind: "OBJECT";
			name: "ProjCatAndProjBookmarkConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjCatAndProjBookmarkEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		ProjCatAndProjBookmarkDeleteResponse: {
			kind: "OBJECT";
			name: "ProjCatAndProjBookmarkDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjCatAndProjBookmark";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjCatAndProjBookmarkEdge: {
			kind: "OBJECT";
			name: "ProjCatAndProjBookmarkEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjCatAndProjBookmark";
							ofType: null;
						};
					};
				};
			};
		};
		ProjCatAndProjBookmarkFilter: {
			kind: "INPUT_OBJECT";
			name: "ProjCatAndProjBookmarkFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjCatAndProjBookmarkFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isPinned";
					type: { kind: "INPUT_OBJECT"; name: "BooleanFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "ProjCatAndProjBookmarkFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjCatAndProjBookmarkFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "projBookmarkId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projCatId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjCatAndProjBookmarkInsertInput: {
			kind: "INPUT_OBJECT";
			name: "ProjCatAndProjBookmarkInsertInput";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isPinned";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projBookmarkId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projCatId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjCatAndProjBookmarkInsertResponse: {
			kind: "OBJECT";
			name: "ProjCatAndProjBookmarkInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjCatAndProjBookmark";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjCatAndProjBookmarkOrderBy: {
			kind: "INPUT_OBJECT";
			name: "ProjCatAndProjBookmarkOrderBy";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isPinned";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projBookmarkId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projCatId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjCatAndProjBookmarkUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "ProjCatAndProjBookmarkUpdateInput";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isPinned";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projBookmarkId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projCatId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjCatAndProjBookmarkUpdateResponse: {
			kind: "OBJECT";
			name: "ProjCatAndProjBookmarkUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjCatAndProjBookmark";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjCatConnection: {
			kind: "OBJECT";
			name: "ProjCatConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "ProjCatEdge"; ofType: null };
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		ProjCatDeleteResponse: {
			kind: "OBJECT";
			name: "ProjCatDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "ProjCat"; ofType: null };
							};
						};
					};
				};
			};
		};
		ProjCatEdge: {
			kind: "OBJECT";
			name: "ProjCatEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "ProjCat"; ofType: null };
					};
				};
			};
		};
		ProjCatFilter: {
			kind: "INPUT_OBJECT";
			name: "ProjCatFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjCatFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "authUsersId";
					type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isPublic";
					type: { kind: "INPUT_OBJECT"; name: "BooleanFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: { kind: "INPUT_OBJECT"; name: "ProjCatFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "note";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjCatFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "projCatId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "title";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjCatInsertInput: {
			kind: "INPUT_OBJECT";
			name: "ProjCatInsertInput";
			inputFields: [
				{
					name: "authUsersId";
					type: { kind: "SCALAR"; name: "UUID"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isPublic";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					defaultValue: null;
				},
				{
					name: "note";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "title";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjCatInsertResponse: {
			kind: "OBJECT";
			name: "ProjCatInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "ProjCat"; ofType: null };
							};
						};
					};
				};
			};
		};
		ProjCatOrderBy: {
			kind: "INPUT_OBJECT";
			name: "ProjCatOrderBy";
			inputFields: [
				{
					name: "authUsersId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isPublic";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "note";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projCatId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "title";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjCatUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "ProjCatUpdateInput";
			inputFields: [
				{
					name: "authUsersId";
					type: { kind: "SCALAR"; name: "UUID"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "isPublic";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					defaultValue: null;
				},
				{
					name: "note";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "title";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjCatUpdateResponse: {
			kind: "OBJECT";
			name: "ProjCatUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "ProjCat"; ofType: null };
							};
						};
					};
				};
			};
		};
		ProjClassifier: {
			kind: "OBJECT";
			name: "ProjClassifier";
			fields: {
				classifier: {
					name: "classifier";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				projClassifierId: {
					name: "projClassifierId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				projRepoAndProjClassifierCollection: {
					name: "projRepoAndProjClassifierCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndProjClassifierConnection";
							ofType: null;
						};
					};
				};
			};
		};
		ProjClassifierConnection: {
			kind: "OBJECT";
			name: "ProjClassifierConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjClassifierEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		ProjClassifierDeleteResponse: {
			kind: "OBJECT";
			name: "ProjClassifierDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjClassifier";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjClassifierEdge: {
			kind: "OBJECT";
			name: "ProjClassifierEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "ProjClassifier"; ofType: null };
					};
				};
			};
		};
		ProjClassifierFilter: {
			kind: "INPUT_OBJECT";
			name: "ProjClassifierFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjClassifierFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "classifier";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "ProjClassifierFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjClassifierFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "projClassifierId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjClassifierInsertInput: {
			kind: "INPUT_OBJECT";
			name: "ProjClassifierInsertInput";
			inputFields: [
				{
					name: "classifier";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjClassifierInsertResponse: {
			kind: "OBJECT";
			name: "ProjClassifierInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjClassifier";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjClassifierOrderBy: {
			kind: "INPUT_OBJECT";
			name: "ProjClassifierOrderBy";
			inputFields: [
				{
					name: "classifier";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projClassifierId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjClassifierUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "ProjClassifierUpdateInput";
			inputFields: [
				{
					name: "classifier";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjClassifierUpdateResponse: {
			kind: "OBJECT";
			name: "ProjClassifierUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjClassifier";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjRepo: {
			kind: "OBJECT";
			name: "ProjRepo";
			fields: {
				algoHnEli5: {
					name: "algoHnEli5";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				gthbRepo: {
					name: "gthbRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "GthbRepo"; ofType: null };
					};
				};
				gthbRepoId: {
					name: "gthbRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				note: {
					name: "note";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				projBookmarkCollection: {
					name: "projBookmarkCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjBookmarkConnection";
							ofType: null;
						};
					};
				};
				projRepoAndAlgoHnQueryCollection: {
					name: "projRepoAndAlgoHnQueryCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndAlgoHnQueryConnection";
							ofType: null;
						};
					};
				};
				projRepoAndProjClassifierCollection: {
					name: "projRepoAndProjClassifierCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndProjClassifierConnection";
							ofType: null;
						};
					};
				};
				projRepoAndSbotLinCompanyCollection: {
					name: "projRepoAndSbotLinCompanyCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndSbotLinCompanyConnection";
							ofType: null;
						};
					};
				};
				projRepoAndSbotLinProfileCollection: {
					name: "projRepoAndSbotLinProfileCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndSbotLinProfileConnection";
							ofType: null;
						};
					};
				};
				projRepoId: {
					name: "projRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				repoEli5: {
					name: "repoEli5";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
		ProjRepoAndAlgoHnQuery: {
			kind: "OBJECT";
			name: "ProjRepoAndAlgoHnQuery";
			fields: {
				algoHnQuery: {
					name: "algoHnQuery";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "AlgoHnQuery"; ofType: null };
					};
				};
				algoHnQueryId: {
					name: "algoHnQueryId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				projRepo: {
					name: "projRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "ProjRepo"; ofType: null };
					};
				};
				projRepoId: {
					name: "projRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
			};
		};
		ProjRepoAndAlgoHnQueryConnection: {
			kind: "OBJECT";
			name: "ProjRepoAndAlgoHnQueryConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndAlgoHnQueryEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		ProjRepoAndAlgoHnQueryDeleteResponse: {
			kind: "OBJECT";
			name: "ProjRepoAndAlgoHnQueryDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndAlgoHnQuery";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjRepoAndAlgoHnQueryEdge: {
			kind: "OBJECT";
			name: "ProjRepoAndAlgoHnQueryEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndAlgoHnQuery";
							ofType: null;
						};
					};
				};
			};
		};
		ProjRepoAndAlgoHnQueryFilter: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndAlgoHnQueryFilter";
			inputFields: [
				{
					name: "algoHnQueryId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjRepoAndAlgoHnQueryFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "ProjRepoAndAlgoHnQueryFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjRepoAndAlgoHnQueryFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndAlgoHnQueryInsertInput: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndAlgoHnQueryInsertInput";
			inputFields: [
				{
					name: "algoHnQueryId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndAlgoHnQueryInsertResponse: {
			kind: "OBJECT";
			name: "ProjRepoAndAlgoHnQueryInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndAlgoHnQuery";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjRepoAndAlgoHnQueryOrderBy: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndAlgoHnQueryOrderBy";
			inputFields: [
				{
					name: "algoHnQueryId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndAlgoHnQueryUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndAlgoHnQueryUpdateInput";
			inputFields: [
				{
					name: "algoHnQueryId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndAlgoHnQueryUpdateResponse: {
			kind: "OBJECT";
			name: "ProjRepoAndAlgoHnQueryUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndAlgoHnQuery";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjRepoAndProjClassifier: {
			kind: "OBJECT";
			name: "ProjRepoAndProjClassifier";
			fields: {
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				projClassifier: {
					name: "projClassifier";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "ProjClassifier"; ofType: null };
					};
				};
				projClassifierId: {
					name: "projClassifierId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				projRepo: {
					name: "projRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "ProjRepo"; ofType: null };
					};
				};
				projRepoId: {
					name: "projRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
			};
		};
		ProjRepoAndProjClassifierConnection: {
			kind: "OBJECT";
			name: "ProjRepoAndProjClassifierConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndProjClassifierEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		ProjRepoAndProjClassifierDeleteResponse: {
			kind: "OBJECT";
			name: "ProjRepoAndProjClassifierDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndProjClassifier";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjRepoAndProjClassifierEdge: {
			kind: "OBJECT";
			name: "ProjRepoAndProjClassifierEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndProjClassifier";
							ofType: null;
						};
					};
				};
			};
		};
		ProjRepoAndProjClassifierFilter: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndProjClassifierFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjRepoAndProjClassifierFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "ProjRepoAndProjClassifierFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjRepoAndProjClassifierFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "projClassifierId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndProjClassifierInsertInput: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndProjClassifierInsertInput";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projClassifierId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndProjClassifierInsertResponse: {
			kind: "OBJECT";
			name: "ProjRepoAndProjClassifierInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndProjClassifier";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjRepoAndProjClassifierOrderBy: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndProjClassifierOrderBy";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projClassifierId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndProjClassifierUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndProjClassifierUpdateInput";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projClassifierId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndProjClassifierUpdateResponse: {
			kind: "OBJECT";
			name: "ProjRepoAndProjClassifierUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndProjClassifier";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjRepoAndSbotLinCompany: {
			kind: "OBJECT";
			name: "ProjRepoAndSbotLinCompany";
			fields: {
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				projRepo: {
					name: "projRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "ProjRepo"; ofType: null };
					};
				};
				projRepoId: {
					name: "projRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				sbotLinCompany: {
					name: "sbotLinCompany";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "SbotLinCompany"; ofType: null };
					};
				};
				sbotLinCompanyId: {
					name: "sbotLinCompanyId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
			};
		};
		ProjRepoAndSbotLinCompanyConnection: {
			kind: "OBJECT";
			name: "ProjRepoAndSbotLinCompanyConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndSbotLinCompanyEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		ProjRepoAndSbotLinCompanyDeleteResponse: {
			kind: "OBJECT";
			name: "ProjRepoAndSbotLinCompanyDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndSbotLinCompany";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjRepoAndSbotLinCompanyEdge: {
			kind: "OBJECT";
			name: "ProjRepoAndSbotLinCompanyEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndSbotLinCompany";
							ofType: null;
						};
					};
				};
			};
		};
		ProjRepoAndSbotLinCompanyFilter: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndSbotLinCompanyFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjRepoAndSbotLinCompanyFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "ProjRepoAndSbotLinCompanyFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjRepoAndSbotLinCompanyFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndSbotLinCompanyInsertInput: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndSbotLinCompanyInsertInput";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndSbotLinCompanyInsertResponse: {
			kind: "OBJECT";
			name: "ProjRepoAndSbotLinCompanyInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndSbotLinCompany";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjRepoAndSbotLinCompanyOrderBy: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndSbotLinCompanyOrderBy";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndSbotLinCompanyUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndSbotLinCompanyUpdateInput";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndSbotLinCompanyUpdateResponse: {
			kind: "OBJECT";
			name: "ProjRepoAndSbotLinCompanyUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndSbotLinCompany";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjRepoAndSbotLinProfile: {
			kind: "OBJECT";
			name: "ProjRepoAndSbotLinProfile";
			fields: {
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				projRepo: {
					name: "projRepo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "ProjRepo"; ofType: null };
					};
				};
				projRepoId: {
					name: "projRepoId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				sbotLinProfile: {
					name: "sbotLinProfile";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "SbotLinProfile"; ofType: null };
					};
				};
				sbotLinProfileId: {
					name: "sbotLinProfileId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
			};
		};
		ProjRepoAndSbotLinProfileConnection: {
			kind: "OBJECT";
			name: "ProjRepoAndSbotLinProfileConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndSbotLinProfileEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		ProjRepoAndSbotLinProfileDeleteResponse: {
			kind: "OBJECT";
			name: "ProjRepoAndSbotLinProfileDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndSbotLinProfile";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjRepoAndSbotLinProfileEdge: {
			kind: "OBJECT";
			name: "ProjRepoAndSbotLinProfileEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndSbotLinProfile";
							ofType: null;
						};
					};
				};
			};
		};
		ProjRepoAndSbotLinProfileFilter: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndSbotLinProfileFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjRepoAndSbotLinProfileFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "ProjRepoAndSbotLinProfileFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjRepoAndSbotLinProfileFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndSbotLinProfileInsertInput: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndSbotLinProfileInsertInput";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndSbotLinProfileInsertResponse: {
			kind: "OBJECT";
			name: "ProjRepoAndSbotLinProfileInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndSbotLinProfile";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjRepoAndSbotLinProfileOrderBy: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndSbotLinProfileOrderBy";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndSbotLinProfileUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoAndSbotLinProfileUpdateInput";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoAndSbotLinProfileUpdateResponse: {
			kind: "OBJECT";
			name: "ProjRepoAndSbotLinProfileUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "ProjRepoAndSbotLinProfile";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		ProjRepoConnection: {
			kind: "OBJECT";
			name: "ProjRepoConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "ProjRepoEdge"; ofType: null };
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		ProjRepoDeleteResponse: {
			kind: "OBJECT";
			name: "ProjRepoDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "ProjRepo"; ofType: null };
							};
						};
					};
				};
			};
		};
		ProjRepoEdge: {
			kind: "OBJECT";
			name: "ProjRepoEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "ProjRepo"; ofType: null };
					};
				};
			};
		};
		ProjRepoFilter: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoFilter";
			inputFields: [
				{
					name: "algoHnEli5";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjRepoFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: { kind: "INPUT_OBJECT"; name: "ProjRepoFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "note";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "ProjRepoFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "repoEli5";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoInsertInput: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoInsertInput";
			inputFields: [
				{
					name: "algoHnEli5";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "note";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "repoEli5";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoInsertResponse: {
			kind: "OBJECT";
			name: "ProjRepoInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "ProjRepo"; ofType: null };
							};
						};
					};
				};
			};
		};
		ProjRepoOrderBy: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoOrderBy";
			inputFields: [
				{
					name: "algoHnEli5";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "note";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "projRepoId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "repoEli5";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "ProjRepoUpdateInput";
			inputFields: [
				{
					name: "algoHnEli5";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gthbRepoId";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "note";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "repoEli5";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		ProjRepoUpdateResponse: {
			kind: "OBJECT";
			name: "ProjRepoUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "ProjRepo"; ofType: null };
							};
						};
					};
				};
			};
		};
		Query: {
			kind: "OBJECT";
			name: "Query";
			fields: {
				algoHnCommentAndAlgoHnTagCollection: {
					name: "algoHnCommentAndAlgoHnTagCollection";
					type: {
						kind: "OBJECT";
						name: "AlgoHnCommentAndAlgoHnTagConnection";
						ofType: null;
					};
				};
				algoHnCommentCollection: {
					name: "algoHnCommentCollection";
					type: {
						kind: "OBJECT";
						name: "AlgoHnCommentConnection";
						ofType: null;
					};
				};
				algoHnQueryCollection: {
					name: "algoHnQueryCollection";
					type: { kind: "OBJECT"; name: "AlgoHnQueryConnection"; ofType: null };
				};
				algoHnStoryAndAlgoHnTagCollection: {
					name: "algoHnStoryAndAlgoHnTagCollection";
					type: {
						kind: "OBJECT";
						name: "AlgoHnStoryAndAlgoHnTagConnection";
						ofType: null;
					};
				};
				algoHnStoryCollection: {
					name: "algoHnStoryCollection";
					type: { kind: "OBJECT"; name: "AlgoHnStoryConnection"; ofType: null };
				};
				algoHnTagCollection: {
					name: "algoHnTagCollection";
					type: { kind: "OBJECT"; name: "AlgoHnTagConnection"; ofType: null };
				};
				fIsGthbRepoBookmarked: {
					name: "fIsGthbRepoBookmarked";
					type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
				fListBookmarkedGthbRepo: {
					name: "fListBookmarkedGthbRepo";
					type: { kind: "OBJECT"; name: "GthbRepoConnection"; ofType: null };
				};
				fListTrendingGthbRepo: {
					name: "fListTrendingGthbRepo";
					type: { kind: "OBJECT"; name: "GthbRepoConnection"; ofType: null };
				};
				gthbForkHistCollection: {
					name: "gthbForkHistCollection";
					type: {
						kind: "OBJECT";
						name: "GthbForkHistConnection";
						ofType: null;
					};
				};
				gthbIssueHistCollection: {
					name: "gthbIssueHistCollection";
					type: {
						kind: "OBJECT";
						name: "GthbIssueHistConnection";
						ofType: null;
					};
				};
				gthbLangCollection: {
					name: "gthbLangCollection";
					type: { kind: "OBJECT"; name: "GthbLangConnection"; ofType: null };
				};
				gthbOrgCollection: {
					name: "gthbOrgCollection";
					type: { kind: "OBJECT"; name: "GthbOrgConnection"; ofType: null };
				};
				gthbOwnerCollection: {
					name: "gthbOwnerCollection";
					type: { kind: "OBJECT"; name: "GthbOwnerConnection"; ofType: null };
				};
				gthbRepoAndGthbLangCollection: {
					name: "gthbRepoAndGthbLangCollection";
					type: {
						kind: "OBJECT";
						name: "GthbRepoAndGthbLangConnection";
						ofType: null;
					};
				};
				gthbRepoAndGthbRepoTopicCollection: {
					name: "gthbRepoAndGthbRepoTopicCollection";
					type: {
						kind: "OBJECT";
						name: "GthbRepoAndGthbRepoTopicConnection";
						ofType: null;
					};
				};
				gthbRepoCollection: {
					name: "gthbRepoCollection";
					type: { kind: "OBJECT"; name: "GthbRepoConnection"; ofType: null };
				};
				gthbRepoContrCollection: {
					name: "gthbRepoContrCollection";
					type: {
						kind: "OBJECT";
						name: "GthbRepoContrConnection";
						ofType: null;
					};
				};
				gthbRepoTopicCollection: {
					name: "gthbRepoTopicCollection";
					type: {
						kind: "OBJECT";
						name: "GthbRepoTopicConnection";
						ofType: null;
					};
				};
				gthbStarHistCollection: {
					name: "gthbStarHistCollection";
					type: {
						kind: "OBJECT";
						name: "GthbStarHistConnection";
						ofType: null;
					};
				};
				gthbTrendingCollection: {
					name: "gthbTrendingCollection";
					type: {
						kind: "OBJECT";
						name: "GthbTrendingConnection";
						ofType: null;
					};
				};
				gthbUserCollection: {
					name: "gthbUserCollection";
					type: { kind: "OBJECT"; name: "GthbUserConnection"; ofType: null };
				};
				instance1Collection: {
					name: "instance1Collection";
					type: { kind: "OBJECT"; name: "Instance1Connection"; ofType: null };
				};
				instance2Collection: {
					name: "instance2Collection";
					type: { kind: "OBJECT"; name: "Instance2Connection"; ofType: null };
				};
				node: {
					name: "node";
					type: { kind: "INTERFACE"; name: "Node"; ofType: null };
				};
				projBookmarkCollection: {
					name: "projBookmarkCollection";
					type: {
						kind: "OBJECT";
						name: "ProjBookmarkConnection";
						ofType: null;
					};
				};
				projCatAndProjBookmarkCollection: {
					name: "projCatAndProjBookmarkCollection";
					type: {
						kind: "OBJECT";
						name: "ProjCatAndProjBookmarkConnection";
						ofType: null;
					};
				};
				projCatCollection: {
					name: "projCatCollection";
					type: { kind: "OBJECT"; name: "ProjCatConnection"; ofType: null };
				};
				projClassifierCollection: {
					name: "projClassifierCollection";
					type: {
						kind: "OBJECT";
						name: "ProjClassifierConnection";
						ofType: null;
					};
				};
				projRepoAndAlgoHnQueryCollection: {
					name: "projRepoAndAlgoHnQueryCollection";
					type: {
						kind: "OBJECT";
						name: "ProjRepoAndAlgoHnQueryConnection";
						ofType: null;
					};
				};
				projRepoAndProjClassifierCollection: {
					name: "projRepoAndProjClassifierCollection";
					type: {
						kind: "OBJECT";
						name: "ProjRepoAndProjClassifierConnection";
						ofType: null;
					};
				};
				projRepoAndSbotLinCompanyCollection: {
					name: "projRepoAndSbotLinCompanyCollection";
					type: {
						kind: "OBJECT";
						name: "ProjRepoAndSbotLinCompanyConnection";
						ofType: null;
					};
				};
				projRepoAndSbotLinProfileCollection: {
					name: "projRepoAndSbotLinProfileCollection";
					type: {
						kind: "OBJECT";
						name: "ProjRepoAndSbotLinProfileConnection";
						ofType: null;
					};
				};
				projRepoCollection: {
					name: "projRepoCollection";
					type: { kind: "OBJECT"; name: "ProjRepoConnection"; ofType: null };
				};
				sbotLinCompanyCollection: {
					name: "sbotLinCompanyCollection";
					type: {
						kind: "OBJECT";
						name: "SbotLinCompanyConnection";
						ofType: null;
					};
				};
				sbotLinProfileCollection: {
					name: "sbotLinProfileCollection";
					type: {
						kind: "OBJECT";
						name: "SbotLinProfileConnection";
						ofType: null;
					};
				};
				userAdminCollection: {
					name: "userAdminCollection";
					type: { kind: "OBJECT"; name: "UserAdminConnection"; ofType: null };
				};
				userApiKeyCollection: {
					name: "userApiKeyCollection";
					type: { kind: "OBJECT"; name: "UserApiKeyConnection"; ofType: null };
				};
				userWhitelistCollection: {
					name: "userWhitelistCollection";
					type: {
						kind: "OBJECT";
						name: "UserWhitelistConnection";
						ofType: null;
					};
				};
			};
		};
		SbotLinCompany: {
			kind: "OBJECT";
			name: "SbotLinCompany";
			fields: {
				about: {
					name: "about";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				employeesAmountInLinkedin: {
					name: "employeesAmountInLinkedin";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				followers: {
					name: "followers";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				headquarters: {
					name: "headquarters";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				logo: {
					name: "logo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				projRepoAndSbotLinCompanyCollection: {
					name: "projRepoAndSbotLinCompanyCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndSbotLinCompanyConnection";
							ofType: null;
						};
					};
				};
				sbotLinCompanyId: {
					name: "sbotLinCompanyId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				sbotLinCompanyImage: {
					name: "sbotLinCompanyImage";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				sbotLinCompanyName: {
					name: "sbotLinCompanyName";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				sbotLinCompanyType: {
					name: "sbotLinCompanyType";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				sbotLinCompanyUrl: {
					name: "sbotLinCompanyUrl";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				sphere: {
					name: "sphere";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				website: {
					name: "website";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
		SbotLinCompanyConnection: {
			kind: "OBJECT";
			name: "SbotLinCompanyConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "SbotLinCompanyEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		SbotLinCompanyDeleteResponse: {
			kind: "OBJECT";
			name: "SbotLinCompanyDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "SbotLinCompany";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		SbotLinCompanyEdge: {
			kind: "OBJECT";
			name: "SbotLinCompanyEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "SbotLinCompany"; ofType: null };
					};
				};
			};
		};
		SbotLinCompanyFilter: {
			kind: "INPUT_OBJECT";
			name: "SbotLinCompanyFilter";
			inputFields: [
				{
					name: "about";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "SbotLinCompanyFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "employeesAmountInLinkedin";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "followers";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "headquarters";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "logo";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "SbotLinCompanyFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "SbotLinCompanyFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyImage";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyName";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyType";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyUrl";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sphere";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "website";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		SbotLinCompanyInsertInput: {
			kind: "INPUT_OBJECT";
			name: "SbotLinCompanyInsertInput";
			inputFields: [
				{
					name: "about";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "employeesAmountInLinkedin";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "followers";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "headquarters";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "logo";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyImage";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyType";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sphere";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "website";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		SbotLinCompanyInsertResponse: {
			kind: "OBJECT";
			name: "SbotLinCompanyInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "SbotLinCompany";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		SbotLinCompanyOrderBy: {
			kind: "INPUT_OBJECT";
			name: "SbotLinCompanyOrderBy";
			inputFields: [
				{
					name: "about";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "employeesAmountInLinkedin";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "followers";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "headquarters";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "logo";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyImage";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyName";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyType";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyUrl";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sphere";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "website";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		SbotLinCompanyUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "SbotLinCompanyUpdateInput";
			inputFields: [
				{
					name: "about";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "employeesAmountInLinkedin";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "followers";
					type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					defaultValue: null;
				},
				{
					name: "headquarters";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "logo";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyImage";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyType";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinCompanyUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sphere";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "website";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		SbotLinCompanyUpdateResponse: {
			kind: "OBJECT";
			name: "SbotLinCompanyUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "SbotLinCompany";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		SbotLinProfile: {
			kind: "OBJECT";
			name: "SbotLinProfile";
			fields: {
				about: {
					name: "about";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				avatar: {
					name: "avatar";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				city: {
					name: "city";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				currentCompanyLink: {
					name: "currentCompanyLink";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				currentCompanyName: {
					name: "currentCompanyName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				educationDetails: {
					name: "educationDetails";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				followers: {
					name: "followers";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				position: {
					name: "position";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				projRepoAndSbotLinProfileCollection: {
					name: "projRepoAndSbotLinProfileCollection";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "ProjRepoAndSbotLinProfileConnection";
							ofType: null;
						};
					};
				};
				sbotLinProfileFollowing: {
					name: "sbotLinProfileFollowing";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				sbotLinProfileId: {
					name: "sbotLinProfileId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				sbotLinProfileName: {
					name: "sbotLinProfileName";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				sbotLinProfileUrl: {
					name: "sbotLinProfileUrl";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
			};
		};
		SbotLinProfileConnection: {
			kind: "OBJECT";
			name: "SbotLinProfileConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "SbotLinProfileEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		SbotLinProfileDeleteResponse: {
			kind: "OBJECT";
			name: "SbotLinProfileDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "SbotLinProfile";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		SbotLinProfileEdge: {
			kind: "OBJECT";
			name: "SbotLinProfileEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "SbotLinProfile"; ofType: null };
					};
				};
			};
		};
		SbotLinProfileFilter: {
			kind: "INPUT_OBJECT";
			name: "SbotLinProfileFilter";
			inputFields: [
				{
					name: "about";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "SbotLinProfileFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "avatar";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "city";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "currentCompanyLink";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "currentCompanyName";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "educationDetails";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "followers";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "SbotLinProfileFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "SbotLinProfileFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "position";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileFollowing";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileName";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileUrl";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		SbotLinProfileInsertInput: {
			kind: "INPUT_OBJECT";
			name: "SbotLinProfileInsertInput";
			inputFields: [
				{
					name: "about";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "avatar";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "city";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "currentCompanyLink";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "currentCompanyName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "educationDetails";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "followers";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "position";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileFollowing";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		SbotLinProfileInsertResponse: {
			kind: "OBJECT";
			name: "SbotLinProfileInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "SbotLinProfile";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		SbotLinProfileOrderBy: {
			kind: "INPUT_OBJECT";
			name: "SbotLinProfileOrderBy";
			inputFields: [
				{
					name: "about";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "avatar";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "city";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "currentCompanyLink";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "currentCompanyName";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "educationDetails";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "followers";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "position";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileFollowing";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileName";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileUrl";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		SbotLinProfileUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "SbotLinProfileUpdateInput";
			inputFields: [
				{
					name: "about";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "avatar";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "city";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "currentCompanyLink";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "currentCompanyName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "educationDetails";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "followers";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "position";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileFollowing";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileName";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "sbotLinProfileUrl";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		SbotLinProfileUpdateResponse: {
			kind: "OBJECT";
			name: "SbotLinProfileUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "SbotLinProfile";
									ofType: null;
								};
							};
						};
					};
				};
			};
		};
		String: unknown;
		StringFilter: {
			kind: "INPUT_OBJECT";
			name: "StringFilter";
			inputFields: [
				{
					name: "eq";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gt";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gte";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "ilike";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "in";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "SCALAR"; name: "String"; ofType: null };
						};
					};
					defaultValue: null;
				},
				{
					name: "iregex";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "is";
					type: { kind: "ENUM"; name: "FilterIs"; ofType: null };
					defaultValue: null;
				},
				{
					name: "like";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lt";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lte";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "neq";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "regex";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "startsWith";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		Time: unknown;
		TimeFilter: {
			kind: "INPUT_OBJECT";
			name: "TimeFilter";
			inputFields: [
				{
					name: "eq";
					type: { kind: "SCALAR"; name: "Time"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gt";
					type: { kind: "SCALAR"; name: "Time"; ofType: null };
					defaultValue: null;
				},
				{
					name: "gte";
					type: { kind: "SCALAR"; name: "Time"; ofType: null };
					defaultValue: null;
				},
				{
					name: "in";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "SCALAR"; name: "Time"; ofType: null };
						};
					};
					defaultValue: null;
				},
				{
					name: "is";
					type: { kind: "ENUM"; name: "FilterIs"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lt";
					type: { kind: "SCALAR"; name: "Time"; ofType: null };
					defaultValue: null;
				},
				{
					name: "lte";
					type: { kind: "SCALAR"; name: "Time"; ofType: null };
					defaultValue: null;
				},
				{
					name: "neq";
					type: { kind: "SCALAR"; name: "Time"; ofType: null };
					defaultValue: null;
				},
			];
		};
		UUID: unknown;
		UUIDFilter: {
			kind: "INPUT_OBJECT";
			name: "UUIDFilter";
			inputFields: [
				{
					name: "eq";
					type: { kind: "SCALAR"; name: "UUID"; ofType: null };
					defaultValue: null;
				},
				{
					name: "in";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
						};
					};
					defaultValue: null;
				},
				{
					name: "is";
					type: { kind: "ENUM"; name: "FilterIs"; ofType: null };
					defaultValue: null;
				},
				{
					name: "neq";
					type: { kind: "SCALAR"; name: "UUID"; ofType: null };
					defaultValue: null;
				},
			];
		};
		UserAdmin: {
			kind: "OBJECT";
			name: "UserAdmin";
			fields: {
				authUsersId: {
					name: "authUsersId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
			};
		};
		UserAdminConnection: {
			kind: "OBJECT";
			name: "UserAdminConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "UserAdminEdge"; ofType: null };
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		UserAdminDeleteResponse: {
			kind: "OBJECT";
			name: "UserAdminDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "UserAdmin"; ofType: null };
							};
						};
					};
				};
			};
		};
		UserAdminEdge: {
			kind: "OBJECT";
			name: "UserAdminEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "UserAdmin"; ofType: null };
					};
				};
			};
		};
		UserAdminFilter: {
			kind: "INPUT_OBJECT";
			name: "UserAdminFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "UserAdminFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "authUsersId";
					type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: { kind: "INPUT_OBJECT"; name: "UserAdminFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "UserAdminFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
			];
		};
		UserAdminInsertInput: {
			kind: "INPUT_OBJECT";
			name: "UserAdminInsertInput";
			inputFields: [
				{
					name: "authUsersId";
					type: { kind: "SCALAR"; name: "UUID"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		UserAdminInsertResponse: {
			kind: "OBJECT";
			name: "UserAdminInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "UserAdmin"; ofType: null };
							};
						};
					};
				};
			};
		};
		UserAdminOrderBy: {
			kind: "INPUT_OBJECT";
			name: "UserAdminOrderBy";
			inputFields: [
				{
					name: "authUsersId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		UserAdminUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "UserAdminUpdateInput";
			inputFields: [
				{
					name: "authUsersId";
					type: { kind: "SCALAR"; name: "UUID"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
			];
		};
		UserAdminUpdateResponse: {
			kind: "OBJECT";
			name: "UserAdminUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "UserAdmin"; ofType: null };
							};
						};
					};
				};
			};
		};
		UserApiKey: {
			kind: "OBJECT";
			name: "UserApiKey";
			fields: {
				authUsersId: {
					name: "authUsersId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
					};
				};
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				userApiKey: {
					name: "userApiKey";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
					};
				};
				userApiKeyId: {
					name: "userApiKeyId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
			};
		};
		UserApiKeyConnection: {
			kind: "OBJECT";
			name: "UserApiKeyConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "UserApiKeyEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		UserApiKeyDeleteResponse: {
			kind: "OBJECT";
			name: "UserApiKeyDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "UserApiKey"; ofType: null };
							};
						};
					};
				};
			};
		};
		UserApiKeyEdge: {
			kind: "OBJECT";
			name: "UserApiKeyEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "UserApiKey"; ofType: null };
					};
				};
			};
		};
		UserApiKeyFilter: {
			kind: "INPUT_OBJECT";
			name: "UserApiKeyFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "UserApiKeyFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "authUsersId";
					type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "UserApiKeyFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "UserApiKeyFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "userApiKey";
					type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "userApiKeyId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		UserApiKeyInsertInput: {
			kind: "INPUT_OBJECT";
			name: "UserApiKeyInsertInput";
			inputFields: [
				{
					name: "authUsersId";
					type: { kind: "SCALAR"; name: "UUID"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "userApiKey";
					type: { kind: "SCALAR"; name: "UUID"; ofType: null };
					defaultValue: null;
				},
			];
		};
		UserApiKeyInsertResponse: {
			kind: "OBJECT";
			name: "UserApiKeyInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "UserApiKey"; ofType: null };
							};
						};
					};
				};
			};
		};
		UserApiKeyOrderBy: {
			kind: "INPUT_OBJECT";
			name: "UserApiKeyOrderBy";
			inputFields: [
				{
					name: "authUsersId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "userApiKey";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "userApiKeyId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		UserApiKeyUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "UserApiKeyUpdateInput";
			inputFields: [
				{
					name: "authUsersId";
					type: { kind: "SCALAR"; name: "UUID"; ofType: null };
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "userApiKey";
					type: { kind: "SCALAR"; name: "UUID"; ofType: null };
					defaultValue: null;
				},
			];
		};
		UserApiKeyUpdateResponse: {
			kind: "OBJECT";
			name: "UserApiKeyUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "UserApiKey"; ofType: null };
							};
						};
					};
				};
			};
		};
		UserWhitelist: {
			kind: "OBJECT";
			name: "UserWhitelist";
			fields: {
				internalCreatedAt: {
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				};
				kind: {
					name: "kind";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				nodeId: {
					name: "nodeId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
					};
				};
				userWhitelistId: {
					name: "userWhitelistId";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
					};
				};
				userWhitelistValue: {
					name: "userWhitelistValue";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
		UserWhitelistConnection: {
			kind: "OBJECT";
			name: "UserWhitelistConnection";
			fields: {
				edges: {
					name: "edges";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: {
									kind: "OBJECT";
									name: "UserWhitelistEdge";
									ofType: null;
								};
							};
						};
					};
				};
				pageInfo: {
					name: "pageInfo";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
					};
				};
			};
		};
		UserWhitelistDeleteResponse: {
			kind: "OBJECT";
			name: "UserWhitelistDeleteResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "UserWhitelist"; ofType: null };
							};
						};
					};
				};
			};
		};
		UserWhitelistEdge: {
			kind: "OBJECT";
			name: "UserWhitelistEdge";
			fields: {
				cursor: {
					name: "cursor";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				node: {
					name: "node";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "UserWhitelist"; ofType: null };
					};
				};
			};
		};
		UserWhitelistFilter: {
			kind: "INPUT_OBJECT";
			name: "UserWhitelistFilter";
			inputFields: [
				{
					name: "and";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "UserWhitelistFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "internalCreatedAt";
					type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "kind";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "nodeId";
					type: { kind: "INPUT_OBJECT"; name: "IDFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "not";
					type: {
						kind: "INPUT_OBJECT";
						name: "UserWhitelistFilter";
						ofType: null;
					};
					defaultValue: null;
				},
				{
					name: "or";
					type: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "INPUT_OBJECT";
								name: "UserWhitelistFilter";
								ofType: null;
							};
						};
					};
					defaultValue: null;
				},
				{
					name: "userWhitelistId";
					type: { kind: "INPUT_OBJECT"; name: "BigIntFilter"; ofType: null };
					defaultValue: null;
				},
				{
					name: "userWhitelistValue";
					type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
					defaultValue: null;
				},
			];
		};
		UserWhitelistInsertInput: {
			kind: "INPUT_OBJECT";
			name: "UserWhitelistInsertInput";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "kind";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "userWhitelistValue";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		UserWhitelistInsertResponse: {
			kind: "OBJECT";
			name: "UserWhitelistInsertResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "UserWhitelist"; ofType: null };
							};
						};
					};
				};
			};
		};
		UserWhitelistOrderBy: {
			kind: "INPUT_OBJECT";
			name: "UserWhitelistOrderBy";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "kind";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "userWhitelistId";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
				{
					name: "userWhitelistValue";
					type: { kind: "ENUM"; name: "OrderByDirection"; ofType: null };
					defaultValue: null;
				},
			];
		};
		UserWhitelistUpdateInput: {
			kind: "INPUT_OBJECT";
			name: "UserWhitelistUpdateInput";
			inputFields: [
				{
					name: "internalCreatedAt";
					type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					defaultValue: null;
				},
				{
					name: "kind";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
				{
					name: "userWhitelistValue";
					type: { kind: "SCALAR"; name: "String"; ofType: null };
					defaultValue: null;
				},
			];
		};
		UserWhitelistUpdateResponse: {
			kind: "OBJECT";
			name: "UserWhitelistUpdateResponse";
			fields: {
				affectedCount: {
					name: "affectedCount";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				records: {
					name: "records";
					type: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "LIST";
							name: never;
							ofType: {
								kind: "NON_NULL";
								name: never;
								ofType: { kind: "OBJECT"; name: "UserWhitelist"; ofType: null };
							};
						};
					};
				};
			};
		};
	};
};

import * as gqlTada from "gql.tada";

declare module "gql.tada" {
	interface setupSchema {
		introspection: introspection;
	}
}
