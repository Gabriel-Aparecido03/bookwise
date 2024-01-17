'use client'

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { RxExit } from "react-icons/rx";
import { SignInModal } from "./sign-in-modal";

export function Profile() {

  const session = useSession()
  const [ openModal , setOpenModal ] = useState(false)

  if (session.status === "unauthenticated") return (
    <>
      <footer>
        <button className="bg-transparent flex items-center gap-3">
          <span className="font-bold text-gray-400 hover:text-gray-100">Make login</span>
          <RxExit className="w-6 h-6 text-green-100" />
        </button>
      </footer>
      <SignInModal onClose={(() => { setOpenModal(false) })} open={openModal}/>
    </>
  )
  return (
    <footer>
      <button
        onClick={async () => {
          await signOut();
        }}
        className="bg-transparent flex items-center gap-3"
      >
        <Image src={session.data?.user.image ?? ''} alt="" height={32} width={32} className="h-[2rem] w-[2rem] rounded-full bg-white" />
        <span className="font-bold text-xs text-gray-400 hover:text-gray-100">{session?.data?.user.name?.slice(0, 12).concat('...')}</span>
        <RxExit className="w-6 h-6 text-red-400" />
      </button>
    </footer>
  )
}