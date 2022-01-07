import React from "react";
export const Proyecto = ({ proyecto }) => {
  return (
    <>
      <hr />
      <div className="card bg-dark">
        <img src={proyecto.img} alt={proyecto.img} className="card-img-top" />
        <div className="card-body">
          <p className="text-light">Realizado en el año: {proyecto.anio}</p>
          <h5 className="card-title">{proyecto.title}</h5>
          <p className="card-text">{proyecto.descripcion}</p>
          <p>
            <b> Lenguajes usados: {proyecto.lenguajes} </b>
          </p>
          <a href="#" className="btn btn-primary">
            ver imagen
          </a>
        </div>
      </div>
    </>
  );
};
