import React from 'react'
import style from './buttonGroup.module.scss'

function ButtonGroup({ children }) {
  return <div className={style.buttonGroup}>{children}</div>
}

export default ButtonGroup
