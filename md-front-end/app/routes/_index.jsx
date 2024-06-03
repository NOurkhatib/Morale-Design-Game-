import React, { useState } from 'react';
import SVGBoard from './svgboard';
import AddArgumentsForm from './addArgumentsForm';


export const meta = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
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
        <AddArgumentsForm value={value} setValue={setValue} />
      </div>
      <div style={styles.boardContainer}>
        <SVGBoard onClickSlice={handleClickSlice} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  formContainer: {
    flex: '0 0 25%', // Take up 1/4 of the screen
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: 'purple',
    color: 'white',
    height: '100%',
  },
  boardContainer: {
    flex: '1', // Take up the remaining space
    padding: '20px',
    boxSizing: 'border-box',
    height: '100%',
    
  },
};