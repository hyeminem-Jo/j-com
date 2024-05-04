import NavMenu from '@/app/(loggedIn)/_component/NavMenu/NavMenu'
import { ReactNode } from 'react'
import PostOptionModal from '@/app/(loggedIn)/_component/Modals/PostOptionModal'
import style from './layout.module.scss'

type Props = { children: ReactNode; modal: ReactNode }

export default function LoggedInLayout({ children, modal }: Props) {
  return (
    <div className={style.container}>
      {modal}
      {/* 모달 */}
      {/* 모달(Modal)을 따로 레이아웃 페이지에 빼놓은 이유: 모달은 최상위 위치에 떠이었어야하고, Post 파일에 넣어놓으면 position 부모가 post 가 되어버리기 때문에 overlay 부분이 배경에 가득차지 않음  */}
      {/* Modal: 중복으로 뜨는 모달들의 처리에 용이하도록 사용되며, 새로고침시 아예 컨텐츠가 사라지는 모달 (ex. 옵션 모달, 글쓰기 모달 etc..) */}
      {/* ModalPage: {modal} 페이지로 들어감으로써 layout 파일에 위치하기 때문에 최상단에 나타나며, 새로고침시 모달 컨텐츠가 페이지로 대체됨 (ex. 게시글 모달 등 */}
      <PostOptionModal />
      {/* <PostFormModal /> */}
      <header className={style.leftWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftFixed}>
            <NavMenu />
          </div>
        </section>
      </header>
      <div className={style.rightWrapper}>
        <main className={style.main}>{children}</main>
      </div>
    </div>
  )
}
