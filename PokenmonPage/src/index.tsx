import React, { useState } from 'react';
import './index.css';
import {createRoot} from 'react-dom/client';
import { PageController } from './components/pageList/PageController';

const App = () => {
  
  return (
    <div style={{ margin: '20px' }}>
      <PageController />
    </div>

  )
}


createRoot(document.getElementById('root') as Element).render(<App />)