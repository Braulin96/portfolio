import ScreenContainer from "layout/ScreenContainer/ScreenContainer";
import DescriptionBlock from "component/DescriptionBlock/DescriptionBlock";

import BackgroundExample from "assets/images/bg16.jpg";

const MyProjects = () => {
  return (
    <ScreenContainer backgroundImageOverlay={BackgroundExample} id="aboutMe">
      <DescriptionBlock
        isTitleFirst={false}
        firstTitleWord="My"
        secondTitleWord="Projects"
        firstText=" Turning ideas into visually striking websites with a focus on exceptional"
        secondText="user experiences"
      />
    </ScreenContainer>
  );
};

export default MyProjects;
