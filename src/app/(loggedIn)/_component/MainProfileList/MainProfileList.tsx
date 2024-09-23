'use client'

import ProfileButton from "@/app/(loggedIn)/_component/ProfileButton/ProfileButton";
import FollowerRecommend from "@/app/(loggedIn)/_component/FollowerRecommend/FollowerRecommend";
import {useSession} from "next-auth/react";

const MainProfileList = () => {
  // const me = {
  //   // 임시로 내 정보 있는것처럼
  //   id: 'h._jinny',
  //   nickname: '혜진',
  //   image: '/profile_image.jpg',
  // }
  const { data: myData } = useSession()
  const me = {
    id: myData?.user?.email,
    nickname:  myData?.user?.name,
    image:  myData?.user?.image,
  }
  const users = [
    // 팔로우 추천 유저들
    {
      id: 'h._seung',
      nickname: '랍뷰희승',
      image: '/user.jpg',
    },
    {
      id: 'veenoo',
      nickname: '조수빈',
      image: '/user.jpg',
    },
    {
      id: 'jin_woo',
      nickname: '김김진진우우',
      image: '/user.jpg',
    },
    {
      id: 'hyun_mori',
      nickname: '이현지',
      image: '/user.jpg',
    },
    {
      id: 'lovely_joo',
      nickname: '곽이주',
      image: '/user.jpg',
    },
  ]

  if (!myData?.user) {
    return null // 내 정보가 없을 시
  }
  return (
    <>
      <ProfileButton user={me} isMe />
      <FollowerRecommend users={users} />
    </>
  );
};

export default MainProfileList;