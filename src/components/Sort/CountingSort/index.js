import React, { Component } from 'react';
import $ from 'jquery';
import './CountingSort.css';
class CountingSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Counting Sort'
        this.state = {
            k: 0,
            countArr: [],
            inputArr: [14, 33, 27, 35, 10, 30, 16],
            outPutArr: [],
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

    initCountArray = (arr) => {
        return arr.map((value, key) => {
            //return `<div class='${(key === 0 ? 'cus-div-count-left' : 'cus-div-count-right')}' id='cus-div-count-id-${key}' >${value}</div>`
            return (
                <div key={key} className={(key === 0 ? 'cus-div-count-left' : 'cus-div-count-right')} id={('cus-div-count-id-' + key)}>{value}</div>
            )
        })
    }

    initOutPutArray = (arr) => {
        return arr.map((value, key) => {
            //return `<div class='${(key === 0 ? 'cus-div-count-left' : 'cus-div-count-right')}' id='cus-div-count-id-${key}' >${value}</div>`
            return (
                <div key={key} className={(key === 0 ? 'cus-div-out-left' : 'cus-div-out-right')} id={('cus-div-out-id-' + key)}>{value}</div>
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
        this.setState(() => {
            return { disableRandom: true }
        })
        let output = []; // The output will have sorted input array
        let max = arr[0];
        let min = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max)
                max = arr[i];
            else if (arr[i] < min)
                min = arr[i];
        }

        let k = max - min + 1;
        this.setState(() => {
            return { k: k }
        })
        let count_array = [];
        for (let i = 0; i < k; i++)
            count_array[i] = 0;

        this.setState(() => {
            return { countArr: count_array }
        })
        await this.timer(3000);

        for (let i = 0; i < arr.length; i++) {
            count_array[arr[i] - min]++;
            this.setState(() => {
                return { countArr: count_array }
            })
            await this.timer(1000);
        }

        for (let i = 1; i < k; i++) {
            count_array[i] += count_array[i - 1];
            this.setState(() => {
                return { countArr: count_array }
            })
            await this.timer(1000);
        }

        for (let i = 0; i < arr.length; i++) {
            output[count_array[arr[i] - min] - 1] = arr[i];
            count_array[arr[i] - min]--;
            this.setState(() => {
                return {
                    countArr: count_array,
                    outPutArr: output
                }
            })
            await this.timer(1000);
        }
        await this.timer(3000);
        for (let i = 0; i < arr.length; i++)
            arr[i] = output[i];

        this.setState(() => {
            return {
                inputArr: arr,
                disableRandom: false
            }
        })
    }

    randomArray() {
        let init = [], out = [];
        let size = Math.floor(Math.random() * (10 - 8)) + 8;
        for (let i = 0; i < size; i++) {
            init.push(Math.floor(Math.random() * (30 - 1)) + 1);
            out.push(null);
        }
        this.setState(() => {
            return {
                countArr: [],
                outPutArr: out,
                inputArr: init
            }
        })
    }

    render() {
        let code = `sort = async (arr) => {  
            let output = []; // The output will have sorted input array
            let max = arr[0];
            let min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max)
                                max = arr[i];
                else if (arr[i] < min)
                                min = arr[i];
                        }

            let k = max - min + 1;
            let count_array = [];
            for (let i = 0; i < k; i++)
                    count_array[i] = 0;
    

            for (let i = 0; i < arr.length; i++) 
                count_array[arr[i] - min]++;
    

            for (let i = 1; i < k; i++)
                count_array[i] += count_array[i - 1];


            for (let i = 0; i < arr.length; i++) {
                output[count_array[arr[i] - min] - 1] = arr[i];
                count_array[arr[i] - min]--;
            }

            for (let i = 0; i < arr.length; i++)
                arr[i] = output[i];
        }`;
        return (
            <div>
                <p><b>Note: </b>{this.title}</p>
                <p><button onClick={() => this.sort(this.state.inputArr)} className='btn btn-primary'>Sort</button></p>
                <p><button disabled={this.state.disableRandom} onClick={() => this.randomArray()} className='btn btn-primary'>Random Array</button></p>
                <p>K = {this.state.k}</p>
                <div>{this.initArray(this.state.inputArr)}</div>
                <div style={{ clear: 'both', paddingTop: '10px' }} id='countArray'>{this.initCountArray(this.state.countArr)}</div>
                <div style={{ clear: 'both', paddingTop: '10px' }} id='outPut'>Output :
                <div>{this.initOutPutArray(this.state.outPutArr)}</div>
                    <div>
                        <pre>
                            <code>{code}</code>
                        </pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountingSort;