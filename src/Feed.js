import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReal from './StoryReal'
import yemi from './images/yemi.jpg'
import eve from './images/eve.jpg'

function Feed() {
    return (
        <div className="feed">
            <StoryReal />
            <MessageSender />

            <Post 
                profilePic={yemi}
                message="my new profile picture"
                timestamp="time stamp"
                username="Yemi_Bold"
                image={eve}
            />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
