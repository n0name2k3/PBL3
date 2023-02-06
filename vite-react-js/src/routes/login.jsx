import "../Components/Styles/login.scss"
import { useEffect, useRef } from "react";
import axios from "axios";
import AuthService from "../Services/AuthService"
import { useNavigate } from "react-router-dom";
export default function Login() {
    const username_input = useRef();
    const password_input = useRef();
    const navigate = useNavigate();
    const API_URL = "http://localhost:8000/auth/";
    const handleLogin = (e) => {
        e.preventDefault();
        (AuthService.login(username_input.current.value, password_input.current.value)).then(
            () => {
                setTimeout(()=>{
                    navigate("/home");
                    window.location.reload()
                },400)
            })
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    alert(error.response.data.message);
                    
                }
            })
        }
        useEffect(()=>{
            if(AuthService.getCurrentUser()){
                navigate("/home");
            }
        },[])
        return (

            <div className="container">
                <div className="login__content">
                    {/* <img src="https://wallpapercave.com/wp/wp9277574.jpg" alt="login image" className="login__img" /> */}
                    <form action="true" className="login__form" onSubmit={(e) => handleLogin(e)}>
                        <div>
                            <h1 className="login__title">
                                <span>Bách Hóa DUT Coffee </span> management services!
                            </h1>
                            <p className="login__description">
                                Welcome! Please login to continue.
                            </p>
                        </div>
                        <div>
                            <div className="login__inputs">
                                <div>
                                    <label htmlFor="true" className="login__label">Username</label>
                                    <input ref={username_input} type="text" placeholder="Enter your username" required className="login__input" />
                                </div>
                                <div>
                                    <label htmlFor="true" className="login__label">Password</label>
                                    <div className="login__box">
                                        <input ref={password_input} type="password" placeholder="Enter your password" required className="login__input" id="input-pass" />
                                        <i className="ri-eye-off-line login__eye" id="input-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="login__buttons">
                                <button action="true" className="login__button">Log In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }