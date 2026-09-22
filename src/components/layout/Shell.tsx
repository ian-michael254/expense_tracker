import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import TopBar from "./TopBar"


const Shell = () => {
  return (
     <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <SideBar />

        <div className="flex min-h-screen flex-1 flex-col">
          <TopBar />

          <main className="flex-1 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Shell