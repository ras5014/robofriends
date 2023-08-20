import React from 'react';
import './App.css';
import CardsList from './CardsList';
import Searchbox from './Searchbox';

function App() {
  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <Searchbox />
      { CardsList }
    </div>
  );
}

export default App;