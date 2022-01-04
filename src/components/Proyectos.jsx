import React from "react";
import { Proyecto } from "./Proyecto";

export const Proyectos = ({ proyectos }) => {
  return (
    <container>
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </container>
  );
};
