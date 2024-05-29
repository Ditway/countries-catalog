import { useState, useEffect } from "react";
import { getAllCountries } from "../api";
import { parseCountry } from "../utils";

const useFetchCountries = () => {
  const [fetchedData, setFetchedData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    const data = await getAllCountries();
    const error = data[0].error
    if (!error) {
      const countries = data.map(parseCountry);
      setFetchedData(countries);
      setLoading(false);
    } else {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return { fetchedData, loading, error };
};

export {
  useFetchCountries
}
