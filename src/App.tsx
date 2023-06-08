import React, { useState } from 'react';

const App = () => {
  const [mode, setMode] = useState('light');

  const handleChangeMode = (e) => {
    setMode(e.target.value);
  };

  return (
    <div className={`app ${mode}`}>
      <h1>Toggle between Dark and Light Mode</h1>
      <select value={mode} onChange={handleChangeMode}>
        <option value="light">Light Mode</option>
        <option value="dark">Dark Mode</option>
      </select>
      <p>This is some content in {mode} mode.</p>
    </div>
  );
};

export default App;
