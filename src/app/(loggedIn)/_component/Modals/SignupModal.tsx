import React from 'react'
import Modal from '@/app/_component/common/Modal/Modal'
import SignupForm from '@/app/(loggedOut)/_component/SignupForm'

function SignupModal() {
  return (
    <Modal modalName="signup" title="회원가입 하기">
      <SignupForm />
    </Modal>
  )
}

export default SignupModal
