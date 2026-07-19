/******************************************************************************
 * Project     : Karatech ELV
 * File        : Login.tsx
 * Description : Login Page
 ******************************************************************************/

import "./Login.css";
import { Link } from "react-router-dom";

function Login() {

    return (

        <div className="login">

            {/*==================================================================
                                   HEADER
            ==================================================================*/}

            <header className="topbar">

                {/*==================== LOGO ====================*/}

                <div className="topbar__logo">

                    <img src="/v2/logo.png" alt="Karatech ELV" />

                    <div>

                        <h1>KARATECH <span>ELV</span></h1>

                        <p>ENGINEERING OPERATING SYSTEM</p>

                    </div>

                </div>

                {/*==================== LANGUAGE ====================*/}

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

                {/*==================== MENU ====================*/}

                <nav className="topbar__menu">

                    <a href="#">

                        <div>

                            <small>راهنما</small>

                            <span>Help</span>

                        </div>

                    </a>

                    <a href="#">

                        <div>

                            <small>ارتباط با ما</small>

                            <span>Contact Us</span>

                        </div>

                    </a>

                </nav>

            </header>

            {/*==================================================================
                                   BODY
            ==================================================================*/}

            <div className="loginBody">

                {/*==================== LEFT PANEL (امکانات) ====================*/}

                <div className="leftPanel">

                    <h2>سیستم مهندسی هوشمند</h2>

                    <h3>برای ساخت تابلوهای برق صنعتی</h3>

                    <div className="blueLine"></div>

                    <p>
                        Intelligent Engineering System<br />for Industrial Electrical Panels
                    </p>

                    {/*==================== FEATURES ====================*/}

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

                {/*==================== LOGIN CARD (فرم وسط) ====================*/}

                <div className="loginCard">

                    <img className="cardLogo" src="/v2/logo.png" alt="Karatech ELV" />

                    <h2>ورود به سیستم KARATECH ELV</h2>

                    <p>Login to System</p>

                    <input type="text" placeholder="Username / نام کاربری" />

                    <div className="passwordBox">
                        <input type="password" placeholder="Password / پسوورد" />
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
                        <div>
                            ورود
                            <span>SIGN IN</span>
                        </div>
                        <strong>→</strong>
                    </button>

                    <div className="register">
                        <p>حساب کاربری ندارید؟</p>
                        <span>Don't have an account?</span>
                        <Link to="/register">ایجاد حساب کاربری</Link>
                    </div>

                </div>

                {/*==================== RIGHT PANEL (عکس سخت‌افزار) ====================*/}

                <div className="rightPanel">
                    {/* اسم عکس جدید سخت‌افزاری که گذاشتید رو اینجا بنویسید */}
                    <img src="/v2/panel-room.jpg" alt="Panel Factory" />
                </div>

            </div>

            {/*==================================================================
                                FOOTER
            ==================================================================*/}

            <footer>

                <div>© 2026 KARATECH ELV</div>
                <div>Electrical • Automation • ELV • Industrial</div>
                <div>
                    Designed & Developed by<br />
                    <strong>Mohsen Keramati Layegh</strong>
                </div>
                <div>v2.1.0</div>

            </footer>

        </div>

    );

}

export default Login;
