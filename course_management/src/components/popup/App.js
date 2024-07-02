import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import GPT from './GPT';
import './App.css';
import { getAccountById } from '../../services/AccountServices';
import { toast } from 'react-toastify';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [accountId, setAccountId] = useState(localStorage.getItem("accountid")); // Assuming accountId is stored in localStorage
  const [memberShip, setMemberShip] = useState(false);
  const getAuthToken = () => {
    return localStorage.getItem("token");
  };

  const getAccountId = () => {
    return localStorage.getItem("accountid");
  };
  useEffect(() => {
    const fetchAccountData = async () => {
      if (getAuthToken()) {
        try {
          const response = await getAccountById(getAccountId(), getAuthToken());
          const accountData = response.data;
          setMemberShip(accountData.memberShip || false);
        } catch (error) {
          console.error("Error fetching account:", error);
        } finally {
        }
      }
    };

    fetchAccountData();
  }, [getAuthToken(), getAccountId()]);

  const togglePopup = () => {
    if (memberShip) {
      setIsPopupOpen(!isPopupOpen);
    } else {
      toast.error("You must be a member to access this feature.");
    }
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
