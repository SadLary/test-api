export interface Post {
  id: number
  userId: number
  title: string
  body: string
}

export interface FetchPostsParams {
  page: number
  limit?: number
}

export interface UsePaginatedPostsReturn {
  posts: Post[]
  loadingMore: boolean
  loadMore: () => void
}