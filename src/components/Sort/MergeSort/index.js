import React, { Component } from 'react';
import $ from 'jquery';
import './MergeSort.css';
//import _ from 'lodash';
class MergeSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Merge Sort'
        this.inputArr = [7, 2, 1, 4, 6, 5, 8, 7, 9];
        this.newPos = 0;
        this.newArr = 0;
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
        $("#cus-div-id-" + pos).animate({ "top": "+=20px" }, 2000);
    }

    toLeft(pos, i) {
        $("#cus-div-id-" + pos).animate({ "left": "-="+20*i+"px" }, 2000);
    }


    toRight(pos, i) {
        $("#cus-div-id-" + pos).animate({ "left": "+="+50*i+"px" }, 2000);
    }

    goDown(pos) {
        $("#cus-div-id-" + pos).animate({ "top": "-=20px" }, 2000);
    }

    async merge(leftArr, rightArr) {
        var sortedArr = [];
        var lArr = [];
        let rArr = [];
        lArr = await leftArr;
        rArr = await rightArr;

        while (lArr.length && rArr.length) {
            if (lArr[0][1] <= rArr[0][1]) {
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
           
           

            for (let i = 0; i < sortedArr.length; i++) {
               //let left = _.replace($("#cus-div-id-" + sortedArr[0]).css("left"),'px','')
             
                let newP = 0-50*(sortedArr[i][0])*2+50*(i)*2+this.newArr;
                   
            $("#cus-div-id-" + sortedArr[i][0]).animate({ "top": "+=50px" }, 2000);
            await this.timer(2000); 
            //$("#cus-div-id-" + e[0]).animate({ "left": "0px" }, 2000);
            $("#cus-div-id-" + sortedArr[i][0]).animate({ "left": newP+"px" }, 2000);  
            await this.timer(2000); 
            
            if(this.newPos === this.inputArr.length-1){
                this.newPos = 0;
               // this.newArr = 0;
            } else {
                this.newPos+=1;
            }
            }
            this.newArr +=(sortedArr.length*2)*50;
            this.newArr +=50;
            await this.timer(5000)
           
        return sortedArr;
    }

    sort = async (arr) => {
        if (arr.length < 2) {  
            return arr;
        }
        else {
            var midpoint = parseInt(arr.length / 2);
            var leftArr = arr.slice(0, midpoint);
            
            
            var rightArr = arr.slice(midpoint, arr.length);
            //console.log(arr);
        
            rightArr.forEach(e => {
                
                if(rightArr.length >= this.inputArr.length/2)
                    this.toRight(e[0], Math.log2(leftArr.length)+2)
                else
                    this.toRight(e[0], Math.log2(leftArr.length)+1)
            });
            
            await this.timer(4000);
            return await this.merge(await this.sort(leftArr),await this.sort(rightArr));
        }
    }

    render() {
        let arr2 = this.inputArr.map((value, key) => [key, value]);
        //console.log(arr2);
        let paddingLeft = {
           // paddingLeft:'360px'
        }
        return (
            <div style={paddingLeft}>
                <p><b>Note: </b>{this.title}</p>
                <div id='input'>
                    {this.initArray(this.inputArr)}
                </div>
                <div id='output'>
                    
                </div>
                <button onClick={() => this.sort(arr2)}>ok</button>
            </div>
        );
    }
}

export default MergeSort;