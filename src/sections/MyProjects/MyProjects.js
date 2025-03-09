import ScreenContainer from "layout/ScreenContainer/ScreenContainer";
import DescriptionBlock from "component/DescriptionBlock/DescriptionBlock";

const MyProjects = () => {
  return (
    <div className="myprojects">
      <ScreenContainer id="aboutMe">
        <DescriptionBlock
          isTitleFirst = {false}
          firstTitleWord="My"
          secondTitleWord="Projects"
          firstText=" Turning ideas into visually striking websites with a focus on exceptional"
          secondText="user experiences"
        />
      </ScreenContainer>
    </div>
  );
};

export default MyProjects;
