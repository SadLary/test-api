import { useEffect } from 'react'
import { usePostsStore } from '@/store/postsStore'
import type { UsePaginatedPostsReturn } from '@/types/post'

/**
 * Инициализирует загрузку при маунте и отдаёт срез стора
 * Бизнес-логика и состояние живут в postsStore
 */
export function usePaginatedPosts(): UsePaginatedPostsReturn {
  const { posts, loadingMore, loadInitial, loadMore } =
    usePostsStore()

  useEffect(() => {
    loadInitial()
  }, [])

  return { posts, loadingMore, loadMore, }
}
