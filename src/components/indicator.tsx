import { IoBookOutline } from "react-icons/io5";

interface IndicatorPropsType {
  total : number
}

export function Indicator({ total }:IndicatorPropsType) {
  return (
    <div className="flex gap-3 items-center justify-between h-[3rem]">
      <IoBookOutline className="w-8 h-8" />
      <div className="flex-1 flex-col justify-between flex items-start">
        <p className="text-gray-200 font-bold">3853</p>
        <span className="text-s text-gray-300">Pages readed</span>
      </div>
    </div>
  )
}