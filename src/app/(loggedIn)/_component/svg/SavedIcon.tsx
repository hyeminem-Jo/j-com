import React from 'react'

function SavedIcon({ size, active }) {
  return (
    <svg
      aria-label={active ? '저장 취소' : '저장'}
      className="x1lliihq x1n2onr6 x5n08af"
      fill="currentColor"
      width={size}
      height={size}
      role="img"
      viewBox="0 0 24 24"
    >
      <title>{active ? '저장 취소' : '저장'}</title>
      {active ? (
        <path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path>
      ) : (
        <polygon
          fill="none"
          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></polygon>
      )}
    </svg>
  )
}

export default SavedIcon
