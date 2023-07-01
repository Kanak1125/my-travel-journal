import React from "react";

// props in the following is a parameter that receives objects as props(argument) from Instance of Card component...
export default function Card(props) {
    console.log(props)
    return (
            <div className="card">
                <div className="img-container">
                    <img src = {props.imageUrl} alt={'image'} className = "img"/>
                </div>
                <div className="info">
                    <div className="view-on-map">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>{props.location}</p>
                        <a href= {props.googleMapsUrl} target="_blank" rel="noreferrer">View on google maps</a>
                    </div>
                    <h2 className="place-name">{props.title}</h2>
                    <p className="date bold">
                        <span className="from">{props.startDate}</span> -
                        <span className="to"> {props.endDate}</span>
                    </p>
                    <p className="description">{props.description}</p>
                </div>
                {(props.index !== props.arrLength - 1) && <hr />}   {/*if first condition is truthy then only it goes to another statement i.e. <hr /> here else returns*/}
            </div>
    )
}