import ModalPage from '@/app/_component/common/Modal/ModalPage'
import SignupForm from '@/app/(loggedOut)/_component/SignupForm'

function Signup() {
  return (
    <ModalPage title="회원가입 하기">
      <SignupForm />
    </ModalPage>
  )
}

export default Signup
