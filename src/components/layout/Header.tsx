/*****************************************************************
 * Karatech ELV
 * File : src/components/layout/Header.tsx
 *****************************************************************/

import "./Header.css";

import Clock from "./Clock";
import DateBox from "./DateBox";

function Header(){

    return(

        <header className="header">

            <div className="header__left">

                <input

                    className="header__search"

                    type="text"

                    placeholder="جستجو در کل سامانه..."

                />

            </div>

            <div className="header__center">

                <h2 className="header__title">

                    KARATECH ELV

                </h2>

            </div>

            <div className="header__right">

                <DateBox />

                <Clock />

            </div>

        </header>

    );

}

export default Header;
