'use client'

import styles from '@/app/(loggedOut)/_component/main.module.scss'
import Image from 'next/image'
import Input from '@/app/_component/common/Input/Input'
import { useForm } from 'react-hook-form'
import ButtonGroup from '@/app/_component/common/ButtonGroup/ButtonGroup'
import { Button, TextButton } from '@/app/_component/common/Button/Button'
import phoneImage from '../../../../public/phone.png'
import logo from '../../../../public/logo.png'
import React, {useCallback} from "react";
import style from "@/app/(loggedOut)/_component/signupOrLoginForm.module.scss";
import Link from "next/link";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function Main() {
  const router = useRouter()
  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      id: '',
      password: '',
    },
  })

  const handleFormSubmit = useCallback(async (data) => {
      try {
        await signIn("credentials", {
          username: data?.id,
          password: data?.password,
          redirect: false, // 클라이언트에서 호출되는데, 서버쪽에서 redirect 되면 안되기 때문
        })
        router.replace('/home'); // 클라이언트 측 redirect
        reset();
      } catch (err) {
        console.error(err);
        console.log('아이디와 비밀번호가 일치하지 않습니다.');
      }
      console.log(data);
    },
    [watch()],
  );

  return (
    <>
      <div className={styles.left}>
        <Image src={phoneImage} width={450} alt="logo" />
      </div>
      <div className={styles.right}>
        <form onSubmit={handleSubmit(handleFormSubmit)} className={style.signupOrLoginForm}>
          <Image src={logo} width={220} alt="logo" />
          <Input
            name="id"
            control={control}
            maxLength="30"
            type="text"
            placeholder="아이디"
            rules={{
              required: '아이디를 입력해주세요',
            }}
          />
          <Input
            name="password"
            control={control}
            label=""
            maxLength="15"
            type="password"
            placeholder="비밀번호"
            rules={{
              required: '비밀번호를 입력해주세요',
            }}
          />
          <ButtonGroup>
            <Button type="submit" size="md" color="primary">
              로그인
            </Button>
            <div className={styles.goSignup}>
              <Link href="/signup">회원가입 하러가기</Link>
            </div>
          </ButtonGroup>
        </form>
      </div>
    </>
  )
}
