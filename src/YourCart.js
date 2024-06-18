import React from 'react'
import ListingItem from './ListingItem'

function YourCart({ cartItems }) {
  return (
    <div className='flex flex-auto'>
        {cartItems.map(listing => (
            <ListingItem key={listing.id}
            listing={listing} />
        ))}
    </div>
  )
}

export default YourCart