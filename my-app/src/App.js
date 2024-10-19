import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

const Layout = lazy(() => import('./components/Layout'));

const InProgress = lazy(() => import('./components/InProgress'));

function App() {
  return (
      <BrowserRouter>
              <Routes>

                  <Route path='/:pageType' element={<Layout />} />
                  <Route path='/inprogres' element={<InProgress/>}/>
              </Routes>
      </BrowserRouter>
  );
}

export default App;
