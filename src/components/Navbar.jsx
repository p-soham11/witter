/** @format */

import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { IconButton } from "@mui/material";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="user">
                <div className="userPreview">
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <PersonAddAlt1Icon />
                    </IconButton>
                    <IconButton>
                        <GroupAddIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
