import { SignInWithGithub, SignWithGoogle } from "./sign-in";

interface SignInModalParamsType {
  open : boolean
  onClose : () => void
}

export function SignInModal({ onClose ,open }:SignInModalParamsType) {
  if(open) return (
    <div onClick={onClose} className="fixed bg-black/60 h-screen w-screen flex items-center justify-center top-0 right-0">
      <div className="z-50 rounded-lg w-[516px] h-[340px] flex flex-col items-center jsutify-center py-[3.5rem] px-[4.5rem] gap-10 bg-gray-700">
        <span>Make yotu login and give your feedback</span>
        <div className="flex flex-1 flex-col gap-2 items-center justify-center">
          <SignInWithGithub />
          <SignWithGoogle />
        </div>
      </div>
    </div>
  )
}