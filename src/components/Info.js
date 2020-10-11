import React, { Fragment } from "react";

const Info = ({ informacion }) => {
  if (Object.keys(informacion).length === 0) return null;
  const { strArtistThumb, strGenre, strBiographyES } = informacion;
  return (
    <Fragment>
      <div className="card border-light">
        <div className="card-header bg-primary text-light font-weight-bold">
          Informació Artista
        </div>
        <div className="card-body">
          <img src={strArtistThumb} alt="Logo Artista" />
          <p className="card-text">Género: {strGenre}</p>
          <h2 className="card-text">Biografía:</h2>
          <p className="card-text">{strBiographyES}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Info;
