import React from "react";
import "../style/depositStatus.css";
import { toast } from 'react-toastify';
import { addMoney } from '../services/AccountServices';

export default function DepositSuccess() {

  const handleConfirm = async (event) => {
    event.preventDefault();

    const amount = localStorage.getItem("deposit");
    const accountId = localStorage.getItem("accountid");
    const token = localStorage.getItem("token");

    try {
      const response = await addMoney(accountId, { amount }, token);
      console.log("Add money successful:", response.data);
      toast.success("Back to home page");
      window.location.href = "/home";
    } catch (error) {
      console.error("Error adding money:", error);
      toast.error('Failed to add money');
    }
  };

  return (
    <form onSubmit={handleConfirm}>
      <div className="main-box">
        <h4 className="payment-title">
          Thanh toán thành công. Cảm ơn bạn đã sử dụng Examin!
        </h4>
        <p>
          Nếu có bất kỳ câu hỏi nào, hãy gửi email tới{" "}
          <a href="mailto:examin@gmail.com">examin@gmail.com</a>
        </p>

        <button type="submit" className="btn btn-primary">
          Trở về
        </button>
      </div>
    </form>
  );
}
