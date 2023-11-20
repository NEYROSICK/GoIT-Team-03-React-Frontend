// IconComponent.js

import React, { useEffect, useState } from 'react';
import './IconComponent.css'; // Import your CSS file for icon styling

const IconComponent = ({ iconId, width, height, color, iconClass }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    // Dynamically import the SVG sprite file
    import('./sprite.svg')
      .then((module) => {
        // Extract the specific icon using its ID
        const iconElement = module.default.getElementById(iconId);

        // Store the original color before any changes
        const originalColor = iconElement.getAttribute('fill');

        // Set the color of the icon
        if (color) {
          iconElement.setAttribute('fill', color);
        } else {
          // Set default to the original color if not specified
          iconElement.setAttribute('fill', originalColor || 'transparent');
        }

        // Set the width and height of the icon
        if (width && height) {
          iconElement.setAttribute('width', width);
          iconElement.setAttribute('height', height);
        } else {
          // Set default size as 32 if not specified
          iconElement.setAttribute('width', 32);
          iconElement.setAttribute('height', 32);
        }

        // Add default class .icon to the icon
        iconElement.classList.add('icon');

        // Add custom class based on the icon ID
        if (iconId) {
          iconElement.classList.add(iconId);
        }

        // Add additional custom class if provided
        if (iconClass) {
          iconElement.classList.add(iconClass);
        }

        setIcon(iconElement);
      })
      .catch((error) => {
        console.error('Error loading SVG sprite:', error);
      });
  }, [iconId, color, iconClass, width, height]);

  return (
    <div className={`custom-icon-wrapper ${iconClass}`} style={{ width, height }}>
      {icon && <svg className={`custom-icon ${iconClass}`} width={width} height={height}>{icon.cloneNode(true)}</svg>}

    </div>
  );
};

export default IconComponent;