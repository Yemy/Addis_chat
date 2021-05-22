import React, { useState, useEffect } from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReal from './StoryReal';
import db from "./firebase";
// import firebase from 'firebase'

// function to import all images from a folder
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc => ({ id: doc.id,
        data: doc.data() }))))
        );
    }, []);

    return (
        
        <div className="feed">
            <StoryReal />
            <MessageSender />
            {/* fetch feeds from firebase collection */}
            {posts.map((post) =>(
            <Post
            key={post.id}
            profilePic={post.data.profilePic}
            image={post.data.image}
            username={post.data.username}
            timestamp={post.data.timestamp}
            message={post.data.message}
            />

            ))}

            {/* <Post 
                profilePic={images['yemi.jpg']}
                image={images['eve.jpg']}
                username="yemi_bold"
                timestamp="9-4-2021"
                message="let's build this awesome social media"
            />
            <Post 
                profilePic={images['rozi.jpg']}
                image={images['yemu.jpg']}
                username="Rosa Hailay"
                timestamp="10-4-2021"
                message="Always with you"
            />
            <Post 
                profilePic={images['messi.jpg']}
                image={images['leo.jpg']}
                username="Babi ye messi"
                timestamp="12-4-2021"
                message="Look at the G.o.a.t"
            />
            <Post 
                profilePic={images['sarp.jpg']}
                image={images['auba.jpg']}
                username="Dani Gunner"
                timestamp="12-4-2021"
                message="Aubameyang is world class striker"
            />
            <Post 
                profilePic={images['eve.jpg']}
                image={images['blen.jpg']}
                username="yemi_bold"
                timestamp="2-4-2021"
                message="let's show her some love guys"
            /> */}
        </div>
    );
}

export default Feed
