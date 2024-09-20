"use server";

import {redirect} from "next/navigation";

export default async (prevState: any, formData: FormData) => {
  let shouldRedirect = false;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
      method: 'post',
      body: formData,
      credentials: 'include',
    })
    console.log('성공!! status', response.status);
    if (response.status === 403) {
      return { message: 'user_exists' };
    }
    console.log(await response.json())
    shouldRedirect = true;
  } catch (err) {
    console.error(err);
    return;
  }

  if (shouldRedirect) {
    redirect('/home'); // try/catch문 안에서 X
  }
}