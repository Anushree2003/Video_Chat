import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <header>
                <h1>Welcome to Let's Chat!</h1>
                <p>Connect with friends and family through seamless video calls.</p>
            </header>
            <nav>
                <ul>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <section className="features">
                <h2>Features</h2>
                <ul>
                    <li><i class="fa-regular fa-circle-check"></i>High-quality video and audio calls</li>
                    <li><i class="fa-regular fa-circle-check"></i>Group chat and video conferencing</li>
                    <li><i class="fa-regular fa-circle-check"></i>Screen sharing and recording</li>
                    <li><i class="fa-regular fa-circle-check"></i>End-to-end encryption for secure communication</li>
                </ul>
            </section>
            <footer>
                <p>© 2024 VideoChat. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
