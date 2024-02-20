//Note: component:
import FadeOnScroll from "./shared/FadeOnScroll";

const MyProjects = () => {
  return (
    <div id="myProjects" style={{ height: "100vh", maxHeight: "1000px" }}>
      <div className="max-w-7xl h-full flex items-center justify-center mx-auto ">
        <div className="lg:flex items-center justify-center mx-auto px-4">
          <div className="order-last">
            <FadeOnScroll data="fade" duration="1000" delay="0">
              <p className="sm:text-8xl text-6xl font-semibold text-secondary-gray lg:leading-tight leading-none">
                My
                <br />
                Projects
              </p>
            </FadeOnScroll>
          </div>
          <FadeOnScroll data="fade" duration="1000" delay="500">
          <p className="sm:text-4xl text-2xl text-gray-200 font-extralight z-20 lg:mt-12 mt-6 lg:mr-4">
            Focused in turn ideas into visually striking websites with a focus
            on exceptional
            <span className="font-normal ml-2 text-primary-green">
              user experiences
            </span>
            .
          </p>
          </FadeOnScroll>
        </div>
      </div>
    </div>
  );
};
export default MyProjects;
