// Board.js
import React from 'react';

const Slice = ({ d, fill, onClick }) => (
  <path d={d} fill={fill} onClick={onClick} style={{ cursor: 'pointer' }} />
);

const CircleComponent = () => {
  const [clicked, setClicked] = React.useState(null);

  const handleClick = (slice) => {
    setClicked(slice);
    alert(`You clicked on slice: ${slice}`);
  };

  const colors = ['lightorange', 'lightgreen', 'lightblue', 'lightyellow'];
  const centerX = 200;
  const centerY = 200;
  const smallRadius = 50;
  const largeRadius = 100;

  const generateSlices = (radius, parts, startIdx = 0) => {
    const slices = [];
    const angleStep = (2 * Math.PI) / parts;

    for (let i = 0; i < parts; i++) {
      const startAngle = i * angleStep;
      const endAngle = (i + 1) * angleStep;
      const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1';

      const startX = centerX + radius * Math.cos(startAngle);
      const startY = centerY + radius * Math.sin(startAngle);
      const endX = centerX + radius * Math.cos(endAngle);
      const endY = centerY + radius * Math.sin(endAngle);

      const d = [
        `M ${centerX} ${centerY}`,
        `L ${startX} ${startY}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        'Z',
      ].join(' ');

      slices.push(
        <Slice
          key={`${startIdx + i}`}
          d={d}
          fill={colors[(startIdx + i) % colors.length]}
          onClick={() => handleClick(`${startIdx + i}`)}
        />
      );
    }

    return slices;
  };

  const smallCircleSlices = generateSlices(smallRadius, 4);
  const largeCircleSlices = [];

  for (let i = 0; i < 4; i++) {
    largeCircleSlices.push(
      ...generateSlices(largeRadius, 3, i * 3)
    );
  }

  return (
    <svg width="400" height="400" viewBox="0 0 400 400">
      {smallCircleSlices}
      {largeCircleSlices}
    </svg>
  );
};

const Board = () => {
  return (
    <div>
      <h1>SVG Circle Slices</h1>
      <CircleComponent />
    </div>
  );
};

export default Board;
export { Board }; // Exporting Board for static analysis