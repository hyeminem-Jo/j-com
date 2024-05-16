'use client'

import IcSaved from '@/app/(loggedIn)/_component/svg/IcSaved'
import IcSharePosts from '@/app/(loggedIn)/_component/svg/IcSharePosts'
import IcComment from '@/app/(loggedIn)/_component/svg/IcComment'
import IcLike from '@/app/(loggedIn)/_component/svg/IcLike'
import { useRouter } from 'next/navigation'
import { useCommentFormFocusStore } from '@/store/commentFormFocus'
import style from './actionButton.module.scss'

function ActionButton({ post, isLiked = true, isSaved = false, isPostDetail }) {
  const router = useRouter()

  const likeHandler = () => {}
  const sharePost = () => {}
  const savePost = () => {}

  const setIsFocus = useCommentFormFocusStore(
    (state: any) => state.setIsCommentFormFocus,
  )

  return (
    <ul className={style.actionButton}>
      <li className={style.actionButtonItem}>
        <button type="button" onClick={likeHandler}>
          <IcLike active={isLiked} />
        </button>
      </li>
      <li className={style.actionButtonItem}>
        <button
          type="button"
          onClick={() => {
            if (!isPostDetail) {
              // 홈에 있는 게시글일 때
              router.push(`${post?.User?.id}/p/${post?.postId}`)
            } else {
              // 게시글 상세 페이지나 모달일 때
              setIsFocus(true)
              console.log(setIsFocus)
            }
          }}
        >
          <IcComment />
          {/* TODO: 게시물의 상세페이지일 경우 댓글 버튼 눌럿을 때 댓글 폼에 focus */}
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
