import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login({ setLogin }) {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()
    let loginUser = async () => {
        let rdata = await fetch('/Users.json')
        let data = await rdata.json()
        let user = data.find((u) => {
            return (
                u.username === username &&
                u.password === password
            )
        })
        if (user) {
            setLogin(true)
            navigate('/home')
        } else {
            alert('Invalid Username or Password')
        }
    }
    return (
        <div>
            <h1>Sweet Crumbs Bakery</h1>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) =>
                    setUsername(e.target.value)
                }
            />
            <br /><br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />
            <br /><br />
            <button onClick={loginUser}>
                Login
            </button>
        </div>
    )
}