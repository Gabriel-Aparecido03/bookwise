'use client'

import { api } from "@/app/lib/axios"
import { useEffect, useState } from "react"
import { dayjs } from '@/app/lib/dayjs'
import { RiBookOpenLine } from "react-icons/ri";
import { TbBooks } from "react-icons/tb";
import { UserInfoType } from "@/interfaces/presenter/user-infos-presenter";
import { PiUserList } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import Image from "next/image";
import { useSession } from "next-auth/react";

export function ProfileStats() {

  const [userInfos, setUserInfos] = useState<UserInfoType>()
  const session = useSession()

  async function fetchingUserInfos() {
    const res = await api.get(`/user/${session?.data?.user.email}/infos`)
    if (res.status === 200) setUserInfos(res.data.userInfo)
  }

  /* useEffect(() => {
    fetchingUserInfos()
  }, []) */

  if(!userInfos) return null

  return (
    <div className="w-[230px] flex flex-col justify-start gap-8 border-l border-solid border-gray-700 p-3">
      <div className="flex flex-col items-center justify-center">
        <Image src={userInfos.userPhoto ?? ''} alt="" height={72} width={72} className="h-[4.5rem] w-[4.5rem] rounded-full bg-white" />
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg text-center font-bold">{userInfos.userName}</p>
          <span className="text-s text-gray-400 text-center">{dayjs(userInfos.createdAt).fromNow()}</span>
        </div>
      </div>
      <div className="rounded-3xl bg-gradient-horizontal w-1/5 mx-auto" />
      <div className="flex flex-col gap-5 items-start justify-start">
        <div className="flex gap-4 items-center justify-start ml-5">
          <RiBookOpenLine className="w-[2rem] h-[2rem] text-green-100" />
          <div className="flex flex-col justify-between">
            <p className="font-bold text-gray-200 text-base">{userInfos.totalPagesReaded}</p>
            <span className="text-sm text-gray-300 capitalize">pages readed</span>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-start ml-5">
          <TbBooks className="w-[2rem] h-[2rem] text-green-100" />
          <div className="flex flex-col justify-between">
            <p className="font-bold text-gray-200 text-base">{userInfos.ratedBooks}</p>
            <span className="text-sm text-gray-300 capitalize">books rated</span>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-start ml-5">
          <PiUserList className="w-[2rem] h-[2rem] text-green-100" />
          <div className="flex flex-col justify-between">
            <p className="font-bold text-gray-200 text-base">{userInfos.authors}</p>
            <span className="text-sm text-gray-300 capitalize">authors readed</span>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-start ml-5">
          <CiBookmark className="w-[2rem] h-[2rem] text-green-100" />
          <div className="flex flex-col justify-between">
            <p className="font-bold text-gray-200 text-base">{userInfos.mostReadedCategory}</p>
            <span className="text-sm text-gray-300 capitalize">Favorite category</span>
          </div>
        </div>
      </div>
    </div>
  )
}