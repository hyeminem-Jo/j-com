'use client'

import Modal from '@/app/_component/common/Modal/Modal'
import cx from 'classnames'
import { useRouter } from 'next/navigation'
import { useModalStore } from '@/store/modal'
import style from './postOptionModal.module.scss'

const post = {
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

function PostOptionModal() {
  const router = useRouter()
  const onClick = () => {
    router.push(`/post/${post.User.id}/${post.postId}`)
  }

  const closeModal = useModalStore((state: any) => state.closeModal)

  return (
    <Modal modalName="postOption" header={false} autoHeight>
      <div
        className={style.postOption}
        onClick={() => {
          closeModal('postOption')
        }}
      >
        <button className={cx(style.optionBtn, style.highlight)} type="button">
          신고
        </button>
        <button className={cx(style.optionBtn, style.highlight)} type="button">
          팔로우 취소
        </button>
        <button onClick={onClick} className={style.optionBtn} type="button">
          게시물로 이동
        </button>
        <button className={style.optionBtn} type="button">
          링크 복사
        </button>
        <button className={style.optionBtn} type="button">
          이 계정 정보
        </button>
        <button className={style.optionBtn} type="button">
          취소
        </button>
      </div>
    </Modal>
  )
}

export default PostOptionModal
