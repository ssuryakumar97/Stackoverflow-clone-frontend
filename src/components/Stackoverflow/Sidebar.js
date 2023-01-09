import { Work, Public, StarsRounded } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "../Stackoverflow/Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-options">
                    <div className="sidebar-option">
                        <p>Home</p>
                    </div>
                    <div className="sidebar-option">
                        <p>PUBLIC</p>
                        <div className="link">
                            <div className="link-tag">
                                <Public />
                                <Link >Questions</Link >
                            </div>
                            <div className="tags">
                                <p>Tags</p>
                                <p>Users</p>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-option">
                        <p>COLLECTIVES</p>
                        <div className="link">
                            <div className="link-tag">
                                <StarsRounded />
                                <Link >Explore Collectives</Link >
                            </div>
                        </div>    
                    </div>
                    <div className="sidebar-option">
                        <p>FIND A JOB</p>
                        <div className="link">
                            <div className="link-job">
                                <p>Jobs</p>
                                <p>Companies</p>
                            </div>
                        </div>    
                    </div>
                    <div className="sidebar-option">
                        <p>TEAMS</p>
                        <div className="link">
                            <div className="link-tag">
                                <Work />
                                <Link >Companies</Link >
                            </div>
                        </div>    
                    </div>
                </div> 
            </div> 
        </div>
    )
}

export default Sidebar;