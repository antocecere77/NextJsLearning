import React from 'react';
import User from '../../components/User';

const authIndexPage = () => (
    <div>
        <h1>The Auth Index Page</h1>
        <User name="Antonio" age={43}/>
    </div>
);

export default authIndexPage