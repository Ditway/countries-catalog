import React from "react";
import "../dist/css/header.css";

import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header>
      <div className="headerWrapper">
        <h1>Countries Catalog</h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default React.memo(Header);
