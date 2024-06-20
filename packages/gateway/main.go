package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
	"strings"

	"github.com/golang-jwt/jwt/v5"
)

type AuthUsersIdResponse struct {
	AuthUsersId string `json:"auth_users_id"`
}

type UserResponse struct {
	Id          string      `json:"id"`
	Aud         string      `json:"aud"`
	Role        string      `json:"role"`
	Email       string      `json:"email"`
	AppMetadata AppMetadata `json:"app_metadata"`
}
type AppMetadata struct {
	Provider  string   `json:"provider"`
	Providers []string `json:"providers"`
}

func fetchAuthUsersIdFromSupabaseByUserApiKey(userApiKey string) (*AuthUsersIdResponse, error) {
	encodedUserApiKey := url.QueryEscape(userApiKey)

	req, err := http.NewRequest("GET", fmt.Sprintf("%s/rest/v1/user_api_key?select=auth_users_id&user_api_key=eq.%s&limit=1", os.Getenv("SUPABASE_URL"), encodedUserApiKey), nil)
	if err != nil {
		return nil, err
	}

	req.Header.Add("content-type", "application/json")
	req.Header.Add("apikey", os.Getenv("SUPABASE_SERVICE_KEY"))
	req.Header.Add("authorization", fmt.Sprintf("Bearer %s", os.Getenv("SUPABASE_SERVICE_KEY")))

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var authUserIdResponses []AuthUsersIdResponse
	err = json.Unmarshal(body, &authUserIdResponses)
	if err != nil {
		return nil, err
	}
	if len(authUserIdResponses) == 0 {
		return nil, fmt.Errorf("auth_users_id not found")
	}
	if authUserIdResponses[0].AuthUsersId == "" {
		return nil, fmt.Errorf("auth_users_id not found")
	}

	return &authUserIdResponses[0], nil
}

func fetchUserFromSupabaseAsAdmin(authUsersId string) (*UserResponse, error) {
	// encodedAuthUsersId := url.QueryEscape(authUsersId)
	req, err := http.NewRequest("GET", fmt.Sprintf("%s/auth/v1/admin/users/%s", os.Getenv("SUPABASE_URL"), authUsersId), nil)
	if err != nil {
		return nil, err
	}

	req.Header.Add("content-type", "application/json")
	req.Header.Add("apikey", os.Getenv("SUPABASE_SERVICE_KEY"))
	req.Header.Add("authorization", fmt.Sprintf("Bearer %s", os.Getenv("SUPABASE_SERVICE_KEY")))

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var userResponse UserResponse
	err = json.Unmarshal(body, &userResponse)
	if err != nil {
		return nil, err
	}

	return &userResponse, nil
}

func fetchUserFromSupabase(authorizationHeader string) (*UserResponse, error) {
	req, err := http.NewRequest("GET", fmt.Sprintf("%s/auth/v1/user/", os.Getenv("SUPABASE_URL")), nil)
	if err != nil {
		return nil, err
	}

	req.Header.Add("content-type", "application/json")
	req.Header.Add("apikey", os.Getenv("SUPABASE_ANON_KEY"))
	req.Header.Add("authorization", authorizationHeader)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var userResponse UserResponse
	err = json.Unmarshal(body, &userResponse)
	if err != nil {
		return nil, err
	}

	return &userResponse, nil
}

func main() {

	supabaseGraphqlUrl, err := url.Parse(os.Getenv("SUPABASE_GRAPHQL_URL"))
	if err != nil {
		log.Fatal(err)
	}
	customServerGraphqlUrl, err := url.Parse(os.Getenv("GRAPHQL_SERVER_URL"))
	if err != nil {
		log.Fatal(err)
	}
	supabaseGraphqlProxy := &httputil.ReverseProxy{
		Rewrite: func(r *httputil.ProxyRequest) {
			r.SetURL(supabaseGraphqlUrl)
			r.Out.Method = r.In.Method
			r.Out.URL.Path = supabaseGraphqlUrl.Path
			r.Out.Host = supabaseGraphqlUrl.Host
		},
	}
	customServerGraphqlProxy := &httputil.ReverseProxy{
		Rewrite: func(r *httputil.ProxyRequest) {
			r.SetURL(customServerGraphqlUrl)
			r.Out.Method = r.In.Method
			r.Out.URL.Path = customServerGraphqlUrl.Path
			r.Out.Host = customServerGraphqlUrl.Host
		},
	}

	errHandler := func(w http.ResponseWriter, r *http.Request, err error) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, x-server, apikey, userapikey")

		// log.Printf("Error proxying request2: %v", err)
		http.Error(w, "Error proxying request", http.StatusInternalServerError)
	}
	modifyResponse := func(r *http.Response) error {
		r.Header.Set("Access-Control-Allow-Origin", "*")
		r.Header.Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		r.Header.Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, x-server, apikey, userapikey")

		// log.Printf("Response1: %d %s", r.StatusCode, r.Status)

		// // Log all response headers
		// for name, values := range r.Header {
		// 	// Loop over all values for the name.
		// 	for _, value := range values {
		// 		log.Printf("%s: %s", name, value)
		// 	}
		// }

		return nil
	}
	supabaseGraphqlProxy.ErrorHandler = errHandler
	supabaseGraphqlProxy.ModifyResponse = modifyResponse
	customServerGraphqlProxy.ErrorHandler = errHandler
	customServerGraphqlProxy.ModifyResponse = modifyResponse

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// fmt.Printf("Gateway Received %s request for %s\n", r.Method, r.URL)
		// fmt.Println("Headers:")
		// for name, values := range r.Header {
		//     // Loop over all values for the name.
		//     for _, value := range values {
		//         fmt.Printf("%s: %s\n", name, value)
		//     }
		// }

		if r.Method == "OPTIONS" {
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
			w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, x-server, apikey, userapikey")

			w.WriteHeader(http.StatusOK)
			return
		}

		xServerHeader := r.Header.Get("X-Server")
		authorizationHeader := r.Header.Get("Authorization")
		userApiKeyHeader := r.Header.Get("userApiKey")

		if strings.HasPrefix(authorizationHeader, "Bearer ") && len(authorizationHeader) > 7 {
			if xServerHeader == "supabase-graphql" {
				http.Redirect(w, r, os.Getenv("SUPABASE_GRAPHQL_URL"), http.StatusFound)
				return
			} else if xServerHeader == "server" {
				resp, err := fetchUserFromSupabase(authorizationHeader)
				if err != nil {
					log.Println(err)
					w.WriteHeader(http.StatusUnauthorized)
				}
				r.Header.Set("authusersid", resp.Id)
				customServerGraphqlProxy.ServeHTTP(w, r)
				return
			} else {
				w.WriteHeader(http.StatusUnauthorized)
				return
			}
		}

		if userApiKeyHeader != "" && len(userApiKeyHeader) == 36 {
			autherUserIdResp, err := fetchAuthUsersIdFromSupabaseByUserApiKey(userApiKeyHeader)
			if err != nil {
				log.Println(err)
				w.WriteHeader(http.StatusUnauthorized)
				return
			}

			if xServerHeader == "supabase-graphql" {
				userResp, err := fetchUserFromSupabaseAsAdmin(autherUserIdResp.AuthUsersId)
				if err != nil {
					log.Println(err)
					w.WriteHeader(http.StatusUnauthorized)
					return
				}
				token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
					"sub":          userResp.Id,
					"iss":          fmt.Sprintf("%s/auth/v1", os.Getenv("SUPABASE_URL")),
					"aud":          userResp.Aud,
					"role":         userResp.Role,
					"email":        userResp.Email,
					"app_metadata": userResp.AppMetadata,
				})

				tokenString, err := token.SignedString([]byte(os.Getenv("SUPABASE_JWT_SECRET")))
				if err != nil {
					log.Println(err)
					w.WriteHeader(http.StatusInternalServerError)
					return
				}
				r.Header.Set("authorization", fmt.Sprintf("Bearer %s", tokenString))
				r.Header.Set("apikey", os.Getenv("SUPABASE_ANON_KEY"))
				supabaseGraphqlProxy.ServeHTTP(w, r)
				return
			} else if xServerHeader == "server" {
				r.Header.Set("authusersid", autherUserIdResp.AuthUsersId)
				customServerGraphqlProxy.ServeHTTP(w, r)
				return
			} else {
				w.WriteHeader(http.StatusUnauthorized)
				return
			}
		}

		w.WriteHeader(http.StatusUnauthorized)
	})

	fmt.Printf("Starting server on port %s\n", os.Getenv("GATEWAY_PORT"))
	log.Fatal(http.ListenAndServe(fmt.Sprintf("0.0.0.0:%s", os.Getenv("GATEWAY_PORT")), nil))
}
