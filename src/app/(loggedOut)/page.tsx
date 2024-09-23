import Main from '@/app/(loggedOut)/_component/Main'
import {auth} from "@/auth";
import {redirect} from "next/navigation";

export default async function Home() {
  const session = await auth(); // useSession 의 서버 버전

  if (session?.user) {
    redirect('/home');
    return null;
  }

  return <Main />
}
