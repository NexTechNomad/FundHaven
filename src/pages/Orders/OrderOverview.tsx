import { useState } from "react";

const OrderOverview = () => {
  const [timeRange, setTimeRange] = useState("This year");

  // Mock data for the line graph
  const mockData = [
    { month: "Jan", value: 30 },
    { month: "Feb", value: 45 },
    { month: "Mar", value: 35 },
    { month: "Apr", value: 50 },
    { month: "May", value: 40 },
    { month: "Jun", value: 45 },
    { month: "Jul", value: 55 },
  ];

  // SVG dimensions and padding
  const svgWidth = 1200;
  const svgHeight = 300;
  const padding = {
    top: 20,
    right: 40,
    bottom: 40,
    left: 40,
  };

  // Calculate scales
  const maxValue = Math.max(...mockData.map((d) => d.value));
  const yScale = (value: number) => {
    return (
      (svgHeight - padding.top - padding.bottom) * (1 - value / maxValue) +
      padding.top
    );
  };

  const xStep =
    (svgWidth - (padding.left + padding.right)) / (mockData.length - 1);
  const getX = (index: number) => padding.left + xStep * index;

  // Generate curved path
  const points = mockData.map((d, i) => [getX(i), yScale(d.value)]);
  const curvePath = points.reduce((path, point, i) => {
    if (i === 0) {
      return `M ${point[0]} ${point[1]}`;
    }
    const prevPoint = points[i - 1];
    const controlX1 = prevPoint[0] + (point[0] - prevPoint[0]) * 0.5;
    const controlX2 = prevPoint[0] + (point[0] - prevPoint[0]) * 0.5;
    return `${path} C ${controlX1} ${prevPoint[1]}, ${controlX2} ${point[1]}, ${point[0]} ${point[1]}`;
  }, "");

  // Generate area path (for gradient fill)
  const areaPath = `${curvePath} L ${getX(mockData.length - 1)} ${
    svgHeight - padding.bottom
  } L ${getX(0)} ${svgHeight - padding.bottom} Z`;

  return (
    <div className="rounded-2xl bg-white border border-gray-100 p-5 sm:p-6 mb-6 lg:mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-0">
          Order Overview
        </h2>
        <div className="flex gap-2">
          <TimeButton
            active={timeRange === "Today"}
            onClick={() => setTimeRange("Today")}
          >
            Today
          </TimeButton>
          <TimeButton
            active={timeRange === "This week"}
            onClick={() => setTimeRange("This week")}
          >
            This week
          </TimeButton>
          <TimeButton
            active={timeRange === "This year"}
            onClick={() => setTimeRange("This year")}
          >
            This year
          </TimeButton>
        </div>
      </div>
      <div className="h-[300px] w-full overflow-x-auto">
        <div className="min-w-[1200px] h-full">
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Y-axis grid lines and labels */}
            {[...Array(5)].map((_, i) => {
              const value = maxValue * (1 - i / 4);
              const y = yScale(value);
              return (
                <g key={`grid-${i}`}>
                  <line
                    x1={padding.left}
                    y1={y}
                    x2={svgWidth - padding.right}
                    y2={y}
                    stroke="#f0f0f0"
                    strokeWidth="1"
                  />
                  <text
                    x={padding.left - 10}
                    y={y}
                    dy="0.3em"
                    textAnchor="end"
                    className="text-xs text-gray-500"
                  >
                    {value.toFixed(0)}
                  </text>
                </g>
              );
            })}

            {/* X-axis labels */}
            {mockData.map((d, i) => (
              <text
                key={`month-${i}`}
                x={getX(i)}
                y={svgHeight - padding.bottom / 2}
                textAnchor="middle"
                className="text-xs text-gray-500"
              >
                {d.month}
              </text>
            ))}

            {/* Area fill */}
            <path d={areaPath} fill="url(#areaGradient)" />

            {/* Curved line */}
            <path d={curvePath} fill="none" stroke="#3b82f6" strokeWidth="2" />

            {/* Data points */}
            {points.map((point, i) => (
              <g key={`point-${i}`}>
                <circle
                  cx={point[0]}
                  cy={point[1]}
                  r="4"
                  fill="#3b82f6"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};

interface TimeButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TimeButton = ({ active, onClick, children }: TimeButtonProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
      active ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    {children}
  </button>
);

export default OrderOverview;
