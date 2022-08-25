import React from 'react'
import { FaSearch } from "react-icons/fa"

export const SearchBar = ({ setSearch }) => {
    return (
        <div id='searchBar'>
            <FaSearch />
            <input onChange={(e) => setSearch(e.target.value)} placeholder="Search for notes..." />
        </div>

    )
}
