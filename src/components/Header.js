import React from 'react'
import { SearchBar } from './SearchBar'

export const Header = ({ setSearch }) => {
    return (
        <header>
            <h1>React notes app</h1>
            <SearchBar setSearch={setSearch} />
        </header>
    )
}
