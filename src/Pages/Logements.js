import React from 'react'
import Carrousel from '../Components/Carrousel'
import Tags from '../Components/Tags'
import logementList from '../_utils/Logements.json'
import { useParams } from 'react-router-dom'

import './logements.css'





export default function Logements() {



    const logementId = useParams();


    const logementObject = logementList.find((logement) => logement.id === logementId.id);

    return (
        <React.Fragment>
            <Carrousel images={logementObject?.pictures} />
            <div className='header-logement'>
                <div>
                    <h1 className='logement_title'> {logementObject.title}</h1>
                    <p className="logement_location">{logementObject.location}</p>
                    <Tags tag={logementObject.tags} key_tag={logementObject.key_tag} />
                </div>

            </div>


        </React.Fragment>
    )

}