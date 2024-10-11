import Image from 'next/image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import CommentForm from '@/app/(loggedIn)/_component/CommentForm/CommentForm'
import ActionButton from '@/app/(loggedIn)/_component/ActionButton/ActionButton'
import CircleProfile from '@/app/(loggedIn)/_component/CircleProfile'
import SliderWrapper from '@/app/(loggedIn)/_component/SliderWrapper'
import MorePostOptionButton from '@/app/(loggedIn)/_component/MorePostOptionButton'
import NameButton from '@/app/(loggedIn)/_component/NameButton'
import style from './post.module.scss'
import {Post} from "@/model/Post";

dayjs.locale('ko')
dayjs.extend(relativeTime)

type Prop = {
  post: Post,
  postIndex: number
}

function Post({ post, postIndex }:Prop) {
  console.log(post?.User)

  // const { User, content, createdAt, Images, Comments, numOfLike } = target

  return (
    <article className={style.post}>
      <div className={style.postUser}>
        <div className={style.user}>
          <CircleProfile
            src={post?.User?.image}
            size={35}
            userId={post?.User?.id}
            alt={post?.User?.id}
          />
          <strong className={style.userName}>
            <NameButton userId={post?.User?.id} fontSize={15} />
          </strong>
          <span className={style.dot}>•</span>
          <span className={style.date}>{dayjs(post?.createdAt).fromNow(true)}</span>
        </div>
        <MorePostOptionButton />
      </div>
      {post?.Images.length > 1 ? (
        <div className={style.sliderWrap}>
          <SliderWrapper
            slidesToShow={1}
            slidesToScroll={1}
            className="slickPost slickPostPagination"
          >
            {post?.Images?.map((img) => (
              <div className={style.postImage} key={img?.imageId}>
                <Image
                  src={img?.src!}
                  alt={img?.alt!}
                  fill
                  priority={postIndex === 0}
                  sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </SliderWrapper>
        </div>
      ) : (
        <div className={style.postImage}>
          <Image
            src={post?.Images[0]?.src!}
            alt={post?.Images[0]?.alt!}
            fill
            priority={postIndex === 0}
            sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className={style.postBottom}>
        <ActionButton post={post} />
        <div className={style.like}>좋아요 {post?.numOfLike}개</div>
        {/* TODO: 좋아요 수가 천단위가 넘어가면 ',' 붙이기 => util 함수로 빼기 */}
        <div className={style.postContent}>
          <span>{post?.User?.id}</span>
          <p className={style.desc}>{post?.content}</p>
          {/* TODO: 좋아요 수가 10개 이상인 댓글은 최대 2개까지 노출하기 */}
        </div>
        {post?.Comments?.length !== 0 &&
          <button type="button" className={style.moreComment}>
            댓글 {post?.Comments?.length}개 {post?.Comments?.length > 1 && '모두 '}보기
          </button>
        }
        <CommentForm id={post?.User?.id} />
      </div>
    </article>
  )
}

export default Post
