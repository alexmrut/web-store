//git init    init new empty repository
//git commit -m "init commit"
//git remote add origin git@github.com:alexmrut/web-store.git - link the project to git repository
//git add -A      add all files


import './App.css';
import './pages/homepage/homepage.styles.scss';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div >
      <HomePage/>
    </div>
  );
}

export default App;
