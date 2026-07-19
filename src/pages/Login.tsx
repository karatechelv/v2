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

                {/*==================== LANGUAGE ====================*/}

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

                            انتخاب زبان

                        </p>

                        <span>

                            Language

                        </span>

                    </div>

                </div>

                {/*==================== MENU ====================*/}

                <nav className="topbar__menu">

                    <a href="#">

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

            {/*==================================================================
                                   BODY
            ==================================================================*/}

            <div className="loginBody">

                {/*==================== LEFT PANEL ====================*/}

                <div className="leftPanel">

                    <h2>

                        سیستم مهندسی هوشمند

                    </h2>

                    <h3>

                        برای ساخت تابلوهای برق صنعتی

                    </h3>

                    <div className="blueLine"></div>

                    <p>

                        Intelligent Engineering System

                        <br />

                        for Industrial Electrical Panels

                    </p>

                                 {/*==================== FEATURES ====================*/}

                <div className="feature">

                    <b>⚡</b>

                    <div>

                        <b>

                            طراحی و مهندسی

                        </b>

                        <span>

                            Design & Engineering

                        </span>

                    </div>

                </div>

                <div className="feature">

                    <b>⚙</b>

                    <div>

                        <b>

                            اتوماسیون و کنترل

                        </b>

                        <span>

                            Automation & Control

                        </span>

                    </div>

                </div>

                <div className="feature">

                    <b>🛡</b>

                    <div>

                        <b>

                            سیستم های ELV

                        </b>

                        <span>

                            ELV Systems

                        </span>

                    </div>

                </div>

                <div className="feature">

                    <b>🏭</b>

                    <div>

                        <b>

                            صنعت و زیرساخت

                        </b>

                        <span>

                            Industry & Infrastructure

                        </span>

                    </div>

                </div>

            </div>

            {/*==================== LOGIN CARD ====================*/}

            <div className="loginCard">

                {/*==================== LOGO ====================*/}

                <img
                    className="cardLogo"
                    src="/v2/logo.png"
                    alt="Karatech ELV"
                />

                {/*==================== TITLE ====================*/}

                <h2>

                    به KARATECH ELV خوش آمدید

                </h2>

                <p>

                    Welcome to KARATECH ELV

                </p>

                {/*==================== USERNAME ====================*/}

                <input
                    type="text"
                    placeholder="نام کاربری / Username"
                />

                {/*==================== PASSWORD ====================*/}

                <div className="passwordBox">

                                 {/*==================== PASSWORD ====================*/}

                <div className="passwordBox">

                    <input
                        type="password"
                        placeholder="رمز عبور / Password"
                    />

                    <span>

                        👁

                    </span>

                </div>

                {/*==================== REMEMBER ====================*/}

                <div className="remember">

                    <label>

                        <input
                            type="checkbox"
                        />

                        <span>

                            مرا به خاطر بسپار

                        </span>

                    </label>

                    <a href="#">

                        فراموشی رمز عبور؟

                    </a>

                </div>

                {/*==================== SIGN IN ====================*/}

                <button
                    className="signin"
                >

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

                {/*==================== REGISTER ====================*/}

                <div className="register">

                    <p>

                        حساب کاربری ندارید؟

                    </p>

                    <span>

                        Don't have an account?

                    </span>

                    <Link
                        to="/register"
                    >

                        ایجاد حساب کاربری

                    </Link>

                </div>

            </div>

            {/*==================== RIGHT PANEL ====================*/}

            <div className="rightPanel">

                         {/*==================== RIGHT PANEL ====================*/}

            <div className="rightPanel">

                {/*==================== FACTORY IMAGE ====================*/}

                <img
                    src="/v2/panel-room.jpg"
                    alt="Panel Factory"
                />

            </div>

        </div>

        {/*==================================================================
                                FOOTER
        ==================================================================*/}

        <footer>

            {/*==================== COPYRIGHT ====================*/}

            <div>

                © 2026 KARATECH ELV

            </div>

            {/*==================== DESCRIPTION ====================*/}

            <div>

                Electrical • Automation • ELV • Industrial

            </div>

            {/*==================== DEVELOPER ====================*/}

            <div>

                Designed & Developed by

                <br />

                <strong>

                    Mohsen Keramati Layegh

                </strong>

            </div>

            {/*==================== VERSION ====================*/}

            <div>

                v2.1.0

            </div>

        </footer>

    </div>

);

}

export default Login;
