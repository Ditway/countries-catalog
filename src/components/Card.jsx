import React from "react";
import "../dist/css/countries.css";
import { Link } from "react-router-dom";

const Card = ({country}) => {
  const {name, flags, cca2, cca3, nativeName, altSpelling, idd} = country;
  return (
    <Link to={`/country/${name.replace(/\s/g, "%20")}`} className="card">
      <div>
        <div className="countryImgWrapper">
          <img src={flags.png} alt={`${name} flag`} />
        </div>
        <div className="cardBody">
          <span className="title">{name}</span>
          <p>
          2 character Country Code : <span>{cca2}</span>
          </p>
          <p>
          3 character Country Code : <span>{cca3}</span>
          </p>
          <p>
          Native Country Name : <span>{nativeName}</span>
          </p>
          <p>
          Alternative Country Name : <span>{altSpelling}</span>
          </p>
          <p>
          Country Calling Code : <span>{idd}</span>
          </p>

        </div>
      </div>
    </Link>
  );
};

export default React.memo(Card);
