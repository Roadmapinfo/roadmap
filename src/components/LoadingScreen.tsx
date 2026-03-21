import { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      // Start the fade-out animation
      loader.style.opacity = '0';
      // Immediately disable pointer events so the page is interactive during the fade-out
      loader.style.pointerEvents = 'none';

      // When the animation is done, hide the element completely
      const handleTransitionEnd = () => {
        setIsVisible(false);
      };
      loader.addEventListener('transitionend', handleTransitionEnd);

      return () => loader.removeEventListener('transitionend', handleTransitionEnd);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen" id="loader">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingScreen;