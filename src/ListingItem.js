import React, {useState} from "react";


function ListingItem({ listing, onAddToCart }) {
    const [isInCart, setIsInCart] = useState(true)

    function handleClick (listing){
        setIsInCart(false)
        onAddToCart(listing)
    }


  return (
    <div>
      <div className="card flex flex-col items-center w-100 mb-6">
        <h3 className="bg-red-500 font-semibold text-center text-1.5xl">
          {listing.title}
        </h3>
        <img
          className="image mb-4 h-25 w-25"
          alt={listing.title}
          src={listing.image}
        />
        <div className="card-content">
          <p className="text font-semibold"> {listing.description}</p>
          <p className="text font-semibold mt-5 mb-2">
            Price: {listing.price} $
          </p>
          <div className="buttons mt-4 flex justify-between w-full">
            {isInCart ? <button className="add-to-cart-btn text font-semibold hover:bg-blue-700" onClick={() => handleClick(listing)}>
              Add to Cart
            </button> : null }
            <button className="add-to-cart-btn text font-semibold bg-red-500 hover:bg-red-700">
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingItem;
