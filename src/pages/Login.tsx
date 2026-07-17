/******************************************************************************
 * Project      : Karatech ELV
 * File         : src/pages/Login.tsx
 * Description  : Login Page (NEW UI)
******************************************************************************/

import "./Login.css";
import { Link } from "react-router-dom";

function Login() {

  return (

<div className="login">

{/* ========================= HEADER ========================= */}

<header className="topbar">

<div className="topbar__logo">

<img
src={`${import.meta.env.BASE_URL}logo.png`}
alt="Karatech ELV"
/>

<div>

<h1>KARATECH <span>ELV</span></h1>

<p>ENGINEERING OPERATING SYSTEM</p>

</div>

</div>

<div className="topbar__center">

<div className="language">

<button>FA</button>

<button className="active">EN</button>

</div>

<div className="languageText">

<p>انتخاب زبان</p>

<span>Language</span>

</div>

</div>

<div className="topbar__menu">

<a href="#">❔<span>راهنما</span><small>Help</small></a>

<a href="#">✉<span>ارتباط با ما</span><small>Contact Us</small></a>

</div>

</header>

{/* ========================= BODY ========================= */}

<div className="loginBody">

{/* ================= LEFT ================= */}

<section className="leftPanel">

<h2>

سیستم مهندسی هوشمند

</h2>

<h3>

برای ساخت تابلوهای برق صنعتی

</h3>

<div className="blueLine"></div>

<p>

Intelligent Engineering System

<br/>

for Industrial Electrical Panels

</p>

<div className="feature">

⚡

<div>

<b>طراحی و مهندسی</b>

<span>Design & Engineering</span>

</div>

</div>

<div className="feature">

⚙

<div>

<b>اتوماسیون و کنترل</b>

<span>Automation & Control</span>

</div>

</div>

<div className="feature">

🛡

<div>

<b>سیستم های ELV</b>

<span>ELV Systems</span>

</div>

</div>

<div className="feature">

🏭

<div>

<b>صنعت و زیرساخت</b>

<span>Industry & Infrastructure</span>

</div>

</div>

</section>

{/* ================= CENTER ================= */}

<section className="loginCard">

<img

className="cardLogo"

src={`${import.meta.env.BASE_URL}logo.png`}

alt="Karatech"

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

مرا به خاطر بسپار

</label>

<a href="#">

فراموشی رمز عبور؟

</a>

</div>

<button className="signin">

ورود

<br/>

<span>SIGN IN</span>

</button>

<div className="register">

<p>

حساب کاربری ندارید؟

</p>

<p>

Don't have an account?

</p>

<Link to="/register">

ایجاد حساب کاربری

</Link>

</div>

</section>

{/* ================= RIGHT ================= */}

<section className="rightPanel">

<img

src={`${import.meta.env.BASE_URL}panel-room.jpg`}

alt="Panel Factory"

/>

</section>

</div>

{/* ========================= FOOTER ========================= */}

<footer>

<div>

© 2026 KARATECH ELV

</div>

<div>

Electrical • Automation • ELV • Industrial

</div>

<div>

Designed & Developed by

Mohsen Keramati Layegh

</div>

<div>

v2.1.0

</div>

</footer>

</div>

);

}

export default Login;
