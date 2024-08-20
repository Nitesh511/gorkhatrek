import React, { useState } from 'react';

const SortDropdown = ({ options, selectedOption, onChange }) => (
  <select
    value={selectedOption}
    onChange={(e) => onChange(e.target.value)}
    className="p-2 border border-gray-300 rounded"
  >
    {options.map((option) => (
      <option key={option.value} value={option.value} className='font-heading text-lg'>
        {option.label}
      </option>
    ))}
  </select>
);

const SortControls = () => {
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('ascending');

  const sortOptions = [
    { value: 'name', label: 'Sort by Name' },
    { value: 'price', label: 'Sort by Price' },
  ];

  const orderOptions = [
    { value: 'ascending', label: 'Ascending' },
    { value: 'descending', label: 'Descending' },
  ];

  return (
    <div className="flex space-x-4  ">
      <SortDropdown
        options={sortOptions}
        selectedOption={sortBy}
        onChange={setSortBy}
      />
      <SortDropdown
        options={orderOptions}
        selectedOption={sortOrder}
        onChange={setSortOrder}
      />
    </div>
  );
};

export default SortControls;
