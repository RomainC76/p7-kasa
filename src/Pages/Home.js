import React from 'react';
import Banniere from '@/Images/banniereacceuil.jpg'
import LogementCart from '../Components/LogementsCart'


import './home.css'


export default function Home() {
    return (
        <React.Fragment>

            <main>
                <div className='Banniere'>
                    <img src={Banniere} className='banniereac' alt='bannierepdac'></img>
                    <p className='banniere_text'>Chez vous, partout et ailleurs</p>
                </div>
                <div className='container_cards'>
                    <LogementCart />
                </div>
            </main>

        </React.Fragment>
    )

}