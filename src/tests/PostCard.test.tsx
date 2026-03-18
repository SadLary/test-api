import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PostCard from '@/components/PostCard'
import type { Post } from '@/types/post'

const makePost = (overrides: Partial<Post> = {}): Post => ({
  id: 1,
  userId: 1,
  title: 'sunt aut facere repellat provident',
  body: 'quia et suscipit recusandae consequuntur expedita',
  ...overrides,
})

describe('PostCard', () => {
  it('has article element with data-testid', () => {
    render(<PostCard post={makePost()} />)
    expect(screen.getByTestId('post-card').tagName).toBe('ARTICLE')
  })
})
