import React, { useState } from "react";
import Breadcrumb from "./layouts/Breadcrumb";
import { toast } from 'react-toastify';
import "../style/deposit.css";
import { createDeposit } from '../services/DepositService';

export default function DepositPage() {
  const [number, setNumber] = useState(0);

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
    console.log("number = ",number);
    console.log("type of number = ",typeof(number));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const accountId = localStorage.getItem("accountid");

      if (!token) {
        console.error("No token found");
        toast.error('No token found');
        return;
      }

      const response = await createDeposit({number}, token);
      console.log("Deposit successful:", response.data);
      toast.success('Deposit successful');

      // Redirect user to the checkout URL
      window.location.href = response.data.checkoutUrl;

      setNumber(0);
    } catch (error) {
      console.error("Error depositing:", error);
      toast.error('Failed to deposit. Check console for details.');
    }
  };

  return (
    <div>
      <Breadcrumb name={"Deposit"} numOfImage={2} />
      <div className="container center-container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <h3>Số tiền nạp:</h3>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        id="number"
                        value={number}
                        onChange={handleNumberChange}
                        required
                      />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">
                          Deposit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
