'use client'

import React from 'react';
import Textarea from '@/app/_component/common/Textarea/Textarea'
import { useForm } from 'react-hook-form'
import { FormEventHandler, useCallback, useEffect } from 'react'
import EmojiButton from '@/app/(loggedIn)/_component/svg/Emoji/EmojiButton'
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
    setValue,
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

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (data) => {
      console.log(data)
      alert(data)
      reset()
    },
    [watch()],
  )

  useEffect(() => {
    console.log('부모 value: ', watch('comment'))
  }, [watch('comment')])

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={style.commentForm}>
      {/*<EmojiButton size={20} formName="comment" setValue={setValue} value={watch('comment')} />*/}
      <EmojiButton size={13} color="#737373" formName="comment" setValue={setValue} value={watch('comment')} />
      <Textarea
        name="comment"
        control={control}
        maxLength="1000"
        placeholder="댓글 달기..."
        size="sm"
        rows="1"
      />
      {/* 이모지만 입력했을 땐 isDirty 가 true 가 안됨 */}
      {(isDirty || !!watch('comment')) && <TextButton>게시</TextButton>}
    </form>
  )
}

export default CommentForm
