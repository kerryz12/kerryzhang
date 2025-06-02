import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const particleCount = 100;
    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.color = `rgba(25, 118, 210, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;

        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      connect(particles: Particle[]) {
        if (!ctx) return;
        for (const particle of particles) {
          const distance = Math.sqrt(
            (this.x - particle.x) ** 2 + (this.y - particle.y) ** 2
          );

          if (distance < 100) {
            ctx.strokeStyle = `rgba(25, 118, 210, ${0.2 - distance / 500})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(particle.x, particle.y);
            ctx.stroke();
          }
        }
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      for (const particle of particles) {
        particle.connect(particles);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 z-0"></div>

      <div className="text-center z-10 px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Kerry Zhang
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-12 flex items-center gap-5">
          Software Developer
        </h2>

        <div className="relative w-64 h-64 mb-12">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full rounded-full cursor-pointer"
          />
        </div>

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
