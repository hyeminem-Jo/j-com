import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn, // 로그인 하는 용도
} = NextAuth({
  pages: {
    signIn: '/', // 로그인 페이지
    newUser: '/signup', // 회원가입 페이지
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) { // 로그인을 수행할 때 호출됨
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
          // next auth 최신버전부터는 AUTH_URL 이 아닌 NEXT_PUBLIC_BASE_URL 로 써야함
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
        })

        if (!authResponse.ok) { // 로그인 실패
          return null
        }

        const user = await authResponse.json()

        return user
      },
    }),
  ]
});