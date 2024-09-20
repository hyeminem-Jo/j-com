"use client";
import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        // NEXT_PUBLIC_: 브라우저에서 접근가능한 환경변수
        require("@/mocks/browser");
      }
    }
  }, []);

  return null;
};