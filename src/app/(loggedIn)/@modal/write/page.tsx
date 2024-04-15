import ModalPage from '@/app/_component/common/Modal/ModalPage'
import PostForm from '@/app/(loggedIn)/_component/PostForm/PostForm'

function Write() {
  return (
    // TODO: 전역 상태관리를 이용해 모달의 title 변경하기
    <ModalPage title="새 게시물 만들기">
      <PostForm />
    </ModalPage>
  )
}

export default Write
