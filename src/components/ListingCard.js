import React, { useState } from "react";

function ListingCard({listing, handleDelete}) {

  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(liked => !liked)
  }
  
  return (
    <li className="card" id={listing.id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={handleLike} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLike} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button id={listing.id} onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
