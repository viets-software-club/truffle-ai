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

	"github.com/dgrijalva/jwt-go"
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

func fetchAuthUsersIdFromSupabase(userApiKey string) (*AuthUsersIdResponse, error) {
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
	encodedAuthUsersId := url.QueryEscape(authUsersId)
	req, err := http.NewRequest("GET", fmt.Sprintf("%s/auth/v1/admin/users/%s", os.Getenv("SUPABASE_URL"), encodedAuthUsersId), nil)
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
	fmt.Printf("cu GraphQL URL: %s\n", customServerGraphqlUrl)
	supabaseGraphqlProxy := httputil.NewSingleHostReverseProxy(supabaseGraphqlUrl)
	supabaseGraphqlProxy.Director = func(req *http.Request) {
		req.URL.Scheme = supabaseGraphqlUrl.Scheme
		req.URL.Host = supabaseGraphqlUrl.Host
		req.URL.Path = supabaseGraphqlUrl.Path
	}
	customServerGraphqlProxy := httputil.NewSingleHostReverseProxy(customServerGraphqlUrl)
	customServerGraphqlProxy.Director = func(req *http.Request) {
		req.URL.Scheme = customServerGraphqlUrl.Scheme
		req.URL.Host = customServerGraphqlUrl.Host
		req.URL.Path = customServerGraphqlUrl.Path
	}
	customServerGraphqlProxy.ErrorHandler = func(w http.ResponseWriter, r *http.Request, err error) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, x-server, apikey")

		log.Printf("Error proxying request2: %v", err)
		http.Error(w, "Error proxying request", http.StatusInternalServerError)
	}
	customServerGraphqlProxy.ModifyResponse = func(r *http.Response) error {
		r.Header.Set("Access-Control-Allow-Origin", "*")
		r.Header.Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		r.Header.Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, x-server, apikey")

		log.Printf("Response: %d %s", r.StatusCode, r.Status)

		// Log all response headers
		for name, values := range r.Header {
			// Loop over all values for the name.
			for _, value := range values {
				log.Printf("%s: %s", name, value)
			}
		}

		return nil
	}
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// fmt.Printf("Received %s request for %s\n", r.Method, r.URL)
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
			w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, x-server, apikey")

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
				fmt.Printf("%+v\n", resp)
				r.Header.Set("authusersid", resp.Id)
				fmt.Println("check")
				fmt.Printf("%+v\n", r)
				customServerGraphqlProxy.ServeHTTP(w, r)
				return
			} else {
				w.WriteHeader(http.StatusUnauthorized)
				return
			}
		}

		if userApiKeyHeader != "" && len(userApiKeyHeader) == 36 {
			autherUserIdResp, err := fetchAuthUsersIdFromSupabase(userApiKeyHeader)
			if err != nil {
				log.Println(err)
				w.WriteHeader(http.StatusUnauthorized)
				return
			}

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
			r.Header.Set("authusersid", userResp.Id)

			if xServerHeader == "supabase-graphql" {
				supabaseGraphqlProxy.ServeHTTP(w, r)
				return
			} else if xServerHeader == "server" {
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
