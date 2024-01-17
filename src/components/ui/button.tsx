import { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonProps = { children : ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>
  


export function Button({ children , ...props }:ButtonProps) {
  return (
    <button 
      className={`py-5 px-6 rounded-lg bg-gray-600 flex-1 hover:bg-gray-500 cursor-pointer transition-all `}
      {  ...props }
    >
      { children }
    </button>
  )
}