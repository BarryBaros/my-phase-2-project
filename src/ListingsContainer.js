import React from "react";
import ListingItem from "./ListingItem";
import Header from "./Header";

function ListingsContainer({ listings, onAddToCart }) {
  return (
    <div>
        <h2 className="text-3xl font-bold mb-8">BoutiqueCollection: </h2>
      <div className="grid grid-cols-4">
        {listings.map((listing) => (
          <ListingItem key={listing.id} listing={listing} onAddToCart={onAddToCart} />
        ))}
        ;
      </div>
    </div>
  );
}

export default ListingsContainer;
