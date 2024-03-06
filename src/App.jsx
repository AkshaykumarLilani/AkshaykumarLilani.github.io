import React, { useEffect, useState } from 'react';
import './App.css';
// import HomePage from './Pages/HomePage';
import LoadingHome from './Components/HomePage/LoadingHome';
const HomePage = React.lazy(() => import('./Pages/HomePage'));

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
