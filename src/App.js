import React, { useEffect, useState } from "react";
import "./App.css";
import ListingsContainer from "./ListingsContainer";
import YourCart from "./YourCart";
import Header from "./Header";

function App() {
  const [listings, setListings] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(selectedListing) {
    setCartItems([...cartItems, selectedListing])
    const filteredListings = listings.filter(listing => listing.id !== selectedListing.id
    );
    setListings(filteredListings)
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Response was not OK");
        }
        return response.json();
      })
      .then((listingdata) => setListings(listingdata));
  }, []);

  return (
    <div>
      <Header />
        <h2 className="text-3xl font-bold mb-8">Your Cart: </h2>
      <YourCart cartItems={cartItems} />
      <ListingsContainer
        listings={listings}
        setListings={setListings}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
