import useTypewriter from 'react-typewriter-hook';
import { useEffect, useState } from 'react';

const phrases = [
  "Desenvolvedor Front-end com foco em criar experiências digitais incríveis.",
  "Especialista em React, JavaScript e TypeScript.",
  "Transformando ideias em código funcional e elegante.",
  "Apaixonado por performance e usabilidade.",
];

const TypewriterText = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const magicName = useTypewriter(phrases[currentPhraseIndex]);

  useEffect(() => {
    if (magicName === phrases[currentPhraseIndex]) {
      const timeoutId = setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [magicName, currentPhraseIndex]);

  return <p>{magicName}</p>;
};

export default TypewriterText;