import React, { useState } from 'react';

function App(){
  const [searchTerm, setSearchTerm] = useState('');
  const [dictionary, setDictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }
  ]);
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const result = dictionary.find((entry) => entry.word.toLowerCase() === searchTerm.toLowerCase());

    if (result) {
      setSearchResult(result.meaning);
    } else {
      setSearchResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>

      <div>
        
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          placeholder='Search for a word...'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {searchResult && (
        <div>
          <h4>Definition:</h4>
          <p>{searchResult}</p>
        </div>
      )}
    </div>
  );
};

export default App;