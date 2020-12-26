import React ,{useState , useEffect} from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import StoryReels from './StoryReels'
import Posts from './Posts'

import db from '/home/bhubesh/react-projects/src/firebase.js'
function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
        })
    }, [])

    return (
        <div className = 'feed'>
            {/* Story */}
            <StoryReels></StoryReels>
            {/* Messagesender */}
            <MessageSender></MessageSender>
            {/* Posts */}

{/* --------------------------------- */}

            {/* <Posts
            ProfilePic = 'https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-limages-2.jpg'
            message = 'Its Working , Doraemon'
            image = 'https://www.unigreet.com/wp-content/uploads/2020/09/cartoon-dp-photo-700x1024.jpg'
            timestamp = 'timestamp_'
            username = 'Doraemon_offcl'
            ></Posts>
            <Posts
            ProfilePic = 'https://www.stonedsanta.in/wp-content/uploads/2019/06/CSK-MS-Dhoni-Caricature.jpg'
            message = 'Thala Dhoni'
            image = 'https://wallpapercave.com/wp/wp7346110.jpg'
            timestamp = 'timestamp_'
            username = 'CSK_offcial'
            ></Posts>
            <Posts
            ProfilePic = 'https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-limages-2.jpg'
            message = 'Its Working , Doraemon'
            image = 'https://www.unigreet.com/wp-content/uploads/2020/09/cartoon-dp-photo-700x1024.jpg'
            timestamp = 'timestamp_'
            username = 'Doraemon_offcl'
            ></Posts> */}

            {
                posts.map(post => (
                    <Posts 
                        key={post.data.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        timestamp={post.data.timestamp}
                        username={post.data.username}
                        image={post.data.image}
                    />
                ))
            }
            {/* <Posts></Posts>
            <Posts></Posts> */}
        </div>
    )
}

export default Feed
