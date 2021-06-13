import React, { useState, useEffect } from 'react';

const useResize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);


  return {
    width,
    height,
  };
}

const CustomHook = () => {
  const { width, height } = useResize();
  return (
    <h2>
      Height: {height}px   -  Width {width}px
    </h2>
  );
}

export default CustomHook;