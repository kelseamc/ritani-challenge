import React from 'react'
import FollowerContainer from './FollowerContainer'
import UserCard from './UserCard'

function UserContianer({user}) {
    return (
        <>
        {user ?
            <div className="userContainer">
            <UserCard user={user} /> 
            <FollowerContainer user={user} />
            </div>
            :
            <div className="welcome">
                <h1>Welcome!</h1>
                <h5>You can search for people on Github by their username. </h5>
                <h5>You will be able to see thier some of their profile details and who their followers are! </h5>
            </div>}
        </>
    )
}

export default UserContianer
