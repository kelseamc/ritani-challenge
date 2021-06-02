import React from 'react'

function FollowerCard({follower}) {

    return (
        <div className="followerCard" onClick={()=> window.open(`${follower.html_url}`, "_blank")}>
            <img src={follower.avatar_url} alt={follower.name} />
            <p>@{follower.login}</p>
        </div>
    )
}

export default FollowerCard
