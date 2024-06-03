import React, { useState } from 'react';

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      player: selectedPlayer,
      character: players[selectedPlayer],
      argument,
      value,
    };

    try {
      const response = await fetch('/Nour-ADD-Eindpoint-HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        handleCancel();
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      alert('An error occurred while submitting the form.');
    }
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
            <input type="text" value={players[selectedPlayer]} readOnly style={styles.input} />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label>
            Argument:
            <input type="text" value={argument} onChange={(e) => setArgument(e.target.value)} style={styles.input} />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label>
            Value:
            <input type="text" value={value} readOnly style={styles.input} />
          </label>
        </div>
        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.button}>Confirm Argument</button>
          <button type="button" onClick={handleCancel} style={styles.button}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  form: {
    backgroundColor: 'purple',
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
};

export default AddArgumentsForm;
