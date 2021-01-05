import React from 'react';
import styled from '@emotion/styled';

import NightImage from './images/night.png';
import DayImage from './images/day.png';

const theme = {
  iconSize: '30', // px; icon with day or night
  sliderWidth: '50', // px
  sliderHeight: '20', // px
  transitionTime: '0.4s',
  night: {
    iconBgColor: '#465C75',
    iconShadow: '0 0px 15px #202020',
    sliderBgColor: 'linear-gradient(to right, #011f3d, #082f5c);',
  },
  day: {
    // iconBgColor: '#ffe5b9',
    iconBgColor: '#fff',
    iconShadow: '0 0px 15px #202020',
    // sliderBgColor: 'linear-gradient(to right, #ffe5b9, #fff0a4)',
    sliderBgColor: 'linear-gradient(to right, #ffc85c, #ffc85c)',
  }
}

const StyledSwitch = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 20px 0 25px;

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: ${theme.sliderWidth}px;
    height: ${theme.sliderHeight}px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.night.sliderBgColor};
    -webkit-transition: ${theme.transitionTime};
    transition: ${theme.transitionTime};
  }

  .slider:before {
    position: absolute;
    content: '';
    height: ${theme.iconSize}px;
    width: ${theme.iconSize}px;
    left: 0px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: ${theme.transitionTime};
    transition: ${theme.transitionTime};
    box-shadow: ${theme.night.iconShadow};
    background: ${theme.night.iconBgColor} url(${NightImage});
    background-repeat: no-repeat;
    background-position: center;
  }

  input:checked + .slider {
    box-shadow: ${theme.night.iconShadow};
    background: ${theme.day.sliderBgColor};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(${theme.sliderWidth-theme.iconSize}px);
    -ms-transform: translateX(${theme.sliderWidth-theme.iconSize}px);
    transform: translateX(${theme.sliderWidth-theme.iconSize}px);
    background: ${theme.day.iconBgColor} url(${DayImage});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: ${theme.sliderHeight/2}px;
  }

  .slider.round:before {
    border-radius: ${theme.iconSize/2}px;
  }
`;

export const DarkModeSwitch = ({ isDarkThemeActive, toggleActiveTheme }) => (
  <StyledSwitch>
    <label id="switch" className="switch">
      <input
        type="checkbox"
        id="slider"
        onChange={toggleActiveTheme}
        checked={isDarkThemeActive ? false : true}
      />
      <span className="slider round"></span>
    </label>
  </StyledSwitch>
);
