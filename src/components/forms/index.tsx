import React from "react";

interface FormFieldProps {
  label: string;
  type?: "text" | "date" | "textarea" | "select" | "checkbox";
  placeholder?: string;
  value: string | boolean;
  onChange: (value: string | boolean) => void;
  options?: { value: string; label: string }[];
  rows?: number;
  colSpan?: string;
  checkboxLabel?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  options,
  rows,
  colSpan = "col-span-2",
  checkboxLabel,
}) => {
  const baseInputClasses =
    "w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <select
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            className={baseInputClasses}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            placeholder={placeholder}
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            rows={rows}
            className={baseInputClasses}
          />
        );
      case "checkbox":
        return (
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={value as boolean}
              onChange={(e) => onChange(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600">{checkboxLabel}</span>
          </label>
        );
      default:
        return (
          <input
            type={type}
            placeholder={placeholder}
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            className={baseInputClasses}
          />
        );
    }
  };

  if (type === "checkbox") {
    return <div className={colSpan}>{renderInput()}</div>;
  }

  return (
    <div className={colSpan}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {renderInput()}
    </div>
  );
};

export default FormField;
