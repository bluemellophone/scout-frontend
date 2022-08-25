import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function HotdogImagesIcon(props) {
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
          x="20.5"
          y="3.5"
          width="17"
          height="7.5"
          rx="1.5"
          transform="rotate(90 20.5 3.5)"
          stroke="currentColor"
          strokeWeight="2"
        />
        <rect
          x="11"
          y="3.5"
          width="17"
          height="7.5"
          rx="1.5"
          transform="rotate(90 11 3.5)"
          stroke="currentColor"
          strokeWeight="2"
        />
      </svg>
    </SvgIcon>
  );
}
