'use client'
import React from 'react'
import {useForm} from "react-hook-form";

function MessagePage() {
  type FormValues = {
    firstName: string;
  };

  let renderCount = 0;

  const { register, handleSubmit, setFocus, watch } = useForm();
  const onSubmit = (data: FormValues) => console.log(data);
  renderCount++;

  React.useEffect(() => {
    setFocus("firstName");
    console.log(watch("firstName"))
  }, [setFocus]);

  return (
    <div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <button type="submit" onClick={() => {setFocus("firstName")}}>wpcnf</button>
      </form>
    </div>
  );
}

export default MessagePage
