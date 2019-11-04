import React, { Component } from 'react';
import './BubbleSort.css'
class BubbleSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'This example does not work in Internet Explorer 9 and earlier versions.'
        this.changePosition = this.changePosition.bind(this);
    }

    changePosition(pos1, pos2) {
        let cus_div_left = document.getElementById('cus-div-id-' + pos1);
        cus_div_left.className += " anim-left-to-right";
        let cus_div_right = document.getElementById('cus-div-id-' + pos2);
        cus_div_right.className += " anim-right-to-left";
        setTimeout(() => {
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

    sort = async (arr) => {
        let temp, check;
        do {
            check = true;
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i + 1] !== undefined && arr[i] > arr[i + 1]) {
                    this.changePosition(i, i+1);
                    await this.timer(4500);
                    temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    check = false;
                }
            }
        } while (check === false);
    }


    render() {
        let arr = [14, 33, 27, 35, 10, 30, 16];
        return (
            <div>
                <p><b>Note:</b>{this.title}</p>
                {this.initArray(arr)}
                <button onClick={() => this.sort(arr)}>ok</button>
            </div>
        );
    }
}

export default BubbleSort;