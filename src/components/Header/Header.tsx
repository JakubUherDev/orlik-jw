import React from 'react';
import './Header.css';
import logoUrl from '../../assets/react.svg';
const Header = () => (
    <header>
        <nav
            className="navbar navbar-expand-lg shadow-md py-2 bg-gray-50 relative flex items-center w-full justify-between">
            <div className="px-6 w-full flex flex-wrap items-center justify-between">

                <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                    <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                        <li className={'mx-auto'}>
                            <img src='public/logo.png' alt={'KotowscyDent logo - Orlik JW'}/>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"*/}
                        {/*       href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Home</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"*/}
                        {/*       href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Features</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"*/}
                        {/*       href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Pricing</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item mb-2 lg:mb-0">*/}
                        {/*    <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"*/}
                        {/*       href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">About</a>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </nav>

    </header>
)
export default Header;