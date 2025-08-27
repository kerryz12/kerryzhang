import { useState, useEffect } from "react";

type Light = {
  id: number;
  size: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
  color: string;
};

const BackgroundLights = () => {
  const [lights, setLights] = useState<Light[]>([]);

  useEffect(() => {
    const newLights: Light[] = [];
    const colours = ["bg-blue-200", "bg-purple-200"];

    for (let i = 0; i < 8; i++) {
      const size = 800 + Math.random() * 400;
      const top = Math.random() * 80;
      const left = Math.random() * 80;
      const duration = 7 + Math.random() * 5;
      const delay = Math.random() * 4;
      const color = colours[Math.floor(i % 2)];

      newLights.push({
        id: i,
        size,
        top,
        left,
        duration,
        delay,
        color,
      });
    }

    setLights(newLights);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {lights.map((light) => (
        <div
          key={light.id}
          className={`absolute rounded-full opacity-30 ${light.color} blur-3xl animate-pulse`}
          style={{
            width: `${light.size}px`,
            height: `${light.size}px`,
            top: `${light.top}%`,
            left: `${light.left}%`,
            animationDuration: `${light.duration}s`,
            animationDelay: `${light.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundLights;
