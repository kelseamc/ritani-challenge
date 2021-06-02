
import React from 'react'

function UserCard({user}) {
    console.log(user)
    return (
        <div className="userCard" onClick={()=> window.open(`${user.html_url}`, "_blank")}>
            <img src={user.avatar_url} alt={user.name} />
            <div className="userDetails">
                <h1>{user.name}</h1>
                <h4 className="username"> @{user.login}</h4>
                <br />
                <small> Following {user.following}</small> 
                <br />
                <small> Followers {user.followers}</small>
                <p>{user.bio}</p>
            </div>
        </div>
            
    )
}

export default UserCard
