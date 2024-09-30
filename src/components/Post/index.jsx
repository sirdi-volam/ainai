import React from 'react'
import './Post.css'
import { PostSkeleton } from './Skeleton'

export const Post = ({
  _id,
  title,
  createAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  if (isLoading) {
    return <PostSkeleton />
  }

  return (
    <div className='post'>
      {isEditable && (
        <div className='post__edit'>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 3.5H14.25M14.25 3.5L13.5 4.25M14.25 3.5L13.5 2.75"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {imageUrl && (
        <img
          className='post__image'
          src={imageUrl}
          alt={title}
        />
      )}

      <h2 className='post__title'>
        {title}
      </h2>

      <div className='post__footer'>
        <ul className='post__tags'>
          {tags.map((name) => (
            <li
              key={name}
              className='post__tag'
            >
              {name}
            </li>
          ))}
        </ul>

        <div className='post__date'>
          {createAt}
        </div>
      </div>
    </div>
  )
}


