import { Search, Bell } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  title?: string;
}

const Header = ({
  searchQuery,
  setSearchQuery,
  title = "Overview",
}: HeaderProps) => {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
          {title}
        </h1>
      </div>

      <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search for something"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-[240px] lg:w-[280px] pl-10 pr-4 py-2.5 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 placeholder-gray-400 text-sm"
          />
        </div>

        <div className="flex items-center justify-between sm:justify-start sm:space-x-4">
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
            <span className="text-white font-medium text-xs sm:text-sm">W</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
