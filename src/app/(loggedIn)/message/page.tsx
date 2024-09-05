'use client'
import React from 'react'
import {useForm} from "react-hook-form";
import Input from "@/app/_component/common/Input/Input";

function MessagePage() {
  type FormValues = {
    firstName: string;
  };

  let renderCount = 0;

  const { register, handleSubmit, setFocus, watch, control, setError, formState: { errors } } = useForm();
  const onSubmit = (data: FormValues) => console.log(data);
  renderCount++;

  React.useEffect(() => {
    setFocus("firstName");
    setFocus("email");

    setError("email", {
      type: "manual",
      message: "Dont Forget Your Username Should Be Cool!",
    })
  }, [setFocus]);

  return (
    <div>
      메시지 페이지
      {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
      {/*  <input {...register("firstName")} placeholder="First Name" />*/}
      {/*  <button type="submit" onClick={() => {setFocus("firstName")}}>wpcnf</button>*/}

      {/*  <Input*/}
      {/*    name="email"*/}
      {/*    control={control}*/}
      {/*    maxLength="30"*/}
      {/*    type="text"*/}
      {/*    placeholder="아이디"*/}
      {/*    rules={{*/}
      {/*      required: '아이디를 입력해주세요',*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <div>{JSON.stringify(errors)}</div>*/}
      {/*</form>*/}
    </div>
  );
}

export default MessagePage
