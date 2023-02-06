import { Form } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService"

export default function Home() {
    const API_URL = "http://localhost:4000/auth/";
    const navigate = useNavigate();
    const [persons, setPerson] = useState([])
    const [state, setState] = useState({
        redirect: null,
        userReady: false,
        currentUser: { username: "" }
    })
    const currentUser = AuthService.getCurrentUser();
    useEffect(() => {
        console.log(currentUser)
        if (!currentUser)  navigate("/")
        setState({ currentUser: currentUser, userReady: true })
        },[])

    const handleLogout = () => {
        AuthService.logout()
        navigate("/")
    }

    const handleControl = () => {
        navigate(`/${currentUser[2].role}`)
    }

    console.log(state.userReady)
    if(state.userReady){
        return (
            <ul>
                {persons.map((person, index) => <li key={index}>{person.title}</li>)}
                <div>Wellcome {currentUser[2].role}</div>
                <button onClick={handleControl}>Go to control panel</button>
                <br></br>
                <button onClick={handleLogout}>Log out</button>
            </ul>
        );
    }
    else{
        
        return (
            <div></div>
        );
    }

    
}
