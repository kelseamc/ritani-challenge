import React, { useState } from 'react'
import UserContianer from './UserContianer'

function SearchContainer() {
    const [search, setsearch] = useState("")
    const [user, setUser] = useState()



    const handleSearch = (e) => {
        e.preventDefault()
        fetch(`https://api.github.com/users/${search}`)
            .then((r) => r.json())
            .then((data) => {
                setUser(data)
            })
     
    }

    return (
        <>
            <h3 className="title">Github Finder</h3>
            <form className="searchContainer" onSubmit={handleSearch}>
                    <input  className="searchBar" 
                            type="text" 
                            placeholder= "Search by Username..." 
                            value={search}
                            onChange={(e) => setsearch(e.target.value)}
                    />
            </form>
            {user ? <UserContianer user={user}/> : null} 
        </>
    )
}

export default SearchContainer
