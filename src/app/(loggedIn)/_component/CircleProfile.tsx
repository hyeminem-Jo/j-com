'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

function CircleProfile({
  src,
  alt,
  userId = null,
  size,
  ring,
  ringWeight = 2,
  active,
  border = '1px solid #ddd',
  isButton = true,
}) {
  const style = {
    profileImage: {
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      outline: ring
        ? `${ringWeight}px solid ${active ? 'orange' : '#ddd'}`
        : border,
      outlineOffset: ring ? `3px` : 'none',
      overflow: 'hidden',
      cursor: isButton ? 'pointer' : 'auto',
    },
    img: {
      objectFit: 'cover',
    },
  }

  const router = useRouter()

  const enterToProfile = () => {
    if (userId && isButton) {
      router.push(`/${userId}`)
    }
  }

  return (
    <button
      type="button"
      className="profileImage"
      style={style.profileImage}
      onClick={enterToProfile}
    >
      <Image
        src={src}
        width={size}
        height={size}
        alt={`${alt}-profile-image`}
        style={style.img}
      />
    </button>
  )
}

export default CircleProfile
