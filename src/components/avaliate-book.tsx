import { IoBookOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import Image from "next/image";
import { StartsRate } from "./stars-rate";

interface AvaliateBookPropsType {
  coverUrl: string
  name: string
  autor: string
  totalAvaliations: number
  totalPages: number
  category: string[]
  avarageRate: number
}

export function AvaliateBook({ 
    autor, category, avarageRate, coverUrl, name, totalAvaliations, totalPages 
  }:AvaliateBookPropsType) {
  return (
    <div className="bg-gray-700 rounded-xl p-8">
      <div className="flex gap-3">
        <Image
          src={coverUrl} 
          alt="" 
          className="w-[10.72819rem] h-[15.125rem] rounded-md" 
          height={242}
          width={171}
        />
        <div className="flex justify-between flex-col">
          <div className="flex flex-col">
            <p className="font-bold text-lg text-gray-100">{name}</p>
            <span className="text-gray-300">{autor}</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <StartsRate rate={avarageRate} />
            <span className="text-gray-400 text-s">{totalAvaliations} avaliations</span>
          </div>
        </div>
      </div>
      <div className="border-t border-solid border-t-gray-600 flex items-center justify-between mt-3 px-4 pt-2">
        <div className="flex gap-3 items-center justify-between h-[3rem]">
          <CiBookmark className="w-8 h-8" />
          <div className="flex-1 flex-col justify-between flex items-start">
            <p className="text-gray-200 font-bold">Category</p>
            <div className="flex items-center flex-wrap gap-1">
              {
                category.map((i,index) => <span key={i} className={`lowercase font-bold ${index === 0 && 'capitalize'} text-s text-gray-300`}>{i}{index !== category.length - 1 && ','}</span>)
              }
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-between h-[3rem]">
          <IoBookOutline className="w-8 h-8" />
          <div className="flex-1 flex-col justify-between flex items-start">
            <p className="text-gray-200 font-bold">Pages</p>
            <span className="text-s text-gray-300">{totalPages}</span>
          </div>
        </div>
      </div>
    </div>
  )
}