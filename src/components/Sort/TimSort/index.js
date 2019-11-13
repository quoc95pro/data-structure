import React, { Component } from 'react';
import $ from 'jquery';
import './TimSort.css';
class TimSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Tim Sort'
        this.inputArr = [14, 33, 27, 35, 10, 30, 16];
        this.RUN = 32;
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

    insertionSort(arr, left, right) {
        for (let i = left + 1; i <= right; i++) {
            let temp = arr[i];
            let j = i - 1;
            while (arr[j] > temp && j >= left) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = temp;
        }
    }

    // merge function merges the sorted runs 
    merge(arr, l, m, r) {
        // original array is broken in two parts 
        // left and right array 
        let len1 = m - l + 1, len2 = r - m;
        let left = [], right = [];
        for (let i = 0; i < len1; i++)
            left[i] = arr[l + i];
        for (let i = 0; i < len2; i++)
            right[i] = arr[m + 1 + i];

        let i = 0;
        let j = 0;
        let k = l;

        // after comparing, we merge those two array 
        // in larger sub array 
        while (i < len1 && j < len2) {
            if (left[i] <= right[j]) {
                arr[k] = left[i];
                i++;
            }
            else {
                arr[k] = right[j];
                j++;
            }
            k++;
        }

        // copy remaining elements of left, if any 
        while (i < len1) {
            arr[k] = left[i];
            k++;
            i++;
        }

        // copy remaining element of right, if any 
        while (j < len2) {
            arr[k] = right[j];
            k++;
            j++;
        }
    }

    // iterative Timsort function to sort the 
    // array[0...n-1] (similar to merge sort) 
    timSort(arr, n) {
        // Sort individual subarrays of size RUN 
        for (let i = 0; i < n; i += this.RUN)
            this.insertionSort(arr, i,((i + 31)-(n-1)) > 0 ? (n-1): (i + 31) );
        // start merging from size RUN (or 32). It will merge 
        // to form size 64, then 128, 256 and so on .... 
        for (let size = this.RUN; size < n; size = 2 * size) {
            // pick starting point of left sub array. We 
            // are going to merge arr[left..left+size-1] 
            // and arr[left+size, left+2*size-1] 
            // After every merge, we increase left by 2*size 
            for (let left = 0; left < n; left += 2 * size) {
                // find ending point of left sub array 
                // mid+1 is starting point of right sub array 
                let mid = left + size - 1;
                let right = ((left + 2 * size - 1)-  (n - 1)) > 0 ? (n - 1) : (left + 2 * size - 1);

                // merge sub array arr[left.....mid] & 
                // arr[mid+1....right] 
                this.merge(arr, left, mid, right);
            }
        }
    }

    sort = async (arr) => {
        this.timSort(arr, arr.length);
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

export default TimSort;