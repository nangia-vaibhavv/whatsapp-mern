import React from 'react'
import "./Chat.css";
import {Avatar, IconButton}  from "@material-ui/core"
import {AttachFile,MoreVert,SearchOutlined} from "@material-ui/icons"
import  InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"

const Chat = () => {
    return (
        <div className="chat">
           
           <div className="chat_header">
           <Avatar />
           <div className="chat_headerInfo">
         <h3>Room name</h3>
         <p>Last seen at...</p>
           </div>
           <div className="chat_headerRight">
    <IconButton>
<SearchOutlined />
    </IconButton>
    <IconButton>
<AttachFile />
    </IconButton>
    <IconButton>
<MoreVert />
    </IconButton>
           </div>
           </div> 

           <div className="chat_body">
             <p className="chat_message">
             <span className="chat_name">
             vaibhav nangia
             </span>
             This is message
             
            <span className="chat_timestamp">
            {new Date().toUTCString()}
            
            </span>

             </p>

             <p className="chat_message chat_receiver">
             <span className="chat_name">
             vaibhav nangia
             </span>
             This is message
             
            <span className="chat_timestamp">
            {new Date().toUTCString()}
            
            </span>

             </p>

             <p className="chat_message">
             <span className="chat_name">
             vaibhav nangia
             </span>
             This is message
             
            <span className="chat_timestamp">
            {new Date().toUTCString()}
            
            </span>

             </p>
           </div>

<div className="chat_footer">
<InsertEmoticonIcon />
<form>
<input placeholder="Type your message" type="text" />
<button type="submit">Send message</button>
</form>
<MicIcon />
</div>

           </div>
        
    )
}

export default Chat

