import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar,IconButton } from '@material-ui/core';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert"

import {SearchOutlined} from "@material-ui/icons"
import SidebarChat from './SidebarChat';

const Sidebar = () => {
    return (
        <div className="sidebar">
          { /*<h1>i am a sidebar</h1>*/}
            <div className="slidebar_header">
            <Avatar src="https://funkylife.in/wp-content/uploads/2021/06/whatsapp-dp-pic-22-1536x1536.jpg" />  {/*avatar is just an component that takes an images */}
{/*splitting top section into 2 parts left side has avatar right hai setting optons */}
        <div className="slidebar_headerRight">
{/*for all icons on top right i need material ui */}
<IconButton>  {/*enclosing theese inside iconButton makes them clickable this is default property in material ui */}
        <DonutLargeIcon />
        </IconButton>

        <IconButton>
        <ChatIcon />
        </IconButton>

        <IconButton>
        <MoreVertIcon />
        </IconButton>
        
        </div>

        
       
        
            </div>

            <div className="slidebar_search">
            <div className="slidebar_searchContainer">
            <SearchOutlined />
            {/*to get search box with placeholder */}
            <input placeholder="Search New Chat" type="text" />
            </div>
            </div>
<div className="sidebar_chats">
<SidebarChat />
<SidebarChat />
<SidebarChat />

</div>

        </div>
    )
}

export default Sidebar
