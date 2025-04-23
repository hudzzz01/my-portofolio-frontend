import React, { useEffect, useRef } from 'react';

const Eye: React.FC = () => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const eye = eyeRef.current;
      const pupil = pupilRef.current;

      if (!eye || !pupil) return;

      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;
      const angle = Math.atan2(dy, dx);

      const maxMove = 10;
      const pupilX = Math.cos(angle) * maxMove;
      const pupilY = Math.sin(angle) * maxMove;

      pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={eyeRef}
      style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        // backgroundColor: '#fff',
        // border: '5px solid  #fffb',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '40px',
      }}
    >
      <div
        ref={pupilRef}
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#555',
          position: 'absolute',
          transition: 'transform 0.05s ease-out',

        }}
      />
    </div>
  );
};

export default Eye;
