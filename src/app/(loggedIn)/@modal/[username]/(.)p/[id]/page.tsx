import ModalPage from '@/app/_component/common/Modal/ModalPage'
import PostDetail from '@/app/(loggedIn)/_component/PostDetail/PostDetail'

type Props = {
  params: { username: string; id: string; photoId: string }
}

export default function Page({ params }: Props) {
  return (
    // TODO: 모달 게시글 슬라이드 적용 (옆으로 넘기면 다른 게시글을 볼 수 있게 ex.게시글1 > 게시글2 > ...)
    <ModalPage>
      <PostDetail isModal />
    </ModalPage>
  )
}
