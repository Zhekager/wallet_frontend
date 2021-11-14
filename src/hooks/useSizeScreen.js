import { useState, useEffect } from 'react';

function useSizeScreen() {
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

  const handleSize = () => {
    setSizeScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, [sizeScreen]);

  return Number(sizeScreen);
}

export default useSizeScreen;
