import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar.component';
import { SAMPLE_COINS } from './utils/test-utils';

const App = () => {

  return (
    <div>
      <Sidebar coins={SAMPLE_COINS} />
    </div>
  )
}


export default App;
