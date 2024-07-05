/** @format */

import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import CallIcon from "@mui/icons-material/Call";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";

function ChatWindow() {
    return (
        <div className="chatWindow">
            <div className="chatInfo">
                <span>ChatName</span>
                <div className="chatInfoIcon">
                    <IconButton>
                        <CallIcon />
                    </IconButton>
                    <IconButton>
                        <VideoChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
}

export default ChatWindow;
