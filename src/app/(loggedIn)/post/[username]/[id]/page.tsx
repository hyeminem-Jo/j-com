const post = {
  User: {
    id: 'h._jinny',
    nickname: '혜진',
    image: '/user-01.jpg',
  },
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
  postId: 1,
}

export default function Page() {
  return (
    <div>
      게시글 상세
      {JSON.stringify(post)}
    </div>
  )
}
