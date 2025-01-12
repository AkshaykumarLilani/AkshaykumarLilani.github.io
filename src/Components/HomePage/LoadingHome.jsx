import React from 'react';
import { loading_animation } from '../../assets';

const LoadingHome = ({ progress }) => {
    return (
        <main className="home-loading">
            <img src={loading_animation} alt="Loading " />
            {/* <h5>{progress}%</h5> */}
        </main>
    );
};

export default LoadingHome;
