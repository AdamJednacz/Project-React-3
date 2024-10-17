import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

const LayoutCMS = lazy(() => import('./components/cms/Layout_CMS'));
const LayoutMobile = lazy(() => import('./components/mobile/Layout_Mobile'));
const InProgress = lazy(() => import('./components/cms/InProgress'));

function App() {
  return (
      <BrowserRouter>

              <Routes>

                  <Route path='/' element={<LayoutCMS/>}/>
                  <Route path='/mobile' element={<LayoutMobile/>}/>
                  <Route path='/inprogres' element={<InProgress/>}/>
              </Routes>

      </BrowserRouter>
  );
}

export default App;
