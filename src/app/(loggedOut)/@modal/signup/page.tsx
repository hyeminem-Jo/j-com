import React from 'react';
import ModalPage from "@/app/_component/common/Modal/ModalPage";
import SignupForm from "@/app/(loggedOut)/_component/SignupForm";
import Main from "@/app/(loggedOut)/_component/Main";
import {auth} from "@/auth";
import {redirect} from "next/navigation";

const Page = async () => {
  const session = await auth(); // useSession 의 서버 버전

  if (session?.user) {
    redirect('/home');
    return null;
  }

  return (
    <>
      <ModalPage title="회원가입">
        <SignupForm />
      </ModalPage>
      <Main />
    </>
  );
};

export default Page;