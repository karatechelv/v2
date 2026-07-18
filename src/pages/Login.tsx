/******************************************************************************
 Project : Karatech ELV
 File    : Login.tsx
******************************************************************************/

import "./Login.css";
import { Link } from "react-router-dom";

function Login() {

  return (

    <div className="login">

      {/* ================= HEADER ================= */}

      <header className="topbar">

        <div className="topbar__logo">

          <img
            src="/v2/logo.png"
            alt="Karatech ELV"
          />

          <div>

            <h1>
              KARATECH <span>ELV</span>
            </h1>

            <p>
              ENGINEERING OPERATING SYSTEM
            </p>

          </div>

        </div>

        <div className="topbar__center">

          <div className="language">

            <button>
              FA
            </button>

            <button className="active">
              EN
            </button>

          </div>

          <div className="languageText">

            <p>
              Language
            </p>

            <span>
              زبان
            </span>

          </div>

        </div>

        <nav className="topbar__menu">

          <a href="#">

            <span>❔</span>

            <div>

              <small>
                راهنما
              </small>

              <span>
                Help
              </span>

            </div>

          </a>

          <a href="#">

            <span>✉</span>

            <div>

              <small>
                ارتباط با ما
              </small>

              <span>
                Contact Us
              </span>

            </div>

          </a>

        </nav>

      </header>

      {/* ================= BODY ================= */}

      <div className="loginBody">

        {/* ================= LEFT ================= */}

        <div className="leftPanel">

          <h2>

            سیستم مهندسی هوشمند

            <br />

            برای ساخت تابلوهای برق صنعتی

          </h2>

          <h3>

            Intelligent Engineering System

            <br />

            for Industrial Electrical Panels

          </h3>

          <div className="blueLine"></div>

          <div className="feature">

            <b>⚡</b>

            <div>

              <b>طراحی و مهندسی</b>

              <span>Design & Engineering</span>

            </div>

          </div>

          <div className="feature">

            <b>⚙</b>

            <div>

              <b>اتوماسیون و کنترل</b>

              <span>Automation & Control</span>

            </div>

          </div>

          <div className="feature">

            <b>🛡</b>

            <div>

              <b>سیستم های ELV</b>

              <span>ELV Systems</span>

            </div>

          </div>

          <div className="feature">

            <b>🏭</b>

            <div>

              <b>صنعت و زیرساخت</b>

              <span>Industry & Infrastructure</span>

            </div>

          </div>

        </div>

                {/* ================= CENTER ================= */}

         <div className="loginCard">

          <img
            className="cardLogo"
            src="/v2/logo.png"
            alt="Karatech ELV"
          />

          <h2>
            به KARATECH ELV خوش آمدید
          </h2>

          <p>
            Welcome to KARATECH ELV
          </p>

          <input
            type="text"
            placeholder="نام کاربری / Username"
          />

          <div className="passwordBox">

            <input
              type="password"
              placeholder="رمز عبور / Password"
            />

            <span>👁</span>

          </div>

          <div className="remember">

            <label>

              <input type="checkbox"/>

              <span>
                مرا به خاطر بسپار
              </span>

            </label>

            <a href="#">
              فراموشی رمز عبور؟
            </a>

          </div>

          <button className="signin">

            <div>

              ورود

              <span>
                SIGN IN
              </span>

            </div>

            <strong>
              →
            </strong>

          </button>

          <div className="register">

            <p>
              حساب کاربری ندارید؟
            </p>

            <span>
              Don't have an account?
            </span>

            <Link to="/register">

              ایجاد حساب کاربری

            </Link>

          </div>

        </div>
       
        {/* ================= RIGHT ================= */}

        <div className="rightPanel">

          <img
            src="/v2/panel-room.jpg"
            alt="Panel Factory"
          />

        </div>

      </div>

      {/* ================= FOOTER ================= */}

      <footer>

        <div>

          © 2026 KARATECH ELV. All rights reserved.

        </div>

        <div>

          Electrical&nbsp;&nbsp;•&nbsp;&nbsp;Automation&nbsp;&nbsp;•&nbsp;&nbsp;ELV&nbsp;&nbsp;•&nbsp;&nbsp;Industrial

        </div>

        <div
          style={{
            textAlign: "right",
            lineHeight: "20px"
          }}
        >

          طراحی و توسعه توسط محسن کرامتی لایق

          <br />

          Designed &amp; Developed by Mohsen Keramati Layegh

        </div>

        <div
          style={{
            padding: "8px 18px",
            borderRadius: "18px",
            background: "#111c2a",
            border: "1px solid rgba(255,255,255,.08)"
          }}
        >

          v2.1.0

        </div>

      </footer>

    </div>

  );

}

export default Login;
