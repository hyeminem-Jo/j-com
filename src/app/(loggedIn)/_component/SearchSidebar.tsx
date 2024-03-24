import React from 'react'
import cx from 'classnames'
import style from './sidebar.module.scss'

function SearchSidebar({ isOpen }) {
  return (
    <div role="dialog" className={cx(style.sidebar, isOpen && style.opened)}>
      <div className={style.sidebarInner}>검색 사이드바</div>
    </div>
  )
}

export default SearchSidebar
