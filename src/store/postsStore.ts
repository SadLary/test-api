import { create } from 'zustand'
import { fetchPosts } from '@/api/posts'
import type { Post } from '@/types/post'

const POSTS_PER_PAGE = 10

interface PostsState {
  posts: Post[]
  loading: boolean
  loadingMore: boolean
  error: string | null
  currentPage: number
  hasMore: boolean
}

interface PostsActions {
  loadInitial: () => Promise<void>
  loadMore: () => Promise<void>
  retry: () => Promise<void>
}

type PostsStore = PostsState & PostsActions

const initialState: PostsState = {
  posts: [],
  loading: false,
  loadingMore: false,
  error: null,
  currentPage: 1,
  hasMore: true,
}

export const usePostsStore = create<PostsStore>()((set, get) => ({
  ...initialState,

  loadInitial: async () => {
    set({ loading: true, error: null })

    try {
      const data = await fetchPosts({ page: 1, limit: POSTS_PER_PAGE })
      set({
        posts: data,
        loading: false,
        currentPage: 1,
        hasMore: data.length === POSTS_PER_PAGE,
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Неизвестная ошибка'
      set({ loading: false, error: `Ошибка загрузки. ${message}` })
    }
  },

  loadMore: async () => {
    const { currentPage, loadingMore, hasMore } = get()
    if (loadingMore || !hasMore) return

    const nextPage = currentPage + 1
    set({ loadingMore: true, error: null })

    try {
      const data = await fetchPosts({ page: nextPage, limit: POSTS_PER_PAGE })
      set(state => ({
        posts: [...state.posts, ...data],
        loadingMore: false,
        currentPage: nextPage,
        hasMore: data.length === POSTS_PER_PAGE,
      }))
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Неизвестная ошибка'
      set({ loadingMore: false, error: `Ошибка загрузки. ${message}` })
    }
  },

  retry: async () => {
    set({ ...initialState })
    await get().loadInitial()
  },
}))
