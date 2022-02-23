/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import logo from '../Assets/img/logo-ssm.png';
const Nav = () => {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item">
                    {/* <img src={logo} alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/> */}
                <h1 class="title">Smart Parcel Box</h1>
                </a>
                {/* 
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                */}
            </div>
        </nav>
    );
}

export default Nav;