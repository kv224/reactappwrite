import React, { useId } from "react";

const Select = ({ label, options, className = "", ref, ...props }) => {
  const id = useId();

  return (
    <div>
      {label && (
        <label htmlFor={id}>
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-2 py-2 rounded-lg text-black bg-white border-gray-200 ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
