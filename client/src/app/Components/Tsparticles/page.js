// In ParticlesBackground.js or ParticlesBackground.tsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "#f0f0f0", // Background color
      },
    },
    particles: {
      number: {
        value: 50, // Number of particles
      },
      color: {
        value: "#007bff", // Particle color
      },
      shape: {
        type: "circle", // Shape of particles
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 3, max: 7 }, // Size of particles
      },
      move: {
        enable: true,
        speed: 1, // Speed of particles
      },
      links: {
        enable: true,
        distance: 150,
        color: "#007bff",
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Interaction mode on hover
        },
        onClick: {
          enable: true,
          mode: "push", // Interaction mode on click
        },
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
