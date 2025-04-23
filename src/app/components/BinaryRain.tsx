import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

const BinaryRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  type RootState = {
    theme: {
      theme: {
        isDark: boolean;
      };
    };
  };
  const themeLight = useSelector((state: RootState) => state.theme.theme.isDark);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 20;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      // background dengan transparansi untuk efek trail

      if(themeLight){
        ctx.fillStyle = 'oklch(27.9% 0.041 260.031)';
      }else{
        ctx.fillStyle = 'rgb(255, 255, 255)';
      }

     
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if(themeLight){
        ctx.fillStyle = 'oklch(64.8% 0.2 131.684)'; // warna teks hijau
      }else{
        ctx.fillStyle = '#000'; // warna teks hijau
      }
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i+=3) {
        const text = Math.random() > 0.5 ? '1' : '0';
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      requestAnimationFrame(draw);
    };

    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [themeLight]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -10,
        backgroundColor: 'white',
        
      }}
    />
  );
};

export default BinaryRain;
