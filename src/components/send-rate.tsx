import Image from "next/image"
import { MdCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { StartsRate } from "./stars-rate";
import { Textarea } from "./ui/textarea";
import { useSession } from "next-auth/react";

interface SendRatePropsType {
  isOpen: boolean
  onClose: () => void
  onSend: () => void
  setDescription : (e:string) => void
  description : string
  setRate : (e:number) => void
  rate : number
}

export function SendRate({ isOpen, onClose, onSend , description,rate,setDescription,setRate }: SendRatePropsType) {
  const session = useSession()
  if(!isOpen) return null

  return (
    <div className="flex flex-col p-6 bg-gray-700 gap-3">
      <div className="flex items-center justify-between w-full ">
        <div className="flex items-center gap-2">
          <Image
            src={session.data?.user.image ?? ''}
            alt=""
            height={40}
            width={40}
            className="rounded-full w-10 h-10 border border-solid border-green-100"
          />
          <span className="font-bold text-gray-100 text-base">Lorem lorem</span>
        </div>
        <StartsRate rate={rate} controlValue={setRate} />
      </div>
      <Textarea onChange={e => setDescription(e.target.value)} value={description}/>
      <div className="flex gap-2 items-center justify-end w-full">
        <button onClick={onClose} className="p-2 rounded-lg flex items-center justify-center bg-gray-600 h-10 w-10 hover:bg-gray-500">
          <MdClose  clasName="text-purple-100 w-3 h-3" />
        </button>
        <button  onClick={onSend} className="p-2 rounded-lg flex items-center justify-center bg-gray-600 h-10 w-10 hover:bg-gray-500">
          <MdCheck clasName="text-purple-100 w-3 h-3" />
        </button>
      </div>
    </div>
  )
}