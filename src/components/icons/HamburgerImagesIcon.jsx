import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function HamburgerImagesIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="7.5"
          rx="1.5"
          stroke="currentColor"
          strokeWeight="2"
        />
        <rect
          x="3.5"
          y="13"
          width="17"
          height="7.5"
          rx="1.5"
          stroke="currentColor"
          strokeWeight="2"
        />
      </svg>
    </SvgIcon>
  );
}
