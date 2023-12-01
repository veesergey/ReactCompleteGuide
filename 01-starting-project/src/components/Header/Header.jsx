import reactImg from '../../assets/react-core-concepts.png';
import { useState, useEffect } from 'react';
import './Header.css';


export const reactDescriptions = ['Fundamental', 'Crucial', 'Core', 'Essential'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const [currentDescription, setCurrentDescription] = useState(reactDescriptions[0]);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setCurrentDescription(reactDescriptions[currentIndex]);
      currentIndex = (currentIndex + 1) % reactDescriptions.length;
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {currentDescription} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
