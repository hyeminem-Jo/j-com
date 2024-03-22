import Home from "@/app/(loggedIn)/home/page";
import Modal from "@/app/_component/common/Modal";
import PostForm from "@/app/(loggedIn)/_component/PostForm";

// 모달이 열린채('/write')로 새로고침 했을 때 뜰 기본 페이지
function Page() {

  return (
    <>
      <Modal title="새 게시물 만들기">
        <PostForm />
      </Modal>
      <Home /> {/*새로고침 시 나오는 children*/}
    </>
  )
}

export default Page
