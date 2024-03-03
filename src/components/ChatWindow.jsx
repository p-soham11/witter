/** @format */

import React from "react";
import Messages from "./Messages";
import Input from "./Input";

function ChatWindow() {
    return (
        <div className="chatWindow">
            <div className="chatInfo">
                <span>ChatName</span>
                <div className="chatInfoIcon">
                    <span>ICONS</span>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
}

export default ChatWindow;
