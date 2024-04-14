'use client'

import IcSaved from '@/app/(loggedIn)/_component/svg/IcSaved'
import IcSharePosts from '@/app/(loggedIn)/_component/svg/IcSharePosts'
import IcComment from '@/app/(loggedIn)/_component/svg/IcComment'
import IcLike from '@/app/(loggedIn)/_component/svg/IcLike'
import style from './actionButton.module.scss'

function ActionButton({ isLiked = true, isSaved = false }) {
  const likeHandler = () => {}
  const commentOnPost = () => {}
  const sharePost = () => {}
  const savePost = () => {}

  return (
    <ul className={style.actionButton}>
      <li className={style.actionButtonItem}>
        <button type="button" onClick={likeHandler}>
          <IcLike active={isLiked} />
        </button>
      </li>
      <li className={style.actionButtonItem}>
        <button type="button" onClick={commentOnPost}>
          <IcComment />
        </button>
      </li>
      <li className={style.actionButtonItem}>
        <button type="button" onClick={sharePost}>
          <IcSharePosts />
        </button>
      </li>
      <li className={style.actionButtonItem}>
        <button type="button" onClick={savePost}>
          <IcSaved size={24} active={isSaved} />
        </button>
      </li>
    </ul>
  )
}

export default ActionButton
