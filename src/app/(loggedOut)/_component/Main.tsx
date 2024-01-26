import styles from '@/app/(loggedOut)/_component/main.module.scss'
import Image from 'next/image'
import phoneImage from '../../../../public/phone.png'
import logo from '../../../../public/logo.png'

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <Image src={phoneImage} width={450} alt="logo" />
      </div>
      <div className={styles.right}>
        <Image src={logo} width={220} alt="logo" />
      </div>
    </div>
  )
}
