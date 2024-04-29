use async_trait::async_trait;
use header_proxy_gateway;
use hyper::HeaderMap;
use jsonwebtoken::{encode, EncodingKey, Header};
use postgrest::Postgrest;
use serde::Deserialize;
use serde::Serialize;
use std::collections::HashMap;
use std::env;

#[derive(Debug, Deserialize)]
struct SelectUserId {
    auth_users_id: String,
}
#[derive(Debug, Deserialize, Serialize)]
struct AppMetadata {
    provider: String,
    providers: Vec<String>,
}

#[derive(Debug, Deserialize)]
struct User {
    id: String,
    aud: String,
    role: String,
    email: String,
    app_metadata: AppMetadata,
}

#[derive(Debug, Serialize)]
struct Claims {
    sub: String,
    iss: String,
    aud: String,
    role: String,
    email: String,
    app_metadata: AppMetadata,
}

pub struct CustomAuth {
    client: Postgrest,
}

#[async_trait]
impl header_proxy_gateway::Auth for CustomAuth {
    async fn authenticate(
        &self,
        redirect: &header_proxy_gateway::ConfigRedirect,
        headers: &HeaderMap,
        client: &reqwest_middleware::ClientWithMiddleware,
        builder: reqwest_middleware::RequestBuilder,
    ) -> (bool, reqwest_middleware::RequestBuilder) {
        if headers.contains_key("x-codegen") {
            // let builder = builder.header(
            //     "apikey",
            //     headers.get("apikey").unwrap().to_str().unwrap(),
            // );
            return (true, builder);
        }
        if headers.contains_key("authorization") {
            if headers.get("authorization").is_none()
                || headers.get("authorization").unwrap().to_str().is_err()
                || headers
                    .get("authorization")
                    .unwrap()
                    .to_str()
                    .unwrap()
                    .len()
                    < 7
                || !headers
                    .get("authorization")
                    .unwrap()
                    .to_str()
                    .unwrap()
                    .starts_with("Bearer ")
            {
                return (false, builder);
            }

            let builder = builder.header(
                "authorization",
                headers.get("authorization").unwrap().to_str().unwrap(),
            );

            if redirect.url.contains("supabase") {
                return (true, builder);
            }
            let uri = format!(
                "{}{}",
                env::var("SUPABASE_URL").unwrap_or_default().to_string(),
                "/auth/v1/user"
            );

            let authorization =   headers.get("authorization").unwrap().to_str().unwrap();
            let req_result = client
                .request(reqwest::Method::GET, uri)
                .header("Content-Type", "application/json")
                .header(
                    "apiKey",
                    env::var("SUPABASE_ANON_KEY")
                        .unwrap_or_default()
                        .to_string(),
                )
                .header(
                    "Authorization",
                    authorization,
                )
                .build();

            if req_result.is_err() {
                return (false, builder);
            }
            let req = req_result.unwrap();

            let user_result = client.execute(req).await;
            if user_result.is_err() {
              return (false, builder);
            }

            let user_res = user_result.unwrap();

            let user_body_result = user_res.bytes().await;
            if user_body_result.is_err() {
              return (false, builder);
            }

            let user_body_json_parse_result: Result<User, serde_json::Error> =
                serde_json::from_slice::<User>(&user_body_result.unwrap());
            if user_body_json_parse_result.is_err() {
              return (false, builder);
            }
      
            let builder = builder.header(
                "authusersid",
                user_body_json_parse_result.unwrap().id.clone(),
            ).header("Content-Type", "application/json");
            return (true, builder);
        }

        if headers.contains_key("userapikey") {
            let auth_users_id_result = self
                .client
                .from("user_api_key")
                .auth(env::var("SUPABASE_SERVICE_KEY").unwrap_or_default())
                .eq(
                    "user_api_key",
                    headers.get("userapikey").unwrap().to_str().unwrap(),
                )
                .select("auth_users_id")
                .execute()
                .await;
            if auth_users_id_result.is_err() {
                return (false, builder);
            }

            let auth_users_id_body_result = auth_users_id_result.unwrap().bytes().await;
            if auth_users_id_body_result.is_err() {
                return (false, builder);
            }
            let auth_users_id_json_parse_result =
                serde_json::from_slice::<Vec<SelectUserId>>(&auth_users_id_body_result.unwrap());

            if auth_users_id_json_parse_result.is_err() {
                return (false, builder);
            }
            let auth_users_id_json_parse = auth_users_id_json_parse_result.unwrap();

            if auth_users_id_json_parse.len() == 0 {
                return (false, builder);
            }
            let uri = format!(
                "{}{}{}",
                env::var("SUPABASE_URL").unwrap_or_default().to_string(),
                "/auth/v1/admin/users/",
                auth_users_id_json_parse.get(0).unwrap().auth_users_id
            );

            let req_result = client
                .request(reqwest::Method::GET, uri)
                .header("Content-Type", "application/json")
                .header(
                    "apiKey",
                    env::var("SUPABASE_SERVICE_KEY")
                        .unwrap_or_default()
                        .to_string(),
                )
                .header(
                    "authorization",
                    format!(
                        "Bearer {}",
                        env::var("SUPABASE_SERVICE_KEY")
                            .unwrap_or_default()
                            .to_string()
                    ),
                )
                .build();

            if req_result.is_err() {
                return (false, builder);
            }
            let req = req_result.unwrap();

            let user_result = client.execute(req).await;
            if user_result.is_err() {
                return (false, builder);
            }

            let user_res = user_result.unwrap();
            let user_body_result = user_res.bytes().await;
            if user_body_result.is_err() {
                return (false, builder);
            }
            let user_body_json_parse_result =
                serde_json::from_slice::<User>(&user_body_result.unwrap());
            if user_body_json_parse_result.is_err() {
                return (false, builder);
            }
            let user_body_json_parse = user_body_json_parse_result.unwrap();
            let builder = builder.header("authusersid", user_body_json_parse.id.clone());
            let supabase_claims = Claims {
                sub: user_body_json_parse.id,
                iss: format!("{}/auth/v1", env::var("SUPABASE_URL").unwrap_or_default()),
                aud: user_body_json_parse.aud,
                role: user_body_json_parse.role,
                email: user_body_json_parse.email,
                app_metadata: user_body_json_parse.app_metadata,
            };
            let token = encode(
                &Header::default(),
                &supabase_claims,
                &EncodingKey::from_secret(
                    &env::var("SUPABASE_JWT_SECRET")
                        .unwrap_or_default()
                        .as_bytes(),
                ),
            )
            .unwrap();
            let builder = builder.header("authorization", format!("Bearer {}", token)).header("Content-Type", "application/json");
            return (true, builder);
        }

        return (false, builder);
    }
}

#[tokio::main]
async fn main() {
    let client = Postgrest::new(format!(
        "{}/rest/v1",
        env::var("SUPABASE_URL").unwrap().to_string()
    ))
    .insert_header(
        "apikey",
        env::var("SUPABASE_SERVICE_KEY").unwrap_or_default(),
    );
    let config = header_proxy_gateway::Config {
        addr: (
            [0, 0, 0, 0],
            env::var("GRAPHQL_GATEWAY_PORT")
                .unwrap()
                .to_string()
                .parse::<u16>()
                .unwrap(),
        )
            .into(),
        auth: Box::new(CustomAuth { client }),
        clear_cache_interval_in_seconds: 5 * 60,
        redirects: vec![
            (
                "supabase".to_string(),
                header_proxy_gateway::ConfigRedirect {
                    headers: vec![(
                        "apiKey".to_string(),
                        env::var("SUPABASE_ANON_KEY")
                            .unwrap_or_default()
                            .to_string(),
                    )]
                    .into_iter()
                    .collect(),
                    method: reqwest::Method::POST,
                    url: env::var("SUPABASE_GRAPHQL_URL")
                        .unwrap_or_default()
                        .to_string(),
                },
            ),
            (
                "server".to_string(),
                header_proxy_gateway::ConfigRedirect {
                    headers: HashMap::new(),
                    method: reqwest::Method::POST,
                    url: env::var("GRAPHQL_SERVER_URL")
                        .unwrap_or_default()
                        .to_string(),
                },
            ),
        ]
        .into_iter()
        .collect(),
    };

    match header_proxy_gateway::run(config).await {
        Ok(_) => println!("Server started"),
        Err(e) => println!("Error starting server: {}", e),
    };
}
