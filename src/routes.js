import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Contatos from './Pages/contato';
import Promocao from './Pages/promocao';

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/contato"
                element={<Contatos />}
            />
            <Route

               path="/promocao"
               element={<Promocao />}
            />
        </Routes>
    )
}

export default MainRoutes;
