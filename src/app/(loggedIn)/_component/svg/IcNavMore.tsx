import React from 'react'

function IcNavMore({ size, active }) {
  return (
    <svg
      aria-label="설정"
      className="x1lliihq x1n2onr6 x5n08af"
      fill="currentColor"
      width={size}
      height={size}
      role="img"
      viewBox="0 0 24 24"
    >
      <title>설정</title>
      {active ? (
        <path d="M3.5 6.5h17a1.5 1.5 0 0 0 0-3h-17a1.5 1.5 0 0 0 0 3Zm17 4h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Zm0 7h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Z"></path>
      ) : (
        <>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="3"
            x2="21"
            y1="4"
            y2="4"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="3"
            x2="21"
            y1="12"
            y2="12"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="3"
            x2="21"
            y1="20"
            y2="20"
          ></line>
        </>
      )}
    </svg>
  )
}

export default IcNavMore
