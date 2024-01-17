'use client'

import { AsideBar } from "@/components/aside-bar"
import { Feed } from "@/components/feed"

export default function App() {

  return (
    <div className="flex items-start">
      <Feed />
      <AsideBar />
    </div>
  )
}