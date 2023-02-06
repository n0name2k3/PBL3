import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import "../Components/Styles/staff.scss"
export default function Staff() {
    const [state,setState] = useState("room")

    useEffect(()=>{
        document.querySelectorAll("li").forEach(item => item.addEventListener("click",()=>{
            setState(item.getAttribute("value"))
        }))
    })

    if(state === "room"){
        return (
            <>
                <h1>Have a good day!</h1>
                <div className="wrapper">
                <ul className="list">
                    <li className="item active" value="room">Phòng/Bàn</li>
                    <li className="item" value="menu">Menu</li>
                </ul>
                <div className="content">
                    ROOM
                </div>
                </div>
            </>
        );
    }
    else if(state === "menu"){
        return (
            <>
                <h1>Have a good day!</h1>
                <div className="wrapper">
                <ul className="list">
                    <li className="item " value="room">Phòng/Bàn</li>
                    <li className="item active" value="menu">Menu</li>
                </ul>
                <div className="content">
                    MENU
                </div>
                </div>
            </>
        );
    }
    
}
