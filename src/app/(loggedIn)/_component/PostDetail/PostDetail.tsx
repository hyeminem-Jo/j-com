import React, { FormEventHandler, useCallback, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import cx from 'classnames'
import style from '@/app/(loggedIn)/_component/PostForm/postForm.module.scss'
import { Button } from '@/app/_component/common/Button/Button'
import SliderWrapper from '@/app/(loggedIn)/_component/SliderWrapper'
import Image from 'next/image'
import Textarea from '@/app/_component/common/Textarea/Textarea'

function PostDetail() {
  const { watch, control, handleSubmit, reset } = useForm({
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

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (data) => {
      console.log(data)
      alert(data)
      reset()
    },
    [watch()],
  )

  const uploadBtn = () => {
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
    console.log(step)
    if (step === 2) return
    setStep((prev) => prev + 1)
  }

  return (
    <form
      className={cx(style.postForm, step === 2 && style.postStep)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={style.postStep}>
        {isUploaded && (
          <button
            type="button"
            className={style.prevBtn}
            onClick={clickPrev}
          ></button>
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
                <Textarea
                  name="post"
                  control={control}
                  maxLength="1000"
                  placeholder="문구를 입력하세요..."
                  rows="15"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </form>
  )
}

export default PostDetail
