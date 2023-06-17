export type LinkedInCompanyProfile = {
  name: string
  founded: string
  sphere: string
  followers: number
  employeesAmountInLinkedin: string
  about: string
  website: string
  crunchbaseUrl: string
  industries: string
  hqLocation: string
  specialties: string
}

export type CompanyDataResponse = {
  url: string
  name: string
  founded: string
  sphere: string
  followers: number
  logo: string
  image: string
  employeesAmountInLinkedin: string
  about: string
  website: string
  locations: string[]
  employees: {
    img: string
    title: string
    subtitle: string
  }[]
  updates: {
    time: string
    text: string
    likes_count: number
    comments_count: number
  }[]
  show_more: string[]
  affiliated: {
    title: string
    subtitle: string
    location: string
    Links: string
  }[]
  browse_jobs: string[]
  company_id: string
  timestamp: string
  slogan: string
  crunchbase_url: string
  stock_info: string
  funding: string
  investors: string
  similarPages: string[]
  Website: string
  Industries: string
  'Company size': string
  Headquarters: string
  Type: string
  Specialties: string
} | null
