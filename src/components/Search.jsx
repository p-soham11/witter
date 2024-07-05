/** @format */

import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <SearchIcon />
                <input type="text" name="" id="" placeholder="Search Chats" />
            </div>
            <hr />
        </div>
    );
};

export default Search;
