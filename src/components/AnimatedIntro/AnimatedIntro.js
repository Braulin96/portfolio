import PropTypes from 'prop-types';
import TypeIt from "typeit-react";

import './AnimatedIntro.css';

const AnimatedIntro = ({typeSpeed = 50 }) => {
  return (
    <div className="animatedintro">
      <TypeIt
        options={{
          speed: typeSpeed,
        }}
        getBeforeInit={(instance) => {
          instance
            .pause(500)
            .type(
              `<span class="text-8xl text-white font-extralight" style="font-family: Allura, cursive;">Braulin Pires</span>`
            )
            .pause(250)
            .break({ delay: 200 })
            .type(
              '<span class="text-4xl text-white font-extralight">Front-Ennd Dev</span>',
              {
                speed: 100,
              }
            )
            .pause(250)
            .move(-6)
            .pause(250)
            .delete(1)
            .pause(250)
            .move(null, { to: "END" })
            .pause(250)
            .type(
              '<span class="text-4xl text-white font-extralight">eloper - Web Designer</span>',
              {
                speed: 100,
              }
            )
            .pause(250)
            .exec(() => {
          
              document.querySelector(".ti-cursor").style.visibility =
                "hidden";
            });
          return instance;
        }}
      />
    </div>
  );
};

AnimatedIntro.propTypes = {
  typeSpeed: PropTypes.number
};

export default AnimatedIntro;