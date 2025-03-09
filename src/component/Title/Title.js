import PropTypes from 'prop-types';

import './Title.css';

const Title = ({ firstWord, secondWord, customClasses = '' }) => {
  return (
    <div className="title">
      <p className={`sm:text-8xl text-6xl font-semibold text-secondary-gray lg:leading-tight leading-none lg:mr-12 " ${customClasses}`}>
        {firstWord}
        {secondWord && (
          <>
            <br />
            {secondWord}
          </>
        )}
      </p>
    </div>
  );
};

Title.propTypes = {
  firstWord: PropTypes.string.isRequired,
  secondWord: PropTypes.string,
  customClasses: PropTypes.string
};

export default Title;