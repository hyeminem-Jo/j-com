import ModalPage from '@/app/_component/common/Modal/ModalPage'

type Props = {
  params: { username: string; id: string; photoId: string }
}

export default function Page({ params }: Props) {
  return <ModalPage>게시글 상세</ModalPage>
}
