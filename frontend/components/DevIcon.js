import React, { Component } from "react";
import styled from 'styled-components';
import ImageSizer from "./ImageSizer";

const SkillTag = styled.div`
    background-color: grey;
    opacity: 0.5;
    border-radius: 5px;
    padding-left: 10px;
    padding-right:10px;
    color: black;
`;

class DevIcon extends Component {
  componentDidMount() {
    const SkillNameStyle = this.refs.SkillName.style;
    SkillNameStyle.display = "none";
    SkillNameStyle.position = "fixed";
  }
  render() {
    return (
      <span
        onMouseEnter={() => {
          this.refs.SkillName.style.display = "inline";
        }}
        onMouseLeave={() => {
          this.refs.SkillName.style.display = "none";
        }}
        onMouseMove={e => {
          this.refs.SkillName.style.left = e.clientX.toString() + "px";
          this.refs.SkillName.style.top = e.clientY.toString() + "px";
        }}
      >
        <ImageSizer
          width="30px"
          height="30px"
          src={this.props.src}
          ref="DevIcon"
        >
        {this.props.children}
        </ImageSizer>
        <p ref="SkillName">
          <SkillTag>{this.props.children}</SkillTag>
        </p>
      </span>
    );
  }
}

export default DevIcon;
