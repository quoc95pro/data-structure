import React, { Component } from 'react';
import $ from 'jquery';
import './QuickSort.css';
class QuickSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Quick Sort'
        this.inputArr = [14, 33, 27, 35, 10, 30, 16];
        this.arr2 = this.inputArr.map((value, key) => [key, value]);
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

    // ham de trao doi gia tri
    swap(num1, num2) {
        let temp = this.arr2[num1];
        this.arr2[num1] = this.arr2[num2];
        this.arr2[num2] = temp;
    }

    // ham de chia mang thanh 2 phan, su dung phan tu chot (pivot)
    partition(left, right, pivot) {
        let leftPointer = left - 1;
        let rightPointer = right;

        while (true) {

            while (this.arr2[++leftPointer][1] < pivot[1]) {
                //khong lam gi
            }

            while (rightPointer > 0 && this.arr2[--rightPointer][1] > pivot[1]) {
                //khong lam gi
            }

            if (leftPointer >= rightPointer) {
                break;
            } else {
                //console.log(" Phan tu duoc trao doi :%d,%d\n", this.inputArr[leftPointer], this.inputArr[rightPointer]);
                this.swap(leftPointer, rightPointer);
            }

        }

        //console.log(" Phan tu chot duoc trao doi :%d,%d\n", this.inputArr[leftPointer], this.inputArr[right]);
        this.swap(leftPointer, right);
        //console.log("Hien thi mang sau moi lan trao doi: ");
        return leftPointer;
    }

    // ham sap xep
    quickSort(left, right) {
        if (right - left <= 0) {
            return;
        } else {
            let pivot = this.arr2[right];
            let partitionPoint = this.partition(left, right, pivot);
            this.quickSort(left, partitionPoint - 1);
            this.quickSort(partitionPoint + 1, right);
        }
    }

    sort = async () => {
        this.quickSort(0, this.inputArr.length - 1);
        console.log(this.arr2);
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

export default QuickSort;