/******************************************************************************
 * Project      : Karatech ELV
 * File         : src/pages/Login.tsx
 * Description  : Login Page
 ******************************************************************************/

import "./Login.css";
import { Link } from "react-router-dom";

function Login() {

  return (

    <div className="login">

      <div className="login__overlay">

        <div className="login__card">

          {/* ================= LOGO ================= */}
<img
  src="https://raw.githubusercontent.com/karatechelv/v2/main/public/logo.png"
  alt="Karatech ELV"
  className="login__logo"
/>

          {/* ================= LANGUAGE ================= */}

          <div className="login__language">

            <button className="active">
              EN
            </button>

            <button>
              FA
            </button>

          </div>

          {/* ================= TITLE ================= */}

          <h1>KARATECH ELV</h1>

          <h2>Engineering Operating System</h2>

          <p className="login__description">
            Electrical • Automation • ELV • Industrial
          </p>

          {/* ================= LOGIN ================= */}

          <input
            type="text"
            placeholder="Username / نام کاربری"
          />

          <input
            type="password"
            placeholder="Password / رمز عبور"
          />

          <button className="login__button">
            SIGN IN | ورود
          </button>

          {/* ================= REGISTER ================= */}

          <div className="login__register">

            <p>
              Don't have an account?
            </p>

            <p>
              حساب کاربری ندارید؟
            </p>

            <Link to="/register">
              CREATE ACCOUNT
            </Link>

          </div>

          {/* ================= FOOTER ================= */}

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
