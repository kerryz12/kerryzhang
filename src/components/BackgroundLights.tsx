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

    for (let i = 0; i < 6; i++) {
      const size = 500 + Math.random() * 200;
      const top = Math.random() * 80;
      const left = Math.random() * 80;
      const duration = 6 + Math.random() * 4;
      const delay = Math.random() * 3;
      const color = colours[Math.floor(i / 3)];

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
          className={`absolute rounded-full opacity-20 ${light.color} blur-3xl animate-pulse`}
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
