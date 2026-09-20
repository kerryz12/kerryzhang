import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import BackgroundLights from "./BackgroundLights";

const CONNECT_DISTANCE = 200;
const CURSOR_LINK_DISTANCE = 180;
const REPEL_RADIUS = 120;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500";

const canvasFade = "linear-gradient(to bottom, black 75%, transparent 100%)";

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const ctx: CanvasRenderingContext2D = context;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mouse = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let rafId = 0;

    class Particle {
      x = Math.random() * width;
      y = Math.random() * height;
      size = Math.random() * 5 + 1;
      speedX = Math.random() - 0.5;
      speedY = Math.random() - 0.5;
      color = `rgba(0, 0, 0, ${Math.random() * 0.3 + 0.1})`;

      update() {
        // Gently push away from the cursor.
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist > 0 && dist < REPEL_RADIUS) {
            const push = (1 - dist / REPEL_RADIUS) * 1.2;
            this.x += (dx / dist) * push;
            this.y += (dy / dist) * push;
          }
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;

        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const drawLine = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      color: string,
      lineWidth: number
    ) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) p.draw();

      // Each pair is drawn once (j > i).
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < CONNECT_DISTANCE) {
            const alpha = (1 - dist / CONNECT_DISTANCE) * 0.32;
            drawLine(a.x, a.y, b.x, b.y, `rgba(0, 0, 0, ${alpha})`, 0.5);
          }
        }
      }

      if (mouse.active) {
        for (const p of particles) {
          const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (dist < CURSOR_LINK_DISTANCE) {
            const alpha = (1 - dist / CURSOR_LINK_DISTANCE) * 0.6;
            drawLine(
              mouse.x,
              mouse.y,
              p.x,
              p.y,
              `rgba(96, 165, 250, ${alpha})`,
              0.75
            );
          }
        }
      }
    };

    const tick = () => {
      for (const p of particles) p.update();
      render();
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!rafId && !reducedMotion) rafId = requestAnimationFrame(tick);
    };

    const stop = () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const prevWidth = width;
      const prevHeight = height;

      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = window.innerWidth < 768 ? 30 : 60;
      if (particles.length === count && prevWidth > 0 && prevHeight > 0) {
        for (const p of particles) {
          p.x *= width / prevWidth;
          p.y *= height / prevHeight;
        }
      } else {
        particles = Array.from({ length: count }, () => new Particle());
      }

      if (reducedMotion) render();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouse.x = x;
      mouse.y = y;
      mouse.active = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
    };
    const onMouseLeave = () => {
      mouse.active = false;
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    // Don't animate while the Hero is scrolled out of view.
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    visibilityObserver.observe(canvas);

    if (!reducedMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-white"
    >
      <BackgroundLights />

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 z-[1] h-full w-full"
        style={{ maskImage: canvasFade, WebkitMaskImage: canvasFade }}
      />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Kerry Zhang
          </span>
        </h1>
        <p className="mb-12 text-2xl text-gray-700 md:text-3xl">
          Software Developer
        </p>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/kerry-zhang-ee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className={`text-gray-700 transition-colors hover:text-blue-500 ${focusRing}`}
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/kerryz12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className={`text-gray-700 transition-colors hover:text-blue-500 ${focusRing}`}
          >
            <FaGithub size={40} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className={`absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gray-400 transition-colors hover:text-blue-500 ${focusRing}`}
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;