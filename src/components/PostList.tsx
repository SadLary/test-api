import PostCard from './PostCard'
import type { Post } from '@/types/post'
import styles from './PostList.module.css'

interface Props {
  posts: Post[]
}

const PostList = ({posts}:Props) => {
  return (
    <section className={styles.grid} aria-label="Лента постов">
      {posts.map(post=> (
        <PostCard key={post.id} post={post}/>
      ))}
    </section>
  )
}

export default PostList
