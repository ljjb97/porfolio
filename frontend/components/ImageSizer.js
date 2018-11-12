import React, { Component } from "react";
import styled from 'styled-components';

const ImageStyle = styled.div`
  display: inline;
`;

class ImageSizer extends Component {
  componentDidMount() {
    const Image = this.refs.Image;
    Image.style.width = this.props.width;
    Image.style.height = this.props.height;
    Image.src = this.props.src;
    
  }

  render() {
    return (
      <ImageStyle>
        <img ref="Image" />
      </ImageStyle>
    );
  }
}

export default ImageSizer;
