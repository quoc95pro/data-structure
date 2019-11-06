import React, { Component } from 'react';
import $ from 'jquery';
import './BubbleSort.css'
class BubbleSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Bubble Sort'
        this.changePosition = this.changePosition.bind(this);
    }

    changePosition(pos1, pos2) {
        let cus_div_left = document.getElementById('cus-div-id-' + pos1);
        cus_div_left.className += " anim-left-to-right";
        let cus_div_right = document.getElementById('cus-div-id-' + pos2);
        cus_div_right.className += " anim-right-to-left";
        setTimeout(() => {
            let temp = cus_div_left.innerHTML;
            cus_div_left.innerHTML = cus_div_right.innerHTML;
            cus_div_right.innerHTML = temp;
            cus_div_left.classList.remove("anim-left-to-right");
            cus_div_right.classList.remove("anim-right-to-left");
        }, 4000);
    }

    initArray = (arr) => {
        return arr.map((value, key) => {
            return (
                <div key={key} className={(key === 0 ? 'cus-div-left' : 'cus-div-right')} id={('cus-div-id-' + key)}>{value}</div>
            )
        })
    }

    timer(ms) {
        return new Promise(res => setTimeout(res, ms));
    }

    goUp(pos) {
        $("#cus-div-id-" + pos).animate({ "top": "+=200px" }, 2000);
    }

    toLeft(pos) {
        $("#cus-div-id-" + pos).animate({ "right": "+=200px" }, 2000);
    }

    toRight(pos) {
        $("#cus-div-id-" + pos).animate({ "left": "+=200px" }, 2000);
    }

    goDown(pos) {
        $("#cus-div-id-" + pos).animate({ "top": "-=200px" }, 2000);
    }

    sort = async (arr) => {
        let temp, check, arr2 = arr.map((value, key) => [key, value]);
        console.log(arr2);
        
        do {
            check = true;
            for (let i = 0; i < arr2.length - 1; i++) {
             
                if (arr2[i][1] > arr2[i + 1][1]) {
                    // this.changePosition(i, i+1);
                    this.goUp(arr2[i+1][0]);
                    this.toLeft(arr2[i+1][0]);
                    this.goDown(arr2[i+1][0]);
                    this.toRight(arr2[i][0]);
                    await this.timer(6000);
                    temp = arr2[i][1];
                    arr2[i][1] = arr2[i + 1][1];
                    arr2[i + 1][1] = temp;
                    check = false;
                    console.log(1);
                    
                }
            }
        } while (check === false);
    }


    render() {
        let arr = [14, 33, 27, 35, 10, 30, 16];
        return (
            <div>
                <p><b>Note: </b>{this.title}</p>
                {this.initArray(arr)}
                <button onClick={() => this.sort(arr)}>ok</button>
            </div>
        );
    }
}

export default BubbleSort;