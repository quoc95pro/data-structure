import React, { Component } from 'react';
// import './Menu.css';
class Menu extends Component {
    
    showMenu() {
        document.getElementsByTagName('nav')[0].className = 'menu menu_active';
    }

    clickItem() {
        document.getElementsByTagName('nav')[0].className = 'menu'
    }
    render() {
        return (
            <div>
                {/* <h3 onClick={() => this.showMenu()}>&lt;menu/&gt;</h3>
                <nav className="menu">
                    <p onClick={()=> this.clickItem()}>&lt;close/&gt;</p>
                    <ol>
                        <li className="menu-item"><a href="#0">Home</a></li>
                        <li className="menu-item"><a href="#0">About</a></li>
                        <li className="menu-item">
                            <a href="#0">Widgets</a>
                            <ol className="sub-menu">
                                <li className="menu-item"><a href="#0">Big Widgets</a></li>
                                <li className="menu-item"><a href="#0">Bigger Widgets</a></li>
                                <li className="menu-item"><a href="#0">Huge Widgets</a></li>
                            </ol>
                        </li>
                        <li className="menu-item">
                            <a href="#0">Kabobs</a>
                            <ol className="sub-menu">
                                <li className="menu-item"><a href="#0">Shishkabobs</a></li>
                                <li className="menu-item"><a href="#0">BBQ kabobs</a></li>
                                <li className="menu-item"><a href="#0">Summer kabobs</a></li>
                            </ol>
                        </li>
                        <li className="menu-item"><a href="#0">Contact</a></li>
                    </ol>
                </nav> */}
            </div>
        );
    }
}

export default Menu;