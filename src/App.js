import React, { Component } from 'react';
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
import {render} from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Toptab from './components/tabs';
// import Gallery from './components/gallery'




class App extends Component {
  render(){ 
    return (
      <div className="App">
        {/* <head>
          <meta charset="UTF-8">
          <title>Alex Funk's Webpage </title>
          <link href="style.css" rel="stylesheet" type="text/css">
        </head> */}

        <body>

          <h1> Alex Funk </h1>
          <h2> International Man of Mystery </h2>
          <p> A successful young businessman, entrepreneur and painter. </p>
          </body>

         <Toptab />  
      </div>  
    );
  }
}


https://www.codecademy.com/learn/react-101
https://reactjs.org/docs/react-component.html

export default App;
