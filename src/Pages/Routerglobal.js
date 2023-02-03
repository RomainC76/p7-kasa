import React from 'react';
import { Routes, Route } from "react-router-dom"


import { Layout, Home, Apropos } from '@/Pages'
import Error from '@/_utils/Error'

const Routerglobal = () => {
    return (
        <Routes>
            <Route element={<Layout />}>

                <Route index element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />

                <Route path='*' element={<Error />} />
            </Route>

        </Routes>
    );
};

export default Routerglobal;