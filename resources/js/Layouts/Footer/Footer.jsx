import React from "react";
import "./Footer.css";

import HomeIcon from "../../../homeicon.png";
import SearchIcon from "../../../searchicon.png";
import NotifsIcon from "../../../notifications.png";
import MessageIcon from "../../../messageicon.png";
import AccountIcon from "../../../accounticon.png";
export default function Footer() {
    return (
        <footer>
            <div>
                <img src={HomeIcon} />
                <img src={SearchIcon} />
                <img src={NotifsIcon} />
                <img src={MessageIcon} />
                <img src={AccountIcon} />
            </div>
        </footer>
    )
}