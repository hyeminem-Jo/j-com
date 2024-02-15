'use client'

import styles from '@/app/(loggedOut)/_component/main.module.scss'
import Image from 'next/image'
import Input from '@/app/_component/common/Input'
import { useForm } from 'react-hook-form'
import Button from '@/app/_component/common/Button'
import SignupOrLoginForm from '@/app/_component/common/SignupOrLoginForm'
import ButtonGroup from '@/app/_component/common/ButtonGroup'
import Link from 'next/link'
import phoneImage from '../../../../public/phone.png'
import logo from '../../../../public/logo.png'

export default function Main() {
  const { control } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return (
    <>
      <div className={styles.left}>
        <Image src={phoneImage} width={450} alt="logo" />
      </div>
      <div className={styles.right}>
        <SignupOrLoginForm>
          <Image src={logo} width={220} alt="logo" />
          <Input
            name="email"
            control={control}
            label=""
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
            <Link href="signup" className={styles.goSignup}>
              회원가입 하러가기
            </Link>
          </ButtonGroup>
        </SignupOrLoginForm>
      </div>
    </>
  )
}
