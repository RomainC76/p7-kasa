import React from 'react';
import Banniere from '@/Images/banniereacceuil.jpg'
import './home.css'

const Home = () => {
    return (
        <div>
            Accueil
            <div className='Banniere'>
                <img src={Banniere} className='banniereac' alt='bannierepdac'></img>
                <p>Chez vous, partout et ailleurs</p>
            </div>
        </div>
    );
};

export default Home;