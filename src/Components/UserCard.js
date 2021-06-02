
import React from 'react'

function UserCard({user}) {
    console.log(user)
    return (
        <div className="userCard" onClick={()=> window.open(`${user.html_url}`, "_blank")}>
            <img src={user.avatar_url} alt={user.name} />
            <div className="userDetails">
                <h1>{user.name}</h1>
                <span className="username"> @{user.login}</span>
                <br />
                <a href={user.following_url}>
                    Following: {user.following} 
                </a> 
            
                <p>{user.bio}</p>
            
            </div>
        </div>
            
    )
}

export default UserCard
