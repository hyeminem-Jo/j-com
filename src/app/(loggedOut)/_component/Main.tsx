'use client'

import styles from '@/app/(loggedOut)/_component/main.module.scss'
import Image from 'next/image'
import Input from '@/app/_component/common/Input/Input'
import { useForm } from 'react-hook-form'
import ButtonGroup from '@/app/_component/common/ButtonGroup/ButtonGroup'
import { Button, TextButton } from '@/app/_component/common/Button/Button'
import { useModalStore } from '@/store/modal'
import phoneImage from '../../../../public/phone.png'
import logo from '../../../../public/logo.png'
import React from "react";
import style from "@/app/(loggedOut)/_component/signupOrLoginForm.module.scss";

export default function Main() {
  const { control } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const openModal = useModalStore((state: any) => state.openModal)

  return (
    <>
      <div className={styles.left}>
        <Image src={phoneImage} width={450} alt="logo" />
      </div>
      <div className={styles.right}>
        <div className={style.signupOrLoginForm}>
          <Image src={logo} width={220} alt="logo" />
          <Input
            name="email"
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
              <TextButton
                type="buttton"
                onClick={() => {
                  openModal('signup')
                }}
              >
                회원가입 하러가기
              </TextButton>
            </div>
          </ButtonGroup>
        </div>
      </div>
    </>
  )
}
