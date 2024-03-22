import Modal from '@/app/_component/common/Modal'
import PostForm from '@/app/(loggedIn)/_component/PostForm'

function Write() {
  return (
    // TODO: 전역 상태관리를 이용해 모달의 title 변경하기
    <Modal title="새 게시물 만들기">
      <PostForm />
    </Modal>
  )
}

export default Write
