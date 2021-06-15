import React from "react";
import Form from "./Form"
import ListingCard from "./ListingCard";

function ListingsContainer(props) {

  const displayList = props.listings.map(listing => {
    return <ListingCard key={listing.id} listing={listing} handleDelete={props.handleDelete}/>
  })

  return (
    <main>
      <button onClick={props.handleSort}>Sort Alphabetically by Location</button>
      <Form addNewListing={props.addNewListing}/>
      <ul className="cards">
        {displayList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
