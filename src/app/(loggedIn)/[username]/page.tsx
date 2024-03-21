import Image from 'next/image'
import Link from 'next/link'
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
          <Link href={`/h._jinny/${post?.postId}`}>
            <Image
              src={post?.Images[0]?.src}
              fill
              objectFit="cover"
              alt={`post-${post?.postId}`}
            />
            <div className={style.postInfo}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgb(256, 256, 256)"
                >
                  <path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z" />
                </svg>
                <span className={style.length}>{post?.numOfLike}</span>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 23 23"
                  width="24"
                  height="24"
                  fill="rgb(256, 256, 256)"
                >
                  <path d="M24,11.309V24H12.018A12,12,0,1,1,24,11.246ZM13,7H7V9h6Zm4,4H7v2H17Zm0,4H7v2H17Z" />
                </svg>
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
