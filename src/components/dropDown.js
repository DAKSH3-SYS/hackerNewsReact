import React, { useState } from "react";

const Dropdown = ({ handleSelect, values, filter, label, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVal, setSelectedVal] = useState(defaultValue);
  const handleChange = (event) => {
    setSelectedVal(event.target.innerHTML);
    handleSelect(selectedVal);
    setIsOpen(!isOpen)
  };
  //  React.useEffect(() => {
  //    handleSelect(selectedVal);
  //  }, [selectedVal]);
  return (
    <div className=" ml-2 ">
      <button
        className="bg-white pl-1 border text-[#5c5c5c] border-[#c3c3c3] border-solid text-right flex flex-row  "
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedVal}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className=" bg-white rounded border border-gray-400 ">
          <ul className="list-reset" onClick={handleChange} label={filter}>
            {values.map((valueTemp) => (
              <li className="block px-4 mt-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white text-[14px]">
                {valueTemp}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
