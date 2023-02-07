import React from 'react';
import Banniere from '@/Images/banniereacceuil.jpg'
import LogementCart from '../Components/LogementsCart'

import './home.css'

const Home = () => {
    return (
        <div className='homep'>
            <div className='Banniere'>
                <img src={Banniere} className='banniereac' alt='bannierepdac'></img>
                <p className='banniere_text'>Chez vous, partout et ailleurs</p>
            </div>
            <div className='container_cards'>
                <LogementCart />

            </div>
        </div>
    );
};

export default Home;