'use client'

import Textarea from '@/app/_component/common/Textarea/Textarea'
import { useForm } from 'react-hook-form'
import { FormEventHandler, useCallback } from 'react'
import EmojiButton from '@/app/(loggedIn)/_component/svg/EmojiButton'
import { TextButton } from '@/app/_component/common/Button/Button'
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
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      comment: '',
    },
  })

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
