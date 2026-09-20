import {
  BarChart3,
  LayoutDashboard,
  Settings,
  Wallet,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: Wallet,
  },
];

const Sidebar = () => {
  return (
    <aside className="hidden min-h-screen w-64 border-r border-gray-200 bg-white md:block">
      <div className="flex h-full flex-col">
        <div className="border-b border-gray-200 p-6">
          <h1 className="text-xl font-bold text-gray-900">
            ExpenseTracker
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your money
          </p>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  <Icon size={20} />
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-gray-200 p-4">
          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-100">
            <Settings size={20} />
            Settings
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;