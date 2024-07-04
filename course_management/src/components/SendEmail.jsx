import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "../style/sendEmail.css";

function EmailApp() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const message = generateCode();
    setGeneratedCode(message);

    emailjs
      .send(
        "service_tt39l4v",
        "template_7hvwryp",
        {
          to_email: email,
          message: message,
        },
        "VDVXnhZHDJKUJxZ3y"
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        toast.success("Email sent successfully!");
        setEmail("");
        setShowCode(true);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setShowCode(false);
        toast.error("Please check your email");
      });
  };

  const checkCode = (e) => {
    e.preventDefault();

    if (generatedCode === code) {
      toast.success("Code verified successfully!");
      // xử lý gọi api update password


      // window.location.href = "/login";
    } else {
      toast.error("Invalid code. Please check your email for the code");
    }
  };

  return (
    <div className="container-email">
      <h1>Send an Email</h1>
      {!showCode && (
        <form className="email-form" onSubmit={sendEmail}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            style={{ width: "350px" }}
            className="btn btn-success create"
            type="submit"
          >
            Send Email
          </button>
        </form>
      )}

      {showCode && (
        <form className="email-form" onSubmit={checkCode}>
          <div>
            <label>Enter the code sent to your email:</label>
            <input
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <label>Enter your new password:</label>
            <input
              name="code"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            style={{ width: "350px" }}
            className="btn btn-success create"
            type="submit"
          >
            Check code
          </button>
        </form>
      )}
    </div>
  );
}

export default EmailApp;
