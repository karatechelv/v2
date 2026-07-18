/******************************************************************************
 * Karatech ELV
 * File : src/components/layout/Header.tsx
******************************************************************************/

import "./Header.css";

import Clock from "./Clock";
import DateBox from "./DateBox";
import UserSessionTimer from "./UserSessionTimer";

function Header() {

    return (

        <header className="header">

            {/* LEFT */}

            <div className="header__left">

                <div className="header__brand">

                    <img
                        src="/v2/logo.png"
                        alt="Karatech ELV"
                        className="header__logo"
                    />

                    <div>

                        <h1>KARATECH <span>ELV</span></h1>

                        <p>Engineering Operating System</p>

                    </div>

                </div>

            </div>

            {/* CENTER */}

            <div className="header__center">

                <input
                    className="header__search"
                    type="text"
                    placeholder="Search... | جستجو در سامانه"
                />

            </div>

            {/* RIGHT */}

            <div className="header__right">

                <button className="header__lang">

                    FA | EN

                </button>

                <button className="header__icon">

                    ؟

                </button>

                <button className="header__icon">

                    ☎

                </button>

                <DateBox />

                <Clock />

                <UserSessionTimer />

            </div>

        </header>

    );

}

export default Header;
