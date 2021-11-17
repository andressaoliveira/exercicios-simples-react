import React from "react";

export default (props) => {
    return <div className="destination">
        <h1>{props.name}</h1>
        <div className="destination-photos">
            {props.images.map((item, index) => {
                return <img src={item} key={index}/>
            })}
        </div>
        <p>{props.text}</p>
    </div>
}