import React, { useEffect, useState } from 'react';
import './App.css';
// import HomePage from './Pages/HomePage';
import LoadingHome from './Components/HomePage/LoadingHome';
const HomePage = React.lazy(() => import('./Pages/HomePage'));

import ReactGA from "react-ga";

const GA_TRACKING_ID = 'G-X8SFGCMW02';
ReactGA.initialize(GA_TRACKING_ID);

function App() {

  return (
    <>
      <React.Suspense fallback={<LoadingHome />}>
        <HomePage />
      </React.Suspense>
    </>
  )
}

export default App
