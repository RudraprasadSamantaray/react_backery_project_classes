import React, { useEffect, useState } from 'react'

export default function Login({ login, setLogin }) {

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    let [users, setUsers] = useState([])


    let getUsers = async () => {

        let rdata = await fetch("/Users.json")

        let data = await rdata.json()

        setUsers(data)

    }


    useEffect(() => {

        getUsers()

    }, [])


    let handleLogin = () => {

        let user = users.find((u) => {

            return (
                u.username === username &&
                u.password === password
            )

        })


        if (user) {

            setLogin(true)

            alert("Login successful!")

        }
        else {

            alert("Invalid username or password")

        }

    }


    return (

        <div className="login-page">

            <div className="login-box">

                <h1>
                    Bakery Login
                </h1>


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
                        setPassword(e.target.value)
                    }
                />


                <button
                    onClick={handleLogin}
                >
                    Login
                </button>


                <div className="login-credentials">

                    <p>
                        Demo Login Credentials
                    </p>

                    {
                        users.map((u, index) => {

                            return (

                                <p key={index}>
                                    Username: {u.username}
                                    {" | "}
                                    Password: {u.password}
                                </p>

                            )

                        })
                    }

                </div>

            </div>

        </div>

    )
}