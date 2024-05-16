'use client'

import Textarea from '@/app/_component/common/Textarea/Textarea'
import { useForm } from 'react-hook-form'
import { FormEventHandler, useCallback, useEffect } from 'react'
import EmojiButton from '@/app/(loggedIn)/_component/svg/EmojiButton'
import { TextButton } from '@/app/_component/common/Button/Button'
import { useCommentFormFocusStore } from '@/store/commentFormFocus'
import style from './commentForm.module.scss'

type Props = {
  id: string | undefined
}

function CommentForm({ id }: Props) {
  const {
    watch,
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
    setFocus,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      comment: '',
    },
  })

  const isFocus = useCommentFormFocusStore(
    (state: any) => state.isCommentFormFocus,
  )
  const setIsFocus = useCommentFormFocusStore(
    (state: any) => state.setIsCommentFormFocus,
  )

  useEffect(() => {
    if (isFocus) {
      setFocus('comment')
      setIsFocus(false)
    }
    setFocus('comment')
  }, [setFocus, isFocus])

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (data) => {
      console.log(data)
      alert(data)
      reset()
    },
    [watch()],
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.commentForm}>
      <EmojiButton size={13} color="#737373" />
      <Textarea
        name="comment"
        control={control}
        maxLength="1000"
        placeholder="댓글 달기..."
        size="sm"
        rows="1"
      />
      {isDirty && <TextButton>게시</TextButton>}
    </form>
  )
}

export default CommentForm
