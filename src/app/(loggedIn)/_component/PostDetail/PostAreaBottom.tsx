'use client'

import style from "@/app/(loggedIn)/_component/PostDetail/postDetail.module.scss";
import ActionButton from "@/app/(loggedIn)/_component/ActionButton/ActionButton";
import CircleProfile from "@/app/(loggedIn)/_component/CircleProfile";
import dayjs from "dayjs";
import CommentForm from "@/app/(loggedIn)/_component/CommentForm/CommentForm";
import {useState} from "react";

const PostAreaBottom = ({user, firstThreeUsers, usersWhoLiked, createdAt}) => {
  const [isCommentFocus, setIsCommentFocus] = useState(false)

  return (
    <div className={style.postAreaBottom}>
      <div className={style.action}>
        <ActionButton setIsCommentFocus={setIsCommentFocus} isPostDetail />
        <div className={style.likeUser}>
          <ul className={style.likeUserWrap}>
            {firstThreeUsers.map((user) => (
              <li key={user?.id}>
                <CircleProfile
                  src={user?.image}
                  size={21}
                  userId={user?.id}
                  alt={user?.id}
                  isButton={false}
                />
              </li>
            ))}
          </ul>
          <p className={style.desc}>
            <strong>{usersWhoLiked[0].id}</strong>님 외{' '}
            <strong>{usersWhoLiked.length}명</strong>이 좋아합니다
          </p>
          <div className={style.date}>
            {dayjs(createdAt).format('YYYY년 MM월 DD일')}
          </div>
        </div>
      </div>
      <div className={style.commentForm}>
        <CommentForm id={user?.id} isCommentFocus={isCommentFocus} setIsCommentFocus={setIsCommentFocus} />
      </div>
    </div>
  );
};

export default PostAreaBottom;