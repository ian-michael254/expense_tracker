import { Bell } from "lucide-react"


const TopBar = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 md:px-6">
      <div>
        <h2 className="font-semibold text-gray-900">
          Expense Tracker
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-gray-600 hover:text-gray-900">
          <Bell size={20} />
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
          IM
        </div>
      </div>
    </header>
  )
}

export default TopBar