import React from "react";

function Search() {
  return (
    <div>
      <form className="searchbar" >
        <label className="">Search Items: 

        
        </label>
        <input
          type="text"
          id="search"
          placeholder="search free stuff"
          value={''}
          onChange={(e) => console.log(e.target.value)}
        />
        
        <button type="submit">🔍</button>
      </form>
    </div>
  );
}

export default Search;
