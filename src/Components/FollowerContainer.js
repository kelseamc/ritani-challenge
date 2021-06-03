import React, {useEffect, useState} from 'react'
import '../styles/follower.css'
import FollowerCard from './FollowerCard'
import BeatLoader from 'react-spinners/BeatLoader'

function FollowerContainer({user}) {
    const [followers, setFollowers] = useState([])
    const [page, setPage] = useState(2)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
        fetch(user.followers_url)
        .then((r) => r.json())
        .then((data) => {
            setFollowers(data)  
            setLoading(false)
        })
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
            {loading ? <BeatLoader /> :
             <div className="followerContainer">
                {followers ? followers.map((fol) => <FollowerCard key={fol.id} follower={fol} />) : null}
                {followers.length !== user.followers ? <button className="more-btn" onClick={moreFollowers}> Load More</button> : null}
            </div> 
            }
        </div>
       
    )
}

export default FollowerContainer
