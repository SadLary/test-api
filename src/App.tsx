import type { FC } from 'react'
import { usePaginatedPosts } from '@/hooks/usePaginatedPosts'
import PostList from '@/components/PostList'
import styles from './App.module.css'
import Button from './components/Button'

const App: FC = () => {
  const { posts, loadingMore, loadMore, } = usePaginatedPosts()
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.title}>Feed</h1>
      </header>

      <main className={styles.main}>
        <PostList posts={posts}/>
        <Button onClick={loadMore} loading={loadingMore}>
          Загрузить ещё
        </Button>
      </main>
    </div>
  )
}

export default App
