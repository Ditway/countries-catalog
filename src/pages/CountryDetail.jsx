import React from "react";
import "../dist/css/countrydetails.css";

import Modal from "../components/Modal";

const CountryDetail = ({country, onClose, open}) => {
  return (
    <Modal isOpen={open} onClose={onClose}>
      <div className="contryDetail">
          <div className="country">
            <div className="flagWrapper">
              <img src={country.flags?.png} alt={`${country.name} flag`} />
            </div>

            <div className="countryInfo">
              <h2>{country.name}</h2>
              <div className="descCountry">
                <div>
                  <p>
                    Native Name : <span>{country.nativeName}</span>
                  </p>
                  <p>
                    2 character Country Code : <span>{country.cca2}</span>
                  </p>
                  <p>
                    3 character Country Code : <span>{country.cca3}</span>
                  </p>
                  <p>
                    Alternative Country Name : <span>{country.altSpelling}</span>
                  </p>
                  <p>
                    Country Calling Code : <span>{country.idd}</span>
                  </p>
                  <p>
                    Popultation : <span>{country.population}</span>
                  </p>
                  <p>
                    Region : <span>{country.region}</span>
                  </p>
                  <p>
                    Area : <span>{country.area} km²</span>
                  </p>
                  <p>
                    Capital : <span>{country.capital && country.capital[0]}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Modal>
  );
};

export default CountryDetail;