import React, { Component } from 'react';
import $ from 'jquery';
import './BucketSort.css';
class BucketSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Bucket Sort'
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

    // Implement bucket sort
     bucketSort(array, bucketSize) {
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
        let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
        let allBuckets = new Array(bucketCount);

        for (i = 0; i < allBuckets.length; i++) {
            allBuckets[i] = [];
        }

        // Pushing values to buckets
        array.forEach(function (currentVal) {
            allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
        });

        // Sorting buckets
        array.length = 0;
       
        allBuckets.forEach(function (bucket) {
            let length = bucket.length;

            for (let i = 1; i < length; i++) {
                let temp = bucket[i];
                for (var j = i - 1; j >= 0 && bucket[j] > temp; j--) {
                    bucket[j + 1] = bucket[j];
                }
                bucket[j + 1] = temp;
            }
            bucket.forEach(function (element) {
                array.push(element)
            });
        });

        return array;
    }

  


    sort = async (arr) => {
        let arr2 = this.bucketSort(arr);
        console.log(arr2);

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

export default BucketSort;