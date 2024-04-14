import React from 'react'

function IcDelete({ size = 16, color = 'currentColor' }) {
  return (
    <svg
      aria-label="닫기"
      className="x1lliihq x1n2onr6 x1roi4f4"
      fill="currentColor"
      width={size}
      height={size}
      role="img"
      viewBox="0 0 24 24"
    >
      <title>닫기</title>
      <polyline
        fill="none"
        points="20.643 3.357 12 12 3.353 20.647"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      ></polyline>
      <line
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        x1="20.649"
        x2="3.354"
        y1="20.649"
        y2="3.354"
      ></line>
    </svg>
  )
}

export default IcDelete
