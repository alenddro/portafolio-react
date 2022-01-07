import React from "react";
import { Practica } from "./Practica";

export const Practicas = ({ practicas }) => {
  return (
    <>
      <div className="row">
        <h1 className="text-light text-center">PRACTICAS</h1>
        {practicas
          .map((practica) => (
            <div className="col-xs col-lg-4 text-light">
              <Practica key={practica.id} practica={practica} />
            </div>
          ))
          .reverse()}
      </div>
    </>
  );
};
