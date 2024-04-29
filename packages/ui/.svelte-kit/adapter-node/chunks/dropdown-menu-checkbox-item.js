import { p as push, m as spread_props, c as slot, b as pop, n as sanitize_props, o as rest_props, v as value_or_fallback, q as bind_props, d as push_element, e as pop_element, k as copy_payload, l as assign_payload } from "./index3.js";
import { I as Icon, C as Check } from "./index6.js";
import { v as validate_component, a as add_snippet_symbol } from "./validate.js";
import "dequal";
import { S as Select, r as Select_group, s as Select_input, t as Select_value, u as Menu_item, c as cn, g as flyAndScale, v as Menu_content, w as Menu_radio_item, x as Menu_radio_indicator, y as Menu_radio_group, z as Menu_checkbox_item, A as Menu_checkbox_indicator } from "./index5.js";
import "clsx";
function Calendar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "M8 2v4" }],
    ["path", { "d": "M16 2v4" }],
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "4",
        "rx": "2"
      }
    ],
    ["path", { "d": "M3 10h18" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "calendar" },
    $$sanitized_props,
    {
      iconNode,
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
Calendar.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Circle_dot($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "1" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "circle-dot" },
    $$sanitized_props,
    {
      iconNode,
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
Circle_dot.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Circle($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "circle" },
    $$sanitized_props,
    {
      iconNode,
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
Circle.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Git_fork($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "18", "r": "3" }
    ],
    [
      "circle",
      { "cx": "6", "cy": "6", "r": "3" }
    ],
    [
      "circle",
      { "cx": "18", "cy": "6", "r": "3" }
    ],
    [
      "path",
      {
        "d": "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"
      }
    ],
    ["path", { "d": "M12 12v3" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "git-fork" },
    $$sanitized_props,
    {
      iconNode,
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
Git_fork.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Star($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "polygon",
      {
        "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    ]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "star" },
    $$sanitized_props,
    {
      iconNode,
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
Star.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const Root = Select;
const Group = Select_group;
const Input = Select_input;
const Value = Select_value;
var OrderByDirection = /* @__PURE__ */ ((OrderByDirection2) => {
  OrderByDirection2["AscNullsFirst"] = "AscNullsFirst";
  OrderByDirection2["AscNullsLast"] = "AscNullsLast";
  OrderByDirection2["DescNullsFirst"] = "DescNullsFirst";
  OrderByDirection2["DescNullsLast"] = "DescNullsLast";
  return OrderByDirection2;
})(OrderByDirection || {});
const BookmarkTableDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "BookmarkTable" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "filter" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "GthbRepoFilter" } }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: { kind: "NamedType", name: { kind: "Name", value: "GthbRepoOrderBy" } }
            }
          }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryStargazerMax" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "stargazerCount" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "stargazerCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryStargazerMin" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "stargazerCount" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "stargazerCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryForkMax" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "forkCount" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "forkCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryForkMin" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "forkCount" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "forkCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryIssueMax" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "issuesTotalCount" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "issuesTotalCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryIssueMin" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "issuesTotalCount" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "issuesTotalCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryContributorMax" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "contributorCount" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "contributorCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryContributorMin" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "contributorCount" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "contributorCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryPullRequestsMax" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "pullRequestsTotalCount" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pullRequestsTotalCount" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryPullRequestsMin" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "pullRequestsTotalCount" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pullRequestsTotalCount" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryIssuesPerContributorMax" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "issuesPerContributor" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "issuesPerContributor" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryIssuesPerContributorMin" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "issuesPerContributor" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "issuesPerContributor" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryForksPerContributorMax" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "forksPerContributor" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "forksPerContributor" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryForksPerContributorMin" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "forksPerContributor" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "forksPerContributor" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryStargazersPerContributorMax" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "stargazersPerContributor" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "stargazersPerContributor" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryStargazersPerContributorMin" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "stargazersPerContributor" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "stargazersPerContributor" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryPullRequestsPerContributorMax" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "pullRequestsPerContributor" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pullRequestsPerContributor" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryPullRequestsPerContributorMin" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "pullRequestsPerContributor" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pullRequestsPerContributor" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryTrending" },
            name: { kind: "Name", value: "fListBookmarkedGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: { kind: "Variable", name: { kind: "Name", value: "filter" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "gthbRepoName" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "gthbOwner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "gthbOwnerLogin" }
                                  },
                                  { kind: "Field", name: { kind: "Name", value: "avatarUrl" } }
                                ]
                              }
                            },
                            { kind: "Field", name: { kind: "Name", value: "stargazerCount" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "stargazersPerContributor" }
                            },
                            { kind: "Field", name: { kind: "Name", value: "forkCount" } },
                            { kind: "Field", name: { kind: "Name", value: "issuesTotalCount" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "issuesPerContributor" }
                            },
                            { kind: "Field", name: { kind: "Name", value: "forksPerContributor" } },
                            { kind: "Field", name: { kind: "Name", value: "gthbRepoDescription" } },
                            { kind: "Field", name: { kind: "Name", value: "contributorCount" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pullRequestsTotalCount" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pullRequestsPerContributor" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
                      { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
const ChartDataStarsByGthbRepoFilterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ChartDataStarsByGthbRepoFilter" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "gthbRepoFilter" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "GthbRepoFilter" } }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "starFilter" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "GthbStarHistFilter" } }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "starOrderBy" } },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: { kind: "NamedType", name: { kind: "Name", value: "GthbStarHistOrderBy" } }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "gthbRepoCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: { kind: "Variable", name: { kind: "Name", value: "gthbRepoFilter" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "gthbRepoName" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "gthbOwner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "gthbOwnerLogin" } }
                                ]
                              }
                            },
                            { kind: "Field", name: { kind: "Name", value: "gthbRepoId" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "gthbStarHistCollection" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "filter" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "starFilter" }
                                  }
                                },
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "orderBy" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "starOrderBy" }
                                  }
                                }
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "edges" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "node" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "gthbStarHistDate" }
                                              },
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "amount" }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
const ChartDataForksByGthbRepoFilterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ChartDataForksByGthbRepoFilter" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "gthbRepoFilter" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "GthbRepoFilter" } }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "forkFilter" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "GthbForkHistFilter" } }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "forkOrderBy" } },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: { kind: "NamedType", name: { kind: "Name", value: "GthbForkHistOrderBy" } }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "gthbRepoCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: { kind: "Variable", name: { kind: "Name", value: "gthbRepoFilter" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "gthbRepoName" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "gthbOwner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "gthbOwnerLogin" } }
                                ]
                              }
                            },
                            { kind: "Field", name: { kind: "Name", value: "gthbRepoId" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "gthbForkHistCollection" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "filter" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "forkFilter" }
                                  }
                                },
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "orderBy" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "forkOrderBy" }
                                  }
                                }
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "edges" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "node" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "gthbForkHistDate" }
                                              },
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "amount" }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
const ChartDataIssuesByGthbRepoFilterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ChartDataIssuesByGthbRepoFilter" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "gthbRepoFilter" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "GthbRepoFilter" } }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "issueFilter" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "GthbIssueHistFilter" } }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "issueOrderBy" } },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: { kind: "NamedType", name: { kind: "Name", value: "GthbIssueHistOrderBy" } }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "gthbRepoCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: { kind: "Variable", name: { kind: "Name", value: "gthbRepoFilter" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "gthbRepoName" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "gthbOwner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "gthbOwnerLogin" } }
                                ]
                              }
                            },
                            { kind: "Field", name: { kind: "Name", value: "gthbRepoId" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "gthbIssueHistCollection" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "filter" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "issueFilter" }
                                  }
                                },
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "orderBy" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "issueOrderBy" }
                                  }
                                }
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "edges" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "node" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "gthbIssueHistDate" }
                                              },
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "amount" }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
const TrendingTableDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "TrendingTable" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "dateRange" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "filter" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "GthbRepoFilter" } }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: { kind: "NamedType", name: { kind: "Name", value: "GthbRepoOrderBy" } }
            }
          }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryStargazerMax" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "stargazerCount" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "stargazerCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryStargazerMin" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "stargazerCount" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "stargazerCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryForkMax" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "forkCount" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "forkCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryForkMin" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "forkCount" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "forkCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryIssueMax" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "issuesTotalCount" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "issuesTotalCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryIssueMin" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "issuesTotalCount" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "issuesTotalCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryContributorMax" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "contributorCount" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "contributorCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryContributorMin" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "contributorCount" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "contributorCount" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryPullRequestsMax" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "pullRequestsTotalCount" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pullRequestsTotalCount" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryPullRequestsMin" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "pullRequestsTotalCount" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pullRequestsTotalCount" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryIssuesPerContributorMax" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "issuesPerContributor" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "issuesPerContributor" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryIssuesPerContributorMin" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "issuesPerContributor" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "issuesPerContributor" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryForksPerContributorMax" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "forksPerContributor" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "forksPerContributor" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryForksPerContributorMin" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "forksPerContributor" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "forksPerContributor" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryStargazersPerContributorMax" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "stargazersPerContributor" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "stargazersPerContributor" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryStargazersPerContributorMin" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "stargazersPerContributor" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "stargazersPerContributor" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryPullRequestsPerContributorMax" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "pullRequestsPerContributor" },
                      value: { kind: "EnumValue", value: "DescNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pullRequestsPerContributor" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryPullRequestsPerContributorMin" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "1" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "pullRequestsPerContributor" },
                      value: { kind: "EnumValue", value: "AscNullsLast" }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pullRequestsPerContributor" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "queryTrending" },
            name: { kind: "Name", value: "fListTrendingGthbRepo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gthbDateRangeArg" },
                value: { kind: "Variable", name: { kind: "Name", value: "dateRange" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: { kind: "Variable", name: { kind: "Name", value: "filter" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "gthbRepoName" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "gthbOwner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "gthbOwnerLogin" }
                                  },
                                  { kind: "Field", name: { kind: "Name", value: "avatarUrl" } }
                                ]
                              }
                            },
                            { kind: "Field", name: { kind: "Name", value: "stargazerCount" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "stargazersPerContributor" }
                            },
                            { kind: "Field", name: { kind: "Name", value: "forkCount" } },
                            { kind: "Field", name: { kind: "Name", value: "issuesTotalCount" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "issuesPerContributor" }
                            },
                            { kind: "Field", name: { kind: "Name", value: "forksPerContributor" } },
                            { kind: "Field", name: { kind: "Name", value: "gthbRepoDescription" } },
                            { kind: "Field", name: { kind: "Name", value: "contributorCount" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pullRequestsTotalCount" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pullRequestsPerContributor" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
                      { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
function Dropdown_menu_item($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "inset", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let inset = value_or_fallback($$props["inset"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(Menu_item)($$payload, spread_props([
    {
      class: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50", inset && "pl-8", className)
    },
    $$restProps,
    {
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className, inset });
  pop();
}
Dropdown_menu_item.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dropdown_menu_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "sideOffset",
    "transition",
    "transitionConfig",
    "$$props"
  ]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let sideOffset = value_or_fallback($$props["sideOffset"], 4);
  let transition = value_or_fallback($$props["transition"], flyAndScale);
  let transitionConfig = value_or_fallback($$props["transitionConfig"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(Menu_content)($$payload, spread_props([
    {
      transition,
      transitionConfig,
      sideOffset,
      class: cn("z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none", className)
    },
    $$restProps,
    {
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    class: className,
    sideOffset,
    transition,
    transitionConfig
  });
  pop();
}
Dropdown_menu_content.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dropdown_menu_radio_item($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let value = $$props["value"];
  $$payload.out += `<!--[-->`;
  validate_component(Menu_radio_item)($$payload, spread_props([
    {
      class: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50", className),
      value
    },
    $$restProps,
    {
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">`;
        push_element("span", $$payload2);
        $$payload2.out += `<!--[-->`;
        validate_component(Menu_radio_indicator)($$payload2, {
          children: add_snippet_symbol(($$payload3, $$slotProps2) => {
            $$payload3.out += `<!--[-->`;
            validate_component(Circle)($$payload3, { class: "h-2 w-2 fill-current" });
            $$payload3.out += `<!--]-->`;
          })
        });
        $$payload2.out += `<!--]--></span>`;
        pop_element();
        $$payload2.out += ` <!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className, value });
  pop();
}
Dropdown_menu_radio_item.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dropdown_menu_radio_group($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["value", "$$props"]);
  push();
  let value = value_or_fallback($$props["value"], void 0);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!--[-->`;
    validate_component(Menu_radio_group)($$payload2, spread_props([
      $$restProps,
      {
        get value() {
          return value;
        },
        set value($$value) {
          value = $$value;
          $$settled = false;
        },
        children: add_snippet_symbol(($$payload3, $$slotProps) => {
          $$payload3.out += `<!--[-->`;
          slot($$payload3, $$props.children, {}, null);
          $$payload3.out += `<!--]-->`;
        })
      }
    ]));
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { value });
  pop();
}
Dropdown_menu_radio_group.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dropdown_menu_checkbox_item($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "checked", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let checked = value_or_fallback($$props["checked"], void 0);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!--[-->`;
    validate_component(Menu_checkbox_item)($$payload2, spread_props([
      {
        get checked() {
          return checked;
        },
        set checked($$value) {
          checked = $$value;
          $$settled = false;
        },
        class: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50", className)
      },
      $$restProps,
      {
        children: add_snippet_symbol(($$payload3, $$slotProps) => {
          $$payload3.out += `<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">`;
          push_element("span", $$payload3);
          $$payload3.out += `<!--[-->`;
          validate_component(Menu_checkbox_indicator)($$payload3, {
            children: add_snippet_symbol(($$payload4, $$slotProps2) => {
              $$payload4.out += `<!--[-->`;
              validate_component(Check)($$payload4, { class: "h-4 w-4" });
              $$payload4.out += `<!--]-->`;
            })
          });
          $$payload3.out += `<!--]--></span>`;
          pop_element();
          $$payload3.out += ` <!--[-->`;
          slot($$payload3, $$props.children, {}, null);
          $$payload3.out += `<!--]-->`;
        })
      }
    ]));
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { class: className, checked });
  pop();
}
Dropdown_menu_checkbox_item.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  BookmarkTableDocument as B,
  Circle_dot as C,
  Dropdown_menu_content as D,
  Git_fork as G,
  Input as I,
  OrderByDirection as O,
  Root as R,
  Star as S,
  TrendingTableDocument as T,
  Value as V,
  Calendar as a,
  Dropdown_menu_radio_group as b,
  Dropdown_menu_radio_item as c,
  Dropdown_menu_item as d,
  Dropdown_menu_checkbox_item as e,
  Group as f,
  ChartDataStarsByGthbRepoFilterDocument as g,
  ChartDataForksByGthbRepoFilterDocument as h,
  ChartDataIssuesByGthbRepoFilterDocument as i
};
