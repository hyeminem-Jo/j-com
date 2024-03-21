'use client'

import style from './tab.module.scss'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect} from "react";

const Tab = () => {
  const pathname = usePathname()
  useEffect(() => {
    console.log(pathname)
  }, [])
  return (
    <ul className={style.contentsTab}>
      <li>
        <Link href="/h._jinny/">게시물</Link>
      </li>
      <li>
        <Link href="/h._jinny/saved">저장됨</Link>
      </li>
      <li>태그됨</li>
    </ul>
  );
};

export default Tab;