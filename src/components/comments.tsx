import Image from "next/image";
import { dayjs } from '@/app/lib/dayjs'
import { StartsRate } from "./stars-rate";

interface CommentsPropsType {
  userCoverUrl: string
  userName: string
  description: string
  rate: number
  makedAt: Date
}

export function Comments({ description, makedAt, rate, userCoverUrl, userName }: CommentsPropsType) {
  return (
    <div className="p-5 flex flex-col gap-5 bg-gray-700 rounded-lg">
      <div className="flex-1 flex items-start justify-between">
        <div className="flex items-center justify-start gap-4">
          <Image
            src={userCoverUrl}
            className="w-9 h-9 rounded-full border-2 border-solid border-white"
            alt=""
            width={144}
            height={144}
          />
          <div className="flex flex-col">
            <p className="text-gray-100 font-bold">{userName}</p>
            <span className="text-s text-gray-400">{dayjs(makedAt).fromNow(true)}</span>
          </div>
        </div>
        <StartsRate rate={rate} />
      </div>
      <p className="text-s text-gray-300">{description}</p>
    </div>
  )
}