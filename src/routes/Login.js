import Nav from "../components/Navigator";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  return (
    <div className="base">
      <Nav />
      <LoginForm />
      <Footer />
    </div>
  );
}

function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.name === "id") setId(e.target.value);
    else if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await axios({
      method: "post",
      url: process.env.REACT_APP_SERVER_URL + "/api/login",
      data: {
        id,
        password,
      },
    });
    if (res.status !== 200) return;

    localStorage.setItem("login", true);
    window.location.reload();
    navigate("/");
  };

  return (
    <form className="loginContainer" onSubmit={handleSubmit}>
      <span className="form__title">Login</span>
      <input
        name="id"
        placeholder="아이디를 입력하세요"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={handleChange}
      />
      <button>로그인</button>
    </form>
  );
}

export default Login;
