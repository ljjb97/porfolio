import React, { Component } from "react";
import styled from "styled-components";
import ImageSizer from "./ImageSizer";

const Projects = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 50px;
  background-color: #f9f9f9;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr;
  @media (min-width: 700px) and (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    margin: 10px;
  }
`;

const Project = styled.div`
  border: 5px solid #000000;
`;

const ProjectInfo = styled.div`
  display: initial;
  width: 100px;
  height: 100px;
  background-color: #000000;
  z-index: 10;
`;

class MyProjects extends Component {
  componentDidMount() {/*
    const canvas = document.getElementById("projImg1");
    const Proj1 = document.getElementById("proj1");
    const ProjWidth = window
      .getComputedStyle(Proj1)
      .getPropertyValue("width")
      .split("");
    ProjWidth.splice(ProjWidth.length - 2, 2);
    const ProjWidthNum = parseInt(ProjWidth.join(""));
    canvas.width = ProjWidthNum;
    canvas.height = ProjWidthNum;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.addEventListener("load", function() {
      ctx.drawImage(this, 0, 0, ProjWidthNum, ProjWidthNum);
    });
    img.src = "../static/RelaxProjPic.PNG";
    Proj1.style.height = ProjWidthNum.toString() + "px";
    const Elem = document.getElementById("projImg1");
    const CompStyles = window.getComputedStyle(Elem);
    this.refs.info.style.width = CompStyles.width;
    this.refs.info.style.height = CompStyles.height;
    this.refs.info.style.backgroundColor = "#000000"; */
  }
  render() {
    return (
      <div id="MyProjects">
        <Projects>
          <Project id="proj1">
            <div ref="info">
              <ImageSizer src="../static/RelaxProjPic.PNG" width="300px" height="300px">
              </ImageSizer>
              <ProjectInfo />
            </div>
          </Project>
          <Project>
            Project 2<br /> Coming Soon
          </Project>
          <Project>
            Project 3 <br /> Coming Soon
          </Project>
        </Projects>
      </div>
    );
  }
}

export default MyProjects;
