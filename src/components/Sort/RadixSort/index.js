import React, { Component } from 'react';
import $ from 'jquery';
import './RadixSort.css';
class RadixSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Radix Sort'
        this.inputArr = [14, 33, 27, 35, 10, 30, 16, 12];
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

     radixsort(arr) {
        // Find the max number and multiply it by 10 to get a number
        // with no. of digits of max + 1
        const maxNum = Math.max(...arr) * 10;
        let divisor = 10;
        while (divisor < maxNum) {
           // Create bucket arrays for each of 0-9
           let buckets = [...Array(10)].map(() => []);
           // For each number, get the current significant digit and put it in the respective bucket
           for (let num of arr) {
              buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
           }
           // Reconstruct the array by concatinating all sub arrays
           arr = [].concat.apply([], buckets);
           // Move to the next significant digit
           divisor *= 10;
        }
        return arr;
     }

    sort = async (arr) => {
        let arr2 = this.radixsort(arr);
        console.log(arr2);

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

export default RadixSort;