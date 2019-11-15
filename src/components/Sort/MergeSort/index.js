import React, { Component } from 'react';
import $ from 'jquery';
import './MergeSort.css';
//import _ from 'lodash';
class MergeSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Merge Sort'
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

    merge(leftArr, rightArr) {
        var sortedArr = [];
        var lArr = [];
        let rArr = [];
        lArr = [...leftArr];
        rArr = [...rightArr];
        
        while (lArr.length && rArr.length) {
            if (lArr[0] <= rArr[0]) {
                sortedArr.push(lArr[0]);
                lArr = lArr.slice(1)
            } else {
                sortedArr.push(rArr[0]);
                rArr = rArr.slice(1)
            }
        }
        while (lArr.length)
            sortedArr.push(lArr.shift())
        while (rArr.length)
            sortedArr.push(rArr.shift())

        $("#outPut").append(`<p>${this.toDiv(sortedArr)}  <div style="float:left"> : is merged from : </div> ${this.toDiv(leftArr)} <div style="float:left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> ${this.toDiv(rightArr)}</p></br>`);                
        return sortedArr;
    }

    toDiv(arr){
        let p = ''
        arr.forEach(element => {
            p += '<div style="float:left" class="item">'+element+'</div>'
        });
        return p;
    }
    sort = (arr) => {
        if (arr.length < 2) {
            return arr;
        }
        else {
            var midpoint = parseInt(arr.length / 2);
            var leftArr = arr.slice(0, midpoint);
            var rightArr = arr.slice(midpoint, arr.length);
            console.log(leftArr.toString()+'        '+rightArr.toString() +': split from :'+ arr);
            $("#outPut").append(`<div>${this.toDiv(leftArr)} <div style="float:left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            ${this.toDiv(rightArr)} <div style="float:left">: split from :</div> ${this.toDiv(arr)}</div></br>`);
            return this.merge(this.sort(leftArr), this.sort(rightArr));
        }
    }

    render() {
        return (
            <div>
                <p><b>Note: </b>{this.title}</p>
                <p><button onClick={() => this.sort(this.state.inputArr)} className='btn btn-primary'>Sort</button></p>
                <p><button disabled={this.state.disableRandom} onClick={() => this.randomArray()} className='btn btn-primary'>Random Array</button></p>
                <div>{this.initArray(this.state.inputArr)}</div>
                <div id='outPut'></div>
            </div>
        );
    }
}

export default MergeSort;