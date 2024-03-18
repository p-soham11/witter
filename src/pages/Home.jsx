/** @format */

import React from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import Logout from "../components/Logout";

function Home() {
    return (
        <div className="home">
            <Logout />
            <div className="container">
                <Sidebar />
                <ChatWindow />
            </div>
        </div>
    );
}

export default Home;
