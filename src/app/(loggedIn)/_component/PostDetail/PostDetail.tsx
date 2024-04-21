'use client'

import React, { FormEventHandler, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import style from '@/app/(loggedIn)/_component/PostDetail/postDetail.module.scss'
import SliderWrapper from '@/app/(loggedIn)/_component/SliderWrapper'
import Image from 'next/image'
import Textarea from '@/app/_component/common/Textarea/Textarea'
import MorePostOptionButton from '@/app/(loggedIn)/_component/MorePostOptionButton'

function PostDetail() {
  const { watch, control, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      post: '',
    },
  })

  // 더미데이터
  const me = {
    id: 'h._jinny',
    nickname: '혜진',
    image: '/profile_image.jpg',
  }

  // 이미지 데이터
  const imageArr = [
    {
      src: 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/22/da16af9b60070a4f7f7a5be7dcc98faf.jpeg',
      alt: '똥개1',
    },
    {
      src: 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/34/ca41e7f0f2232370d83d2ed6a4db3802.jpeg',
      alt: '똥개2',
    },
    {
      src: 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/158/a240b2bbb6c2a2b17aed88242233ee40.jpeg',
      alt: '똥개3',
    },
  ]

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (data) => {
      console.log(data)
      alert(data)
      reset()
    },
    [watch()],
  )

  return (
    <div className={style.formWrap}>
      <div className={style.formImageWrap}>
        {/* 이미지 슬라이드 */}
        {imageArr.length > 1 ? (
          <SliderWrapper
            dots={false}
            slidesToShow={1}
            slidesToScroll={1}
            className="slickPost"
          >
            {imageArr.map((img) => (
              <div className={style.image}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={550}
                  height={600}
                  objectFit="cover"
                />
              </div>
            ))}
          </SliderWrapper>
        ) : (
          <div className={style.image}>
            <Image
              src={imageArr[0].src}
              alt={imageArr[0].alt}
              width={550}
              height={600}
              objectFit="cover"
            />
          </div>
        )}
      </div>
      <div className={style.formArea}>
        <div className={style.formAreaTop}>
          <MorePostOptionButton />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            name="post"
            control={control}
            maxLength="1000"
            placeholder="문구를 입력하세요..."
            rows="15"
          />
          <button type="button">게시</button>
        </form>
      </div>
    </div>
  )
}

export default PostDetail
