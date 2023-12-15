export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      github_fork_history: {
        Row: {
          _created_at: string
          amount: number
          fork_date: string
          github_fork_history_id: number
          github_repo_id: number
        }
        Insert: {
          _created_at?: string
          amount: number
          fork_date: string
          github_fork_history_id?: number
          github_repo_id: number
        }
        Update: {
          _created_at?: string
          amount?: number
          fork_date?: string
          github_fork_history_id?: number
          github_repo_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "github_fork_history_github_repo_id_fkey"
            columns: ["github_repo_id"]
            isOneToOne: false
            referencedRelation: "github_repo"
            referencedColumns: ["github_repo_id"]
          }
        ]
      }
      github_issue_history: {
        Row: {
          _created_at: string
          amount: number
          github_issue_history_id: number
          github_repo_id: number
          issue_date: string
        }
        Insert: {
          _created_at?: string
          amount: number
          github_issue_history_id?: number
          github_repo_id: number
          issue_date: string
        }
        Update: {
          _created_at?: string
          amount?: number
          github_issue_history_id?: number
          github_repo_id?: number
          issue_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "github_issue_history_github_repo_id_fkey"
            columns: ["github_repo_id"]
            isOneToOne: false
            referencedRelation: "github_repo"
            referencedColumns: ["github_repo_id"]
          }
        ]
      }
      github_language: {
        Row: {
          _created_at: string
          color: string
          github_language_id: number
          name: string
        }
        Insert: {
          _created_at?: string
          color: string
          github_language_id?: number
          name: string
        }
        Update: {
          _created_at?: string
          color?: string
          github_language_id?: number
          name?: string
        }
        Relationships: []
      }
      github_organization: {
        Row: {
          _created_at: string
          created_at: string
          description: string
          description_html: string
          email: string
          github_organization_id: number
          name: string
          twitter_username: string
          website_url: string
        }
        Insert: {
          _created_at?: string
          created_at: string
          description: string
          description_html: string
          email: string
          github_organization_id: number
          name: string
          twitter_username: string
          website_url: string
        }
        Update: {
          _created_at?: string
          created_at?: string
          description?: string
          description_html?: string
          email?: string
          github_organization_id?: number
          name?: string
          twitter_username?: string
          website_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "github_organization_github_organization_id_fkey"
            columns: ["github_organization_id"]
            isOneToOne: true
            referencedRelation: "github_owner"
            referencedColumns: ["github_owner_id"]
          }
        ]
      }
      github_owner: {
        Row: {
          _created_at: string
          avatar_url: string
          github_owner_id: number
          login: string
          repositories_total_count: number
          type: string
          url: string
        }
        Insert: {
          _created_at?: string
          avatar_url: string
          github_owner_id?: number
          login: string
          repositories_total_count: number
          type: string
          url: string
        }
        Update: {
          _created_at?: string
          avatar_url?: string
          github_owner_id?: number
          login?: string
          repositories_total_count?: number
          type?: string
          url?: string
        }
        Relationships: []
      }
      github_repo: {
        Row: {
          _created_at: string
          created_at: string
          description: string
          fork_count: number
          github_owner_id: number
          github_repo_id: number
          homepage_url: string
          is_in_organization: boolean
          issues_total_count: number
          name: string
          pull_requests_total_count: number
          stargazer_count: number
          url: string
        }
        Insert: {
          _created_at?: string
          created_at: string
          description: string
          fork_count: number
          github_owner_id: number
          github_repo_id?: number
          homepage_url: string
          is_in_organization: boolean
          issues_total_count: number
          name: string
          pull_requests_total_count: number
          stargazer_count: number
          url: string
        }
        Update: {
          _created_at?: string
          created_at?: string
          description?: string
          fork_count?: number
          github_owner_id?: number
          github_repo_id?: number
          homepage_url?: string
          is_in_organization?: boolean
          issues_total_count?: number
          name?: string
          pull_requests_total_count?: number
          stargazer_count?: number
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "github_repo_github_owner_id_fkey"
            columns: ["github_owner_id"]
            isOneToOne: false
            referencedRelation: "github_owner"
            referencedColumns: ["github_owner_id"]
          }
        ]
      }
      github_repo_and_github_language: {
        Row: {
          _created_at: string
          github_language_id: number
          github_repo_id: number
        }
        Insert: {
          _created_at?: string
          github_language_id: number
          github_repo_id: number
        }
        Update: {
          _created_at?: string
          github_language_id?: number
          github_repo_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "github_repo_and_github_language_github_language_id_fkey"
            columns: ["github_language_id"]
            isOneToOne: false
            referencedRelation: "github_language"
            referencedColumns: ["github_language_id"]
          },
          {
            foreignKeyName: "github_repo_and_github_language_github_repo_id_fkey"
            columns: ["github_repo_id"]
            isOneToOne: false
            referencedRelation: "github_repo"
            referencedColumns: ["github_repo_id"]
          }
        ]
      }
      github_repo_contributor: {
        Row: {
          _created_at: string
          contributions: number
          github_owner_id: number
          github_repo_id: number
        }
        Insert: {
          _created_at?: string
          contributions: number
          github_owner_id: number
          github_repo_id: number
        }
        Update: {
          _created_at?: string
          contributions?: number
          github_owner_id?: number
          github_repo_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "github_repo_contributor_github_owner_id_fkey"
            columns: ["github_owner_id"]
            isOneToOne: false
            referencedRelation: "github_owner"
            referencedColumns: ["github_owner_id"]
          },
          {
            foreignKeyName: "github_repo_contributor_github_repo_id_fkey"
            columns: ["github_repo_id"]
            isOneToOne: false
            referencedRelation: "github_repo"
            referencedColumns: ["github_repo_id"]
          }
        ]
      }
      github_repo_fork: {
        Row: {
          _created_at: string
          github_repo_fork_id: number
          github_repo_id: number
        }
        Insert: {
          _created_at?: string
          github_repo_fork_id: number
          github_repo_id: number
        }
        Update: {
          _created_at?: string
          github_repo_fork_id?: number
          github_repo_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "github_repo_fork_github_repo_id_fkey"
            columns: ["github_repo_id"]
            isOneToOne: false
            referencedRelation: "github_repo"
            referencedColumns: ["github_repo_id"]
          }
        ]
      }
      github_repo_issue: {
        Row: {
          _created_at: string
          body: string
          created_at: string
          github_repo_id: number
          github_repo_issue_id: number
          html_url: string
          state: string
          title: string
        }
        Insert: {
          _created_at?: string
          body: string
          created_at: string
          github_repo_id: number
          github_repo_issue_id?: number
          html_url: string
          state: string
          title: string
        }
        Update: {
          _created_at?: string
          body?: string
          created_at?: string
          github_repo_id?: number
          github_repo_issue_id?: number
          html_url?: string
          state?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "github_repo_issue_github_repo_id_fkey"
            columns: ["github_repo_id"]
            isOneToOne: false
            referencedRelation: "github_repo"
            referencedColumns: ["github_repo_id"]
          }
        ]
      }
      github_star: {
        Row: {
          _created_at: string
          github_repo_id: number
          github_star_id: number
          github_user_id: number
          starred_at: string
        }
        Insert: {
          _created_at?: string
          github_repo_id: number
          github_star_id?: number
          github_user_id: number
          starred_at: string
        }
        Update: {
          _created_at?: string
          github_repo_id?: number
          github_star_id?: number
          github_user_id?: number
          starred_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "github_star_github_repo_id_fkey"
            columns: ["github_repo_id"]
            isOneToOne: false
            referencedRelation: "github_repo"
            referencedColumns: ["github_repo_id"]
          },
          {
            foreignKeyName: "github_star_github_user_id_fkey"
            columns: ["github_user_id"]
            isOneToOne: false
            referencedRelation: "github_user"
            referencedColumns: ["github_user_id"]
          }
        ]
      }
      github_star_history: {
        Row: {
          _created_at: string
          amount: number
          github_repo_id: number
          github_star_history_id: number
          star_date: string
        }
        Insert: {
          _created_at?: string
          amount: number
          github_repo_id: number
          github_star_history_id?: number
          star_date: string
        }
        Update: {
          _created_at?: string
          amount?: number
          github_repo_id?: number
          github_star_history_id?: number
          star_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "github_star_history_github_repo_id_fkey"
            columns: ["github_repo_id"]
            isOneToOne: false
            referencedRelation: "github_repo"
            referencedColumns: ["github_repo_id"]
          }
        ]
      }
      github_trending: {
        Row: {
          _created_at: string
          date_range: string
          github_repo_id: number
          github_trending_id: number
          language: string
        }
        Insert: {
          _created_at?: string
          date_range: string
          github_repo_id: number
          github_trending_id?: number
          language: string
        }
        Update: {
          _created_at?: string
          date_range?: string
          github_repo_id?: number
          github_trending_id?: number
          language?: string
        }
        Relationships: [
          {
            foreignKeyName: "github_trending_github_repo_id_fkey"
            columns: ["github_repo_id"]
            isOneToOne: false
            referencedRelation: "github_repo"
            referencedColumns: ["github_repo_id"]
          }
        ]
      }
      github_user: {
        Row: {
          _created_at: string
          bio: string
          bio_html: string
          company: string
          company_html: string
          created_at: string
          email: string
          followers_total_count: number
          github_user_id: number
          name: string
          twitter_username: string
          website_url: string
        }
        Insert: {
          _created_at?: string
          bio: string
          bio_html: string
          company: string
          company_html: string
          created_at: string
          email: string
          followers_total_count: number
          github_user_id: number
          name: string
          twitter_username: string
          website_url: string
        }
        Update: {
          _created_at?: string
          bio?: string
          bio_html?: string
          company?: string
          company_html?: string
          created_at?: string
          email?: string
          followers_total_count?: number
          github_user_id?: number
          name?: string
          twitter_username?: string
          website_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "github_user_github_user_id_fkey"
            columns: ["github_user_id"]
            isOneToOne: true
            referencedRelation: "github_owner"
            referencedColumns: ["github_owner_id"]
          }
        ]
      }
      hackernews_story: {
        Row: {
          _created_at: string
          author: string
          comments: string
          hackernews_story_id: number
          points: number
          story_text: string
          title: string
          url: string
        }
        Insert: {
          _created_at?: string
          author: string
          comments: string
          hackernews_story_id?: number
          points: number
          story_text: string
          title: string
          url: string
        }
        Update: {
          _created_at?: string
          author?: string
          comments?: string
          hackernews_story_id?: number
          points?: number
          story_text?: string
          title?: string
          url?: string
        }
        Relationships: []
      }
      hackernews_story_and_hackernews_tag: {
        Row: {
          _created_at: string
          hackernews_story_id: number
          hackernews_tag_id: number
        }
        Insert: {
          _created_at?: string
          hackernews_story_id: number
          hackernews_tag_id: number
        }
        Update: {
          _created_at?: string
          hackernews_story_id?: number
          hackernews_tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "hackernews_story_and_hackernews_tag_hackernews_story_fkey"
            columns: ["hackernews_story_id"]
            isOneToOne: false
            referencedRelation: "hackernews_story"
            referencedColumns: ["hackernews_story_id"]
          },
          {
            foreignKeyName: "hackernews_story_and_hackernews_tag_hackernews_tag_id_fkey"
            columns: ["hackernews_tag_id"]
            isOneToOne: false
            referencedRelation: "hackernews_tag"
            referencedColumns: ["hackernews_tag_id"]
          }
        ]
      }
      hackernews_tag: {
        Row: {
          _created_at: string
          hackernews_tag_id: number
          title: string
        }
        Insert: {
          _created_at?: string
          hackernews_tag_id?: number
          title: string
        }
        Update: {
          _created_at?: string
          hackernews_tag_id?: number
          title?: string
        }
        Relationships: []
      }
      linkedin_profile_search: {
        Row: {
          _created_at: string
          about: string
          followers: number
          language: string
          linkedin_profile_search_id: number
          name: string
          sphere: string
          url: string
        }
        Insert: {
          _created_at?: string
          about: string
          followers: number
          language: string
          linkedin_profile_search_id?: number
          name: string
          sphere: string
          url: string
        }
        Update: {
          _created_at?: string
          about?: string
          followers?: number
          language?: string
          linkedin_profile_search_id?: number
          name?: string
          sphere?: string
          url?: string
        }
        Relationships: []
      }
      linkedin_profile_search_update: {
        Row: {
          _created_at: string
          comments_count: number
          likes_count: number
          linkedin_profile_search_id: number
          linkedin_profile_search_update_id: number
          title: string
          update_text: string
          update_time: string
        }
        Insert: {
          _created_at?: string
          comments_count: number
          likes_count: number
          linkedin_profile_search_id: number
          linkedin_profile_search_update_id?: number
          title: string
          update_text: string
          update_time: string
        }
        Update: {
          _created_at?: string
          comments_count?: number
          likes_count?: number
          linkedin_profile_search_id?: number
          linkedin_profile_search_update_id?: number
          title?: string
          update_text?: string
          update_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "linkedin_profile_search_update_linkedin_profile_search_id_fkey"
            columns: ["linkedin_profile_search_id"]
            isOneToOne: false
            referencedRelation: "linkedin_profile_search"
            referencedColumns: ["linkedin_profile_search_id"]
          }
        ]
      }
      project_bookmark: {
        Row: {
          _created_at: string
          project_bookmark_id: number
          project_repo_id: number
          user_id: string
        }
        Insert: {
          _created_at?: string
          project_bookmark_id?: number
          project_repo_id: number
          user_id: string
        }
        Update: {
          _created_at?: string
          project_bookmark_id?: number
          project_repo_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_bookmark_project_repo_id"
            columns: ["project_repo_id"]
            isOneToOne: false
            referencedRelation: "project_repo"
            referencedColumns: ["project_repo_id"]
          },
          {
            foreignKeyName: "project_bookmark_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      project_category: {
        Row: {
          name: string
          project_category_id: number
          user_id: string
        }
        Insert: {
          name: string
          project_category_id?: number
          user_id: string
        }
        Update: {
          name?: string
          project_category_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_category_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      project_category_and_project_bookmark: {
        Row: {
          project_bookmark_id: number
          project_category_id: number
        }
        Insert: {
          project_bookmark_id: number
          project_category_id: number
        }
        Update: {
          project_bookmark_id?: number
          project_category_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_category_and_project_bookmark_project_bookmark_id_fkey"
            columns: ["project_bookmark_id"]
            isOneToOne: false
            referencedRelation: "project_bookmark"
            referencedColumns: ["project_bookmark_id"]
          },
          {
            foreignKeyName: "project_category_and_project_bookmark_project_category_id_fkey"
            columns: ["project_category_id"]
            isOneToOne: false
            referencedRelation: "project_category"
            referencedColumns: ["project_category_id"]
          }
        ]
      }
      project_repo: {
        Row: {
          _created_at: string
          github_repo_id: number
          note: string
          project_repo_id: number
          project_repo_metadata_id: number
        }
        Insert: {
          _created_at?: string
          github_repo_id: number
          note: string
          project_repo_id?: number
          project_repo_metadata_id: number
        }
        Update: {
          _created_at?: string
          github_repo_id?: number
          note?: string
          project_repo_id?: number
          project_repo_metadata_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_repo_github_repo_id_fkey"
            columns: ["github_repo_id"]
            isOneToOne: false
            referencedRelation: "github_repo"
            referencedColumns: ["github_repo_id"]
          },
          {
            foreignKeyName: "project_repo_project_repo_metadata_id_fkey"
            columns: ["project_repo_metadata_id"]
            isOneToOne: false
            referencedRelation: "project_repo_metadata"
            referencedColumns: ["project_repo_metadata_id"]
          }
        ]
      }
      project_repo_and_hackernews_story: {
        Row: {
          _created_at: string
          hackernews_story_id: number
          project_repo_id: number
        }
        Insert: {
          _created_at?: string
          hackernews_story_id: number
          project_repo_id: number
        }
        Update: {
          _created_at?: string
          hackernews_story_id?: number
          project_repo_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_repo_and_hackernews_story_hackernews_story_id_fkey"
            columns: ["hackernews_story_id"]
            isOneToOne: false
            referencedRelation: "hackernews_story"
            referencedColumns: ["hackernews_story_id"]
          },
          {
            foreignKeyName: "project_repo_and_hackernews_story_project_repo_id_fkey"
            columns: ["project_repo_id"]
            isOneToOne: false
            referencedRelation: "project_repo"
            referencedColumns: ["project_repo_id"]
          }
        ]
      }
      project_repo_and_linkedin_profile_search: {
        Row: {
          _created_at: string
          linkedin_profile_search_id: number
          project_repo_id: number
        }
        Insert: {
          _created_at?: string
          linkedin_profile_search_id: number
          project_repo_id: number
        }
        Update: {
          _created_at?: string
          linkedin_profile_search_id?: number
          project_repo_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_repo_and_linkedin_profile_search_linkedin_search_id_fke"
            columns: ["linkedin_profile_search_id"]
            isOneToOne: false
            referencedRelation: "linkedin_profile_search"
            referencedColumns: ["linkedin_profile_search_id"]
          },
          {
            foreignKeyName: "project_repo_and_linkedin_profile_search_project_repo_id_fkey"
            columns: ["project_repo_id"]
            isOneToOne: false
            referencedRelation: "project_repo"
            referencedColumns: ["project_repo_id"]
          }
        ]
      }
      project_repo_and_twitter_search: {
        Row: {
          _created_at: string
          project_repo_id: number
          twitter_search_id: number
        }
        Insert: {
          _created_at?: string
          project_repo_id: number
          twitter_search_id: number
        }
        Update: {
          _created_at?: string
          project_repo_id?: number
          twitter_search_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_repo_and_twitter_search_project_repo_id_fkey"
            columns: ["project_repo_id"]
            isOneToOne: false
            referencedRelation: "project_repo"
            referencedColumns: ["project_repo_id"]
          },
          {
            foreignKeyName: "project_repo_and_twitter_search_twitter_search_id_fkey"
            columns: ["twitter_search_id"]
            isOneToOne: false
            referencedRelation: "twitter_search"
            referencedColumns: ["twitter_search_id"]
          }
        ]
      }
      project_repo_metadata: {
        Row: {
          _created_at: string
          hackernews_eli5: string
          project_repo_metadata_id: number
          repo_eli5: string
        }
        Insert: {
          _created_at?: string
          hackernews_eli5: string
          project_repo_metadata_id?: number
          repo_eli5: string
        }
        Update: {
          _created_at?: string
          hackernews_eli5?: string
          project_repo_metadata_id?: number
          repo_eli5?: string
        }
        Relationships: []
      }
      twitter_search: {
        Row: {
          _created_at: string
          created_at: string
          full_text: string
          twitter_search_id: number
        }
        Insert: {
          _created_at?: string
          created_at: string
          full_text: string
          twitter_search_id?: number
        }
        Update: {
          _created_at?: string
          created_at?: string
          full_text?: string
          twitter_search_id?: number
        }
        Relationships: []
      }
      twitter_search_and_twitter_user: {
        Row: {
          _created_at: string
          twitter_search_id: number
          twitter_user_id: number
        }
        Insert: {
          _created_at?: string
          twitter_search_id: number
          twitter_user_id: number
        }
        Update: {
          _created_at?: string
          twitter_search_id?: number
          twitter_user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "twitter_search_id_fkey"
            columns: ["twitter_search_id"]
            isOneToOne: false
            referencedRelation: "twitter_search"
            referencedColumns: ["twitter_search_id"]
          },
          {
            foreignKeyName: "twitter_user_id_fkey"
            columns: ["twitter_user_id"]
            isOneToOne: false
            referencedRelation: "twitter_user"
            referencedColumns: ["twitter_user_id"]
          }
        ]
      }
      twitter_user: {
        Row: {
          _created_at: string
          description: string
          followers_count: number
          location: string
          name: string
          screen_name: string
          twitter_user_id: number
          url: string
        }
        Insert: {
          _created_at?: string
          description: string
          followers_count: number
          location: string
          name: string
          screen_name: string
          twitter_user_id?: number
          url: string
        }
        Update: {
          _created_at?: string
          description?: string
          followers_count?: number
          location?: string
          name?: string
          screen_name?: string
          twitter_user_id?: number
          url?: string
        }
        Relationships: []
      }
      user_admin: {
        Row: {
          _created_at: string
          user_id: string
        }
        Insert: {
          _created_at?: string
          user_id: string
        }
        Update: {
          _created_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_admin_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_api_key: {
        Row: {
          _created_at: string
          key: string
          user_api_key_id: number
          user_id: string
        }
        Insert: {
          _created_at?: string
          key?: string
          user_api_key_id?: number
          user_id: string
        }
        Update: {
          _created_at?: string
          key?: string
          user_api_key_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_api_key_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_whitelist: {
        Row: {
          _created_at: string | null
          type: string
          user_whitelist_id: number
          value: string | null
        }
        Insert: {
          _created_at?: string | null
          type: string
          user_whitelist_id?: number
          value?: string | null
        }
        Update: {
          _created_at?: string | null
          type?: string
          user_whitelist_id?: number
          value?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_user: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
