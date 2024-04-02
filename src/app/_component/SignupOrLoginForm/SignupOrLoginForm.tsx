import style from './signupOrLoginForm.module.scss'

function SignupOrLoginForm({ children }) {
  return <div className={style.signupOrLoginForm}>{children}</div>
}

export default SignupOrLoginForm
