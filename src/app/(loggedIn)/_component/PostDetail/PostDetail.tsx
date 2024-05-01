import style from '@/app/(loggedIn)/_component/PostDetail/postDetail.module.scss'
import SliderWrapper from '@/app/(loggedIn)/_component/SliderWrapper'
import Image from 'next/image'
import MorePostOptionButton from '@/app/(loggedIn)/_component/MorePostOptionButton'
import CircleProfile from '@/app/(loggedIn)/_component/CircleProfile'
import NameButton from '@/app/(loggedIn)/_component/NameButton'
import CommentForm from '@/app/(loggedIn)/_component/CommentForm/CommentForm'
import ActionButton from '@/app/(loggedIn)/_component/ActionButton/ActionButton'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'

dayjs.locale('ko')
dayjs.extend(relativeTime)

function PostDetail() {
  const target = {
    User: {
      id: 'h._jinny',
      nickname: '혜진',
      image: '/profile_image.jpg',
    },
    content:
      '리액트 공부는 재밌어...리액트 공부는 재밌어...리액트 공부는 재밌어...리액트 공부는 재밌어...리액트 공부는 재밌어...리액트 공부는 재밌어...리액트 공부는 재밌어...리액트 공부는 재밌어...리액트 공부는 재밌어...리액트 공부는 재밌어...리액트 공부는 재밌어...리액트 공부는 재밌어...리액트 공부는 재밌어...',
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
          image: '/user.jpg',
        },
        content: '모찌리도후가 먹고싶엉',
        like: 3,
      },
      {
        User: {
          id: 'veenoo',
          image: '/user.jpg',
        },
        content: '술먹자',
      },
      {
        User: {
          id: 'jin_woo',
          image: '/user.jpg',
        },
        content: '술먹자',
      },
    ],
    numOfLike: 5,
    postId: 1,
  }
  const { User, Images, createdAt, content, Comments } = target

  return (
    <div className={style.postWrap}>
      <div className={style.postImageWrap}>
        {/* 이미지 슬라이드 */}
        {Images.length > 1 ? (
          <SliderWrapper
            dots={false}
            slidesToShow={1}
            slidesToScroll={1}
            className="slickPost"
          >
            {Images.map((img) => (
              <div className={style.image}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={550}
                  height={600}
                  objectFit="cover"
                />
              </div>
            ))}
          </SliderWrapper>
        ) : (
          <div className={style.image}>
            <Image
              src={Images[0].src}
              alt={Images[0].alt}
              width={550}
              height={600}
              objectFit="cover"
            />
          </div>
        )}
      </div>
      <div className={style.postArea}>
        <div className={style.postAreaTop}>
          <div className={style.idWrap}>
            <CircleProfile
              src={User?.image}
              size={28}
              userId={User?.id}
              alt={User?.id}
              ring={false}
              isButton={false}
            />
            <NameButton userId={User?.id} fontSize={14} />
          </div>
          <MorePostOptionButton />
        </div>
        <div className={style.postContent}>
          <div className={style.myContent}>
            <CircleProfile
              src={User?.image}
              size={28}
              userId={User?.id}
              alt={User?.id}
              ring={false}
              isButton={false}
            />
            <div className={style.nameAndContent}>
              <div className={style.name}>
                <NameButton userId={User?.id} fontSize={14} />
                <span>{dayjs(createdAt).fromNow(true)}</span>
              </div>
              <div className={style.contentsWrap}>
                <div className={style.content}>{content}</div>
              </div>
            </div>
          </div>
          <ul>
            {Comments.map((item) => (
              <li className={style.Comment}>
                <CircleProfile
                  src={item?.User?.image}
                  size={28}
                  userId={item?.User?.id}
                  alt={item?.User?.id}
                  ring={false}
                  isButton={false}
                />
                <div className={style.nameAndContent}>
                  <div className={style.name}>
                    <NameButton userId={item?.User?.id} fontSize={14} />
                    <span>{dayjs(createdAt).fromNow(true)}</span>
                  </div>
                  <div className={style.contentsWrap}>
                    <div className={style.content}>{item?.content}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.postAreaBottom}>
          <div className={style.action}>
            <ActionButton />
          </div>
          <div className={style.commentForm}>
            <CommentForm id={User?.id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
