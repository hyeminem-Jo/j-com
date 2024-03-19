import Link from 'next/link'
import CircleProfile from '@/app/(loggedIn)/_component/CircleProfile'
import { Button } from '@/app/_component/common/Button'
import style from './profile.module.scss'

export default function Profile() {
  const me = {
    // 임시 정보
    id: 'h._jinny',
    nickname: '혜진',
    image: '/profile_image.jpg',
    following: 123,
    follower: 53,
  }

  const myPost = [
    {
      postId: 1,
      content: '리액트 공부는 재밌어...',
      createdAt: new Date(),
      Images: [
        {
          src: 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/22/da16af9b60070a4f7f7a5be7dcc98faf.jpeg',
          alt: '똥개1',
        },
        {
          src: 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/34/ca41e7f0f2232370d83d2ed6a4db3802.jpeg',
          alt: '똥개2',
        },
        {
          src: 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/158/a240b2bbb6c2a2b17aed88242233ee40.jpeg',
          alt: '똥개3',
        },
      ],
      Comments: [
        {
          User: {
            id: 'h._seung',
          },
          content: '모찌리도후가 먹고싶엉',
        },
        {
          User: {
            id: 'veenoo',
          },
          content: '술먹자',
        },
      ],
      numOfLike: 5,
    },
    {
      postId: 2,
      content: '리액트 공부는 재밌어...',
      createdAt: new Date(),
      Images: [
        {
          src: 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/22/da16af9b60070a4f7f7a5be7dcc98faf.jpeg',
          alt: '똥개1',
        },
        {
          src: 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/34/ca41e7f0f2232370d83d2ed6a4db3802.jpeg',
          alt: '똥개2',
        },
        {
          src: 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/158/a240b2bbb6c2a2b17aed88242233ee40.jpeg',
          alt: '똥개3',
        },
      ],
      Comments: [
        {
          User: {
            id: 'h._seung',
          },
          content: '모찌리도후가 먹고싶엉',
        },
        {
          User: {
            id: 'veenoo',
          },
          content: '술먹자',
        },
      ],
      numOfLike: 5,
    },
  ]

  return (
    <main className={style.profile}>
      <header className={style.profileTop}>
        <div className={style.profileUser}>
          <div className={style.profileUserImage}>
            <Link href="#">
              <CircleProfile
                src={me?.image}
                width={150}
                height={150}
                alt={me?.id}
              />
            </Link>
          </div>
          <div className={style.profileUserInfo}>
            <div className={style.profileUserInfoTop}>
              <strong className={style.name}>{me?.id}</strong>
              <div className={style.btns}>
                <Button type="submit" size="md" color="secondary">
                  프로필 편집
                </Button>
                <Button type="submit" size="md" color="secondary">
                  보관된 스토리 보기
                </Button>
              </div>
              <button type="button" className={style.settingBtn}>
                <svg
                  aria-label="옵션"
                  className="x1lliihq x1n2onr6 x5n08af"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>옵션</title>
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className={style.profileUserInfoBottom}>
              <li>
                게시물 <strong>{myPost?.length}</strong>
              </li>
              <li>
                <Link href="#">
                  팔로워 <strong>{me?.follower}</strong>
                </Link>
              </li>
              <li>
                <Link href="#">
                  팔로우 <strong>{me?.following}</strong>
                </Link>
              </li>
            </ul>
            <span className={style.nickname}>{me?.nickname}</span>
          </div>
        </div>
        <div className={style.profileHighlights}></div>
      </header>
    </main>
  )
}
