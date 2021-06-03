import React, {useEffect, useState} from 'react'
import FollowerCard from './FollowerCard'



function FollowerContainer({user}) {
    const [followers, setFollowers] = useState([])
    const [page, setPage] = useState(2)
  

    useEffect(() => {
        fetch(user.followers_url)
        .then((r) => r.json())
        .then((data) => setFollowers(data))  
    }, [user])

    const moreFollowers = () => {
            fetch(user.followers_url + `?page=${page}`)
            .then((r) => r.json())
            .then((data) => {
                if(data){
                    const newFollow = [...followers, ...data]
                    setFollowers(newFollow)
                    setPage(page + 1)
                }  
            })
    }
    
    return (
        <div className="rightContainer">
            <h1 className="followerTitle"> Followers </h1>
             <div className="followerContainer">
                {followers ? followers.map((fol) => <FollowerCard key={fol.id} follower={fol} />) : null}
                {followers.length !== user.followers ? <button className="more-btn" onClick={moreFollowers}> Load More</button> : null}
            </div>
        </div>
       
    )
}

export default FollowerContainer
