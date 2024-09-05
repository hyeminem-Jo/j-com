import React from 'react'

function IcClose({ size = 24, color }) {
  return (
    <svg
      aria-label="닫기"
      className="x1lliihq x1n2onr6 x1roi4f4"
      fill="currentColor"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <title>닫기</title>
      <polyline
        fill="none"
        points="20.643 3.357 12 12 3.353 20.647"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      ></polyline>
      <line
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        x1="20.649"
        x2="3.354"
        y1="20.649"
        y2="3.354"
      ></line>
    </svg>
  )
}

export default IcClose
