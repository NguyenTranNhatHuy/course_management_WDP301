import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import GPT from './GPT';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [accountId, setAccountId] = useState(localStorage.getItem("accountid")); // Assuming accountId is stored in localStorage


  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="App">
      {accountId && (
        <div className={`popup ${isPopupOpen ? 'open' : 'closed'}`}>
          {isPopupOpen ? (
            <div className="popup-content">
              <button className="close-button" onClick={togglePopup}><FontAwesomeIcon icon={faCircleXmark} beatFade style={{ color: "#ff0000", }} /></button>
              <GPT />
            </div>
          ) : (
            <button className="popup-button" onClick={togglePopup}>
              <FontAwesomeIcon icon={faComment} bounce style={{ color: "#FFD43B", }} />
            </button>
          )}
        </div>
      )}

    </div>
  );
}

export default App;
