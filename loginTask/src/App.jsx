import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isButtonGreen, setIsButtonGreen] = useState(false);

  const validationEmail = () => {
    if (!email.includes("@")) {
      setEmailError("Invalid Email ID");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validationPassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain between 8 and 14 charaacters with at least one upperrcase letter, one lowercase lettter, and one number"
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validationConfirmPassword = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Password doesn't maatch");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  const handleLogin = () => {
    const isValidEmail = validationEmail();
    const isValidPassword = validationPassword();
    const isValidConfirmPassword = validationConfirmPassword();

    if (isValidEmail && isValidPassword && isValidConfirmPassword) {
      setIsButtonGreen(true);
    } else {
      setIsButtonGreen(false);
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <div
        style={{
          textAlign: "center",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <div style={{ color: "red" }}>{emailError}</div>}
        <br />

        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
        <br />

        <input
          type="password"
          placeholder="Enter Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {confirmPasswordError && (
          <div style={{ color: "red" }}>{confirmPasswordError}</div>
        )}
        <br />

        <button
          style={{ backgroundColor: isButtonGreen ? "green" : "red" }}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
export default LoginForm;
