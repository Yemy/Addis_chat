import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./MessageSender.css"
import VideoCamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
// import yemi from './images/yemi.jpg'
import { useStateValue } from "./StateProvider"

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        // db stuff
        setInput("");
        setImageUrl('');
    };

    return (
        <div className="messageSender">
            
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messageSender__input"
                    placeholder={`What's on your mind, ${user.displayName}?`}
                    />
                    <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)} 
                    placeholder={"image URL(Optional)"}/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                
                <div className="messageSender__option">
                    <VideoCamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
          
            </div> 

        </div>
    )
}

export default MessageSender
