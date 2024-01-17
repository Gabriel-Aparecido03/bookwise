'use client'
import { useBooks } from "../hook/useBooks";
import { usePathname } from "next/navigation";

import { FaChartLine } from "react-icons/fa";

export function Header() {
  const { changeFilterSearch } = useBooks()

  const route = usePathname()
  const selectedSection = route.split('/')

  return (
    <header>
      <div className="flex items-center justify-start gap-1">
        <FaChartLine className="text-3xl text-green-100" />
        <span className="capitalize font-bold text-2xl">
          {selectedSection[2] === "profile" && 'Profile'}
          {selectedSection[2] === "explorer" && 'Explorer'}
          {selectedSection.length === 2 && 'Feed'}
        </span>
      </div>
    </header>
  )
}