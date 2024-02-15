import style from './layout.module.scss'

export default function AfterLoginLayout({ children }) {
  return (
    <div className={style.container}>
      애프터로그인 레이아웃
      {children}
    </div>
  )
}
