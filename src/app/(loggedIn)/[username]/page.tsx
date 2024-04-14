import Image from 'next/image'
import Link from 'next/link'
import IcLike2 from '@/app/(loggedIn)/_component/svg/IcLike2'
import IcComment2 from '@/app/(loggedIn)/_component/svg/IcComment2'
import style from './profile.module.scss'

function PostPage() {
  // 나의 게시물
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
    {
      postId: 3,
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
      postId: 4,
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
      postId: 5,
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
      postId: 6,
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
      postId: 7,
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
    <ul className={style.postList}>
      {myPost?.map((post) => (
        <li key={post?.postId} className={style.postItem}>
          <Link href={`/h._jinny/p/${post?.postId}`}>
            <Image
              src={post?.Images[0]?.src}
              fill
              objectFit="cover"
              alt={`post-${post?.postId}`}
            />
            <div className={style.postInfo}>
              <span>
                <IcLike2 />
                <span className={style.length}>{post?.numOfLike}</span>
              </span>
              <span>
                <IcComment2 />
                <span className={style.length}>{post?.Comments.length}</span>
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PostPage
