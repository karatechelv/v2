/*****************************************************************
 * Karatech ELV
 * File : src/components/layout/Header.tsx
 * Description :
 * Main Header
 *****************************************************************/

import "./Header.css";

function Header() {

    return (

        <header className="header">

            <div className="header__left">

                <input
                    className="header__search"
                    type="text"
                    placeholder="جستجو در سایت..."
                />

            </div>

            <div className="header__center">

                <h2 className="header__title">

                    KARATECH ELV

                </h2>

            </div>

            <div className="header__right">

                <span className="header__clock">

                    00:00:00

                </span>

            </div>

        </header>

    );

}

export default Header;
