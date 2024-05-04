import ModalPage from '@/app/_component/common/Modal/ModalPage'
import PostDetail from '@/app/(loggedIn)/_component/PostDetail/PostDetail'

type Props = {
  params: { username: string; id: string; photoId: string }
}

export default function Page({ params }: Props) {
  return (
    <ModalPage>
      <PostDetail />
    </ModalPage>
  )
}
