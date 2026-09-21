import {
    LayoutDashboard,
    Wallet,
    Settings,
    Icon,
} from "lucide-react";

import { NavLink } from "react-router-dom";
const navigation = [
    {
        name:"Dashboard",
        path:"/",
        icon:LayoutDashboard,
        
    },
    {
        name:"Transactions",
        path:"/transactions",
        icon:Wallet,
    },
];
const SideBar = () => {
  return (
    <aside className='hidden min-h-screen w-64 border-r border-indigo-200 bg-indigo-950  text-white md:block'>
        <div className='flex h-full flex-col'>
            <div className='border-b border-indigo-200 p-6'>
                <h1 className='text-xl font-bold text-gray-200'>Expense Tracker</h1>
                <p className='mt-1 text-sm text-gray-50'>Manage your expenses</p>
            </div>
            {/*Navigation Bar*/}
            <nav className='flex-1 p-4'>
                <div className='space-y-2'>
                    {navigation.map((item) => {
                        const Icon =item.icon;
                        return(
                            <NavLink key = {item.path} to = {item.path} className = {({isActive}) => `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${isActive ? "bg-indigo-900 text-white " : "text-gray-300 hover:bg-indigo-800"}`}>
                                <Icon size = {20} />
                                {item.name}
                            </NavLink>
                        );
                    })}

                </div>

            </nav>
            <div className='border-t border-indigo-200 p-4'>
                <button className='flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-200 hover:bg-indigo-800'>
                    <Settings size ={20} />
                    Settings
                </button>

            </div>
        </div>

    </aside>
  )
}

export default SideBar