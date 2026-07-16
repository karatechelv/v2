import "./Login.css";
import { Link } from "react-router-dom";

function Login() {

  return (

    <div className="login">

      <div className="login__overlay">

        <div className="login__card">

          <img
            src="/logo.png"
            alt="KARATECH ELV"
            className="login__logo"
          />

          <h1>KARATECH ELV</h1>

          <h2>Engineering Operating System</h2>

          <p className="login__description">
            Electrical • Automation • ELV • Industrial
          </p>

          <input
            type="text"
            placeholder="Username"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>
            SIGN IN
          </button>

          <div className="login__register">

            <p>
              Don't have an account?
            </p>

            <Link to="/register">
              CREATE ACCOUNT
            </Link>

          </div>

          <div className="login__footer">

            <p>
              Designed, Developed & Engineered by
            </p>

            <strong>
              Mohsen Keramati Layegh
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
