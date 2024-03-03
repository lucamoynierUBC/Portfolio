import React, { useEffect, useState } from 'react';

const DelayComponent = ({ delay = 5000 }) => {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isReady) {
    throw new Promise((resolve) => setTimeout(resolve, delay));
  }

  return null; // This component does not render anything itself
};