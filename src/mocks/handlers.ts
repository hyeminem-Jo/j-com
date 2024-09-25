import {http, HttpResponse} from 'msw'
import {faker} from "@faker-js/faker";

// 가상 날짜
function generateDate() {
  const current = new Date(Date.now()); // 현재 시간
  current.setDate(current.getDate() - 14); // current 객체의 날짜를 2주 전으로 설정
  const lastWeek = current;

  return faker.date.between({ // 2주전부터 현재 시점까지의 임의의 날짜 반환
    from: lastWeek,
    to: new Date(), // 현재 날짜와 시간을 Date 객체로 전달
  });
}

// 가상 유저
const User = [
  {
    id: 'h._seung',
    nickname: '랍뷰희승',
    image: faker.image.urlLoremFlickr(),
  },
  {
    id: 'veenoo',
    nickname: '조수빈',
    image: faker.image.urlLoremFlickr(),
  },
  {
    id: 'jin_woo',
    nickname: '김김진진우우',
    image: faker.image.urlLoremFlickr(),
  },
  {
    id: 'hyun_mori',
    nickname: '이현지',
    image: faker.image.urlLoremFlickr(),
  },
  {
    id: 'lovely_joo',
    nickname: '곽이주',
    image: faker.image.urlLoremFlickr(),
  }
]

export const handlers = [
  http.post('/api/login', () => {
    console.log('로그인');
    return HttpResponse.json({
      userId: 1,
      id: 'konnimey',
      nickname: '혜지닝',
      image: '/profile_image.jpg',
    }, {
      headers: { // HTTP 응답 헤더에 쿠키를 설정하는 부분
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      }
    })
  }),
  http.post('/api/logout', () => {
    console.log('로그아웃');
    return new HttpResponse(null, {
      headers: { // 클라이언트에게 세션 쿠키를 삭제하도록 지시하는 HTTP 응답 헤더를 설정
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
      }
    })
  }),
  http.post('/api/users', async ({ request }) => {
    console.log('회원가입');
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0'
      }
    })
    // 에러 났을 경우 (해당 id 는 이미 회원이 존재)
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // })
  }),
  http.get('/api/postRecommends', ({ request }) => {
    // const url = new URL(request.url)
    // const cursor = parseInt(url.searchParams.get('cursor') as string) || 0
    return HttpResponse.json(
      [
        {
          postId: 1,
          User: User[0],
          content: `${1} 여기서 잠깐, 나만의 시간 🌿`,
          Images: [{imageId: 1, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'}],
          createdAt: generateDate(),
          numOfLike: 5,
          Comments: [
            {
              commentId: 1,
              User: User[0],
              content: '모찌리도후가 먹고싶엉',
              createdAt: generateDate(),
            },
            {
              commentId: 2,
              User: User[1],
              content: '술먹자',
              createdAt: generateDate(),
            },
          ],
        },
        {
          postId: 2,
          User: User[1],
          content: `${2} 바쁜 하루 속에서 잠깐의 여유를 즐기며, 내가 좋아하는 것들로 마음을 채우는 시간. 오늘도 소소한 행복 가득 ☕️`,
          Images: [
            {imageId: 1, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'},
            {imageId: 2, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'},
          ],
          createdAt: generateDate(),
          numOfLike: 5,
          Comments: []
        },
        {
          postId: 3,
          User: User[2],
          content: `${3} 가끔은 아무 계획 없이 흘러가는 하루도 괜찮아. 그렇게 맞이한 작은 순간들이 오히려 더 소중하니까 🌷`,
          Images: [
            {imageId: 1, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'},
            {imageId: 2, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'},
          ],
          createdAt: generateDate(),
          numOfLike: 5,
          Comments: []
        },
        {
          postId: 4,
          User: User[3],
          content: `${4} 달콤한 커피와 함께하는 여유 ☕`,
          Images: [
            {imageId: 1, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'},
            {imageId: 2, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'},
            {imageId: 3, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'},
            {imageId: 4, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'},
          ],
          createdAt: generateDate(),
          numOfLike: 5,
          Comments: []
        },
        {
          postId: 5,
          User: User[4],
          content: `${5} 우리, 오늘도 좋은 하루였지?`,
          Images: [
            {imageId: 1, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'},
            {imageId: 2, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'},
            {imageId: 3, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'},
          ],
          createdAt: generateDate(),
          numOfLike: 5,
          Comments: []
        },
      ]
    )
  }),
  // http.get('/api/followingPosts', ({ request }) => {
  //   return HttpResponse.json(
  //     [
  //       {
  //         postId: 1,
  //         User: User[0],
  //         content: `${1} 내일은 더 멋진 나로 💫`,
  //         Images: [{imageId: 1, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'}],
  //         createdAt: generateDate(),
  //         numOfLike: 5,
  //         Comments: [
  //           {
  //             commentId: 1,
  //             User: User[0],
  //             content: '모찌리도후가 먹고싶엉',
  //             createdAt: generateDate(),
  //           },
  //           {
  //             commentId: 2,
  //             User: User[1],
  //             content: '술먹자',
  //             createdAt: generateDate(),
  //           },
  //         ]
  //       },
  //       {
  //         postId: 2,
  //         User: User[1],
  //         content: `${2} 오늘도 내가 제일 빛나는 순간 ✨`,
  //         Images: [{imageId: 1, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'}],
  //         createdAt: generateDate(),
  //         numOfLike: 5,
  //         Comments: []
  //       },
  //       {
  //         postId: 3,
  //         User: User[2],
  //         content: `${3} 작은 행복, 매일 쌓아가는 중 🧡`,
  //         Images: [{imageId: 1, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'}],
  //         createdAt: generateDate(),
  //         numOfLike: 5,
  //         Comments: []
  //       },
  //       {
  //         postId: 4,
  //         User: User[3],
  //         content: `${4} 일상이 화보라면 이런 느낌!`,
  //         Images: [{imageId: 1, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'}],
  //         createdAt: generateDate(),
  //         numOfLike: 5,
  //         Comments: []
  //       },
  //       {
  //         postId: 5,
  //         User: User[4],
  //         content: `${5} 여기서 시작하는 또 다른 이야기 🌈`,
  //         Images: [{imageId: 1, src: faker.image.urlLoremFlickr(), alt: '이미지 정보'}],
  //         createdAt: generateDate(),
  //         numOfLike: 5,
  //         Comments: []
  //       },
  //     ]
  //   )
  // }),
];
