import React from 'react'
import logo from '../assets/logo.svg'
import '../styles/header-styles.scss'
import '../styles/general.scss'
import '../styles/icons.scss'
export function HeaderComponent() {
    const page = <div className="navbar navbar-height navbar-style overflow-hidden p-0 m-0">
            <button className="navbar-height p-0 m-0 border-0 bg-transparent">
                <img src={logo} alt="logo not found" className="navbar-height p-0 m-0"></img>
            </button>
            <div className=''>
                Slate
            </div>
            <button className="p-1 border-0 bg-transparent">
                <span className='icon-menu'></span>
            </button>
        </div>

    return page;
}