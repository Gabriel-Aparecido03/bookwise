import Background from '@/assets/BackgroundBookwise.png';
import Image from 'next/image';

import { SignInLikeGuest, SignInWithGithub, SignWithGoogle } from '@/components/sign-in';

export default function Home() {
  return (
    <main className="flex justify-between items-center h-screen w-screen p-6">
      <Image className='h-[calc(100vh-50px)] max-h-[900px]' alt='' src={Background} />
      <div className='flex flex-col items-center justify-center w-1/2 gap-10'>
        <div>
          <h1 className='font-bold text-2xl'>Welcome !</h1>
          <h2>Make login or access like guest</h2>
        </div>
        <div className='flex flex-col gap-4'>
          <SignWithGoogle />
          <SignInWithGithub />
          <SignInLikeGuest />
        </div>
      </div>
    </main>
  )
}
