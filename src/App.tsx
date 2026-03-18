import type { FC } from 'react'
import { usePaginatedPosts } from '@/hooks/usePaginatedPosts'
import PostList from '@/components/PostList'
import styles from './App.module.css'
import Button from './components/Button'

const App: FC = () => {
  const { posts, loading, loadingMore, error, hasMore, loadMore, retry} = usePaginatedPosts()
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.title}>Feed</h1>
      </header>

      <main className={styles.main}>
        {loading ? (

          <div className={styles.loader} role="status" aria-label="Загрузка постов">
            <span className={styles.loaderSpinner} />
            <span>Загрузка...</span>
          </div>

        ) : error && posts.length === 0 ? (
          
          <div className={styles.errorState} role="alert">
            <p className={styles.errorText}>{error}</p>
            <Button variant="ghost" onClick={retry}>
              Попробовать снова
            </Button>
          </div>
          
        ) : (
          <>
            <PostList posts={posts} />

            {error && (
              <p className={styles.errorInline} role="alert">
                {error}
              </p>
            )}

            <div className={styles.actions}>
              {hasMore ? (
                <Button onClick={loadMore} loading={loadingMore}>
                  Загрузить ещё
                </Button>
              ) : (
                <p className={styles.endMessage}>— все посты загружены —</p>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default App
