import React from "react";

const FilterBar = ({
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  locationFilter,
  setLocationFilter,
  departmentFilter,
  setDepartmentFilter,
  uniqueTypes,
  uniqueLocations,
  uniqueDepartments,
  onReset,
}) => {
  return (
    <div className="sticky top-16 z-30 bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 items-center shadow-sm">
      {/* Dropdown Filters */}
      <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
        <div className="shrink-0 min-w-[150px]">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full appearance-none border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 bg-white bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_0.5rem_center] bg-[length:1em_1em]"
          >
            {uniqueTypes.map((type) => (
              <option key={type} value={type}>
                {type === "All" ? "Job Type" : type}
              </option>
            ))}
          </select>
        </div>
        
        <div className="shrink-0 min-w-[150px]">
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="w-full appearance-none border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 bg-white bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_0.5rem_center] bg-[length:1em_1em]"
          >
            {uniqueLocations.map((location) => (
              <option key={location} value={location}>
                {location === "All" ? "Location" : location}
              </option>
            ))}
          </select>
        </div>

        <div className="shrink-0 min-w-[150px]">
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="w-full appearance-none border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 bg-white bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_0.5rem_center] bg-[length:1em_1em]"
          >
            {uniqueDepartments?.map((dept) => (
              <option key={dept} value={dept}>
                {dept === "All" ? "Department" : dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:max-w-md md:ml-auto">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for roles..."
          className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20"
        />
      </div>
      
      {/* Reset button (visible when filters active) */}
      {(search || typeFilter !== "All" || locationFilter !== "All" || departmentFilter !== "All") && (
        <button
          onClick={onReset}
          className="shrink-0 text-sm text-(--color-gray-600) hover:text-(--color-primary) transition-colors px-2 py-2 cursor-pointer"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
};

export default FilterBar;
