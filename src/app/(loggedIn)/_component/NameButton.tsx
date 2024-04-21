'use client'

import { useRouter } from 'next/navigation'

function NameButton({ userId, fontSize, color, isButton = true }) {
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
    <>
      {isButton ? (
        <button type="button" style={style} onClick={enterToProfile}>
          {userId}
        </button>
      ) : (
        <span type="button" style={style}>
          {userId}
        </span>
      )}
    </>
  )
}

export default NameButton
