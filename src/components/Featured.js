import React from 'react';

const Featured = ({match}) => {

  return (
    <div className="main-content">
      <h2>{`${match.params.name}`} </h2>
      <p>Introducing <strong></strong>, a teacher who loves teaching courses about <strong>{match.params.topic}</strong>!</p>
    </div>
  );
}

export default Featured;