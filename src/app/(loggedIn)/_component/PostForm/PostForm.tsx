'use client'

import React, { FormEventHandler, useCallback, useRef, useState } from 'react'
import { Button } from '@/app/_component/common/Button/Button'
import cx from 'classnames'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import Textarea from '@/app/_component/common/Textarea/Textarea'
import SliderWrapper from '@/app/(loggedIn)/_component/SliderWrapper'
import IcMedia from '@/app/(loggedIn)/_component/svg/IcMedia'
import IcBack from '@/app/(loggedIn)/_component/svg/IcBack'
import NameButton from '@/app/(loggedIn)/_component/NameButton'
import CircleProfile from '@/app/(loggedIn)/_component/CircleProfile'
import EmojiButton from '@/app/(loggedIn)/_component/svg/Emoji/EmojiButton'
import style from './postForm.module.scss'

function PostForm() {
  const { watch, control, handleSubmit, reset, setValue } = useForm({
    mode: 'onChange',
    defaultValues: {
      post: '',
    },
  })

  const imageRef = useRef<HTMLInputElement>(null)
  const [step, setStep] = useState(1)
  const [isUploaded, setIsUploaded] = useState(false)

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

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (data) => {
      console.log(data)
      alert(data)
      reset()
    },
    [watch()],
  )

  const uploadBtn = (e) => {
    e.stopPropagation(); // 이벤트 전파 방지
    imageRef.current?.click()
    setIsUploaded(true)
  }

  const clickPrev = () => {
    if (step === 1) {
      alert('사진을 삭제하시겠습니까?')
      setIsUploaded(false)
    } else {
      setStep((prev) => prev - 1)
    }
  }

  const clickNext = (e) => {
    e.preventDefault() // step 이 2로 바뀌면서 리렌더링되고 '공유하기' 버튼이 누른것으로 인식되어 제출되는데 이를 방지
    if (step === 2) return
    setStep((prev) => prev + 1)
  }

  return (
    <form
      className={cx(style.postForm, step === 2 && style.postStep)}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className={style.postStep}>
        {isUploaded && (
          <button type="button" className={style.prevBtn} onClick={clickPrev}>
            <IcBack />
          </button>
        )}
        {isUploaded && (
          <>
            {step === 1 ? (
              <button
                type="button"
                className={style.nextBtn}
                onClick={clickNext}
              >
                다음
              </button>
            ) : (
              <button type="submit" className={style.nextBtn}>
                공유하기
              </button>
            )}
          </>
        )}
      </div>
      <div className={style.postFormInner}>
        {step === 1 && !isUploaded && (
          <div className={style.desc}>
            <IcMedia />
            <div>사진과 동영상을 여기에 끌어다 놓으세요</div>
            {/* TODO: 드래그해서 이미지 업로드 하는 기능 추가하기 */}
            <input
              type="file"
              name="imageFiles"
              multiple
              hidden
              ref={imageRef}
            />
            <Button type="button" onClick={uploadBtn} size="md" color="primary">
              이미지 업로드
            </Button>
          </div>
        )}
        {isUploaded && (
          <div className={style.formWrap}>
            <div className={style.formImageWrap}>
              {/* 업로드 할 이미지 */}
              {imageArr.length > 1 ? (
                <SliderWrapper
                  dots={false}
                  slidesToShow={1}
                  slidesToScroll={1}
                  className="slickPost"
                >
                  {imageArr.map((img, index) => (
                    <div className={style.image}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={550}
                        height={550}
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
            {step === 2 && (
              <div className={style.formArea}>
                <div className={style.idWrap}>
                  <CircleProfile
                    src={me?.image}
                    size={28}
                    userId={me?.id}
                    alt={me?.id}
                    ring={false}
                    isButton={false}
                  />
                  <NameButton userId={me?.id} fontSize={14} isButton={false} />
                </div>
                <Textarea
                  name="post"
                  control={control}
                  maxLength="1000"
                  placeholder="문구를 입력하세요..."
                  height="200px"
                />
                <div className={style.formAreaBottom}>
                  <EmojiButton size={20} formName="post" setValue={setValue} value={watch('post')} />
                  <span className={style.textLength}>
                    {watch('post').length} / 1000
                  </span>
                </div>
                {/* TODO: 그 외 게시글 옵션 (위치, 접근성 추가하기, 댓글, 좋아요 숨기기 기능 등 ) */}
              </div>
            )}
          </div>
        )}
      </div>
    </form>
  )
}

export default PostForm
