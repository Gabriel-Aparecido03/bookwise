import { InputHTMLAttributes, forwardRef } from "react";
import { CiSearch } from "react-icons/ci";

const Input = forwardRef< HTMLInputElement ,InputHTMLAttributes<HTMLInputElement>>(({ className,...props}, ref) => {
  return (
    <div className={`flex border items-center justify-between border-solid p-4 border-gray-500 rounded-md ${className}`}>
      <input className="bg-transparent border-transparent flex-1 outline-none" ref={ref} {...props }/>
      <CiSearch />
    </div>
  )
})

Input.displayName = 'Input'

export { Input }