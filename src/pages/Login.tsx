import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="login">
      {/* ================= HEADER ================= */}
      <header className="topbar">
        <div className="topbar__logo">
          <img src="/v2/logo.png" alt="Karatech ELV" />
          <div>
            <h1>KARATECH <span>ELV</span></h1>
            <p>ENGINEERING OPERATING SYSTEM</p>
          </div>
        </div>

        <div className="topbar__center">
          <div className="language">
            <button className="active">FA</button>
            <button>EN</button>
          </div>
        </div>

        <nav className="topbar__menu">
          <a href="#"><small>راهنما</small><span>Help</span></a>
          <a href="#"><small>ارتباط با ما</small><span>Contact Us</span></a>
        </nav>
      </header>

      {/* ================= BODY ================= */}
      <div className="loginBody">
        {/* ================= LEFT PANEL ================= */}
        <div className="leftPanel">
          <h2>سیستم مهندسی هوشمند</h2>
          <h3>Industrial Electrical Panels</h3>
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

        {/* ================= LOGIN CARD ================= */}
        <div className="loginCard">
          <img className="cardLogo" src="/v2/logo.png" alt="Karatech ELV" />
          <h2>ورود به سیستم</h2>
          <p>Sign in to your account</p>

          <input type="text" placeholder="نام کاربری / Username" />

          <div className="passwordBox">
            <input type="password" placeholder="رمز عبور / Password" />
            <span>👁</span>
          </div>

          <div className="remember">
            <label>
              <input type="checkbox" />
              <span>مرا به خاطر بسپار</span>
            </label>
            <a href="#">فراموشی رمز عبور؟</a>
          </div>

          <button className="signin">
            <strong>ورود</strong>
            <span>SIGN IN →</span>
          </button>

          <div className="register">
            <p>حساب کاربری ندارید؟</p>
            <Link to="/register">ایجاد حساب کاربری</Link>
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="rightPanel">
          <img src="/v2/panel-room.jpg" alt="Industrial Panel" />
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer>
        <div>© 2026 KARATECH ELV</div>
        <div>Designed by Mohsen Keramati Layegh | v2.1.0</div>
      </footer>
    </div>
  );
};

export default Login;
