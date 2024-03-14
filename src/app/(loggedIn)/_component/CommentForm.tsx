'use client'

import Textarea from "@/app/_component/common/Textarea";
import {useForm} from "react-hook-form";
import { ChangeEventHandler, FormEventHandler, useCallback } from 'react'

const CommentForm = () => {
  const {
    watch,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      post: ''
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        name="post"
        control={control}
        maxLength="1000"
        placeholder="댓글 달기..."
        size="sm"
        rows="1"
      />
    </form>
  );
};

export default CommentForm;