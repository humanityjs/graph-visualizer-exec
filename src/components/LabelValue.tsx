import React from "react";

const LabelValue = ({
  label,
  value,
}: {
  label: string;
  value: string | React.ReactElement;
}) => {
  return (
    <div className="mb-3 grid grid-cols-2 gap-2">
      <span className="text-sm font-bold text-gray-soft">{label}</span>
      <span className="text-sm">
        {typeof value === "string" ? value : value}
      </span>
    </div>
  );
};

export default LabelValue;
