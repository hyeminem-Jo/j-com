import React, {useEffect, useRef} from 'react';
import style from '../sidebar.module.scss'
import cx from "classnames";
const SlideBarWrap = ({ children, isOpen, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent): void => {
      if (isOpen && !sidebarRef.current?.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('click', handleOutsideClose);
    return () => {
      document.removeEventListener('click', handleOutsideClose);
    };
  }, [isOpen, onClose]);

  return (
    <div
      role="dialog"
      className={cx(style.sidebar, isOpen && style.opened)}
      ref={sidebarRef}
    >
      {children}
    </div>
  );
};

export default SlideBarWrap;