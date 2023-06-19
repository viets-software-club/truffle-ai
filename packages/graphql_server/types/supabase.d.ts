export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      allowed_users: {
        Row: {
          created_at: string | null
          email: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: number
        }
        Relationships: []
      }
      associated_person: {
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
        Relationships: []
      }
      bookmark: {
        Row: {
          category: string | null
          created_at: string | null
          id: string
          project_id: string
          user_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          id?: string
          project_id: string
          user_id: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          id?: string
          project_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'bookmark_project_id_fkey'
            columns: ['project_id']
            referencedRelation: 'project'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'bookmark_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      founded_by: {
        Row: {
          created_at: string | null
          founder_id: string
          id: number
          project_id: string
        }
        Insert: {
          created_at?: string | null
          founder_id: string
          id?: number
          project_id: string
        }
        Update: {
          created_at?: string | null
          founder_id?: string
          id?: number
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'founded_by_founder_id_fkey'
            columns: ['founder_id']
            referencedRelation: 'associated_person'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'founded_by_project_id_fkey'
            columns: ['project_id']
            referencedRelation: 'project'
            referencedColumns: ['id']
          }
        ]
      }
      organization: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          crunchbase: string | null
          email: string | null
          founded: number | null
          github_url: string | null
          hq_location: string | null
          id: string
          industries: string | null
          linkedin_about: string | null
          linkedin_followers: number | null
          linkedin_updates: Json[] | null
          linkedin_url: string | null
          linkedin_website_url: string | null
          login: string | null
          name: string | null
          number_of_employees: number | null
          repository_count: number | null
          specialties: string | null
          twitter_username: string | null
          website_url: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          crunchbase?: string | null
          email?: string | null
          founded?: number | null
          github_url?: string | null
          hq_location?: string | null
          id?: string
          industries?: string | null
          linkedin_about?: string | null
          linkedin_followers?: number | null
          linkedin_updates?: Json[] | null
          linkedin_url?: string | null
          linkedin_website_url?: string | null
          login?: string | null
          name?: string | null
          number_of_employees?: number | null
          repository_count?: number | null
          specialties?: string | null
          twitter_username?: string | null
          website_url?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          crunchbase?: string | null
          email?: string | null
          founded?: number | null
          github_url?: string | null
          hq_location?: string | null
          id?: string
          industries?: string | null
          linkedin_about?: string | null
          linkedin_followers?: number | null
          linkedin_updates?: Json[] | null
          linkedin_url?: string | null
          linkedin_website_url?: string | null
          login?: string | null
          name?: string | null
          number_of_employees?: number | null
          repository_count?: number | null
          specialties?: string | null
          twitter_username?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      project: {
        Row: {
          about: string | null
          contributor_count: number | null
          created_at: string | null
          eli5: string | null
          fork_count: number | null
          github_url: string | null
          hackernews_sentiment: string | null
          hackernews_stories: string[] | null
          id: string
          is_bookmarked: boolean | null
          is_trending_daily: boolean | null
          is_trending_monthly: boolean | null
          is_trending_weekly: boolean | null
          issue_count: number | null
          languages: Json[] | null
          name: string | null
          owning_organization: string | null
          owning_person: string | null
          pull_request_count: number | null
          star_count: number | null
          star_history: Json[] | null
          website_url: string | null
        }
        Insert: {
          about?: string | null
          contributor_count?: number | null
          created_at?: string | null
          eli5?: string | null
          fork_count?: number | null
          github_url?: string | null
          hackernews_sentiment?: string | null
          hackernews_stories?: string[] | null
          id?: string
          is_bookmarked?: boolean | null
          is_trending_daily?: boolean | null
          is_trending_monthly?: boolean | null
          is_trending_weekly?: boolean | null
          issue_count?: number | null
          languages?: Json[] | null
          name?: string | null
          owning_organization?: string | null
          owning_person?: string | null
          pull_request_count?: number | null
          star_count?: number | null
          star_history?: Json[] | null
          website_url?: string | null
        }
        Update: {
          about?: string | null
          contributor_count?: number | null
          created_at?: string | null
          eli5?: string | null
          fork_count?: number | null
          github_url?: string | null
          hackernews_sentiment?: string | null
          hackernews_stories?: string[] | null
          id?: string
          is_bookmarked?: boolean | null
          is_trending_daily?: boolean | null
          is_trending_monthly?: boolean | null
          is_trending_weekly?: boolean | null
          issue_count?: number | null
          languages?: Json[] | null
          name?: string | null
          owning_organization?: string | null
          owning_person?: string | null
          pull_request_count?: number | null
          star_count?: number | null
          star_history?: Json[] | null
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'project_owning_organization_fkey'
            columns: ['owning_organization']
            referencedRelation: 'organization'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'project_owning_person_fkey'
            columns: ['owning_person']
            referencedRelation: 'associated_person'
            referencedColumns: ['id']
          }
        ]
      }
      testTable: {
        Row: {
          created_at: string | null
          id: string
          name: string | null
          testColumn: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name?: string | null
          testColumn?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string | null
          testColumn?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'testTable_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_user:
        | {
            Args: {
              algo: string
            }
            Returns: boolean
          }
        | {
            Args: Record<PropertyKey, never>
            Returns: boolean
          }
      delete_user2:
        | {
            Args: {
              algo: string
            }
            Returns: boolean
          }
        | {
            Args: Record<PropertyKey, never>
            Returns: boolean
          }
      test: {
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
