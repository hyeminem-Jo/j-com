import React from 'react';
import Link from "next/link";
import Image from "next/image";
import style from './profileButton.module.scss'

const StoryTab = () => {
  const users = [ // 내가 팔로우한 유저들
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
  return (
    <ul style={{ width: '100%', textAlign: 'center' }}>
      {users.map((user) => (
        <li style={{ marginLeft: '10px' }}>
          <Link href="#">
            <div className={style.profileImage}>
              <Image src={user.image} width={60} height={60} alt={`${user.id}-profile-image`} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default StoryTab;