import React, { useState } from "react";
import Breadcrumb from "./layouts/Breadcrumb";
import axios from "axios";
import Deposit from "../img/deposit.jpg";
import "../style/deposit.css";

export default function DepositPage() {
  const [number, setNumber] = useState(0);

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const accountId = localStorage.getItem("accountid");

      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/deposit",
        {
          userId: accountId,
          number: number,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Deposit successful:", response.data);
      alert("Deposit successful!");
      setNumber(0);
    } catch (error) {
      console.error("Error depositing:", error);
      alert("Failed to deposit. Check console for details.");
    }
  };

  return (
    <div>
      <Breadcrumb name={"Deposit"} numOfImage={2} />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="warning">
              <h4>Vui lòng Chuyển tiền qua tài khoản trên màn hình</h4>
              <p className="content">Nội dung chuyển khoản: username + số tiền</p>
              <p>Việc nạp tiền sẽ mất vài phút, vui lòng đợi.</p>
            </div>
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <h4>Số tiền nạp:</h4>
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
          <div className="col-md-6">
            <img
              src={Deposit}
              alt="Deposit Icon"
              className="img-fluid float-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
