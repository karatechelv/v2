import "./Login.css";

function Login() {
  return (
    <div className="login">

      <div className="login__overlay">

        <div className="login__card">

          <img
            src="/logo.png"
            alt="Karatech ELV"
            className="login__logo"
          />

          <h1>KARATECH ELV</h1>

          <p className="login__subtitle">
            Engineering Operating System
          </p>

          <input
            type="text"
            placeholder="Username"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <label className="remember">
            <input type="checkbox" />
            Remember Me
          </label>

          <button>
            SIGN IN
          </button>

          <div className="login__footer">
            <p>
              Designed, Developed & Engineered by
            </p>

            <strong>
              Mohsen Karami
            </strong>

            <span>
              Version 1.0.0
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
