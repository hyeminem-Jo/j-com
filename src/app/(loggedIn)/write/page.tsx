import Home from '@/app/(loggedIn)/home/page'
import ModalPage from '@/app/_component/common/Modal/ModalPage'
import PostForm from '@/app/(loggedIn)/_component/PostForm/PostForm'

// 모달이 열린채('/write')로 새로고침 했을 때 뜰 기본 페이지
function Page() {
  return (
    <>
      <ModalPage title="새 게시물 만들기">
        <PostForm />
      </ModalPage>
      <Home /> {/* 새로고침 시 나오는 children */}
    </>
  )
}

export default Page
