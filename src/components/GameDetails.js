import React from 'react';
import { useParams } from 'react-router';

function GameDetails() {
  const { id } = useParams();
  return <div>GameDetails de {id}</div>;
}

export default GameDetails;
