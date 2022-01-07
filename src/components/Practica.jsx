import React from "react";
export const Practica = ({ practica }) => {
  return (
    <>
      <hr />
      <div className="card bg-dark">
        <img src={practica.img} alt={practica.img} className="card-img-top" />
        <div className="card-body">
          <p className="text-light">Realizado en el año: {practica.anio}</p>
          <h5 className="card-title">{practica.titulo}</h5>
          <p className="card-text">{practica.descripcion}</p>
          <p>
            <b> Lenguajes usados: {practica.lenguajes} </b>
          </p>
          <a href="#" className="btn btn-primary">
            ver imagen
          </a>
        </div>
      </div>
    </>
  );
};
