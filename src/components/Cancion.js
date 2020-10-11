import React, { Fragment } from "react";

const Cancion = ({ letra }) => {
  console.log(letra === "");
  if (letra === "") return null;
  return (
    <Fragment>
      <h2>Letra Canción</h2>
      <p className="letra">{letra}</p>
    </Fragment>
  );
};

export default Cancion;
