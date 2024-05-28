import React from "react";
import "../dist/css/filter.css";

const Filter = ({ searchChange, selectRegion }) => {
  return (
    <div className="filter">
      <div className="inputWrapper">
        <input
          type="search"
          placeholder="Search for a country..."
          onChange={searchChange}
        />
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
      <label htmlFor="regions"></label>
      <select
        id="regions"
        name="regions"
        onChange={selectRegion}
        aria-label="Select region"
      >
        <option defaultValue disabled>
          Filter by region
        </option>
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
