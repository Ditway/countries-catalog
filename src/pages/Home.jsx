import React, { useState } from "react";
import Filter from "./Filter";
import Countries from "./Countries";

const Home = () => {
  const [searchVal, setSearchVal] = useState("");
  const [sort, setSort] = useState("");

  const searchChange = (e) => {
    setSearchVal(e.target.value);
  };

  const onSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <main>
      <Filter searchChange={searchChange} onSort={onSort} />
      <Countries searchedCountry={searchVal} sort={sort} />
    </main>
  );
};

export default Home;
