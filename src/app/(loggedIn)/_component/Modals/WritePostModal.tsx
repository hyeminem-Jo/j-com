import React from 'react'
import Modal from '@/app/_component/common/Modal/Modal'
import PostForm from '@/app/(loggedIn)/_component/PostForm/PostForm'

function WritePostModal() {
  return (
    <Modal modalName="writePost" title="새 게시물 만들기">
      <PostForm />
    </Modal>
  )
}

export default WritePostModal
