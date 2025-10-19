import React from 'react';
import {link} from 'react-router-dom';

const Home = () => {
    return (
        <div classname="card">
            <h1>Welcome to React Router Advanced demo</h1>
            <p>This Application demonstrates Advanced routing techniques including </p>
            <ul style={{margin: '1rem 0', paddingleft: '2em'}}>
                <li>Nested Routes</li>
                <li>Protected Route</li>
                <li>Dynamic Routing</li>
                <li>Route Parameters</li>
            </ul>
            <div style={{margintop: '2rem'}}>
                <link to="/Blogs" classname="btn btn-primary">
                Explore Blog
                </link>
            </div>
        </div>
    )
}

export default Home;