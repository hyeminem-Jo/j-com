import Image from 'next/image'

function CircleProfile({ src, alt, width, height, ring, active }) {
  const style = {
    profileImage: {
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: '50%',
      border: ring ? 'none' : '1px solid #ddd',
      outline: ring ? `2px solid ${active ? 'orange' : '#ddd'}` : 'none',
      outlineOffset: ring ? '2px' : 'none',
      overflow: 'hidden',
    },
    img: {
      objectFit: 'cover',
    },
  }

  return (
    <div className="profileImage" style={style.profileImage}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={`${alt}-profile-image`}
        style={style.img}
      />
    </div>
  )
}

export default CircleProfile
