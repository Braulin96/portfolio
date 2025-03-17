import ScreenContainer from "layout/ScreenContainer/ScreenContainer";
import DescriptionBlock from "components/DescriptionBlock/DescriptionBlock";

const AboutMe = () => {
  return (
    <ScreenContainer id="aboutMe">
      <DescriptionBlock
        isTitleFirst
        firstTitleWord="About"
        secondTitleWord="Me"
        firstText="A front-End Developer who loves creating websites that are not
            only visually appealing but also"
        secondText="user-friendly"
      />
    </ScreenContainer>
  );
};
export default AboutMe;
