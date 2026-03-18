import type { Post, FetchPostsParams } from '@/types/post'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export async function fetchPosts({ page, limit = 10 }: FetchPostsParams): Promise<Post[]> {
  const url = `${BASE_URL}/posts?_page=${page}&_limit=${limit}`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Ошибка сервера: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<Post[]>
}
