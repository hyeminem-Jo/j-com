'use client'

import { useRouter } from 'next/navigation'

function NameButton({ userId, fontSize, color }) {
  const style = {
    fontSize: `${fontSize}px`,
    fontWeight: 600,
    color,
  }
  const router = useRouter()

  const enterToProfile = () => {
    router.push(`/${userId}`)
  }
  return (
    <button type="button" style={style} onClick={enterToProfile}>
      {userId}
    </button>
  )
}

export default NameButton
