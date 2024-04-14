import Modal from '@/app/_component/common/Modal/Modal'
import cx from 'classnames'
import style from './postOptionModal.module.scss'

function PostOptionModal() {
  return (
    <Modal modalName="postOption" header={false} autoHeight>
      <div className={style.postOption}>
        <button className={cx(style.optionBtn, style.highlight)} type="button">
          신고
        </button>
        <button className={cx(style.optionBtn, style.highlight)} type="button">
          팔로우 취소
        </button>
        <button className={style.optionBtn} type="button">
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
