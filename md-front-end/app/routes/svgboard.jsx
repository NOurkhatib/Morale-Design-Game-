import React, { useState } from 'react';

const SVGBoard = ({ onClickSlice }) => {
  const [popup, setPopup] = useState({ visible: false, x: 0, y: 0 });

  const handleMouseEnter = (event) => {
    const { clientX, clientY } = event;
    setPopup({ visible: true, x: clientX, y: clientY });
  };

  const handleMouseMove = (event) => {
    if (popup.visible) {
      const { clientX, clientY } = event;
      setPopup({ visible: true, x: clientX, y: clientY });
    }
  };

  const handleMouseLeave = () => {
    setPopup({ visible: false, x: 0, y: 0 });
  };

  return (
    <div>
      <svg id="svgBoard" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        {/* Define the slices with click events */}
        
        <a href="#" onClick={(event) => onClickSlice(event, 'Equality and Justice Disagree')}>
          <path
            d="M100,100 L100,0 A100,100 0 0,1 170.7,29.3 L100,100 Z"
            fill="#ACD5AB"
            id="slice1a"
            stroke="white"
            strokeWidth="1"
          />
          <text x="138" y="-5" fontSize="5" fill="white" transform="rotate(-90, 135, 25)" fontFamily='cursive'>Disagree</text>
          <text x="130" y="2" fontSize="6" fill="#7A4A7B" transform="rotate(33, 135, 25)" fontFamily='cursive'>Equality and</text>
          <text x="132" y="7" fontSize="6" fill="#7A4A7B" transform="rotate(33, 135, 25)" fontFamily='cursive'> Justice</text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Do Well Disagree')}>
          <path
            d="M100,100 L170.7,29.3 A100,100 0 0,1 200,100 L100,100 Z"
            fill="#ACD5AB"
            id="slice1b"
            stroke="white"
            strokeWidth="1"
          />
          <text x="180" y="52" fontSize="5" fill="white" transform="rotate(-45, 165, 75)" fontFamily='cursive'>Disagree</text>
          <text x="158" y="42" fontSize="6" fill="#7A4A7B" transform="rotate(65, 165, 75)" fontFamily='cursive'>Do Well</text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Obedience and Tradition Disagree')}>
          <path
            d="M100,100 L200,100 A100,100 0 0,1 170.7,170.7 L100,100 Z"
            fill="#99B7DD"
            id="slice2a"
            stroke="white"
            strokeWidth="1"
          />
          <text x="160" y="152" fontSize="5" fill="white" transform="rotate(45, 160, 145)" fontFamily='cursive'>Disagree</text>
          <text x="155" y="175" fontSize="6" fill="#7A4A7B" transform="rotate(-60, 160, 145)" fontFamily='cursive'>Obedience and </text>
          <text x="160" y="180" fontSize="6" fill="#7A4A7B" transform="rotate(-60, 160, 145)" fontFamily='cursive'> Traditiom</text>
    
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Safety Disagree')}>
          <path
            d="M100,100 L170.7,170.7 A100,100 0 0,1 100,200 L100,100 Z"
            fill="#99B7DD"
            id="slice2b"
            stroke="white"
            strokeWidth="1"
          />
          <text x="130" y="202" fontSize="5" fill="white" transform="rotate(90, 130, 175)" fontFamily='cursive'>Disagree</text>
          <text x="130" y="200" fontSize="6" fill="#7A4A7B" transform="rotate(-30, 130, 175)" fontFamily='cursive'>Safety</text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Power Disagree')}>
          <path
            d="M100,100 L100,200 A100,100 0 0,1 29.3,170.7 L100,100 Z"
            fill="#FACBA9"
            id="slice3a"
            stroke="white"
            strokeWidth="1"
          />
          <text x="60" y="188" fontSize="5" fill="white" transform="rotate(135, 60, 170)" fontFamily='cursive'>Disagree</text>
          <text x="55" y="195" fontSize="6" fill="#7A4A7B" transform="rotate(35, 60, 170)" fontFamily='cursive'>Power</text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Achievement Disagree')}>
          <path
            d="M100,100 L29.3,170.7 A100,100 0 0,1 0,100 L100,100 Z"
            fill="#FACBA9"
            id="slice3b"
            stroke="white"
            strokeWidth="1"
          />
          <text x="25" y="147" fontSize="5" fill="white" transform="rotate(180, 25, 125)" fontFamily='cursive'>Disagree</text>
          <text x="20" y="153" fontSize="6" fill="#7A4A7B" transform="rotate(60, 25, 125)" fontFamily='cursive'>Achievement</text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Excitement Disagree')}>
          <path
            d="M100,100 L0,100 A100,100 0 0,1 25.9,25.9 L100,100 Z"
            fill="#FBE787"
            id="slice4a"
            stroke="white"
            strokeWidth="1"
          />
          <text x="60" y="70" fontSize="5" fill="white" transform="rotate(220, 45, 60)" fontFamily='cursive'>Disgaree</text>
          <text x="30" y="20" fontSize="6" fill="#7A4A7B" transform="rotate(-60, 45, 60)" fontFamily='cursive'>Excitement</text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Independence Disagree')}>
          <path
            d="M100,100 L25.9,25.9 A100,100 0 0,1 100,0 L100,100 Z"
            fill="#FBE787"
            id="slice4b"
            stroke="white"
            strokeWidth="1"
          />
          <text x="93" y="63" fontSize="5" fill="white" transform="rotate(-90, 75, 40)" fontFamily='cursive'>Disagree</text>
          <text x="40" y="-3" fontSize="6" fill="#7A4A7B" transform="rotate(-30, 75, 40)" fontFamily='cursive'>Independence</text>
        </a>

        <circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="1" />
        <a href="#" onClick={(event) => onClickSlice(event, 'Equality and Justice Agree')}>
          <path
            d="M100,100 L100,50 A50,50 0 0,1 135.4,64.6 L100,100 Z"
            fill="#ACD5AB"
            id="slice1a_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="110" y="54" fontSize="3" fill="white" transform="rotate(-90, 110, 60)" fontFamily='cursive'>Agree</text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Do Well Agree')}>
          <path
            d="M100,100 L135.4,64.6 A50,50 0 0,1 150,100 L100,100 Z"
            fill="#ACD5AB"
            id="slice1b_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="143" y="77" fontSize="3" fill="white" transform="rotate(-45, 135, 90)" fontFamily='cursive'>Agree</text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Obedience and Tradition Agree')}>
          <path
            d="M100,100 L150,100 A50,50 0 0,1 135.4,135.4 L100,100 Z"
            fill="#99B7DD"
            id="slice2a_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="130" y="125" fontSize="3" fill="white" transform="rotate(45, 130, 125)" fontFamily='cursive'>Agree</text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Safety Agree')}>
          <path
            d="M100,100 L135.4,135.4 A50,50 0 0,1 100,150 L100,100 Z"
            fill="#99B7DD"
            id="slice2b_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="110" y="147" fontSize="3" fill="white" transform="rotate(90, 110, 140)" fontFamily='cursive'>Agree</text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Power Agree')}>
          <path
            d="M100,100 L100,150 A50,50 0 0,1 64.6,135.4 L100,100 Z"
            fill="#FACBA9"
            id="slice3a_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="73" y="140" fontSize="3" fill="white" transform="rotate(135, 75, 135)" fontFamily='cursive'>Agree</text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Achievement Agree')}>
          <path
            d="M100,100 L64.6,135.4 A50,50 0 0,1 50,100 L100,100 Z"
            fill="#FACBA9"
            id="slice3b_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="60" y="117" fontSize="3" fill="white" transform="rotate(180, 60, 110)" fontFamily='cursive'>Agree</text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Excitement Agree')}>
          <path
            d="M100,100 L50,100 A50,50 0 0,1 64.6,64.6 L100,100 Z"
            fill="#FBE787"
            id="slice4a_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="69" y="68" fontSize="3" fill="white" transform="rotate(220, 70, 70)" fontFamily='cursive'>Agree</text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Independence Agree')}>
          <path
            d="M100,100 L64.6,64.6 A50,50 0 0,1 100,50 L100,100 Z"
            fill="#FBE787"
            id="slice4b_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="90" y="68" fontSize="3" fill="white" transform="rotate(-90, 90, 60)" fontFamily='cursive'>Agree</text>
        </a>

        {/* Inner circle */}
        <circle cx="100" cy="100" r="20" fill="white" style={{ stroke: 'white', strokeWidth: 2 }} />
        <circle cx="100" cy="100" r="12" fill="#7A4A7B" style={{ stroke: 'white', strokeWidth: 2 }} />
        <text x="91" y="99" fontSize={3} fill="white">Personal value </text>
        <text x="93" y="104" fontSize={3} fill="white">dictionary </text>
      </svg>
      {/* Render the popup */}
      {popup.visible && (
        <div
          style={{
            position: 'absolute',
            left: popup.x,
            top: popup.y,
            background: '#7D7DB5',
            padding: '5px',
            height: '150px',
            width: '300px',
            color: 'white'
          }}
        >
          Arguments will be here
        </div>
      )}
    </div>
  );
};

export default SVGBoard;

/*
        <text
            x="125"
            y="40"
            textAnchor="middle"
            fill="white"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            0
          </text>
          */