﻿import React from "react";
import {Url} from "../../Models/Url";
import './Hero.scss';


interface HeroProps{
    headingText : 'Curiosity' | 'Spirit'  | 'Opportunity';
    rover : 'curiosity' | 'spirit'  | 'opportunity';
    imageUrl : Url;
}

export function Hero(props : HeroProps){

    const heroClass : string = "hero " + props.rover;
    
    return(
        
        
        <div className={heroClass}>
            <h1 className='heroTitle'>{props.headingText}</h1>
            <img className='heroImage' src={props.imageUrl}/>
        </div>
        
    );
    
    
}