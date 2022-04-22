import Nav from "../components/Navigator";
import Footer from "../components/Footer";

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
  return (
    <form className="loginContainer">
      <span className="form__title">Login</span>
      <input name="id" placeholder="아이디를 입력하세요" />
      <input
        name="password"
        type="password"
        placeholder="비밀번호를 입력하세요"
      />
      <button>로그인</button>
    </form>
  );
}

export default Login;
