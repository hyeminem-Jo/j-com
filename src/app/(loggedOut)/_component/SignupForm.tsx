'use client'

import { useFormState, useFormStatus } from 'react-dom'
import style from './signupForm.module.scss'
import onSubmit from '../_lib/signup'
import Input from "@/app/_component/common/Input/Input";
import {useForm} from "react-hook-form";
import React, {useCallback, useEffect, useRef} from "react";
import {Button} from "@/app/_component/common/Button/Button";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

function SignupFormTest() {
  const router = useRouter();
  const {
    watch,
    control,
    getValues,
    setError,
    clearErrors,
    setFocus,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid, isLoading },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      user: '',
      password: '',
      passwordCheck: '',
      term: false,
    },
  })

  // const [state, formAction] = useFormState(onSubmit, { message: null })
  // const { pending } = useFormStatus()

  // "비밀번호" value 수정 시 이미 입력된 "비밀번호 확인" value 도 같이 유효성 체크
  useEffect(() => {
    if (
      watch('password') !== watch('passwordCheck') &&
      watch('passwordCheck')
    ) {
      setError('passwordCheck', {
        type: 'password-mismatch',
        message: '비밀번호가 일치하지 않습니다',
      })
    } else {
      clearErrors('passwordCheck')
    }
  }, [watch('password'), watch('passwordCheck')])

  // 아이디 input 포커싱
  useEffect(() => {
    setFocus("user")
  }, [])

  const handleFormSubmit = useCallback(async (data) => {
      console.log(data);
      alert(`가입을 환영합니다, ${data.user} 님!`);
      reset();
      try {
        await signIn("credentials", {
          username: data?.user,
          password: data?.password,
          redirect: false, // 클라이언트에서 호출되는데, 서버쪽에서 redirect 되면 안되기 때문
        })
        router.replace('/home'); // 클라이언트 측 redirect
      } catch (err) {
        console.error(err);
        console.log('아이디와 비밀번호가 일치하지 않습니다.');
      }
      setValue('term', false);
    },
    [watch()],
  );

  const imageRef = useRef<HTMLInputElement>(null)
  const uploadBtn = (e) => {
    e.stopPropagation(); // 이벤트 전파 방지
    imageRef.current?.click()
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={style.signupForm}>
    {/*<form action={formAction} className={style.signupForm}>*/}
      <div>
        <div>
          <Input
            name="user"
            control={control}
            label="아이디"
            maxLength="30"
            type="text"
            placeholder="아이디(5자 이상)"
            rules={{
              required: '아이디를 입력해주세요',
              minLength: {
                value: 5,
                message: '5자 이상으로 입력해주세요',
              },
              validate: {
                noAdmin: (value) =>
                  value !== 'admin' || 'admin 이라는 아이디는 사용할 수 없습니다.',
                noSpacesOnly: (value) =>
                  value.trim().length > 0 || '공백만으로는 입력할 수 없습니다.',
              },
            }}
          />
          <Input
            name="password"
            control={control}
            label="비밀번호"
            maxLength="15"
            type="password"
            placeholder="비밀번호(영문, 숫자, 특수문자 포함 8자 ~ 20자)"
            rules={{
              required: '비밀번호를 입력해주세요',
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                message: '영문, 숫자, 특수문자 포함 8 ~ 20자로 입력해주세요',
              },
            }}
          />
          <Input
            name="passwordCheck"
            control={control}
            label="비밀번호 확인"
            type="password"
            maxLength="15"
            placeholder="비밀번호 확인"
            rules={{
              required: '비밀번호를 확인해주세요',
              validate: {
                matchPassword: (value) => {
                  const { password } = getValues()
                  return password === value || '비밀번호가 일치하지 않습니다'
                },
              },
            }}
          />
          <Input
            name="nickname"
            control={control}
            label="닉네임"
            maxLength="30"
            type="text"
            placeholder="닉네임"
            rules={{
              required: '닉네임을 입력해주세요',
              validate: {
                noAdmin: (value) =>
                  value !== 'admin' || 'admin 이라는 아이디는 사용할 수 없습니다.',
                noSpacesOnly: (value) =>
                  value.trim().length > 0 || '공백만으로는 입력할 수 없습니다.',
              },
            }}
          />
          <Input
            name="term"
            control={control}
            label="(필수)약관에 동의합니다"
            type="checkbox"
            rules={{
              required: '약관에 동의해주세요',
            }}
          />
          <input
            id="imageFiles"
            name="imageFiles"
            type="file"
            multiple
            hidden
            accept="image/*"
            ref={imageRef}
          />
          <Button type="button" onClick={uploadBtn} size="md" color="primary">
            프로필 이미지 업로드 (선택)
          </Button>
        </div>
      </div>
      <Button type="submit" size="md" color="secondary" disabled={isLoading || !isValid}>
      {/*<Button type="submit" size="md" color="secondary" disabled={pending || !isValid}>*/}
        가입하기
      </Button>
    </form>
  )
}

export default SignupFormTest
