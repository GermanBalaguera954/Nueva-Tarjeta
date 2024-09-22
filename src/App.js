import React, { useState } from 'react';
import './App.css';

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);

    if (!isFlipped) {
      setTimeout(() => {
        setIsFlipped(false);
      }, 10000); // Tiempo para revertir el flip
    }
  };

  return (
    <div className="container">
      <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card__inner">
          <div className="card__front">
            <h1>¡Hola! Feliz Día!</h1>
          </div>
          <div className="card__back">
            <h1>"Mantén tu sonrisa, incluso en tiempos difíciles."</h1>
            <p>En este día del amor y la amistad, sea feliz y no olvide que las personas van y vienen, pero lo más importante es la huella que dejan en nuestras vidas. Solo Dios tiene el derecho de juzgarnos. La vida es corta, y muchas veces nos preocupamos por cosas que quizás nunca sucedan. Así que, sé feliz, sueña sin límites y no permitas que nada ni nadie te detenga. El pasado no define quién eres. Ánimo y sigue adelante, sonríe, baila y disfruta cada momento, porque la vida es un regalo. Lo demás... simplemente, déjalo ir.</p>
          </div>
        </div>
      </div>
      <button onClick={handleClick}>¡SORPRESA!</button>
      <div>
        <footer>
          <p>&copy; 2024 Germán Balaguera. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>

  );
};

export default Card;