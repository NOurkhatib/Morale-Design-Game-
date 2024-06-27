import React, { useState, useEffect } from 'react';

const SVGBoard = ({ onClickSlice }) => {
  const [popup, setPopup] = useState({ visible: false, x: 0, y: 0 });
  const [counts, setCounts] = useState({
    equalityAndJusticeDisagree: 0,
    doWellDisagree: 0,
    obedienceAndTraditionDisagree: 0,
    safetyDisagree: 0,
    powerDisagree: 0,
    achievementDisagree: 0,
    excitementDisagree: 0,
    independenceDisagree: 0,
    equalityAndJusticeAgree: 0,
    doWellAgree: 0,
    obedienceAndTraditionAgree: 0,
    safetyAgree: 0,
    powerAgree: 0,
    achievementAgree: 0,
    excitementAgree: 0,
    independenceAgree: 0,
  });

  const countArguments = () => {
    const storedArguments = JSON.parse(localStorage.getItem('argumentsList')) || [];
    const newCounts = {
      equalityAndJusticeDisagree: 0,
      doWellDisagree: 0,
      obedienceAndTraditionDisagree: 0,
      safetyDisagree: 0,
      powerDisagree: 0,
      achievementDisagree: 0,
      excitementDisagree: 0,
      independenceDisagree: 0,
      equalityAndJusticeAgree: 0,
      doWellAgree: 0,
      obedienceAndTraditionAgree: 0,
      safetyAgree: 0,
      powerAgree: 0,
      achievementAgree: 0,
      excitementAgree: 0,
      independenceAgree: 0,
    };

    storedArguments.forEach(arg => {
      switch (arg.value) {
        case 'Equality and Justice Disagree':
          newCounts.equalityAndJusticeDisagree += 1;
          break;
        case 'Do Well Disagree':
          newCounts.doWellDisagree += 1;
          break;
        case 'Obedience and Tradition Disagree':
          newCounts.obedienceAndTraditionDisagree += 1;
          break;
        case 'Safety Disagree':
          newCounts.safetyDisagree += 1;
          break;
        case 'Power Disagree':
          newCounts.powerDisagree += 1;
          break;
        case 'Achievement Disagree':
          newCounts.achievementDisagree += 1;
          break;
        case 'Excitement Disagree':
          newCounts.excitementDisagree += 1;
          break;
        case 'Independence Disagree':
          newCounts.independenceDisagree += 1;
          break;
        case 'Equality and Justice Agree':
          newCounts.equalityAndJusticeAgree += 1;
          break;
        case 'Do Well Agree':
          newCounts.doWellAgree += 1;
          break;
        case 'Obedience and Tradition Agree':
          newCounts.obedienceAndTraditionAgree += 1;
          break;
        case 'Safety Agree':
          newCounts.safetyAgree += 1;
          break;
        case 'Power Agree':
          newCounts.powerAgree += 1;
          break;
        case 'Achievement Agree':
          newCounts.achievementAgree += 1;
          break;
        case 'Excitement Agree':
          newCounts.excitementAgree += 1;
          break;
        case 'Independence Agree':
          newCounts.independenceAgree += 1;
          break;
        default:
          break;
      }
    });

    setCounts(newCounts);
    console.log(newCounts)
  };

  useEffect(() => {
    countArguments();
  }, []);
  return (
    <div>
       {/* Creating the SVG board here you can think of the Viewbox as the zoom level on the whole board */}
      <svg id="svgBoard" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
       
         {/* saving the state so that it would be sent to addArguments form */}
        <a href="#" onClick={(event) => onClickSlice(event, 'Equality and Justice Disagree')}>
          {/*  path is how we split the svg into multiple parts  and here d defines the path data its where the logic of the drawing is
          M100,100 is a command to move to the point x=100 y=100
          L100,0 means draw a line from where we are (currently 100,100) to 100,0
          A100,100 0 0,1 170.7,29.3 A stands for an arc 100,100 is the radius
          the following 0 stands for the rotation 
          0,1 and here we are defining the degrees and direction 0 stands for 180 degrees or less and 1 means the arc is in clockwise direction
           170.7,29.3 is the destination or the point where we end the arc
           Z is a command to close the shape by drawing a line back to the starting point */}
          <path
            d="M100,100 L100,0 A100,100 0 0,1 170.7,29.3 Z"
            fill={
              counts.equalityAndJusticeDisagree == 1 || counts.equalityAndJusticeDisagree == 2 
                ? "#84C586" 
                : counts.doWellDisagree >= 3 
                ? "#52AF5B" 
                : "#ACD5AB"
            }
            id="slice1a"
            stroke="white"
            strokeWidth="1"
          />
          <text x="138" y="-5" fontSize="5" fill="#7D7A7A" transform="rotate(-90, 135, 25)" fontFamily='cursive'>Disagree</text>
          <text x="130" y="2" fontSize="6" fill="#7A4A7B" transform="rotate(33, 135, 25)" fontFamily='cursive'>Equality and</text>
          <text x="132" y="7" fontSize="6" fill="#7A4A7B" transform="rotate(33, 135, 25)" fontFamily='cursive'> Justice</text>
          <text x="125" y="35" fontSize="8" fill="White" fontFamily='cursive'>
            {counts.equalityAndJusticeDisagree > 0 ? counts.equalityAndJusticeDisagree : ' '}
          </text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Do Well Disagree')}>
          <path
            d="M100,100 L170.7,29.3 A100,100 0 0,1 200,100 L100,100 Z"
            fill={
              counts.doWellDisagree == 1 || counts.doWellDisagree == 2 
                ? "#84C586" 
                : counts.doWellDisagree >= 3 
                ? "#52AF5B" 
                : "#ACD5AB"
            }
            id="slice1b"
            stroke="white"
            strokeWidth="1"
          />
          <text x="180" y="52" fontSize="5" fill="#7D7A7A" transform="rotate(-45, 165, 75)" fontFamily='cursive'>Disagree</text>
          <text x="158" y="42" fontSize="6" fill="#7A4A7B" transform="rotate(65, 165, 75)" fontFamily='cursive'>Do Well</text>
          <text x="170" y="70" fontSize="8" fill="White" fontFamily='cursive'>
            {counts.doWellDisagree > 0 ? counts.doWellDisagree : ' '}
          </text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Obedience and Tradition Disagree')}>
          <path
            d="M100,100 L200,100 A100,100 0 0,1 170.7,170.7 L100,100 Z"
            fill={
              counts.obedienceAndTraditionDisagree == 1 || counts.obedienceAndTraditionDisagree == 2 
                ? "#6C9BCD" 
                : counts.obedienceAndTraditionDisagree >= 3 
                ? "#418DCB" 
                : "#99B7DD"
            }
            id="slice2a"
            stroke="white"
            strokeWidth="1"
          />
          <text x="177" y="105" fontSize="5" fill="#7D7A7A" transform="rotate(0, 160, 145)" fontFamily='cursive'>Disagree</text>
          <text x="155" y="175" fontSize="6" fill="#7A4A7B" transform="rotate(-60, 160, 145)" fontFamily='cursive'>Obedience and </text>
          <text x="160" y="180" fontSize="6" fill="#7A4A7B" transform="rotate(-60, 160, 145)" fontFamily='cursive'> Traditiom</text>
          <text x="165" y="130" fontSize="8" fill="White" fontFamily='cursive'>
            {counts.obedienceAndTraditionDisagree > 0 ? counts.obedienceAndTraditionDisagree : ' '}
          </text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Safety Disagree')}>
          <path
            d="M100,100 L170.7,170.7 A100,100 0 0,1 100,200 L100,100 Z"
            fill={
              counts.safetyDisagree == 1 || counts.safetyDisagree == 2 
                ? "#6C9BCD" 
                : counts.safetyDisagree >= 3 
                ? "#418DCB" 
                : "#99B7DD"
            }
            id="slice2b"
            stroke="white"
            strokeWidth="1"
          />
          <text x="130" y="150" fontSize="5" fill="#7D7A7A" transform="rotate(45, 130, 175)" fontFamily='cursive'>Disagree</text>
          <text x="130" y="200" fontSize="6" fill="#7A4A7B" transform="rotate(-30, 130, 175)" fontFamily='cursive'>Safety</text>
          <text x="125" y="170" fontSize="8" fill="White" fontFamily='cursive'>
          {counts.safetyDisagree > 0 ? counts.safetyDisagree : ' '}
          </text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Power Disagree')}>
          <path
            d="M100,100 L100,200 A100,100 0 0,1 29.3,170.7 L100,100 Z"
            fill={
              counts.powerDisagree == 1 || counts.powerDisagree == 2 
                ? "#F6AF79" 
                : counts.powerDisagree >= 3 
                ? "#F39052" 
                : "#FACBA9"
            }
            id="slice3a"
            stroke="white"
            strokeWidth="1"
          />
          <text x="60" y="188" fontSize="5" fill="#7D7A7A" transform="rotate(135, 60, 170)" fontFamily='cursive'>Disagree</text>
          <text x="55" y="195" fontSize="6" fill="#7A4A7B" transform="rotate(35, 60, 170)" fontFamily='cursive'>Power</text>
          <text x="75" y="170" fontSize="8" fill="White" fontFamily='cursive'>
            {counts.powerDisagree > 0 ? counts.powerDisagree : ' '}
          </text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Achievement Disagree')}>
          <path
            d="M100,100 L29.3,170.7 A100,100 0 0,1 0,100 L100,100 Z"
            fill={
              counts.achievementDisagree == 1 || counts.achievementDisagree == 2 
                ? "#F6AF79" 
                : counts.achievementDisagree >= 3 
                ? "#F39052" 
                : "#FACBA9"
            }

            id="slice3b"
            stroke="white"
            strokeWidth="1"
          />
          <text x="2" y="105" fontSize="5" fill="#7D7A7A" transform="rotate(0, 25, 125)" fontFamily='cursive'>Disagree</text>
          <text x="20" y="153" fontSize="6" fill="#7A4A7B" transform="rotate(60, 25, 125)" fontFamily='cursive'>Achievement</text>
          <text x="20" y="130" fontSize="8" fill="White" fontFamily='cursive'>
            {counts.achievementDisagree > 0 ? counts.achievementDisagree : ' '}
          </text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Excitement Disagree')}>
          <path
            d="M100,100 L0,100 A100,100 0 0,1 25.9,25.9 L100,100 Z"
            fill={
              counts.excitementDisagree == 1 || counts.excitementDisagree == 2 
                ? "#FBDF52" 
                : counts.excitementDisagree >= 3 
                ? "#FBCD0D" 
                : "#FBE787"
            }
            id="slice4a"
            stroke="white"
            strokeWidth="1"
          />
          <text x="12" y="54" fontSize="5" fill="#7D7A7A" transform="rotate(45, 45, 60)" fontFamily='cursive'>Disagree</text>
          <text x="30" y="20" fontSize="6" fill="#7A4A7B" transform="rotate(-60, 45, 60)" fontFamily='cursive'>Excitement</text>
          <text x="30" y="70" fontSize="8" fill="White" fontFamily='cursive'>
            {counts.excitementDisagree > 0 ? counts.excitementDisagree : ' '}
          </text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Independence Disagree')}>
          <path
            d="M100,100 L25.9,25.9 A100,100 0 0,1 100,0 L100,100 Z"
            fill={
              counts.independenceDisagree == 1 || counts.independenceDisagree == 2 
                ? "#FBDF52" 
                : counts.independenceDisagree >= 3 
                ? "#FBCD0D" 
                : "#FBE787"
            }
            id="slice4b"
            stroke="white"
            strokeWidth="1"
          />
          <text x="93" y="63" fontSize="5" fill="#7D7A7A" transform="rotate(-90, 75, 40)" fontFamily='cursive'>Disagree</text>
          <text x="40" y="-3" fontSize="6" fill="#7A4A7B" transform="rotate(-30, 75, 40)" fontFamily='cursive'>Independence</text>
          <text x="70" y="35" fontSize="8" fill="White" fontFamily='cursive'>
            {counts.independenceDisagree > 0 ? counts.independenceDisagree : ' '}
          </text>
        </a>

        {/* The middle circle starts from here*/} 
        <circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="1" />
        <a href="#" onClick={(event) => onClickSlice(event, 'Equality and Justice Agree')}>
          <path
            d="M100,100 L100,50 A50,50 0 0,1 135.4,64.6 L100,100 Z"
            fill={
              counts.equalityAndJusticeAgree == 1 || counts.equalityAndJusticeAgree == 2 
                ? "#84C586" 
                : counts.equalityAndJusticeAgree >= 3 
                ? "#52AF5B" 
                : "#ACD5AB"
            }
            id="slice1a_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="110" y="54" fontSize="3" fill="#7D7A7A" transform="rotate(-90, 110, 60)" fontFamily='cursive'>Agree</text>
          <text x="110" y="75" fontSize="8" fill="White" fontFamily='cursive'>
            {counts.equalityAndJusticeAgree > 0 ? counts.equalityAndJusticeAgree : ' '}
          </text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Do Well Agree')}>
          <path
            d="M100,100 L135.4,64.6 A50,50 0 0,1 150,100 L100,100 Z"
            fill={
              counts.doWellAgree == 1 || counts.doWellAgree == 2 
                ? "#84C586" 
                : counts.doWellAgree >= 3 
                ? "#52AF5B" 
                : "#ACD5AB"
            }
            id="slice1b_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="143" y="77" fontSize="3" fill="#7D7A7A" transform="rotate(-45, 135, 90)" fontFamily='cursive'>Agree</text>
          <text x="130" y="85" fontSize="8" fill="White" fontFamily='cursive'>
          {counts.doWellAgree > 0 ? counts.doWellAgree : ' '}
          </text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Obedience and Tradition Agree')}>
          <path
            d="M100,100 L150,100 A50,50 0 0,1 135.4,135.4 L100,100 Z"
            fill={
              counts.obedienceAndTraditionAgree == 1 || counts.obedienceAndTraditionAgree == 2 
                ? "#6C9BCD" 
                : counts.obedienceAndTraditionAgree >= 3 
                ? "#418DCB" 
                : "#99B7DD"
            }
            id="slice2a_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="140" y="105" fontSize="3" fill="#7D7A7A" transform="rotate(0, 130, 125)" fontFamily='cursive'>Agree</text>
          <text x="130" y="115" fontSize="8" fill="White" fontFamily='cursive'>
            {counts.obedienceAndTraditionAgree > 0 ? counts.obedienceAndTraditionAgree : ' '}
          </text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Safety Agree')}>
          <path
            d="M100,100 L135.4,135.4 A50,50 0 0,1 100,150 L100,100 Z"
            fill={
              counts.safetyAgree == 1 || counts.safetyAgree == 2 
                ? "#6C9BCD" 
                : counts.safetyAgree >= 3 
                ? "#418DCB" 
                : "#99B7DD"
            }
            id="slice2b_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="113" y="123" fontSize="3" fill="#7D7A7A" transform="rotate(45, 110, 140)" fontFamily='cursive'>Agree</text>
          <text x="110" y="135" fontSize="8" fill="White" fontFamily='cursive'>
            {counts.safetyAgree > 0 ? counts.safetyAgree : ' '}
          </text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Power Agree')}>
          <path
            d="M100,100 L100,150 A50,50 0 0,1 64.6,135.4 L100,100 Z"
            fill={
              counts.powerAgree == 1 || counts.powerAgree == 2 
                ? "#F6AF79" 
                : counts.powerAgree >= 3 
                ? "#F39052" 
                : "#FACBA9"
            }
            id="slice3a_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="73" y="140" fontSize="3" fill="#7D7A7A" transform="rotate(135, 75, 135)" fontFamily='cursive'>Agree</text>
          <text x="90" y="135" fontSize="8" fill="White" fontFamily='cursive'>
            {counts.powerAgree > 0 ? counts.powerAgree : ' '}
          </text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Achievement Agree')}>
          <path
            d="M100,100 L64.6,135.4 A50,50 0 0,1 50,100 L100,100 Z"
            fill={
              counts.achievementAgree == 1 || counts.achievementAgree == 2 
                ? "#F6AF79" 
                : counts.achievementAgree >= 3 
                ? "#F39052" 
                : "#FACBA9"
            }
            id="slice3b_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="52" y="105" fontSize="3" fill="#7D7A7A" transform="rotate(0, 60, 110)" fontFamily='cursive'>Agree</text>
          <text x="70" y="115" fontSize="8" fill="White" fontFamily='cursive'>
            {counts.achievementAgree > 0 ? counts.achievementAgree : ' '}
          </text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Excitement Agree')}>
          <path
            d="M100,100 L50,100 A50,50 0 0,1 64.6,64.6 L100,100 Z"
            fill={
              counts.excitementAgree == 1 || counts.excitementAgree == 2 
                ? "#FBDF52" 
                : counts.excitementAgree >= 3 
                ? "#FBCD0D" 
                : "#FBE787"
            }
            id="slice4a_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="64" y="73" fontSize="3" fill="#7D7A7A" transform="rotate(45, 70, 70)" fontFamily='cursive'>Agree</text>
          <text x="70" y="85" fontSize="8" fill="White" fontFamily='cursive'>
            {counts.excitementAgree > 0 ? counts.excitementAgree : ' '}
          </text>
        </a>
        <a href="#" onClick={(event) => onClickSlice(event, 'Independence Agree')}>
          <path
            d="M100,100 L64.6,64.6 A50,50 0 0,1 100,50 L100,100 Z"
            fill={
              counts.independenceAgree == 1 || counts.independenceAgree == 2 
                ? "#FBDF52" 
                : counts.independenceAgree >= 3 
                ? "#FBCD0D" 
                : "#FBE787"
            }
            id="slice4b_inner"
            stroke="white"
            strokeWidth="1"
          />
          <text x="90" y="68" fontSize="3" fill="#7D7A7A" transform="rotate(-90, 90, 60)" fontFamily='cursive'>Agree</text>
          <text x="90" y="75" fontSize="8" fill="White" fontFamily='cursive'>
            {counts.independenceAgree > 0 ? counts.independenceAgree : ' '}
          </text>
        </a>

        {/* the Central circles */}
        <circle cx="100" cy="100" r="20" fill="white" style={{ stroke: 'white', strokeWidth: 2 }} />
        <circle cx="100" cy="100" r="12" fill="#7A4A7B" style={{ stroke: 'white', strokeWidth: 2 }} />
        <text x="91" y="99" fontSize={3} fill="white">Personal value </text>
        <text x="93" y="104" fontSize={3} fill="white">dictionary </text>
      </svg>
      {/* for rendering the popup */}
   
    </div>
  );
};

export default SVGBoard;

