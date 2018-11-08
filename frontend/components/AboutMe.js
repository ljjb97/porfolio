import React, { Component } from "react";
import styled from "styled-components";

const Description = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 4px #000000;
  border-radius: 50px;
  background-color: #f9f9f9;
  display: grid;
  text-align: left;
  grid-template-areas: "Words Picture";
  @media (max-width: 700px) {
    margin: 10px;
    grid-template-areas:
      "Picture"
      "Words";
  }
`;

const Words = styled.div`
  grid-area: Words;
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

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Description>
          <Words>
            <h2>Fullstack Devloper with a passion for learning and building</h2>
            <p>
              I love to build things, and when I say things I mean anything and
              everything! Whether its been pouring countless hours into playing
              with Lego and Minecraft as a kid, or building my own circuit
              boards from scratch in highschool building has always been my
              passion. After highschool I began to play around with programming,
              and I soon learn't about Web Devlopment. Since then I begun I've
              honeing my skills and now I hope to build a career doing what I
              love!
            </p>
          </Words>
          <MyPicture src="../static/LiamBallantyne.jpg" alt="avatar" />
        </Description>
      </div>
    );
  }
}

export default AboutMe;
