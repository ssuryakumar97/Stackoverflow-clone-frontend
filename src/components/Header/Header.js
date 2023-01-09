import React from "react";
import "./Header.css";
import InboxIcon from "@mui/icons-material/Inbox"
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

import { auth } from "../../firebase";


function Header(){
    const user = useSelector(selectUser)
    console.log(user)
    
   return (<header>
    <div className="header-container">
    <div className="header-left">
        <Link to="./"><img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
         alt= "logo" /></Link>
         <h3>Products</h3>
    </div>
    <div className="header-middle">
        <div className="header-search-container">
        <SearchIcon />
    <input type="text" placeholder= "Search..." />
    </div>
    </div>
    <div className="header-right">
    <div className="header-right-container">
        <span onClick={() => {auth.signOut()}}><Avatar src={user?.photo}/></span>
        <InboxIcon/>
        <img src="https://cdn.iconscout.com/icon/free/png-256/stack-exchange-3628492-3031652.png" alt="stackexchange" />
        </div>
        </div>      
    </div>
    </header>)
};

export default Header;
