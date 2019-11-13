import React, { Component } from 'react';
import $ from 'jquery';
import './InsertionSort.css';
class InsertionSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Insertion Sort';
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

    toLeft(pos) {
        $("#cus-div-id-" + pos).animate({ "right": "+=100px" }, 2000);
    }

    toRight(pos) {
        $("#cus-div-id-" + pos).animate({ "left": "+=100px" }, 2000);
    }

    goDown(pos) {
        $("#cus-div-id-" + pos).animate({ "top": "-=100px" }, 2000);
    }

    sort = async (arr) => {
        let valueToInsert;
        let holePosition;
        let arr2 = arr.map((value, key) => {
            return [key, value]
        })

        for (let i = 1; i < arr2.length; i++) {

            valueToInsert = arr2[i];
            holePosition = i;
            this.goUp(holePosition)
            await this.timer(2000)
            while (holePosition > 0 && arr2[holePosition - 1][1] > valueToInsert[1]) {

                this.toLeft(i, 3)
                await this.timer(2000)

                arr2[holePosition] = arr2[holePosition - 1];

                this.toRight(arr2[holePosition - 1][0], 3)
                await this.timer(2000)

                holePosition--;
            }

            if (holePosition !== i) {
                arr2[holePosition] = valueToInsert;
            }
            this.goDown(i);
            await this.timer(2000)
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

export default InsertionSort;