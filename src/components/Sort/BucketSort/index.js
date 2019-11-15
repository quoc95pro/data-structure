import React, { Component } from 'react';
import $ from 'jquery';
import './BucketSort.css';
class BucketSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Bucket Sort';
        this.state = {
            bucketSize: 5,
            inputArr: [14, 33, 27, 35, 10, 30, 16],
            bucketArr: [],
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

    initBucketArray = (arr) => {
        return arr.map((value, key) => {
            return value.map((val, k) => {
                return (
                    <div key={k} className={(k === 0 ? 'cus-div-bucket-left' : 'cus-div-bucket-right')} id={('cus-div-bucket-id-' + k)}>{val}</div>
                )
            })
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

    sort = async (array, bucketSize) => {
        this.setState(() => {
            return {
                disableRandom: true,
            }
        })

        if (array.length === 0) {
            return array;
        }

        // Declaring vars
        let i,
            minValue = array[0],
            maxValue = array[0];
        bucketSize = bucketSize || 5;

        // Setting min and max values
        array.forEach(function (currentVal) {
            if (currentVal < minValue) {
                minValue = currentVal;
            } else if (currentVal > maxValue) {
                maxValue = currentVal;
            }
        })

        // Initializing buckets
        let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1; //6
        let allBuckets = [];

        for (i = 0; i < bucketCount; i++) {
            allBuckets[i] = [];
        }
        

        for (let i = 0; i < array.length; i++) {
            allBuckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
            this.setState(() => {
                return {
                    bucketArr: allBuckets,
                }
            })
            await this.timer(1000);
        }

        // Sorting buckets
        this.setState((prev) => {
            return {
                inputArr: prev.inputArr.map(x => null),
            }
        })
        array.length = 0;
        await this.timer(2000);

        for (let i = 0; i < allBuckets.length; i++) {
            for (let k = 1; k < allBuckets[i].length; k++) {
                let temp = allBuckets[i][k];
                for (var j = k - 1; j >= 0 && allBuckets[i][j] > temp; j--) {
                    allBuckets[i][j + 1] = allBuckets[i][j];
                }
                allBuckets[i][j + 1] = temp;
                this.setState(() => {
                    return {
                        bucketArr: allBuckets,
                    }
                })
                await this.timer(1000);
            }

            for (let j = 0; j < allBuckets[i].length; j++) {
                array.push(allBuckets[i][j])
                this.setState(() => {
                    return {
                        inputArr: array,
                    }
                })
                await this.timer(1000);
            }

            this.setState(() => {
                return {
                    disableRandom: false,
                }
            })
        }
    }

    randomArray() {
        let init = [];
        let size = Math.floor(Math.random() * (10 - 8)) + 8;
        let bucketSize = Math.floor(Math.random() * (7 - 3)) + 3
        for (let i = 0; i < size; i++) {
            init.push(Math.floor(Math.random() * (30 - 1)) + 1);
        }
        this.setState(() => {
            return {
                bucketSize: bucketSize,
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
                <p>Bucket Size = {this.state.bucketSize}</p>
                {this.initArray(this.state.inputArr, this.state.bucketSize)}
                <div style={{ clear: 'both', paddingTop: '10px' }} id='outPut'>Bucket :
                    <div>{this.initBucketArray(this.state.bucketArr)}</div>
                </div>
            </div>
        );
    }
}

export default BucketSort;