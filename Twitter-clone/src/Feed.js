import React from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
function Feed() {
    return (
        <div className = 'feed'>
            {/* Header -- contains the particular sidebar page */}
            
            <div className="feed-header">
                <h2> Home</h2>
            </div>




            {/* tweet Box  -- shares the tweets -- posting the tweets in the feed*/}
            <TweetBox></TweetBox>



            
            {/* Posts -- which is Random posts */}
            <Post></Post>
            {/* Posts -- which is Random posts */}
            {/* Posts -- which is Random posts */}
        </div>
    )
}

export default Feed
