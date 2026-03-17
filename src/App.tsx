import type { FC } from 'react'
import PostList from '@/components/PostList'
import styles from './App.module.css'

const App: FC = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.title}>Feed</h1>
      </header>

      <main className={styles.main}>
        <PostList />
      </main>
    </div>
  )
}

export default App
