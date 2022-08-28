import React from 'react';
import './Header.css';
import logoUrl from '../../assets/logo.png';
const Header = () => (
    <header>
        <nav
            className="navbar navbar-expand-lg shadow-md py-2 bg-gray-50 relative flex items-center w-full justify-between">
            <div className="px-6 w-full flex flex-wrap items-center justify-between">

                <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                    <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                        <li className={'mx-auto'}>
                            <img src={'src/assets/logo.png'} alt={'KotowscyDent logo - Orlik JW'}/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </header>
)
export default Header;