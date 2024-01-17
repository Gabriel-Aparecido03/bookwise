import { ReactNode } from "react";
import { Header } from "./explorer/components/header";
import { NavigationBar } from "@/components/navigation-bar";

export default function AppLayout({ children }:{ children : ReactNode}) {
  return (
    <main className="flex p-5 min-h-screen flex-1 gap-6">
      <NavigationBar />
      <div className="flex-1 mt-2">
        <Header />
        { children }
      </div>
    </main>
  )
}