import React, { useState, useEffect, useRef } from 'react';

const TypewriterEffect = ({ text, speed, deleteSpeed, delay }) => {
  const [displayText, setDisplayText] = useState(''); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const index = useRef(0); 
  const timeoutRef = useRef(null); 

  useEffect(() => {
    const typeText = () => {
      if (!isDeleting) {
        setDisplayText((prev) => prev + text.charAt(index.current));
        index.current++;

        if (index.current === text.length) {
          setIsDeleting(true);
        }
      } else {
        setDisplayText((prev) => prev.slice(0, -1));
        index.current--;

        if (index.current === 0) {
          setIsDeleting(false);
        }
      }
    };

    if (index.current < text.length || isDeleting) {
      timeoutRef.current = setTimeout(typeText, isDeleting ? deleteSpeed : speed);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, text, speed, deleteSpeed]);

  return (
    <div className="w-full">
      <p 
        className="inline-block whitespace-nowrap overflow-hidden border-r-2 border-gray-300 animate-blink"
        style={{
          height: "55px",
          marginTop: "9px"
        }}
      >
        {displayText}
      </p>
    </div>
  );
};

export default TypewriterEffect;
