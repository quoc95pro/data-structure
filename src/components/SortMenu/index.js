import React, { Component } from 'react';
import './SortMenu.css';
// import $ from 'jquery';
import { Link } from 'react-router-dom';
class SortMenu extends Component {
    constructor(props) {
        super(props);
        this.c = 0;
    }

    menu() {
        if (this.c % 2 === 0) {
            document.querySelector('.cont_drobpdown_menu').className = "cont_drobpdown_menu active";
            document.querySelector('.cont_icon_trg').className = "cont_icon_trg active";
            this.c++;
        } else {
            document.querySelector('.cont_drobpdown_menu').className = "cont_drobpdown_menu disable";
            document.querySelector('.cont_icon_trg').className = "cont_icon_trg disable";
            this.cc++;
        }
    }
    render() {
        return (

            <div className="cont_principal">
                <div className="cont_menu">
                    <div className="cont_titulo_menu" onClick={()=> this.menu()}>
                        <div className="cont_titulo">
                            <h4>Sort Lists</h4>
                        </div>
                        <div className="cont_icon_menu">
                            <img src="http://danysantos.hol.es/img/planet.png" alt="" />
                            <div className="cont_circle_1"></div>
                            <div className="cont_circle_2"></div>
                            <div className="cont_circle_3"></div>
                            <div className="cont_circle_4"></div>
                        </div>
                    </div>
                    <div className="cont_icon_trg disable">
                    </div>
                    <div className="cont_drobpdown_menu disable" >

                        <ul>
                            <li><Link to="/SelectionSort">Selection Sort</Link></li>
                            <li><Link to="/BubbleSort">Bubble Sort</Link></li>
                            <li><Link to="/InsertionSort">Insertion Sort</Link></li>
                            <li><Link to="/CountingSort">Counting Sort</Link></li>
                        </ul>

                    </div>
                </div>
            </div>

        );
    }
}

export default SortMenu;