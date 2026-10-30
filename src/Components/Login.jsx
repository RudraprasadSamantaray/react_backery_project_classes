import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login({ setLogin }) {
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()
    let handleLogin = async () => {
        let response = await fetch(
            "http://localhost:5000/api/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }
        )
        let data = await response.json()
        if (data.success) {
            setLogin(true)
            alert("Login successful!")
            navigate("/home")

        }
        else {
            alert("Invalid username or password")
        }
    }
    return (
        <div className="login-page">
            <div className="login-box">
                <h1> Bakery Login </h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value) } />
                <button onClick={handleLogin}> Login </button>
            </div>
        </div>
    )
}