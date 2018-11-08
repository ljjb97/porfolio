import React, { Component } from "react";
import styled from "styled-components";

const Description = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 50px;
  background-color: #f9f9f9;
  display: grid;
  text-align: left;
  grid-template-areas:
    "Words Picture"
    "Text Text"
    "Skills Skills";
  grid-template-columns: 3fr 1fr;
  @media (max-width: 700px) {
    margin: 10px;
    grid-template-areas:
      "Picture"
      "Words";
  }
`;

const Skills = styled.div`
  grid-area: Skills;
  padding-left: 20px;
`;

const Words = styled.h2`
  border-left: 5px solid #000000;
  grid-area: Words;
  margin-left: 40px;
  padding-left: 10px;
`;

const Text = styled.div`
  grid-area: Text;
  padding-left: 20px;
`;

const MyPicture = styled.img`
  margin-top: 20px;
  margin-right: 20px;
  grid-area: Picture;
  border-radius: 50%;
  border: 2px solid black;
  @media (max-width: 700px) {
    padding-left: 20px;
  }
`;

const ImageSizer = styled.img`
  width: 60px;
  height: 60px;
`;

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Description>
          <Words>
            Fullstack Devloper with a passion for learning and building
          </Words>
          <Text>
            I love to build things, and when I say things I mean anything and
            everything! Whether its been pouring countless hours into playing
            with Lego and Minecraft as a kid, or building my own circuit boards
            from scratch in highschool building has always been my passion.
            After highschool I began to play around with programming, and I soon
            learn't about Web Devlopment. Since then I begun I've honeing my
            skills and now I hope to build a career doing what I love!
          </Text>
          <MyPicture src="../static/LiamBallantyne.jpg" alt="avatar" />
          <Skills>
            <h2>What I know</h2>
            <ImageSizer src="../static/SkillsSvgs/HTML5.svg" />
            <ImageSizer src="../static/SkillsSvgs/CSS3.svg" />
            <ImageSizer src="../static/SkillsSvgs/JavaScript.svg"/>
            <ImageSizer src="../static/SkillsSvgs/React.svg" />
            <ImageSizer src="../static/SkillsSvgs/Git.svg" />
            <ImageSizer src="../static/SkillsSvgs/Node.svg" />
            <ImageSizer src="../static/SkillsSvgs/Mongodb.svg" />
            <ImageSizer src="../static/SkillsSvgs/GraphQL.svg" />
            <ImageSizer src="../static/SkillsSvgs/Apollo.svg" />
            <ImageSizer src="../static/SkillsSvgs/Java.svg" />
            <ImageSizer src="../static/SkillsSvgs/Python.svg" />
            <ImageSizer src="../static/SkillsSvgs/C.svg" />
            <h2>What I'm learning</h2>
          </Skills>
        </Description>
      </div>
    );
  }
}

export default AboutMe;
