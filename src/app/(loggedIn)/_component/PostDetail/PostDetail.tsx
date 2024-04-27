'use client'

import React, { FormEventHandler, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import style from '@/app/(loggedIn)/_component/PostDetail/postDetail.module.scss'
import SliderWrapper from '@/app/(loggedIn)/_component/SliderWrapper'
import Image from 'next/image'
import Textarea from '@/app/_component/common/Textarea/Textarea'
import MorePostOptionButton from '@/app/(loggedIn)/_component/MorePostOptionButton'
import CircleProfile from '@/app/(loggedIn)/_component/CircleProfile'
import NameButton from '@/app/(loggedIn)/_component/NameButton'
import CommentForm from '@/app/(loggedIn)/_component/CommentForm/CommentForm'

function PostDetail() {
  const { watch, control, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      post: '',
    },
  })

  const target = {
    User: {
      id: 'h._jinny',
      nickname: '혜진',
      image: '/user-01.jpg',
    },
    content: '리액트 공부는 재밌어...',
    createdAt: new Date(),
    Images: [
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
    ],
    Comments: [
      {
        User: {
          id: 'h._seung',
        },
        content: '모찌리도후가 먹고싶엉',
      },
      {
        User: {
          id: 'veenoo',
        },
        content: '술먹자',
      },
    ],
    numOfLike: 5,
    postId: 1,
  }

  const { User, Images } = target

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (data) => {
      console.log(data)
      alert(data)
      reset()
    },
    [watch()],
  )

  return (
    <div className={style.postWrap}>
      <div className={style.postImageWrap}>
        {/* 이미지 슬라이드 */}
        {Images.length > 1 ? (
          <SliderWrapper
            dots={false}
            slidesToShow={1}
            slidesToScroll={1}
            className="slickPost"
          >
            {Images.map((img) => (
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
              src={Images[0].src}
              alt={Images[0].alt}
              width={550}
              height={600}
              objectFit="cover"
            />
          </div>
        )}
      </div>
      <div className={style.postArea}>
        <div className={style.postAreaTop}>
          <div className={style.idWrap}>
            <CircleProfile
              src={User?.image}
              size={28}
              userId={User?.id}
              alt={User?.id}
              ring={false}
              isButton={false}
            />
            <NameButton userId={User?.id} fontSize={14} />
          </div>
          <MorePostOptionButton />
        </div>
        <div className={style.postContent}></div>
        <div className={style.postAreaBottom}>
          <CommentForm />
        </div>
      </div>
    </div>
  )
}

export default PostDetail
