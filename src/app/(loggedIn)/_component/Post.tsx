import React from 'react'
import style from './post.module.scss'
import Image from "next/image";

function Post() {
  const target = {
    User: {
      id: 'h._jinny',
      nickname: '혜진',
      image: '/profile_image.jpg',
    },
    content: '리액트 공부는 재밌어...',
    createdAt: new Date(),
    Images: [],
  }

  const {User, content, createdAt, Images} = target
  return (
    <article className={style.post}>
      <div className={style.postUser}>
        <div>
          <Image src={User.image} width={50} height={50} alt={`${User.id}-profile-image`} />
        </div>
      </div>
      <div className={style.postImage}></div>
      <div className={style.postBottom}>
        <div className={style.like}></div>
        <div className={style.postContent}></div>
        <div className={style.comments}></div>
        <div className={style.commentForm}></div>
      </div>
    </article>
  )
}

export default Post
