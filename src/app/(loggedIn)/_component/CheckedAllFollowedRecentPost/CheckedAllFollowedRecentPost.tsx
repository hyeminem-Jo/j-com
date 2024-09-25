import React from 'react';
import style from "@/app/(loggedIn)/home/home.module.scss";
import Image from "next/image";
import checkAllPost from "../../../../../public/check-all-post-icon.png";
import Link from "next/link";
import linkStyle from "@/app/_component/common/Button/button.module.scss";

const CheckedAllFollowedRecentPost = () => {
  return (
    <div className={style.checkAllPosts}>
      <div className={style.checkImage}>
        <Image src={checkAllPost} width={96} height={96} alt="logo" />
      </div>
      <strong>모두 확인했습니다</strong>
      <span>최근 3일 동안 새롭게 올라온 게시물을 모두 확인했습니다.</span>
      <Link href="/past-posts" className={linkStyle.textButton}>
        이전 게시물 보기
      </Link>
    </div>
  );
};

export default CheckedAllFollowedRecentPost;