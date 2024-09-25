const path = require('path')

module.exports = {
  // reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ["d2u3dcdbebyaiu.cloudfront.net", "loremflickr.com"], // 이곳에 에러에서 hostname 다음 따옴표에 오는 링크를 적으면 된다.
    // 외부이미지 에러 해결: https://heeeming.tistory.com/entry/Next-Nextjs-%EC%99%B8%EB%B6%80-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%90%EB%9F%AC-Error-Invalid-src-prop
    // 외부이미지 출처: https://www.teamblind.com/kr/post/%EB%98%A5%EA%B0%9C-%EA%B0%9C%EA%B8%B0%EC%97%BC-D4QJUoHD
  },
}
