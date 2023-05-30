export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      associated_person: {
        Row: {
          associated_with: string | null
          avatar_url: string | null
          created_at: string | null
          email: string | null
          github_url: string | null
          id: string
          login: string | null
          name: string | null
          repository_count: number | null
          twitter_username: string | null
          website_url: string | null
        }
        Insert: {
          associated_with?: string | null
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          github_url?: string | null
          id?: string
          login?: string | null
          name?: string | null
          repository_count?: number | null
          twitter_username?: string | null
          website_url?: string | null
        }
        Update: {
          associated_with?: string | null
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          github_url?: string | null
          id?: string
          login?: string | null
          name?: string | null
          repository_count?: number | null
          twitter_username?: string | null
          website_url?: string | null
        }
      }
      organization: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          github_url: string | null
          id: string
          login: string | null
          name: string | null
          repository_count: number | null
          twitter_username: string | null
          website_url: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          github_url?: string | null
          id?: string
          login?: string | null
          name?: string | null
          repository_count?: number | null
          twitter_username?: string | null
          website_url?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          github_url?: string | null
          id?: string
          login?: string | null
          name?: string | null
          repository_count?: number | null
          twitter_username?: string | null
          website_url?: string | null
        }
      }
      project: {
        Row: {
          about: string | null
          contributor_count: number | null
          created_at: string | null
          eli5: string | null
          fork_count: number | null
          github_url: string | null
          id: string
          is_bookmarked: boolean | null
          issue_count: number | null
          name: string
          owned_by: string
          pull_request_count: number | null
          star_count: number | null
          star_history: number[] | null
          website_url: string | null
        }
        Insert: {
          about?: string | null
          contributor_count?: number | null
          created_at?: string | null
          eli5?: string | null
          fork_count?: number | null
          github_url?: string | null
          id?: string
          is_bookmarked?: boolean | null
          issue_count?: number | null
          name: string
          owned_by: string
          pull_request_count?: number | null
          star_count?: number | null
          star_history?: number[] | null
          website_url?: string | null
        }
        Update: {
          about?: string | null
          contributor_count?: number | null
          created_at?: string | null
          eli5?: string | null
          fork_count?: number | null
          github_url?: string | null
          id?: string
          is_bookmarked?: boolean | null
          issue_count?: number | null
          name?: string
          owned_by?: string
          pull_request_count?: number | null
          star_count?: number | null
          star_history?: number[] | null
          website_url?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
