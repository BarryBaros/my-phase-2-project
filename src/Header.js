import React from "react";
import Search from "./Search";

function Header({ search, setSearch, onHandleSort }) {
  return (
    <div>
      <header className="header">
        <h1 className="bg bg-red-500 text-4xl font-bold mb-4">Etsy's Boutique:</h1>
        <Search search={search} setSearch={setSearch} />
      </header>
    </div>
  );
}

export default Header;
