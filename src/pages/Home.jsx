import React, { useState } from "react";
import Filter from "./Filter";
import Countries from "./Countries";

const Home = () => {
  const [searchVal, setSearchVal] = useState("");
  const [region, setRegion] = useState("");

  const searchChange = (e) => {
    setSearchVal(e.target.value);
  };

  const filterRegion = (e) => {
    setRegion(e.target.value);
  };

  return (
    <main>
      <Filter searchChange={searchChange} selectRegion={filterRegion} />
      <Countries searchedCountry={searchVal} region={region} />
    </main>
  );
};

export default Home;
