import React from 'react';
import ModalPage from "@/app/_component/common/Modal/ModalPage";
import SignupForm from "@/app/(loggedOut)/_component/SignupForm";

const Page = () => {
  return (
  <ModalPage title="회원가입">
    <SignupForm />
  </ModalPage>
  );
};

export default Page;