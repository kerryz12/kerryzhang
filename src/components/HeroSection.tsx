import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import BackgroundLights from "./BackgroundLights";

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let canvasWidth = 0;
    let canvasHeight = 0;

    const initParticles = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 30 : 60;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvasWidth = rect.width;
      canvasHeight = rect.height;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      
      initParticles();
    };

    const resizeObserver = new ResizeObserver(() => {
      setCanvasDimensions();
    });

    resizeObserver.observe(canvas);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 5 + 1;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.color = `rgba(0, 0, 0, ${Math.random() * 0.3 + 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvasWidth) this.x = 0;
        else if (this.x < 0) this.x = canvasWidth;

        if (this.y > canvasHeight) this.y = 0;
        else if (this.y < 0) this.y = canvasHeight;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      connect(particlesToConnect: Particle[]) {
        if (!ctx) return;
        for (const particle of particlesToConnect) {
          const distance = Math.sqrt(
            (this.x - particle.x) ** 2 + (this.y - particle.y) ** 2
          );

          if (distance < 200) {
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.2 - distance / 1000})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(particle.x, particle.y);
            ctx.stroke();
          }
        }
      }
    }

    setCanvasDimensions();

    let animationFrameId: number;
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      for (const particle of particles) {
        particle.connect(particles);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.unobserve(canvas!);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-white"
    >
      <BackgroundLights />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-[1]"
      />

      <div className="text-center relative z-10 px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Kerry Zhang
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-12 flex items-center gap-5">
          Software Developer
        </h2>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/kerry-zhang-ee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/kerryz12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;