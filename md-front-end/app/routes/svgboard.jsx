import React from 'react';

const handleClick = (event, sliceId) => {
  // Handle click event for each slice
  console.log(`Clicked on slice ${sliceId}`);
};

const SVGBoard = () => (
  <svg id="svgBoard" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
    {/* First half of the original light orange slice */}
    <a href="#" onClick={(event) => handleClick(event, 'slice1a')}>
      <path d="M100,100 L100,0 A100,100 0 0,1 170.7,29.3 L100,100 Z" fill="#ACD5AB" id="slice1a" stroke="white" strokeWidth="1"/>
      <text x="120" y="50" textAnchor="middle" fill="white">0</text>
    </a>
    {/* Second half of the original light orange slice */}
    <a href="#" onClick={(event) => handleClick(event, 'slice1b')}>
      <path d="M100,100 L170.7,29.3 A100,100 0 0,1 200,100 L100,100 Z" fill="#ACD5AB" id="slice1b" stroke="white" strokeWidth="1"/>
      <text x="170" y="70" textAnchor="middle" fill="white">Slice 1B</text>
    </a>

    {/* First half of the original light green slice */}
    <a href="#" onClick={(event) => handleClick(event, 'slice2a')}>
      <path d="M100,100 L200,100 A100,100 0 0,1 170.7,170.7 L100,100 Z" fill="#99B7DD" id="slice2a" stroke="white" strokeWidth="1"/>
    </a>
    {/* Second half of the original light green slice */}
    <a href="#" onClick={(event) => handleClick(event, 'slice2b')}>
      <path d="M100,100 L170.7,170.7 A100,100 0 0,1 100,200 L100,100 Z" fill="#99B7DD" id="slice2b" stroke="white" strokeWidth="1"/>
    </a>

    {/* First half of the original light blue slice */}
    <a href="#" onClick={(event) => handleClick(event, 'slice3a')}>
      <path d="M100,100 L100,200 A100,100 0 0,1 29.3,170.7 L100,100 Z" fill="#FACBA9" id="slice3a" stroke="white" strokeWidth="1"/>
    </a>
    {/* Second half of the original light blue slice */}
    <a href="#" onClick={(event) => handleClick(event, 'slice3b')}>
      <path d="M100,100 L29.3,170.7 A100,100 0 0,1 0,100 L100,100 Z" fill="#FACBA9" id="slice3b" stroke="white" strokeWidth="1"/>
    </a>

    {/* First third of the new light yellow slice */}
    <a href="#" onClick={(event) => handleClick(event, 'slice4a')}>
      <path d="M100,100 L0,100 A100,100 0 0,1 25.9,25.9 L100,100 Z" fill="#FBE787" id="slice4a" stroke="white" strokeWidth="1"/>
    </a>
    {/* Second third of the new light yellow slice */}
    <a href="#" onClick={(event) => handleClick(event, 'slice4b')}>
      <path d="M100,100 L25.9,25.9 A100,100 0 0,1 70.7,0 L100,100 Z" fill="#FBE787" id="slice4b" stroke="white" strokeWidth="1"/>
    </a>
    {/* Third third of the new light yellow slice */}
    <a href="#" onClick={(event) => handleClick(event, 'slice4c')}>
      <path d="M100,100 L70.7,0 A100,100 0 0,1 100,0 L100,100 Z" fill="#FBE787" id="slice4c" stroke="white" strokeWidth="1"/>
    </a>

    {/* Middle circle */}
    <circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="1"/>

    {/* First half of the original light orange slice (inner) */}
    <a href="#" onClick={(event) => handleClick(event, 'slice1a_inner')}>
      <path d="M100,100 L100,50 A50,50 0 0,1 135.4,64.6 L100,100 Z" fill="#ACD5AB" id="slice1a_inner" stroke="white" strokeWidth="1"/>
    </a>
    {/* Second half of the original light orange slice (inner) */}
    <a href="#" onClick={(event) => handleClick(event, 'slice1b_inner')}>
      <path d="M100,100 L135.4,64.6 A50,50 0 0,1 150,100 L100,100 Z" fill="#ACD5AB" id="slice1b_inner" stroke="white" strokeWidth="1"/>
    </a>

    {/* First half of the original light green slice (inner) */}
    <a href="#" onClick={(event) => handleClick(event, 'slice2a_inner')}>
      <path d="M100,100 L150,100 A50,50 0 0,1 135.4,135.4 L100,100 Z" fill="#99B7DD" id="slice2a_inner" stroke="white" strokeWidth="1"/>
    </a>
    {/* Second half of the original light green slice (inner) */}
    <a href="#" onClick={(event) => handleClick(event, 'slice2b_inner')}>
      <path d="M100,100 L135.4,135.4 A50,50 0 0,1 100,150 L100,100 Z" fill="#99B7DD" id="slice2b_inner" stroke="white" strokeWidth="1"/>
    </a>

    {/* First half of the original light blue slice (inner) */}
    <a href="#" onClick={(event) => handleClick(event, 'slice3a_inner')}>
      <path d="M100,100 L100,150 A50,50 0 0,1 64.6,135.4 L100,100 Z" fill="#FACBA9" id="slice3a_inner" stroke="white" strokeWidth="1"/>
    </a>
    {/* Second half of the original light blue slice (inner) */}
    <a href="#" onClick={(event) => handleClick(event, 'slice3b_inner')}>
      <path d="M100,100 L64.6,135.4 A50,50 0 0,1 50,100 L100,100 Z" fill="#FACBA9" id="slice3b_inner" stroke="white" strokeWidth="1"/>
    </a>

    {/* First third of the new light yellow slice (inner) */}
    <a href="#" onClick={(event) => handleClick(event, 'slice4a_inner')}>
      <path d="M100,100 L50,100 A50,50 0 0,1 64.6,64.6 L100,100 Z" fill="#FBE787" id="slice4a_inner" stroke="white" strokeWidth="1"/>
    </a>
    {/* Second third of the new light yellow slice (inner) */}
    <a href="#" onClick={(event) => handleClick(event, 'slice4b_inner')}>
      <path d="M100,100 L64.6,64.6 A50,50 0 0,1 85.4,50 L100,100 Z" fill="#FBE787" id="slice4b_inner" stroke="white" strokeWidth="1"/>
    </a>
    {/* Third third of the new light yellow slice (inner) */}
    <a href="#" onClick={(event) => handleClick(event, 'slice4c_inner')}>
      <path d="M100,100 L85.4,50 A50,50 0 0,1 100,50 L100,100 Z" fill="#FBE787" id="slice4c_inner" stroke="white" strokeWidth="1"/>
    </a>
  </svg>
);

export default SVGBoard;