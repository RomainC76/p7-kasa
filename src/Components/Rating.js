import React from 'react'
import Etoile from "../Images/etoilepleine.png";
import EtoileVide from "../Images/etoilevide.png";

import './rating.css'


export default function Rating(props) {
    let rating = props.rating;
    rating = parseInt(rating)
    console.log(rating)
    let rateLogement = [];
    let etoileComplete = true;
    for (let index = 0; index < 5; index++) {
        if (index === rating) {
            etoileComplete = false;
        }
        if (etoileComplete === true) {
            rateLogement.push(<img src={Etoile} alt='Etoile de notation rose (positif)' className="etoile" key={index} />)
        } else {
            rateLogement.push(<img src={EtoileVide} alt='Etoile de notation grise (négatif)' className="etoile" key={index} />)
        }
    }
    return (
        <div className='rating'>
            {rateLogement}
        </div>
    )









}