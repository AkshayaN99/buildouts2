import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [correctionMessage, setCorrectionMessage] = useState('');

  const customDictionary = {
  teh: "the",

  wrok: "work",

  fot: "for",

  exampl: "example"
  };

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
    checkSpelling(newText);
  };

  const checkSpelling = (text) => {
    const words = text.toLowerCase().split(/\s+/);

    for (const word of words) {
      if (customDictionary[word]) {
        const correctedSpelling = customDictionary[word];
        setCorrectionMessage(`Did you mean: ${correctedSpelling}?`);
        return;
      }
    }

    // No suggestions if there are no misspelled words
    setCorrectionMessage('');
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
      value={inputText}
      onChange={handleInputChange}
      placeholder="Enter text..."
      rows={5}
      cols={40}
      />
      {correctionMessage && <p style={{ color: 'red' }}>{correctionMessage}</p>}
    </div>
  );
};

export default App;