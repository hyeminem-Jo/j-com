import React, {useCallback, useEffect, useState} from 'react'
import EmojiPicker from 'emoji-picker-react'

function EmojiButton({ size, color, formName, setValue, value }) {

  const [isOpenEmoji, setIsOpenEmoji] = useState<boolean>(false)
  const onClick = () => {
    console.log('emoji 생성')
    setIsOpenEmoji(prev => !prev)
  }

  const dd = useCallback((data) => {
      console.log(data?.emoji)
      console.log('value: ', value)
      // setValue(formName, data?.emoji)
    },
    [value, setValue, formName] // value가 변경될 때마다 함수가 업데이트되도록 의존성 배열에 추가
  )

  return (
    <>
      <button type="button" onClick={onClick}>
        <svg
          aria-label="이모티콘"
          className="x1lliihq x1n2onr6 x1roi4f4"
          fill={color || 'currentColor'}
          width={size}
          height={size}
          role="img"
          viewBox="0 0 24 24"
        >
          <title>이모티콘</title>
          <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
        </svg>
      </button>
      {/* TODO: 이모지 붙이는 기능 만들기 */}
      {isOpenEmoji && <EmojiPicker onEmojiClick={(data) => {dd(data)}} />}
    </>
  )
}

export default EmojiButton
