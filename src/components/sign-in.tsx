'use client'

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export function SignWithGoogle() {
  return (
      <Button onClick={() =>{ signIn('google')}}>
        <div className='flex gap-4 items-center justify-center'>
          <FcGoogle />
          <span>Sign in with Google</span>
        </div>
      </Button>
  )
}

export function SignInWithGithub() {
  return (
      <Button onClick={() =>{ signIn('github')}}>
        <div className='flex gap-4 items-center justify-center'>
          <FaGithub />
          <span>Sign in with Github</span>
        </div>
      </Button>
  )
}

export function SignInLikeGuest() {
  return (
    <Button>
      <div className='flex gap-4 items-center justify-center'>
        <HiOutlineRocketLaunch />
        <span>Sign in with Guest</span>
      </div>
    </Button>
  )
}