import React, { Component } from 'react'
import Slider from '../src/slider'

export default class CenterModeWithFiniteCustomLeft extends Component {
  handleCustomTagetSlideLeft(slide) {
    return (slide.targetLeft + 100);
  }

  handleCustomCurrentSlideLeft(slide) {
    return (slide.currentLeft + 100);
  }

  onInitTargetLeft(slide) {
    return 0;
  }

  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: false,
      centerPadding: 0,
      variableWidth: true,
      onTransformInitTargetLeft: this.onInitTargetLeft,
      onTransformTargetLeft: this.handleCustomTagetSlideLeft,
      onTransformCurrentLeft: this.handleCustomCurrentSlideLeft,
      speed: 500
    };
    return (
      <div>
        <h2>Center Mode (finite) - Custom Slide Left - Move left 100 each step</h2>
        <div style={{width: 520}}>

          <Slider {...settings}>
            <div style={{width: 240}}><h3>1</h3></div>
            <div style={{width: 240}}><h3>2</h3></div>
            <div style={{width: 240}}><h3>3</h3></div>
            <div style={{width: 240}}><h3>4</h3></div>
            <div style={{width: 240}}><h3>5</h3></div>
            <div style={{width: 240}}><h3>6</h3></div>
            <div style={{width: 240}}><h3>7</h3></div>
            <div style={{width: 240}}><h3>8</h3></div>
            <div style={{width: 240}}><h3>9</h3></div>
          </Slider>
        </div>
      </div>
    );
  }
}
