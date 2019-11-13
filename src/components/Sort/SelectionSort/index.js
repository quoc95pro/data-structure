import React, { Component } from 'react';
import $ from 'jquery';
import './SelectionSort.css';
class SelectionSort extends Component {
    constructor(props) {
        super(props);
        this.title = 'Selection Sort'
        this.inputArr = [14, 33, 27, 35, 10, 30, 16];
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
        $("#cus-div-id-" + pos).animate({ "top": "+=100px" }, 2000);
    }

    toLeft(pos, i) {
        $("#cus-div-id-" + pos).animate({ "left": "-="+100*i+"px" }, 2000);
    }

    toRight(pos, i) {
        $("#cus-div-id-" + pos).animate({ "left": "+="+100*i+"px" }, 2000);
    }

    goDown(pos) {
        $("#cus-div-id-" + pos).animate({ "top": "-=100px" }, 2000);
    }

    sort = async (arr) => {
         let  arr2 = arr.map((value, key) => [key, value]);
         for (let i = 0; i < arr2.length; i++) {
            let min = i;
            this.goUp(arr2[i][0]);
            for (let j = i+1; j < arr2.length; j++) {
                
                if (arr2[min][1] > arr2[j][1]) {
                    min = j;
                }
            }
            this.toRight(arr2[i][0],min-i);
            this.goDown(arr2[i][0]);

            if((min-i) > 0){
                this.goUp(arr2[min][0]);
            this.toLeft(arr2[min][0],min-i);
            this.goDown(arr2[min][0]);
            }
            await this.timer(6000);
            let temp = arr2[i];
            arr2[i] = arr2[min];
            arr2[min] = temp;           
        }

        this.inputArr = arr2.map(x => x[1]);
        for (let i = 0; i < arr2.length; i++) {
            $("#cus-div-id-" + i).css("top", "0");
            $("#cus-div-id-" + i).css("left", "0");
            $("#cus-div-id-" + i).css("right", "0");
            $("#cus-div-id-" + i).html(arr2[i][1]);
        }
    }

    render() {
        return (
            <div>
                <p><b>Note: </b>{this.title}</p>
                <p><button onClick={() => this.sort(this.inputArr)} className='btn btn-primary'>Sort</button></p>
                {this.initArray(this.inputArr)}
            </div>
        );
    }
}

export default SelectionSort;