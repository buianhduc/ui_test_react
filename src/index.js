import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {NavBar} from './components/navbar/navbar.js'
import {Body2} from "./components/description/description.js";
import {Body1} from "./components/main/main.js";

class Page extends React.Component{
  render(){
    return(
        <div>
            <NavBar />
            <Body1 />
            <Body2 />
        </div>
        )
    
  }
}
ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
