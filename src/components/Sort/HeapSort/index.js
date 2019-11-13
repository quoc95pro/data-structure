import React, { Component } from 'react';
import $ from 'jquery';
import './HeapSort.css';
class HeapSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Heap Sort'
        this.inputArr = [14, 33, 27, 35, 10, 30, 16];
        this.arr_length = null;
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
    heap_root(input, i) {
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var max = i;

        if (left < this.array_length && input[left] > input[max]) {
            max = left;
        }

        if (right < this.array_length && input[right] > input[max]) {
            max = right;
        }

        if (max !== i) {
            this.swap(input, i, max);
            this.heap_root(input, max);
        }
    }

    swap(input, index_A, index_B) {
        var temp = input[index_A];

        input[index_A] = input[index_B];
        input[index_B] = temp;
    }

    heapSort(input) {

        this.array_length = input.length;

        for (var i = Math.floor(this.array_length / 2); i >= 0; i -= 1) {
            this.heap_root(input, i);
        }

        for (i = input.length - 1; i > 0; i--) {
            this.swap(input, 0, i);
            this.array_length--;
            this.heap_root(input, 0);
        }
    }
    sort = async (arr) => {
        this.heapSort(arr);
        console.log(arr);
        
    }

    render() {
        return (
            <div>
                <p><b>Note: </b>{this.title}</p>
                {this.initArray(this.inputArr)}
                <button onClick={() => this.sort(this.inputArr)}>ok</button>
            </div>
        );
    }
}

export default HeapSort;