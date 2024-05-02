import PostDetail from '@/app/(loggedIn)/_component/PostDetail/PostDetail'
import style from './postDetailPage.module.scss'

function Page() {
  return (
    <div className={style.postDetailPage}>
      <PostDetail />
      <div className={style.postList}>

      </div>
    </div>
  )
}

export default Page
