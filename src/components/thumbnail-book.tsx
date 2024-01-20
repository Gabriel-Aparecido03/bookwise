import Image from "next/image";
import { useState } from "react";
import { DrawerAvaliate } from "./drawer-avaliate";
import { StartsRate } from "./stars-rate";

interface ThumbnailBookType {
  author: string;
  coverUrl: string;
  id: string;
  name: string;
  rate: number
}

export function ThumbnailBook({ author, coverUrl, id, name, rate }: ThumbnailBookType) {

  const [openDrawer, setOpenDrawer] = useState(false)

  const src = (`/${coverUrl.split('/')[3].split('.')[0].concat('.png')}`)
  return (
    <>
      <DrawerAvaliate bookId={id} isOpen={openDrawer} onClose={() => { setOpenDrawer(false) }} />
      <div  onClick={() =>{ setOpenDrawer(true)} } className="rounded-lg w-[20rem] h-[8rem] bg-gray-700 p-4 flex cursor-pointer items-stretch justify-start gap-5 border-2 border-solid border-transparent hover:border-gray-600 transition-all duration-75">
        <Image alt="" height={94} width={36} src={src} className="w-[4rem] h-[5.875rem]" />
        <div className="flex flex-col justify-between flex-1 items-start gap-1">
          <div className="flex flex-col gap-1 ">
            <p className="font-bold text-gray-100">{name}</p>
            <span className="text-sm text-gray-400">{author} </span>
          </div>
          <StartsRate rate={rate} />
        </div>
      </div>
    </>

  )
}