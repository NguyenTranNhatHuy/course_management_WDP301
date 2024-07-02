import React from "react";
import "../style/depositStatus.css";
import { toast } from "react-toastify";
import { addMoney } from "../services/AccountServices";

export default function DepositSuccess() {
  const handleConfirm = async (event) => {
    event.preventDefault();

    localStorage.removeItem("deposit");
    toast.success("Back to home page");
    window.location.href = "/home";
  };

  return (
    <form onSubmit={handleConfirm}>
      <div className="main-box">
        <h4 className="payment-title">
          Thanh toán Thất bại. Vui lòng thử lại!
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
