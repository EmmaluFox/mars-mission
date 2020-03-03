﻿﻿import React from "react";
import {Url} from "../Models/Url"
import "./Photocard.scss";

interface PhotocardProps {
    imageUrl: Url;
    altText : string;
    description : string;
}

function Photocard (props : PhotocardProps) {
    return (
        <div className="photocard">
            <img className="contentImage" 
                 src={props.imageUrl} 
                 alt={props.altText}/>
            <p className="contentDescription">{props.description}</p>
        </div>
    )
}
export {Photocard}
