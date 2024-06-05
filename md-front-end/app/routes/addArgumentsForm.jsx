import React, { useState, useEffect } from 'react';

const players = {
  John: 'Teacher',
  Chris: 'Journalist',
  Jane: 'Director',
  Mark: 'Student',
  Emma: 'Security Officer',
};

const AddArgumentsForm = ({ value, setValue }) => {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [argument, setArgument] = useState('');
  const [argumentsList, setArgumentsList] = useState([]);

  useEffect(() => {
    // Load arguments from local storage on component mount
    const storedArguments = JSON.parse(localStorage.getItem('argumentsList')) || [];
    setArgumentsList(storedArguments.filter(arg => arg.value === value));
  }, [value]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      player: selectedPlayer,
      character: players[selectedPlayer],
      argument,
      value,
    };

    // Store form data in local storage
    const storedArguments = JSON.parse(localStorage.getItem('argumentsList')) || [];
    storedArguments.push(formData);
    localStorage.setItem('argumentsList', JSON.stringify(storedArguments));

    alert('Form submitted successfully!');
    handleCancel();
    // Update arguments list to display the new argument
    setArgumentsList(storedArguments.filter(arg => arg.value === value));
  };

  const handleCancel = () => {
    setSelectedPlayer('');
    setArgument('');
    setValue(''); // Clear the value when form is canceled
  };

  return (
    <div>
      <ul>
        {Object.entries(players).map(([player, character]) => (
          <li key={player}>
            {player}: {character}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>
            Player:
            <select value={selectedPlayer} onChange={(e) => setSelectedPlayer(e.target.value)} style={styles.input}>
              <option value="" disabled>Select a player</option>
              {Object.keys(players).map((player) => (
                <option key={player} value={player}>
                  {player}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div style={styles.formGroup}>
          <label>
            Character:
            <input type="text" value={players[selectedPlayer]} readOnly style={{ backgroundColor: '#7D7DB5', color: 'white', padding: '5px', border: 'none', fontWeight: 'bold', fontSize: 18 }} />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label>
            Argument:
            <textarea type="text" value={argument} onChange={(e) => setArgument(e.target.value)} style={styles.argumentInput} />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label>
            Value:
            <input type="text" value={value} readOnly style={styles.input} />
          </label>
        </div>
        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.button}>
            Confirm Argument
          </button>
          <button type="button" onClick={handleCancel} style={styles.button}>
            Cancel
          </button>
        </div>
      </form>

      {/* Display arguments with the same value */}
      <div style={styles.argumentsList}>
        <h3> {value} Arguments: </h3>
        <ul>
          {argumentsList.map((arg, index) => (
            <li key={index} style={styles.argumentItem}>
              <strong>{arg.player} ({arg.character}):</strong> {arg.argument}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  form: {
    backgroundColor: '#7D7DB5',
    padding: '20px',
    borderRadius: '10px',
    color: 'white',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '5px 0',
    boxSizing: 'border-box',
  },
  argumentInput: { /* Updated style for argument input */
    width: '100%',
    height: '100px', /* Set a height for multiple lines */
    padding: '8px',
    margin: '5px 0',
    boxSizing: 'border-box',
    resize: 'vertical', /* Allow user to resize the textarea */
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'white',
    color: 'purple',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  argumentsList: {
    marginTop: '20px',
    backgroundColor: '#7D7DB5',
    padding: '20px',
    borderRadius: '10px',
    color: 'white',
    maxHeight: '30vh', // Ensure the argument list has a max height
    overflowY: 'auto', // Add scroll if the content overflows
  },
  argumentItem: {
    marginBottom: '10px',
  },
};

export default AddArgumentsForm;
