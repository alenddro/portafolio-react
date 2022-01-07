import React from "react";
import { Proyecto } from "./Proyecto";

export const Proyectos = ({ proyectos }) => {
  return (
    <>
      <div className="row">
        <h1 className="text-light text-center">PROYECTOS</h1>
        {proyectos
          .map((proyecto) => (
            <div className="col-xs col-lg-4 text-light">
              <Proyecto key={proyecto.id} proyecto={proyecto} />
            </div>
          ))
          .reverse()}
      </div>
    </>
  );
};
