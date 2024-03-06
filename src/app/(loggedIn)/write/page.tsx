'use client'

import Home from "@/app/(loggedIn)/home/page";
import {useEffect} from "react";
import {redirect} from "next/navigation";

// write 모달이 열린채로 새로고침 했을 때 뜰 기본 페이지
function Page() {
  useEffect(() => {
    redirect('/home') // url 로 접근시 home 으로 이동
    // 그럼 패러랠 라우트를 왜 쓴 것인가? => 단순히 모달이 떴을 때 write 경로로 뜨는 것을 원했음
  }, [])

  return (
    <div>
      <Home />
      새로고침 시 나오는 children
    </div>
  )
}

export default Page
