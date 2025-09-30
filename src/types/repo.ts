export interface Repository {
  id: number
  name: string
  dscription: string | null
  stargazers_count: number
  forks_count: number
  watchers_count: number
  visibility: 'pubilc' | 'private'
  owner: {
    login: string
    id: number
    avatar_url: string
  }
}
