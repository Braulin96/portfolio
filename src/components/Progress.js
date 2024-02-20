//Note: components
import TypeIt from "typeit-react";
import TiltAnimation from "./shared/TiltAnimation";
import FadeOnScroll from "./shared/FadeOnScroll";

{
  /* 
We lose in the certainty of tomorrow, 
and the joy of today falls while waiting 
for the next opportunity.
We lose by failing to love the living, 
focused on the idea of worshiping the dead. 
We continue to fight for dreams, 
dreams that we believe to be ours.
We lose by prioritizing 'having,' 
when our essence should be who we are,
We lose when trying to be who we were asked to be, 
and we die without ever knowing who we truly were.
And so we continue, allowing others to own our happiness. 
We lose haste, gain tranquility, 
and focused solely on the body, we lose the soul…
*/
}

const RepeatFunction = () => {
  return (
    <FadeOnScroll data="fade" duration="1500" delay="0" className="w-full">
      <div className="mx-auto py-2 px-4 flex flex-col z-20 mb-8">
        <div className="my-auto pb-3 px-4">
          <TypeIt
            className="pt-4 text-secondary-blue"
            options={{
              waitUntilVisible: true,
              speed: 70,
              //loop: true,
              //cursor: false,
            }}
            getBeforeInit={(instance) => {
              instance
                .pause(350)
                .break({ delay: 250 })
                .type('<span class="text-lg font-semibold">We lose,</span>')
                .pause(500)
                .break({ delay: 250 })
                .type(
                  '<span class="text-lg font-semibold">We lose in the certainty of tomorrow, and the joy of today falls while waiting for the next opportunity.</span>'
                )
                .pause(500)
                .break({ delay: 250 })
                .type(
                  '<span class="text-lg font-semibold">We lose by failing to love the living, focused on the idea of worshiping the dead. </span>'
                )
                .pause(500)
                .break({ delay: 250 })
                .type(
                  '<span class="text-lg font-semibold">We continue to fight for dreams, dreams that we believe to be ours.</span>'
                )
                .pause(500)
                .break({ delay: 250 })
                .type(
                  '<span class="text-lg font-semibold">We lose by prioritizing "having", when our essence should be who we are,</span>'
                )
                .pause(500)
                .break({ delay: 250 })
                .type(
                  '<span class="text-lg font-semibold">We lose when trying to be who we were asked to be, and we die without ever knowing who we truly were.</span>'
                )
                .pause(500)
                .break({ delay: 250 })
                .type(
                  '<span class="text-lg font-semibold">And so we continue, allowing others to own our happiness. We lose haste, gain tranquility, and focused solely on the body, we lose the soul…</span>'
                );
              return instance;
            }}
          />
        </div>
      </div>
    </FadeOnScroll>
  );
};

const Progress = () => {
  return (
    <div id="progress">
      <div className="max-w-7xl h-full flex mx-auto w-full">
        <div className="flex md:flex-row flex-col items-center w-full px-4 justify-center gap-y-12">
        <div className="md:w-1/2 w-full h-1/2 ">
            <div className="h-full my-auto">
              <FadeOnScroll
                className="flex justify-center my-auto h-full"
                data="fade"
                duration="1500"
                delay="500"
              >
                <p className="lg:text-7xl md:text-6xl text-5xl font-bold text-primary-gray lg:leading-tight leading-none md:ml-8 my-auto text-secondary-gray ">
                  I love writing poetry, so I wrote you one,
                </p>
              </FadeOnScroll>
            </div>
          </div>
          <div className="bg-secondary-gray relative rounded-lg  shadow-lg md:w-1/2 w-full h-fit py-2">
            <RepeatFunction />
            <p className="text-xs absolute bottom-4 left-6 font-light text-secondary-blue mt-auto flex">
              #Braulin Pires
            </p>
          </div>
         

          {/* <div className="order-last md:order-first md:w-auto w-1/2">
           
            <RepeatFunction />
          </div>
          <div className="w-1/2 flex-shrink-0">
            <FadeOnScroll data="fade" duration="1500" delay="500">
              <p className="lg:text-8xl md:text-7xl text-6xl font-bold text-primary-gray lg:leading-tight leading-none md:ml-8">
                I love writing poetry, so I wrote you one
              </p>
            </FadeOnScroll>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Progress;
