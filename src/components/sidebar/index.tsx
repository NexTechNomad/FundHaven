import {
  Grid,
  CreditCard,
  ArrowLeftRight,
  Settings,
  LogOut,
  X,
} from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-black flex flex-col items-center py-6 transition-all duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:fixed lg:left-4 lg:top-4 lg:h-auto lg:min-h-[760px] lg:max-h-[90vh] lg:rounded-2xl w-[280px] lg:w-[80px] xl:w-[90px]`}
      >
        {/* Mobile Close Button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 text-white lg:hidden"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="mb-16 mt-32 lg:mb-8 lg:mt-0 w-full px-4 flex justify-center">
          <div className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center font-bold text-lg">
            FH
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 w-full pt-8 lg:pt-0">
          <ul className="space-y-6 px-4 flex flex-col items-center lg:items-center">
            <li className="w-full lg:w-auto">
              <div className="flex items-center lg:justify-center w-full lg:w-12 h-12 text-white bg-white/10 rounded-xl transition-colors pl-4 lg:pl-0">
                <Grid className="w-6 h-6" />
                <span className="ml-3 lg:hidden text-center flex-1 mr-7">
                  Dashboard
                </span>
              </div>
            </li>
            <li className="w-full lg:w-auto">
              <div className="flex items-center lg:justify-center w-full lg:w-12 h-12 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer pl-4 lg:pl-0">
                <CreditCard className="w-6 h-6" />
                <span className="ml-3 lg:hidden text-center flex-1 mr-7">
                  Cards
                </span>
              </div>
            </li>
            <li className="w-full lg:w-auto">
              <div className="flex items-center lg:justify-center w-full lg:w-12 h-12 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer pl-4 lg:pl-0">
                <ArrowLeftRight className="w-6 h-6" />
                <span className="ml-3 lg:hidden text-center flex-1 mr-7">
                  Transactions
                </span>
              </div>
            </li>
            <li className="w-full lg:w-auto">
              <div className="flex items-center lg:justify-center w-full lg:w-12 h-12 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer pl-4 lg:pl-0">
                <Settings className="w-6 h-6" />
                <span className="ml-3 lg:hidden text-center flex-1 mr-7">
                  Settings
                </span>
              </div>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <button className="flex items-center lg:justify-center w-full lg:w-12 h-12 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-colors mx-4 mb-4 pl-4 lg:pl-0">
          <LogOut className="w-6 h-6" />
          <span className="ml-3 lg:hidden text-center flex-1 mr-7">Logout</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
