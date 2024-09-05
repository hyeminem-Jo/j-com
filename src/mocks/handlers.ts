import {http, HttpResponse} from 'msw'

export const handlers = [
  http.post('/api/login', () => {
    console.log('로그인');
    return HttpResponse.json({
      userId: 1,
      nickname: '혜지닝',
      id: 'konnimey',
      image: '/5Udwvqim.jpg',
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
  })
];
