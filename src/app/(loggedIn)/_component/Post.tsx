import React from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import style from './post.module.scss'

dayjs.locale('ko')
dayjs.extend(relativeTime)

function Post() {
  const target = {
    User: {
      id: 'nawm_eeee',
      nickname: '혜진',
      image: '/user-01.jpg',
    },
    content: '리액트 공부는 재밌어...',
    createdAt: new Date(),
    Images: [],
  }

  const { User, content, createdAt, Images } = target
  return (
    <article className={style.post}>
      <div className={style.postUser}>
        <div className={style.user}>
          <span className={style.profileImage}>
            <Image
              src={User.image}
              width={40}
              height={40}
              alt={`${User.id}-profile-image`}
            />
          </span>
          <strong className={style.userName}>{User.id}</strong>
          <span className={style.dot}>•</span>
          <span className={style.date}>{dayjs(createdAt).fromNow(true)}</span>
        </div>
        <button type="button">
          <svg
            aria-label="옵션 더 보기"
            className="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>옵션 더 보기</title>
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </button>
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
