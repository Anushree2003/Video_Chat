import React, { useState } from "react";
import "./Signup.css"



const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullname, setFullname] = useState("")
    const [status, setStatus] = useState("")
    const [profilePic, setProfilePic] = useState()

    const handleSubmit = (event) => {
        event.preventDefault(event)
    }

    return (
        <>
            <h2>Signup to continue</h2>
            <div className="outer-container">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="profile-pic-container">
                            <label htmlFor="profile-pic"></label>
                            <img src="/profileImage.png" alt="" className="profile-pic" />
                            <input
                                type="file"
                                id="profile-pic"
                                value={profilePic}
                                onChange={(e) => setProfilePic(e.target.profilePic)}
                                required={true}
                            />
                        </div>
                        <div>
                            <i class="fa-solid fa-user"></i>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required={true}
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <i class="fa-solid fa-envelope"></i>
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required={true}
                                placeholder="Email"
                            />
                        </div>
                        <div >
                            <i class="fa-solid fa-lock"></i>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required={true}
                                placeholder="Password"
                            />
                        </div>
                        <div>
                            <i class="fa-solid fa-pen-to-square"></i>
                            <input
                                type="text"
                                id="fullname"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                required={true}
                                placeholder="Fullname"
                            />
                        </div>
                        <div >
                            <i class="fa-solid fa-message"></i>
                            <textarea
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required={true}
                                placeholder="Status"
                            ></textarea>
                        </div>
                        <button type="submit">Create an Account</button>
                        <p>Already have an account? <span><a href="/login">Login</a></span></p>
                    </form>
                </div>

                <img src="/signup.png" className="signupImg"/>
            </div>
        </>
    )
}

export default Signup