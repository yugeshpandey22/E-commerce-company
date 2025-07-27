import React from "react";

const FilterSidebar = ({ categories, onFilter }) => (
  <aside className="w-full md:w-1/4 p-4 border rounded-lg">
    <h4 className="font-semibold mb-3">Filter by Category</h4>
    <ul className="space-y-1">
      {categories.map(cat => (
        <li key={cat} className="cursor-pointer hover:text-yellow-600" onClick={() => onFilter(cat)}>
          {cat}
        </li>
      ))}
    </ul>
  </aside>
);

export default FilterSidebar;
