import React, { useState } from 'react';
import SVGBoard from './svgboard';
import AddArgumentsForm from './addArgumentsForm';


export const meta = () => {
  return [
    { title: 'Moral Design Game Digital Version' },
    { name: 'description', content: 'Welcome to the digital version of the game!' },
  ];
};

export default function Index() {
  const [value, setValue] = useState('');

  const handleClickSlice = (event, sliceId) => {
    event.preventDefault();
    setValue(sliceId);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <AddArgumentsForm value={value} setValue={setValue} /> {/* render the form with the data (value) from the state*/}
      </div>
      <div style={styles.boardContainer}>
        <SVGBoard onClickSlice={handleClickSlice} />   {/* render the board and get the clicked slice and save it to the state */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex', // Ensure flexbox is enabled
    flexDirection: 'row',
    height: '100vh',
  },
  formContainer: {
    flex: '0 0 25%', // Take up 1/4 of the screen
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#7D7DB5',
    color: 'white',
    height: '100%',
    overflow: 'auto', // Ensure the container can scroll if content overflows
  },
  boardContainer: {
    flex: '1', // Take up the remaining space
    padding: '10px',
    boxSizing: 'border-box',
    height: '100%',
    marginLeft: '30px',
  },
};