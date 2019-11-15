import React, { Component } from 'react';
import $ from 'jquery';
import './RadixSort.css';
class RadixSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Radix Sort'
        this.state = {
            inputArr: [14, 33, 27, 35, 10, 30, 16, 13],
            countArr: [],
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
    valueToString(v) {
        let rs = '';
        v.forEach((value, key) => {
            rs += (key !== 0 ? ',' : '') + value + ((key + 1) / 2 === 1 ? ' ' : '');
        });
        return rs;
    }
    initBucketArray = (arr) => {
        return arr.map((value, key) => {
            return (
                <div key={key} className={(key === 0 ? 'cus-div-buckets-left' : 'cus-div-buckets-right')} id={('cus-div-bucket-id-' + key)}>{this.valueToString(value)}</div>
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
        // Find the max number and multiply it by 10 to get a number
        // with no. of digits of max + 1
        const maxNum = Math.max(...arr) * 10;
        let divisor = 10;
        while (divisor < maxNum) {
            // Create bucket arrays for each of 0-9
            let buckets = [...Array(10)].map(() => []);
            this.setState(() => {
                return {
                    countArr: buckets
                }
            })
            await this.timer(2000);
            // For each number, get the current significant digit and put it in the respective bucket
            for (let num of arr) {
                buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
                this.setState(() => {
                    return {
                        countArr: buckets
                    }
                })
                await this.timer(1000);
            }
            // Reconstruct the array by concatinating all sub arrays
            arr = [].concat.apply([], buckets);
            // eslint-disable-next-line
            this.setState(() => {
                return {
                    inputArr: arr
                }
            })
            await this.timer(2000);
            console.log(buckets);
            console.log(arr);
            // Move to the next significant digit
            divisor *= 10;
        }
        this.setState(() => {
            return { disableRandom: false }
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
                <div style={{ clear: 'both', paddingTop: '10px' }} id='outPut'>Bucket :
                <div style={{ clear: 'both', paddingTop: '10px' }} id='countArray'>{this.initBucketArray(this.state.countArr)}</div>
                    <div>
                        <pre>
                            <code></code>
                        </pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default RadixSort;