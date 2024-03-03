import Modal from '@/app/_component/common/Modal'
import SignupForm from '@/app/(loggedOut)/_component/SignupForm'

function Signup() {
  return (
    <Modal title="회원가입 하기">
      <SignupForm />
    </Modal>
  )
}

export default Signup
