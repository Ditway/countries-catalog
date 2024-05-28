import axios from "axios";

const listField = "name,altSpellings,flags,cca2,cca3,idd";
const detailField = `${listField}`;

async function getAllCountries() {
    const url = `https://restcountries.com/v3.1/all?fields=${listField}`;
    let retry = 1;
    while(retry <= 3) {
      try {
        const { data, status } = await axios.get(url);
        if (status === 200) {
            return data;
          }
        return [];
      } catch (error) {
        if(retry === 3) {
            return [{"error": `Error getting data`}];
        } else {
          retry++;
        }
      }
    }
}

async function getCountry(name) {
  const url = `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=${detailField}`;
    let retry = 1;
    while(retry <= 3) {
      try {
        const { data, status } = await axios.get(url);
        if (status === 200) {
            return data[0];
          }
        return {};
      } catch (error) {
        if(retry === 3) {
            return {"error": `Error getting data`};
        } else {
          retry++;
        }
      }
    }
}

export {
  getAllCountries,
  getCountry
}