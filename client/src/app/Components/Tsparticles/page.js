// src/components/ParticlesBackground.js

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: { color: { value: "#f0f2f5" } },
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: "#3498db" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            bounce: false,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#3498db",
            opacity: 0.5,
            width: 1,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
