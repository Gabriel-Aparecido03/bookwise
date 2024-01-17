import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { Button } from "./ui/button";

export function SignWithGoogle() {
  return (
    <Link href="api/auth/signin">
      <Button>
        <div className='flex gap-4 items-center justify-center'>
          <FcGoogle />
          <span>Sign in with Google</span>
        </div>
      </Button>
    </Link>
  )
}

export function SignInWithGithub() {
  return (
    <Link href="api/auth/signin">
      <Button>
        <div className='flex gap-4 items-center justify-center'>
          <FaGithub />
          <span>Sign in with Github</span>
        </div>
      </Button>
    </Link>
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