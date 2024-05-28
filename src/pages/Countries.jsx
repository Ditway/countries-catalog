import React, { useState, useCallback } from "react";
import "../dist/css/countries.css";
import { useFetchCountries } from "../hooks/useFetchCountry";
import Card from "../components/Card";
import Pagination from "./Pagination";
import LoadingSpinner from "../components/LoadingSpinner";

const Countries = ({ searchedCountry, region }) => {
  const {
    fetchedData: countriesList,
    loading,
    error,
  } = useFetchCountries();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageInput, setPageInput] = useState(1);
  const [recordsPerPage] = useState(25);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  let renderCountries;
  let currentRecords;
  let nPages;

  if (countriesList && !loading) {
    const filtredByName = countriesList.filter(function (country) {
      return country.name.toLowerCase().includes(searchedCountry.toLowerCase());
    }
    );
    currentRecords = filtredByName.slice(indexOfFirstRecord, indexOfLastRecord);
    nPages = Math.ceil(filtredByName.length / recordsPerPage);

    renderCountries = currentRecords.map((country) => {
      return (
        <Card
          key={country.name}
          country={country}
        />
      );
    });
  }

  const nextPage = useCallback(() => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
      setPageInput(currentPage + 1);
    }
  }, [currentPage]);

  const prevPage = useCallback(() => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setPageInput(currentPage - 1);
    }
  }, [currentPage]);

  const handlePageInput = useCallback(
    (e) => {
      const val = parseInt(e.target.value);
      if (parseInt(val) > nPages || parseInt(val) <= 0) {
        setPageInput(nPages);
        return;
      }
      setPageInput(val);
    },
    [pageInput]
  );

  const handleEnterKey = useCallback(
    (e) => {
      if (e.key === "Enter" || e.keyCode === 13) {
        if (e.target.value.length !== 0) {
          setCurrentPage(pageInput);
        }
      }
    },
    [pageInput]
  );

  const spinner = loading ? <LoadingSpinner /> : "";

  return (
    <>
      {error && <div>{error}</div>}

      {spinner}
      {countriesList && !loading && (
        <div className="countriesContainer">{renderCountries}</div>
      )}
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        nPages={nPages}
        currentPage={currentPage}
        handleEnterKey={handleEnterKey}
        handlePageInput={handlePageInput}
        pageInput={pageInput}
      />
    </>
  );
};

export default React.memo(Countries);
