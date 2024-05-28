import { useState, useEffect } from "react";
import { getAllCountries, getCountry } from "../api";
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

const useFetchCountry = () => {
  const [fetchedData, setFetchedData] = useState();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    const data = await getCountry(name);
    const error = data.error
    if (!error) {
      const country = parseCountry(data)
      setFetchedData(country);
      setLoading(false);
    } else {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
     fetchData();
  }, [name]);

  return { fetchedData, loading, error, setName };
};

export {
  useFetchCountries,
  useFetchCountry
}
