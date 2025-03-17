import './StaticIntro.css';

const StaticIntro = () => {
  return (
    <div className="staticintro">
      <div>
        <span className="text-6xl sm:text-8xl text-white font-extralight" style={{ fontFamily: 'Allura, cursive' }}>
          Braulin Pires
        </span>
        <br />
        <span className="text-2xl sm:text-4xl text-white font-extralight">
          Front-End Developer - Web Designer
        </span>
      </div>
    </div>
  );
};

export default StaticIntro;