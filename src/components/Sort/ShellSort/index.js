import React, { Component } from 'react';
import $ from 'jquery';
import './ShellSort.css';
class ShellSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Shell Sort'
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
        let inner;
        let valueToInsert;
        let interval = 1;

        while (interval <= arr.length / 3) {
            interval = interval * 3 + 1;
        }

        while (interval > 0) {
            for (let outer = interval; outer < arr.length; outer++) {
                valueToInsert = arr[outer];
                inner = outer;
                console.log('outer : ' + outer);
                await this.timer(500);
                while (inner > interval - 1 && arr[inner - interval] >= valueToInsert) {
                    arr[inner] = arr[inner - interval];
                    inner -= interval;
                    console.log(interval + '-' + outer + '-' + inner);
                    await this.timer(500);
                }

                arr[inner] = valueToInsert;

            }
            interval = (interval - 1) / 3;
        }


    }

    render() {
        return (
            <div>
                <p><b>Note: </b>{this.title}</p>
                {/* {this.initArray(this.inputArr)} */}
                <button onClick={() => this.sort(this.inputArr)}>ok</button>
            </div>
        );
    }
}

export default ShellSort;