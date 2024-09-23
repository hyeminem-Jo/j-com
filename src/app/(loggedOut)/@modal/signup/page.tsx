import React from 'react';
import SignupModal from "@/app/(loggedIn)/_component/Modals/SignupModal";
import PostDetail from "@/app/(loggedIn)/_component/PostDetail/PostDetail";
import ModalPage from "@/app/_component/common/Modal/ModalPage";
import SignupForm from "@/app/(loggedOut)/_component/SignupForm";
import Main from "@/app/(loggedOut)/_component/Main";

const Page = () => {
  return (
    // <SignupModal />
    <>
      <ModalPage title="회원가입">
        <SignupForm />
      </ModalPage>
      <Main />
    </>
  );
};

export default Page;