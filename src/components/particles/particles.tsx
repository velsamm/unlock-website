'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { IParticlesProps } from '@tsparticles/react/dist/IParticlesProps';
import { usePathname } from 'next/navigation';
import { Container } from "@tsparticles/engine";

export function ParticlesContainer() {
  const pathname = usePathname();
  const [init, setInit] = useState(false);

  const isBlogPath = pathname.includes('/blog');

	const enableParticlesMove = !isBlogPath;
  const opacity = 0.1;

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded: IParticlesProps['particlesLoaded'] = useCallback(async (container?: Container) => {
    console.log(container);
  }, [])

  const options: IParticlesProps['options'] = useMemo(() => ({
    fullScreen: {
      zIndex: -1,
    },
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: 'push',
        },
        onHover: {
          enable: false,
          mode: 'repulse',
        },
        // resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: opacity,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: enableParticlesMove,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          // area: 800,
        },
        value: 120,
      },
      opacity: {
        value: opacity,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), [enableParticlesMove, opacity]);

  if (!init) {
    return null;
  }

  return <Particles particlesLoaded={particlesLoaded} options={options} />;
}
