import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
const API_URL = "http://localhost:8000/auth/";
const HOST_URL = "http://localhost:4000/user/";
class AuthService {

    login(username, password) {
        return axios.post(API_URL + 'login', {
            email: username,
            password: password
        })
            .then(function (response) {
                if (response.data.access_token) {
                    axios.get(HOST_URL).then(res => {
                        res.data.map(item => {
                            if(item.username === username){
                                let temp = [jwt_decode(response.data.access_token), response.data,{role:username}]
                                localStorage.setItem("user", JSON.stringify(temp));
                            }
                        })
                    })
                    
                }
                return response.data.access_token;
            })
    }

    logout(){
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();