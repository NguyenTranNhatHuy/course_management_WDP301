import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-solid-svg-icons';
import GPT from './GPT';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="App">
      <div className={`popup ${isPopupOpen ? 'open' : 'closed'}`}>
        {isPopupOpen ? (
          <div className="popup-content">
            <button className="close-button" onClick={togglePopup}>Close</button>
            <GPT />
          </div>
        ) : (
          <button className="popup-button" onClick={togglePopup}>
            <FontAwesomeIcon icon={faComment} />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
