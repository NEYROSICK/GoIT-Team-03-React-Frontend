import React from 'react';
import './IconComponent.styled.jsx';

const IconComponent = ({ iconId }) => {
  switch (iconId) {
    case 'iconArrowLeft':
      return (
        <svg id="icon-arrow-left" viewBox="0 0 32 32">
          <path d="M5.333 16h21.333M5.333 16l8-8M5.333 16l8 8"></path>
        </svg>
      );
    case 'another-icon':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

export default IconComponent;
