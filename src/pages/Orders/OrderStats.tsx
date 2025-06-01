import {
  Box,
  Bell,
  CheckCircle,
  RotateCw,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const OrderStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 lg:mb-8">
      <StatCard
        title="Total Orders"
        value="5,460"
        change="+12%"
        isPositive={true}
        icon={<Box className="w-6 h-6" />}
        color="blue"
      />
      <StatCard
        title="Active Orders"
        value="245"
        change="+8%"
        isPositive={true}
        icon={<Bell className="w-6 h-6" />}
        color="green"
      />
      <StatCard
        title="Pending Orders"
        value="15"
        change="-3%"
        isPositive={false}
        icon={<RotateCw className="w-6 h-6" />}
        color="orange"
      />
      <StatCard
        title="Completed Orders"
        value="5,200"
        change="+15%"
        isPositive={true}
        icon={<CheckCircle className="w-6 h-6" />}
        color="purple"
      />
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  color: "blue" | "green" | "orange" | "purple";
}

const colorVariants = {
  blue: {
    bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    accent: "bg-blue-500",
  },
  green: {
    bg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    accent: "bg-emerald-500",
  },
  orange: {
    bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
    accent: "bg-orange-500",
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    accent: "bg-purple-500",
  },
};

const StatCard = ({
  title,
  value,
  change,
  isPositive,
  icon,
  color,
}: StatCardProps) => {
  const colors = colorVariants[color];

  return (
    <div
      className={`relative p-6 rounded-2xl ${colors.bg} border-0 hover:shadow-xl hover:scale-105 transition-all duration-300 group overflow-hidden`}
    >
      {/* Decorative accent line */}
      <div
        className={`absolute top-0 left-0 w-full h-1 ${colors.accent}`}
      ></div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white"></div>
        <div className="absolute bottom-2 left-2 w-12 h-12 rounded-full bg-white"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div
            className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
          >
            {icon}
          </div>
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
              isPositive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {isPositive ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            {change}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
            {value}
          </h3>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderStats;
