import React, { Component } from 'react';
import $ from 'jquery';
import './HeapSort.css';
class HeapSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Heap Sort'
        this.arr_length = null;
        this.state = {
            inputArr: [14, 33, 27, 35, 10, 30, 16],
            disableRandom: false
        }
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
        $("#cus-div-id-" + pos).animate({ "right": "+=100px" }, 2000);
    }

    toRight(pos) {
        $("#cus-div-id-" + pos).animate({ "right": "-=100px" }, 2000);
    }

    goDown(pos) {
        $("#cus-div-id-" + pos).animate({ "top": "-=200px" }, 2000);
    }
    async heap_root(input, i) {
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
            await this.swap(input, i, max);
            await this.heap_root(input, max);
        }
    }

    async swap(input, index_A, index_B) {
        var temp = input[index_A];
        
        $("#cus-div-id-" + index_A).animate({ "top": "-50px" }, 500);
        $("#cus-div-id-" + index_A).animate({ "left": +(index_B - index_A) * 100 + "px" }, 1000);
        $("#cus-div-id-" + index_A).animate({ "top": "0px" }, 500);

        $("#cus-div-id-" + index_B).animate({ "top": "50px" }, 500);
        $("#cus-div-id-" + index_B).animate({ "left": +(index_A - index_B) * 100 + "px" }, 1000);
        $("#cus-div-id-" + index_B).animate({ "top": "0px" }, 500);
        await this.timer(2000);
        input[index_A] = input[index_B];
        input[index_B] = temp;
        this.setState(() => {
            return {
                inputArr: input
            }
        })

        $("#cus-div-id-" + index_A).css("left", "0");
        $("#cus-div-id-" + index_B).css("left", "0");
        await this.timer(3000);
    }

    sort = async (arr) => {
        this.setState(() => {
            return {
                disableRandom: true
            }
        })
        this.array_length = arr.length;
        for (var i = Math.floor(this.array_length / 2); i >= 0; i -= 1) {
            await this.heap_root(arr, i);
        }

        for (i = arr.length - 1; i > 0; i--) {
            await this.swap(arr, 0, i);
            this.array_length--;
            await this.heap_root(arr, 0);
        }
        this.setState(() => {
            return {
                disableRandom: false
            }
        })
    }

    randomArray() {
        let init = [];
        let size = Math.floor(Math.random() * (10 - 8)) + 8;
        for (let i = 0; i < size; i++) {
            init.push(Math.floor(Math.random() * (30 - 1)) + 1);
        }
        this.setState(() => {
            return {
                inputArr: init
            }
        })
    }

    render() {
        return (
            <div>
                <p><b>Note: </b>{this.title}</p>
                <p><button onClick={() => this.sort(this.state.inputArr)} className='btn btn-primary'>Sort</button></p>
                <p><button disabled={this.state.disableRandom} onClick={() => this.randomArray()} className='btn btn-primary'>Random Array</button></p>
                {this.initArray(this.state.inputArr)}
            </div>
        );
    }
}

export default HeapSort;