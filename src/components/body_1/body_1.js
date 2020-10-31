import React from 'react';
import "./main.scss"

export class Body1 extends React.Component{
    render(){
        return(
                <div className="main container-fluid row">
        <div className="col-lg-8 container features">
            <b className = "col row">
                PRODUCT FEATURES
            </b>
            <div className="container row">
                <div className="col-6">
                    <div className="row item">
                        <div className="col-lg-2">
                            <div className="img-container features-active"><img src="./asset/menu.svg" alt=""/></div>
                        </div>

                        <div className = "col-lg-10 item-description">
                            <h5>Chatbot Builder</h5>
                            <p>Build your codeless chat bot with Watermelon</p>
                        </div>

                    </div>
                    <div className="row item">
                        <div className="col-lg-2">
                            <div className=" img-container">
                                <img src="./asset/dashboard.svg" alt=""/>
                            </div>
                        </div>


                        <div className="col-lg-10 item-description">
                            <h5>Central Dashboard</h5>
                            <p>Manage your service team based on data</p>
                        </div>

                    </div>
                    <div className="row item">
                        <div className ="col-lg-2">
                            <div className="img-container">
                                <img src="./asset/statistics.svg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-10 item-description">
                            <h5>Statistics</h5>
                            <p>Create a 360 degrees customer profile</p>
                        </div>

                    </div>
                </div>
                <div className="col-6">
                    <div className="row item">
                        <div className="col-lg-2">
                            <div className="img-container">
                                <img src="./asset/chat.svg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-10 item-description">
                            <h5>Livechat</h5>
                            <p>Centralize your most used channels</p>
                        </div>

                    </div>
                    <div className="row item">

                        <div className="col-lg-2">
                            <div className="img-container">
                                <img src="./asset/customer.svg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-10 item-description">
                            <h5>Customer Profiles</h5>
                            <p>Start an easy going conversation with customers</p>
                        </div>

                    </div>
                    <div className="row item">
                        <div className="col-lg-2">
                            <div className="img-container">
                                <img src="./asset/setting.svg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-10 item-item-description">
                            <h5>Integration</h5>
                            <p>Complete your implementation with the integrations</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <div className="col-lg-4 by-industry">
            <b className="col row">
                BY INDUSTRY
            </b>
            <ul className="col">
                <li>Customer Service</li>
                <li>E-commerce</li>
                <li>Healthcare</li>
                <li>Education</li>
                <li>Financial services</li>
                <li>Government</li>
            </ul>
        </div>
    </div>
        )
    }
}
