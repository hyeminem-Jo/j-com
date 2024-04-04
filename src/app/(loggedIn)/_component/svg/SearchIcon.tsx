import React from 'react'

function SearchIcon({ size = 24, color = 'currentColor' }) {
  return (
    <svg
      aria-label="검색"
      className="x1lliihq x1n2onr6 x1cp0k07"
      fill="currentColor"
      width={size}
      height={size}
      role="img"
      viewBox="0 0 24 24"
    >
      <title>검색</title>
      <path
        d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <line
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="16.511"
        x2="22"
        y1="16.511"
        y2="22"
      ></line>
    </svg>
  )
}

export default SearchIcon
