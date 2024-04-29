-- algo_hn_comment_object_id bigint,
-- algo_hn_tags t_ivals_algo_hn_tag[],
-- author text,
-- comment_text text,
-- created_at timestamp with time zone,
-- story_id bigint,
-- story_title text,
-- story_url text,
-- updated_at timestamp with time zone
select
  f_insert_algo_hn_comments(
    123,
    array[
      row (
        123,
        array[
          row ('hn_tag_1'),
          row ('hn_tag_2')
        ]::t_ivals_algo_hn_tag[],
        'author',
        'comment_text',
        NOW(),
        123,
        'story_title',
        'story_url',
        NOW()
      )
    ]::t_f_insert_algo_hn_comment[]
  );

-- algo_hn_comment_object_id bigint,
-- algo_hn_story_url text,
-- algo_hn_tags t_ivals_algo_hn_tag[],
-- author text,
-- created_at timestamp with time zone,
-- points bigint,
-- story_text text,
-- title text,
-- updated_at timestamp with time zone
select
  f_insert_algo_hn_stories(
    123,
    array[
      row (
        123,
        'story_url',
        array[
          row ('hn_tag_1'),
          row ('hn_tag_2')
        ]::t_ivals_algo_hn_tag[],
        'author',
        NOW(),
        123,
        'story_text',
        'title',
        NOW()
      )
    ]::t_f_insert_algo_hn_story[]
  );

select
  f_insert_algo_hn_queries_w_stories_and_comments_for_proj(
    123,
    array[
      row (
         array[
      row (
        123,
        array[
          row ('hn_tag_1'),
          row ('hn_tag_2')
        ]::t_ivals_algo_hn_tag[],
        'author',
        'comment_text',
        NOW(),
        123,
        'story_title',
        'story_url',
        NOW()
      )
    ]::t_f_insert_algo_hn_comment[],
        array[
          row (
            123,
            'story_url',
            array[
              row('hn_tag_1'),
              row('hn_tag_2')
            ]::t_ivals_algo_hn_tag[],
            'author',
            NOW(),
            123,
            'story_text',
            'title',
            NOW()
          )
        ]::t_f_insert_algo_hn_story[],
        'query'
      )
    ]::t_f_insert_algo_hn_query_with_stories_and_comments[]
  );


-- avatar_url text,
-- gthb_org t_ivals_gthb_org
-- gthb_owner_type d_gthb_owner_type,
-- gthb_owner_login text,
-- gthb_owner_url text,
-- gthb_user t_ivals_gthb_user,
-- repositories_total_count bigint


--  user
--    bio text,
--   bio_html text,
--   company text,
--   company_html text,
--   created_at timestamp with time zone,
--   email text,
--   followers_total_count bigint,
--   gthb_user_name text,
--   twitter_username text,
--   website_url text
-- org

select f_insert_gthb_owner(
  Row(
    'avatar_url',
    NULL,
    'User'::d_gthb_owner_type,
    'gthb_owner_login',
    'gthb_owner_url',
    Row(
      'bio',
      'bio_html',
      'company',
      'company_html',
      NOW(),
      'email',
      123,
      'gthb_user_name',
      'twitter_username',
      'website_url'
    )::t_ivals_gthb_user,
    5000
  )::t_f_insert_gthb_owner
);


  -- created_at timestamp with time zone,
  -- fork_count bigint,
  -- gthb_fork_hists t_ivals_gthb_fork_hist [],
  -- gthb_issue_hists t_ivals_gthb_issue_hist [],
  -- gthb_langs: t_ivals_gthb_lang[],
  -- gthb_owner t_f_insert_gthb_owner,
  -- gthb_repo_contrs t_f_insert_gthb_contr [],
  -- gthb_repo_description text,
  -- gthb_repo_name text,
  -- gthb_repo_url text,
  -- gthb_star_hists t_ivals_gthb_star_hist [],
  -- homepage_url text,
  -- is_in_organization boolean,
  -- issues_total_count bigint,
  -- pull_requests_total_count bigint,
  -- stargazer_count bigint
select f_insert_gthb_repo(
  Row(
    NOW(),
    50,
    array[
      Row(
        1,
        NOW()
      )
    ]::t_ivals_gthb_fork_hist[],
    array[
      Row(
        1,
        NOW()
      )
    ]::t_ivals_gthb_issue_hist[],
    array[
      Row(
        'green',
        'java'
      ),
      Row(
        'blue',
        'python'
      )
    ]::t_ivals_gthb_lang[],
    Row(
      'avatar_url',
      NULL,
      'User'::d_gthb_owner_type,
      'gthb_owner_login',
      'gthb_owner_url',
      Row(
        'bio',
        'bio_html',
        'company',
        'company_html',
        NOW(),
        'email',
        123,
        'gthb_user_name',
        'twitter_username',
        'website_url'
      )::t_ivals_gthb_user,
      5000
    )::t_f_insert_gthb_owner,
    array[
      Row(
        5,
        Row(
          'avatar_url',
          'gthb_owner_login',
          'gthb_owner_url',
          Row(
            'bio',
            'bio_html',
            'company',
            'company_html',
            NOW(),
            'email',
            123,
            'gthb_user_name',
            'twitter_username',
            'website_url'
          )::t_ivals_gthb_user,
          5000
        )::t_f_insert_gthb_contr_owner
      )
    ]::t_f_insert_gthb_contr[],
    'gthb_repo_description',
    'gthb_repo_name',
    array[
      Row(
      'topic_name',
        50
      )
    ]::t_ivals_gthb_repo_topic[],
    'gthb_repo_url',
     array[
      Row(
        1,
        NOW()
      )
    ]::t_ivals_gthb_star_hist[],
    'homepage_url',
    false,
    50,
    40,
    30
  )::t_f_insert_gthb_repo
);




select f_insert_proj_repo(
  Row(
  array[
      row (
         array[
      row (
        123,
        array[
          row ('hn_tag_1'),
          row ('hn_tag_2')
        ]::t_ivals_algo_hn_tag[],
        'author',
        'comment_text',
        NOW(),
        123,
        'story_title',
        'story_url',
        NOW()
      )
    ]::t_f_insert_algo_hn_comment[],
        array[
          row (
            123,
            'story_url',
            array[
              row('hn_tag_1'),
              row('hn_tag_2')
            ]::t_ivals_algo_hn_tag[],
            'author',
            NOW(),
            123,
            'title',
            NOW()
          )
        ]::t_f_insert_algo_hn_story[],
        'query'
      )
    ]::t_f_insert_algo_hn_query_with_stories_and_comments[],
    Row(
    NOW(),
    50,
    array[
      Row(
        1,
        NOW()
      )
    ]::t_ivals_gthb_fork_hist[],
    array[
      Row(
        1,
        NOW()
      )
    ]::t_ivals_gthb_issue_hist[],
    array[
      Row(
        'green',
        'java'
      ),
      Row(
        'blue',
        'python'
      )
    ]::t_ivals_gthb_lang[],
    Row(
      'avatar_url',
      NULL,
      'User'::d_gthb_owner_type,
      'gthb_owner_login',
      'gthb_owner_url',
      Row(
        'bio',
        'bio_html',
        'company',
        'company_html',
        NOW(),
        'email',
        123,
        'gthb_user_name',
        'twitter_username',
        'website_url'
      )::t_ivals_gthb_user,
      5000
    )::t_f_insert_gthb_owner,
    array[
      Row(
        5,
        Row(
          'avatar_url',
          'User'::d_gthb_owner_type,
          'gthb_owner_login',
          'gthb_owner_url',
          Row(
            'bio',
            'bio_html',
            'company',
            'company_html',
            NOW(),
            'email',
            123,
            'gthb_user_name',
            'twitter_username',
            'website_url'
          )::t_ivals_gthb_user,
          5000
        )::t_f_insert_gthb_contr_owner
      )
    ]::t_f_insert_gthb_contr[],
    'gthb_repo_description',
    'gthb_repo_name',
       array[
      Row(
        'topic_name',
        50
      )
    ]::t_ivals_gthb_repo_topic[],
    'gthb_repo_url',
     array[
      Row(
        1,
        NOW()
      )
    ]::t_ivals_gthb_star_hist[],
    'homepage_url',
    false,
    50,
    40,
    30
  )::t_f_insert_gthb_repo,
  'note',
  Row(
    'algo_hn_eli5',
    'repo_eli5'
  )::t_f_insert_proj_repo_metadata
)::t_f_insert_proj_repo
)


--  auth_users_id uuid,
--   proj_cats text [],
--   proj_repo t_f_insert_proj_repo
select f_insert_proj_bookmark_w_cats(
  Row(
  '997cd1f0-a7b7-4eeb-9702-0f839ea7fa22',
  array['cat1', 'cat2'],
    Row(
  array[
      row (
         array[
      row (
        123,
        array[
          row ('hn_tag_1'),
          row ('hn_tag_2')
        ]::t_ivals_algo_hn_tag[],
        'author',
        'comment_text',
        NOW(),
        123,
        'story_title',
        'story_url',
        NOW()
      )
    ]::t_f_insert_algo_hn_comment[],
        array[
          row (
            123,
            'story_url',
            array[
              row('hn_tag_1'),
              row('hn_tag_2')
            ]::t_ivals_algo_hn_tag[],
            'author',
            NOW(),
            123,
            'title',
            NOW()
          )
        ]::t_f_insert_algo_hn_story[],
        'query'
      )
    ]::t_f_insert_algo_hn_query_with_stories_and_comments[],
    Row(
    NOW(),
    50,
    array[
      Row(
        1,
        NOW()
      )
    ]::t_ivals_gthb_fork_hist[],
    array[
      Row(
        1,
        NOW()
      )
    ]::t_ivals_gthb_issue_hist[],
     array[
      Row(
        'green',
        'java'
      ),
      Row(
        'blue',
        'python'
      )
    ]::t_ivals_gthb_lang[],
    Row(
      'avatar_url',
      NULL,
      'User'::d_gthb_owner_type,
      'gthb_owner_login',
      'gthb_owner_url',
      Row(
        'bio',
        'bio_html',
        'company',
        'company_html',
        NOW(),
        'email',
        123,
        'gthb_user_name',
        'twitter_username',
        'website_url'
      )::t_ivals_gthb_user,
      5000
    )::t_f_insert_gthb_owner,
    array[
      Row(
        5,
        Row(
          'avatar_url',
          'gthb_owner_login',
          'gthb_owner_url',
          Row(
            'bio',
            'bio_html',
            'company',
            'company_html',
            NOW(),
            'email',
            123,
            'gthb_user_name',
            'twitter_username',
            'website_url'
          )::t_ivals_gthb_user,
          5000
        )::t_f_insert_gthb_contr_owner
      )
    ]::t_f_insert_gthb_contr[],
    'gthb_repo_description',
    'gthb_repo_name',
    array[
      Row(
        'topic_name',
        50
      )
    ]::t_ivals_gthb_repo_topic[],
    'gthb_repo_url',
     array[
      Row(
        1,
        NOW()
      )
    ]::t_ivals_gthb_star_hist[],
    'homepage_url',
    false,
    50,
    40,
    30
  )::t_f_insert_gthb_repo,
  'note',
  array[Row(
    'Classifier'
  )]::t_ivals_proj_classifier[],
  Row(
    'algo_hn_eli5',
    'repo_eli5'
  )::t_f_insert_proj_repo_metadata,
      array[  Row(
          'about',
          123,
          123,
          'headquarters',
          'logo',
          'sbot_lin_company_image',
          'sbot_lin_company_name',
          'sbot_lin_company_type',
          'sbot_lin_company_url',
          'sphere',
          'website'
        )]::t_ivals_sbot_lin_company[],
      NULL
)::t_f_insert_proj_repo
  )::t_f_insert_proj_bookmark_w_cats
)



select f_insert_sbot_lin_companies_for_proj(123, Array[
        Row(
          'about',
          123,
          123,
          'headquarters',
          'logo',
          'sbot_lin_company_image',
          'sbot_lin_company_name',
          'sbot_lin_company_type',
          'sbot_lin_company_url',
          'sphere',
          'website'
        )]::t_ivals_sbot_lin_company[]
      );







select f_insert_gthb_trending(
  Row(
    'today',
    NULL,
    Row(
      array[
        row (
          array[
            row (
              123,
              array[
                row ('hn_tag_1'),
                row ('hn_tag_2')
              ]::t_ivals_algo_hn_tag[],
              'author',
              'comment_text',
              NOW(),
              123,
              'story_title',
              'story_url',
              NOW()
            )
          ]::t_f_insert_algo_hn_comment[],
          array[
            row (
              123,
              'story_url',
              array[
                row('hn_tag_1'),
                row('hn_tag_2')
              ]::t_ivals_algo_hn_tag[],
              'author',
              NOW(),
              123,
              'story_text',
              'title',
              NOW()
            )
          ]::t_f_insert_algo_hn_story[],
          'query'
        )
      ]::t_f_insert_algo_hn_query_with_stories_and_comments[],
      Row(
        NOW(),
        50,
        array[
          Row(
            1,
            NOW()
          )
        ]::t_ivals_gthb_fork_hist[],
        array[
          Row(
            1,
            NOW()
          )
        ]::t_ivals_gthb_issue_hist[],
        array[
          Row(
            'green',
            'java'
          ),
          Row(
            'blue',
            'python'
          )
        ]::t_ivals_gthb_lang[],
        Row(
          'avatar_url',
          NULL,
          'User'::d_gthb_owner_type,
          'gthb_owner_login',
          'gthb_owner_url',
          Row(
            'bio',
            'bio_html',
            'company',
            'company_html',
            NOW(),
            'email',
            123,
            'gthb_user_name',
            'twitter_username',
            'website_url'
          )::t_ivals_gthb_user,
          5000
        )::t_f_insert_gthb_owner,
        array[
          Row(
            5,
            Row(
              'avatar_url',
              'User'::d_gthb_owner_type,
              'gthb_owner_login',
              'gthb_owner_url',
              Row(
                'bio',
                'bio_html',
                'company',
                'company_html',
                NOW(),
                'email',
                123,
                'gthb_user_name',
                'twitter_username',
                'website_url'
              )::t_ivals_gthb_user,
              5000
            )::t_f_insert_gthb_contr_owner
          )
        ]::t_f_insert_gthb_contr[],
        'gthb_repo_description',
        'gthb_repo_name',
        'gthb_repo_url',
        array[
          Row(
            1,
            NOW()
          )
        ]::t_ivals_gthb_star_hist[],
        'homepage_url',
        false,
        50,
        40,
        30
      )::t_f_insert_gthb_repo,
      'note',
      Row(
        'algo_hn_eli5',
        'repo_eli5'
      )::t_f_insert_proj_repo_metadata
    )::t_f_insert_proj_repo
  )::t_f_insert_gthb_trending
)




select f_insert_gthb_trending(
  array[
  Row(
    'today',
    NULL,
    Row(
      array[
        row (
          array[
            row (
              123,
              array[
                row ('hn_tag_1'),
                row ('hn_tag_2')
              ]::t_ivals_algo_hn_tag[],
              'author',
              'comment_text',
              NOW(),
              123,
              'story_title',
              'story_url',
              NOW()
            )
          ]::t_f_insert_algo_hn_comment[],
          array[
            row (
              123,
              'story_url',
              array[
                row('hn_tag_1'),
                row('hn_tag_2')
              ]::t_ivals_algo_hn_tag[],
              'author',
              NOW(),
              123,
              'story_text',
              'title',
              NOW()
            )
          ]::t_f_insert_algo_hn_story[],
          'query'
        )
      ]::t_f_insert_algo_hn_query_with_stories_and_comments[],
      Row(
        NOW(),
        50,
        array[
          Row(
            1,
            NOW()
          )
        ]::t_ivals_gthb_fork_hist[],
        array[
          Row(
            1,
            NOW()
          )
        ]::t_ivals_gthb_issue_hist[],
        array[
          Row(
            'green',
            'java'
          ),
          Row(
            'blue',
            'python'
          )
        ]::t_ivals_gthb_lang[],
        Row(
          'avatar_url',
          NULL,
          'User'::d_gthb_owner_type,
          'gthb_owner_login',
          'gthb_owner_url',
          Row(
            'bio',
            'bio_html',
            'company',
            'company_html',
            NOW(),
            'email',
            123,
            'gthb_user_name',
            'twitter_username',
            'website_url'
          )::t_ivals_gthb_user,
          5000
        )::t_f_insert_gthb_owner,
        array[
          Row(
            5,
            Row(
              'avatar_url',
              'User'::d_gthb_owner_type,
              'gthb_owner_login',
              'gthb_owner_url',
              Row(
                'bio',
                'bio_html',
                'company',
                'company_html',
                NOW(),
                'email',
                123,
                'gthb_user_name',
                'twitter_username',
                'website_url'
              )::t_ivals_gthb_user,
              5000
            )::t_f_insert_gthb_contr_owner
          )
        ]::t_f_insert_gthb_contr[],
        'gthb_repo_description',
        'gthb_repo_name',
        'gthb_repo_url',
        array[
          Row(
            1,
            NOW()
          )
        ]::t_ivals_gthb_star_hist[],
        'homepage_url',
        false,
        50,
        40,
        30
      )::t_f_insert_gthb_repo,
      'note',
      Row(
        'algo_hn_eli5',
        'repo_eli5'
      )::t_f_insert_proj_repo_metadata,
      Row(
        "keywords",
        Row(
          "about",
          123,
          123,
          "headquarters",
          "logo",
          "sbot_lin_company_image",
          "sbot_lin_company_name",
          "sbot_lin_company_type",
          "sbot_lin_company_url",
          "sphere",
          "website"
        )::t_ivals_sbot_lin_company,
        NULL
      )
    )::t_f_insert_proj_repo
  )
  ]::t_f_insert_gthb_trending[]
)