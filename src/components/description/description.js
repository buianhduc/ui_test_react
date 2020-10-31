import React from 'react';
import "./description.scss"
export class Body2 extends React.Component{
    render(){
        return(<div className="container-fluid description row">
        <div className="col-lg-1"></div>
        <div className="col-lg-5 des">
            <b>
                NO 9 TO 5 CUSTOMER SERVICE
            </b>
            <h1>
                Do you also want to build your own digital colleague?
            </h1>
            <p>
                With Watermelon's technology, you ensure that your customer service team is future-proof and can operate as a 24/7 team. With Watermelon, you make your smart digital colleague who is always online, does not take a vacation and knows everything the service team knows. This is how we bring control back to the organization, so that millions of people worldwide have a better ans faster customer service experience that matches the expectations we have in 2020.
            </p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 row example-figure">
            <div className="col-4 d-flex justify-content-around align-items-center flex-column">
                <div className="text-center button-div d-flex justify-content-around align-items-center flex-column">
                    <div className="circle"></div>
                    <p>Button</p>
                </div>
                <div className="text-center button-div d-flex justify-content-around align-items-center flex-column">
                    <div className="circle"></div>
                    <p>Button</p>
                </div>
            </div>
            <div className="col-8 chat-bubble d-flex flex-column justify-content-around align-items-start">
                <div className="long-mess">
                    <div></div>
                </div>
                <div className="short-mess">
                    <div></div>
                </div>
                <div className="long-mess">
                    <div></div>
                </div>
                <div className="short-mess">
                    <div></div>
                </div>
            </div>
        </div>
    </div>)
    }
}
