//git init    init new empty repository
//git commit -m "init commit"
//git remote add origin git@github.com:alexmrut/web-store.git - link the project to git repository
//git add -A      add all files

//rm -rf <file-name> - remove file
//npm update -D - update all dependencies
//npm audit fix - check for vulnerabilities
//npm install - install missing deps
//npm audit - audit again
// check dependencies packages.lock
/*
React is UI lib, no routing provided
need to use external lib, like react-router-dom (most popular, supported)
dependencies may conflict
in package.json add 
"resolutions":{
  "dependency":"version to enforce"
},
yarn, npm install
*/

import './App.css';
import './pages/homepage/homepage.styles.scss';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom'; //without switch should use 'exact path'

const HatsPage=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
