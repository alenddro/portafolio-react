import React from "react";
export const Proyecto = ({ proyecto }) => {
  return (
    <>
      <hr />
      <img src={proyecto.img} alt={proyecto.img} width="300" />
      <h6>{proyecto.id}</h6>
      <p>{proyecto.title}</p>
      <div>{proyecto.descripcion}</div>
      <i>{proyecto.lenguajes}</i>
    </>
  );
};
