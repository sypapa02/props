
import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({
  nom = 'Nom Inconnu',
  equipe = 'Équipe Inconnue',
  nationalite = 'Nationalité Inconnue',
  numero_maillot = 'Numéro Inconnu',
  age = 'Âge Inconnu',
  image_url,
}) => {
  const cardStyle = {
    width: '18rem',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    height: '200px',
    objectFit: 'cover',
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image_url || 'url_de_fallback'} alt={nom} style={imageStyle} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          <p>Équipe: {equipe}</p>
          <p>Nationalité: {nationalite}</p>
          <p>Numéro de maillot: {numero_maillot}</p>
          <p>Âge: {age}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
