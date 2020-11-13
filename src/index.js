import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {NavBar} from './components/navbar/navbar.js'
import {Body2} from "./components/description/description.js";
import {Body1} from "./components/main/main.js";

let g_items = [
  {
      imgSrc : '/asset/menu.svg',
      followDescription: {
          header: "Chatbot Builder",
          description:  "Build your codeless chat bot with Watermelon"
      },
      active: true
  },
  {
      imgSrc : '/asset/dashboard.svg',
      followDescription: {
          header: "Central Dashboard",
          description:  "Manage your service team based on data"
      },
      active: false
  },
  {
      imgSrc : '/asset/statistics.svg',
      followDescription: {
          header: "Statistics",
          description: "Create a 360 degrees customer profile"
      },
      active: false
  },
  {
      imgSrc : '/asset/chat.svg',
      followDescription: {
          header: "Livechat",
          description:  "Centralize your most used channels"
      },
      active: false
  },
  {
      imgSrc : '/asset/customer.svg',
      followDescription: {
          header: "Customer Profiles",
          description:  "Start an easy going conversation with customers"
      },
      active: false
  },
  {
      imgSrc : '/asset/setting.svg',
      followDescription: {
          header: "Integration",
          description:  "Complete your implementation with the integrations"
      },
      active: false
  }
];
class Page extends React.Component{
  render(){
    return(
        <div>
            <NavBar />
            <Body1 menu_data={g_items}/>
            <Body2 />
        </div>
        )
    
  }
}
ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
