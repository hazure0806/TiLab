import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

interface Star {
    x: number;
    y: number;
    radius: number;
  }

const StarField: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('starfield') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [] as Star[];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
      });
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    class ShootingStar {
      x: number = 0;
      y: number = 0;
      length: number = 0;
      speed: number = 0;
      opacity: number = 0;
    
      constructor() {
        this.reset();
      }
    
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.length = Math.random() * 80 + 20;
        this.speed = Math.random() * 10 + 5;
        this.opacity = 0;
      }
    
      draw() {
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.length, this.y + this.length);
        ctx.stroke();
      }
    
      update() {
        this.x += this.speed;
        this.y += this.speed;
        if (this.opacity < 1) {
          this.opacity += 0.1;
        }
        if (this.y > canvas.height) {
          this.reset();
        }
      }
    }

    const shootingStars = Array(1)
      .fill(null)
      .map(() => new ShootingStar());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawStars();
      shootingStars.forEach((star) => {
        star.draw();
        star.update();
      });
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStars();
    });
  }, []);

  return <Box as="canvas" id="starfield" position="fixed" inset={0} w="full" h="full" />;
};

export default StarField;
