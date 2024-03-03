/** @format */

import React from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

function Home() {
    return (
        <div className="home">
            <div className="container">
                <Sidebar />
                <ChatWindow />
            </div>
        </div>
    );
}

export default Home;
