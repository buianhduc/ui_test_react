import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {NavBar} from './components/navbar/navbar.js'
import {Body2} from "./components/body_2/body_2.js";
import {Body1} from "./components/body_1/body_1.js";

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
