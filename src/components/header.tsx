import { FaChartLine } from "react-icons/fa";

export function Header() {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <FaChartLine className="text-green-100 w-8 h-8"/>
        <h1 className="text-xl font-bold">Feed</h1>
      </div>
    </header>
  )
}