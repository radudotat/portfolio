import Particles from 'react-tsparticles';

type IHeroNodesProps = {
  height?: string;
};

const Nodes = (props: IHeroNodesProps) => {
  const particlesInit = (main) => {
    // console.log('particlesInit', main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    // console.log('particlesLoaded', container);
  };
  return (
    <Particles
      init={particlesInit}
      loaded={particlesLoaded}
      className="hero-up"
      canvasClassName="hero-one"
      options={{
        fpsLimit: 30,
        // background: {
        //   color: {
        //     value: 'transparent',
        //   },
        // },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'connect',
            },
            onHover: {
              enable: true,
              mode: 'attract',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
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
            value: '#03a9f4',
          },
          links: {
            color: '#03a9f4',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
        fullScreen: {
          enable: false,
          zIndex: -10,
        },
      }}
    />
  );
};

export { Nodes };
