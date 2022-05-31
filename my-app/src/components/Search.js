import React from 'react'

function Search({search, setSearch}) {
  return (
    <div className="search">
      <label>Search for a Classmate: </label>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
      />
    </div>
  )
}

export default Search