import type { FC } from 'react'
import PostCard from './PostCard'
import styles from './PostList.module.css'


const PostList: FC = () => {
  return (
    <section className={styles.grid} aria-label="Лента постов">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </section>
  )
}

export default PostList
