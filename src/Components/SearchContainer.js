import React, { useState } from 'react'
import UserContianer from './UserContianer'

function SearchContainer() {
    const [search, setsearch] = useState("")
    const [user, setUser] = useState()
    const [message, setMessage] = useState("")



    const handleSearch = (e) => {
        e.preventDefault()
        fetch(`https://api.github.com/users/${search}`)
            .then((r) => r.json())
            .then((data) => {
                if (data.message) {
                    setMessage("That user couldn't be found. Please check you spelling and try again!")
                }
                else {
                    setUser(data)
                    setMessage("")
                }
                   
            })
    }

    return (
        <>
            {search ? null :<h3 className="title">Github Finder</h3>}
            <form className="searchContainer" onSubmit={handleSearch}>
                    <input  className="searchBar" 
                            type="text" 
                            placeholder= "Search by Username..." 
                            value={search}
                            onChange={(e) => {
                               
                                setsearch(e.target.value)}
                            }
                    />
            </form>
            {!message ? <UserContianer user={user} /> : <h5 className="message">{message}</h5> } 
        </>
    )
}

export default SearchContainer
