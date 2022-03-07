import React from "react";
import { Route, Routes} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Home from "../components/Home";
import PokemonDetalles from "../components/PokemonDetalles";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/details/:id" element={<PokemonDetalles />} />
      <Route path="/home/:id" element={<Home />} />
      <Route path="/home" element={<Home/>} /> 
      <Route path="/" element={<Navigate replace to="/home/1" />} />
      <Route path="*" element={<Navigate replace to="/home/1" />} />
    </Routes>
  );
};

export default AppRouter;
