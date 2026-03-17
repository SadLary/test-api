import type { FC } from 'react'
import styles from './PostCard.module.css'

const PostCard: FC = () => {
  
  return (
    <article className={styles.card} data-testid="post-card">
      <header className={styles.header}>
        <span className={styles.userId} aria-label={`Пользователь 2`}>
          User 2
        </span>
        <span className={styles.postId} aria-label={`Пост №1`}>
          #1
        </span>
      </header>

      <h2 className={styles.title}>Title</h2>
      <p className={styles.body}>Something about the post content goes here</p>
    </article>
  )
}

export default PostCard
