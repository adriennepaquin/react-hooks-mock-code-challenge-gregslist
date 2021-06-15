import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [filter, setFilter] = useState("")

  const handleDelete = (e) => {
    let id = parseInt(e.target.id)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(setListings(listings.filter(listing => listing.id !== id)))
  }

  const handleSearch = (e) => {
    setFilter(e.target.value)
  }

  let filteredList = listings.filter(listing => listing.description.toUpperCase().includes(filter.toUpperCase()))

  const handleSort = () => {
    console.log("sort")
    let newList = [...listings]
    setListings(newList.sort((a,b) => (a.location.toUpperCase() > b.location.toUpperCase()) ? 1 : ((b.location.toUpperCase() > a.location.toUpperCase()) ? -1 : 0)))
  }

  const addNewListing = (newListObj) => {
    let newList = [...listings, newListObj]
    setListings(newList)
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  return (
    <div className="app">
      <Header handleSearch={handleSearch} filter={filter}/>
      <ListingsContainer listings={filteredList} handleDelete={handleDelete} handleSort={handleSort} addNewListing={addNewListing}/>
    </div>
  );
}

export default App;
