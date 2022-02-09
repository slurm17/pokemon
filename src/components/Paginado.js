import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCantidadTotalPokemones } from "../services/getCantidadTotalPokemones";
import "../estilos/estilo.css";

const Paginado = ({ cantPokemonesAMostrar }) => {
  const [pagina, setPagina] = useState(1);
  const [paginaMaxima, setPaginaMaxima] = useState(0);
  const [cantPokemones, setCantPokemones] = useState(0);
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    getCantidadTotalPokemones().then((cant) => {
      setCantPokemones(cant);
    });
  }, []);

  useEffect(() => {
    if (!isNaN(id)) setPagina(parseInt(id));
    else {
      setPagina(1);
    }
  }, [id]);

  useEffect(() => {
    //Calcula la cantidad de paginas a mostrar
    setPaginaMaxima(Math.floor(cantPokemones / cantPokemonesAMostrar));
  }, [cantPokemones]);

  const nextPage = () => {
    if (pagina + 1 <= paginaMaxima) history(`/home/${pagina + 1}`);
  };
  const previusPage = () => {
    history(`/home/${pagina - 1}`);
  };

  return (
    <div className="centrado">
      <div className="paginado">
        {pagina > 1 ? (
          <button className="pagina" onClick={() => previusPage()}>
            {pagina - 1}
          </button>
        ) : (
          <div className="pagina opaco"></div>
        )}
        <button className="pagina">{pagina}</button>
        <button className="pagina" onClick={() => nextPage()}>
          {pagina + 1}
        </button>
      </div>
    </div>
  );
};

export default Paginado;
