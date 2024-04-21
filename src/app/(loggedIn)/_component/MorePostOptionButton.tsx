'use client'

import React from 'react'
import IcPostMoreOption from '@/app/(loggedIn)/_component/svg/IcPostMoreOption'
import { useModalStore } from '@/store/modal'

function MorePostOptionButton() {
  const openModal = useModalStore((state: any) => state.openModal)

  return (
    <button
      type="button"
      onClick={() => {
        openModal('postOption')
        // alert('333')
      }}
    >
      <IcPostMoreOption />
    </button>
  )
}

export default MorePostOptionButton
