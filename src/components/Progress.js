//Note: components
import TypeIt from "typeit-react";
import TiltAnimation from "./shared/TiltAnimation";
import FadeOnScroll from "./shared/FadeOnScroll";

const RepeatFunction = () => {
  return (
    <FadeOnScroll data="fade" duration="1500" delay="0" >
    <div className="bg-white bg-opacity-10  mx-auto md:w-96 w-full h-80 py-2 px-4 rounded-lg flex flex-col shrink-0 z-20 shadow-lg">
      <div className="flex justify-between">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-primary-green"></div>
        </div>
        <div>
          <p className="text-xs font-light text-white"> Motivation.txt</p>
        </div>
      </div>
      <div className="border-t my-auto mt-4 pt-2">
        <TypeIt
          className="pt-4"
          options={{
            waitUntilVisible: true,
            speed: 50,
            loop: true,
            //cursor: false,
          }}
          getBeforeInit={(instance) => {
            instance
              .type(
                '<span class="text-lg font-semibold text-gray-100">function Repeat () {</span>'
              )
              .pause(350)
              .break({ delay: 250 })
              .type(
                '<span class="text-lg font-semibold text-gray-100">Eat();</span>'
              )
              .pause(350)
              .break({ delay: 250 })
              .type(
                '<span class="text-lg font-semibold text-gray-100">Code();</span>'
              )
              .pause(350)
              .break({ delay: 250 })
              .type(
                '<span class="text-lg font-semibold text-gray-100">Workout();</span>'
              )
              .pause(350)
              .break({ delay: 250 })
              .type(
                '<span class="text-lg font-semibold text-gray-100">LoveYourself();</span>'
              )
              .pause(350)
              .break({ delay: 250 })
              .type(
                '<span class="text-lg font-semibold text-gray-100">Sleep();</span>'
              )
              .pause(350)

              .break({ delay: 250 })

              .type(
                '<span class="text-lg font-semibold text-gray-100">})();</span>'
              );
            return instance;
          }}
        />
      </div>

      <p className="text-xs font-light text-white mt-auto flex">
        #Programming#Selfcare
      </p>
    </div>
    </FadeOnScroll>
  );
};

const Progress = () => {
  return (
    <div id="progress" style={{ height: "100vh", maxHeight: "1000px" }}>
      <div className="max-w-7xl h-full flex mx-auto">
        <div className="flex md:flex-row flex-col items-center w-full px-4 justify-center gap-y-12">
          <div className="order-last md:order-first md:w-auto w-full">
            <TiltAnimation>
              <RepeatFunction />
            </TiltAnimation>
          </div>
          <FadeOnScroll data="fade" duration="1500" delay="500">
          <p className="lg:text-8xl md:text-7xl text-6xl font-bold text-primary-gray lg:leading-tight leading-none md:ml-8">
            Slow Progress is better than no progress
          </p>
          </FadeOnScroll>
        </div>
      </div>
    </div>
  );
};
export default Progress;
