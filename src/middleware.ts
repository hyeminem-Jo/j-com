import { auth as middleware } from "./auth"
import {NextResponse} from "next/server";

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/stories', '/home', '/explore', '/message', '/search'],
}