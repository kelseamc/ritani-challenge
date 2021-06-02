import React from 'react'
import FollowerContainer from './FollowerContainer'
import UserCard from './UserCard'

function UserContianer({user}) {
    return (
        <div className="userContainer">
           <UserCard user={user} /> 
           <FollowerContainer user={user} />
        </div>
    )
}

export default UserContianer
