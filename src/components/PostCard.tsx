import styles from './PostCard.module.css'
import { Post } from '@/types/post'

interface Props {
  post: Post
}

const PostCard = ({post}: Props) => {
  
  return (
    <article className={styles.card} data-testid="post-card">
      <header className={styles.header}>
        <span className={styles.userId} aria-label={`Пользователь ${post.userId}`}>
          User ${post.userId}
        </span>
        <span className={styles.postId} aria-label={`Пост №${post.id}`}>
          #{post.id}
        </span>
      </header>

      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}>{post.body}</p>
    </article>
  )
}

export default PostCard
