import React from 'react';
import { Link } from 'react-router-dom'
import './error.css'

const Error = () => {
    return (
        <div>
            <main className="error_flex">
                <h1 className="error_title">404</h1>
                <p className="error_p">Oups! La page que vous demandez n'existe pas.</p>
                <p><Link to="/home">Retournez à la page d'accueil</Link></p>


            </main>
        </div>
    );
};

export default Error;