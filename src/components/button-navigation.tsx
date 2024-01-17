import Link from "next/link";
import { ReactNode } from "react";

interface ButtonNavigationType {
  icon: ReactNode
  text: string
  to: string
  isSelect?: boolean
}

export function ButtonNavigation({ icon, text, to, isSelect = false }: ButtonNavigationType) {
  return (
    <Link
      href={to}
      className={`${isSelect ? 'text-gray-100' : 'text-gray-400'} hover:text-gray-100 transition-all duration-100 bg-transparent flex items-center pl-2 justify-start gap-3 border-l-2 ${isSelect ? 'border-green-100' : 'border-l-transparent' } border-solid`}
    >
      {icon}
      <span className="font-bold">{text}</span>
    </Link>
  )
}