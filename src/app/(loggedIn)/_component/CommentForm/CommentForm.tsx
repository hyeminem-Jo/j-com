'use client'

import React from 'react';
import Textarea from '@/app/_component/common/Textarea/Textarea'
import { useForm } from 'react-hook-form'
import { FormEventHandler, useCallback, useEffect } from 'react'
import EmojiButton from '@/app/(loggedIn)/_component/svg/EmojiButton'
import { TextButton } from '@/app/_component/common/Button/Button'
import style from './commentForm.module.scss'

type Props = {
  id: string | undefined,
  isCommentFocus: boolean,
  setIsCommentFocus: React.Dispatch<React.SetStateAction<boolean>>,
}

function CommentForm({ id, isCommentFocus, setIsCommentFocus }: Props) {
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

  useEffect(() => {
    console.log(isCommentFocus)
    if (isCommentFocus) {
      setFocus('comment')
      setIsCommentFocus(false)
    }
  }, [isCommentFocus])

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
