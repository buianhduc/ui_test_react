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
                <div className="col-lg-6">
                    <div className="row item">
                    {
                    this.props.menu_data.map((item, index) => {
                        if(index < this.props.menu_data.length/2)
                        return(
                            <div className="row mb-4" >
                                    <div className="col-lg-2">
                                <div className={item.active ? ' img-container features-active' : 'img-container'}><img src={process.env.PUBLIC_URL+item.imgSrc} alt="bruh"/></div>
                                </div>

                            <div className = "col-lg-10 item-description">
                                <h5>{item.followDescription.header}</h5>
                                <p>{item.followDescription.description}</p>
                            </div>
                            </div>
                            
                        )
                        })
                    }
                    </div>
                    
                </div>
                <div className="col-lg-6">
                    <div className="row item">
                        {
                            this.props.menu_data.map((item, index) => {
                                if(index >= this.props.menu_data.length/2)
                                    return(
                                        <div className="row mb-4" >
                                            <div className="col-lg-2">
                                                <div className={item.active ? ' img-container features-active' : 'img-container'}><img src={process.env.PUBLIC_URL+item.imgSrc} alt="bruh"/></div>
                                            </div>
                        
                                            <div className = "col-lg-10 item-description">
                                                <h5>{item.followDescription.header}</h5>
                                                <p>{item.followDescription.description}</p>
                                            </div>
                                        </div>
                
                                    )
                            })
                        }
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
