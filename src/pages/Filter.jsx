import React from "react";
import "../dist/css/filter.css";

const Filter = ({ searchChange, onSort }) => {
  return (
    <div className="filter">
      <div className="inputWrapper">
        <input
          type="search"
          placeholder="Search for a country"
          onChange={searchChange}
        />
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
      <label htmlFor="sort"></label>
      <select
        id="sort"
        name="sort"
        onChange={onSort}
      >
        <option defaultValue value="">Defualt sort</option>
        <option value="ASC">Asc</option>
        <option value="DESC">Desc</option>
      </select>
    </div>
  );
};

export default Filter;
