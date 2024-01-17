import { FeedPresenter } from "@/interfaces/presenter/feed-presenter";
import { dayjs } from '@/app/lib/dayjs'
import Image from "next/image";
import { convertUrlToNext } from "@/utils/converter-url-to-next";
import { StartsRate } from "./stars-rate";

type PostType = FeedPresenter & {
  dontShowHeaderOfUser?: boolean
}

export function Post(
  { bookAuthorName, bookCoverUrl, bookId, bookName, id, makedAt, rate, userCoverUrl, userId, userName, description, dontShowHeaderOfUser = false }: PostType) {
  return (
    <div className="flex-1 flex flex-col gap-3 bg-gray-700 rounded-md p-5">
      { ! dontShowHeaderOfUser && <div className="flex-1 flex items-start justify-between">
        <div className="flex items-center justify-start gap-4">
          <Image
            src={userCoverUrl ?? ''}
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
      </div> }
      <div className="flex flex-col gap-6 p-6  rounded-md">
        <div className="flex items-stretch justify-start gap-3">
          <Image
            width={98}
            height={134}
            alt=""
            src={convertUrlToNext(bookCoverUrl)}
            className="w-[6.125rem] h-[8.375rem] bg-white"
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <p className="font-bold text-xl">{bookName}</p>
              <span className="text-s text-gray-400">{bookAuthorName}</span>
            </div>
            { dontShowHeaderOfUser && <StartsRate rate={rate} />}
          </div>
        </div>
        <p className="text-gray-300 text-s">
          {description}
        </p>
      </div>
    </div>
  )
}