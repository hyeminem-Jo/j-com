'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

function CircleProfile({
  src,
  alt,
  userId = null,
  size,
  ring,
  active,
  border,
  isButton = true,
}) {
  const style = {
    profileImage: {
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      outline: ring
        ? `2px solid ${active ? 'orange' : '#ddd'}`
        : border || '1px solid #ddd',
      outlineOffset: ring ? '2px' : 'none',
      overflow: 'hidden',
      cursor: userId && isButton ? 'pointer' : 'auto',
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
