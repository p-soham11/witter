/** @format */

import React from "react";

const Chats = () => {
    return (
        <div className="chats">
            <div className="userChat">
                <img
                    src="https://images.unsplash.com/photo-1553484771-898ed465e931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNlbyUyMG9mJTIwYSUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D"
                    alt="Display Picture"
                />
                <div className="userChatInfo">
                    <span>UserName</span>
                    <p>
                        <small>Hello, I am using Beige</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Chats;
