import React from 'react'
import logementList from '../_utils/Logements.json'
import { Link } from 'react-router-dom'

import './card.css'




export default function logementCart() {
    return (
        <React.Fragment>
            {

                logementList.map(logement =>
                    <Link to={`/logement/${logement.id}`} className='logement_card' key={logement.id}>
                        <h2 className='card-title'> {logement.title}</h2>
                        <img src={logement.cover} alt="" className='img-cover' />
                    </Link>


                )

            }

        </React.Fragment>


    )
}