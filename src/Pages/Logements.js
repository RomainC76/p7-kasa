import React from 'react'
import Carrousel from '../Components/Carrousel'
import Tags from '../Components/Tags'
import Signature from '../Components/Signature'
import Rating from '../Components/Rating'
import Collapse from '../Components/Collapse'
import logementList from '../_utils/Logements.json'
import { useParams, Navigate } from 'react-router-dom'

import './logements.css'



export default function Logements() {



    const logementId = useParams();

    console.log(logementId.id)

    const logementObject = logementList.find((logement) => logement.id === logementId.id);
    if (!logementObject) {
        return <Navigate to="/*" />
    }


    const equipementsLogement = logementObject.equipments.map((equipment, index) => {
        return <div className='equipement_item' key={index}>{equipment}</div>
    })


    return (

        <React.Fragment>
            <main>
                <Carrousel slides={logementObject?.pictures} />
                <div className='header-logement'>
                    <div className='header-logement-titre'>
                        <h1 className='logement_title'> {logementObject.title}</h1>
                        <p className="logement_location">{logementObject.location}</p>
                        <Tags tag={logementObject.tags} />
                    </div>
                    <div className='header-logement_right'>
                        <Signature host={logementObject.host} key={logementObject.id} />
                        <Rating rating={logementObject.rating} />
                    </div>
                </div>
                <div className="description-equipements">
                    <Collapse title="Description" description={logementObject.description} />
                    <Collapse title="Équipements" description={equipementsLogement} />
                </div>
            </main>
        </React.Fragment>
    )

}