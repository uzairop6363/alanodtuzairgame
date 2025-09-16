import { useEffect, useRef } from 'react';

export function useBackgroundMusic() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      ref.current = new Audio('/sounds/bg.mp3');
      ref.current.loop = true;
      ref.current.volume = 0.4;
    }
    const audio = ref.current;

    function startMusic() {
      audio.play().catch(() => {});
      window.removeEventListener('click', startMusic);
    }
    window.addEventListener('click', startMusic);

    return () => {
      audio.pause();
    };
  }, []);
}

export function playSound(file, volume=0.7) {
  const a = new Audio(`/sounds/${file}`);
  a.volume = volume;
  a.play();
}
