import React, { Component } from 'react';
import $ from 'jquery';
import './ShellSort.css';
import _ from 'lodash';
class ShellSort extends Component {

    constructor(props) {
        super(props);
        this.title = 'Shell Sort'
        this.state = {
            k: 1,
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
        $("#cus-div-id-" + pos).animate({ "top": "+=100px" }, 1000);
    }

    toLeft(pos) {
        $("#cus-div-id-" + pos).animate({ "right": "+=100px" }, 1000);
    }

    toRight(pos) {
        $("#cus-div-id-" + pos).animate({ "right": "-=100px" }, 1000);
    }

    goDown(pos) {
        $("#cus-div-id-" + pos).animate({ "top": "-=100px" }, 1000);
    }

    sort = async (arr) => {
        let arr2 = arr.map((v, k) => [k, v]);
        let inner;
        let valueToInsert;
        let interval = 1;

        while (interval <= arr.length / 3) {
            interval = interval * 3 + 1;
        }
        this.setState(() => {
            return { k: interval, disableRandom: true }
        })

        while (interval > 0) {
            for (let outer = interval; outer < arr2.length; outer++) {
                valueToInsert = arr2[outer];
                inner = outer;
                // eslint-disable-next-line
                this.setState(() => {
                    return { k: interval }
                });
                let pos1 = 0, count = 0;
                while (inner > interval - 1 && arr2[inner - interval][1] >= valueToInsert[1]) {
                    pos1 = _.replace($("#cus-div-id-" + arr2[inner][0]).css('right'), 'px', '');
                    let pos = (arr2[inner - interval][0] - arr2[inner][0]) * 100 + parseInt(pos1);
                   
                    if(interval ===1 ){
                        this.toRight(arr2[inner - interval][0]);
                    } else {
                        $("#cus-div-id-" + arr2[inner - interval][0]).animate({ "right": "" + pos + "px" }, 2000);
                    }
                    
                    await this.timer(2000);
                    arr2[inner] = arr2[inner - interval];
                    inner -= interval;
                    count++;
                }
            
                if(interval === 1){
                     for (let i = 0; i < count; i++) {
                        this.toLeft(valueToInsert[0]);
                        await this.timer(2000);
                     }
                }else {
                     let pos3 = (valueToInsert[0] - arr2[inner][0]) * 100 + parseInt(pos1);
                     $("#cus-div-id-" + valueToInsert[0]).animate({ "right": "" + pos3 + "px" }, 2000);
                     await this.timer(2000);
                }
                     
                arr2[inner] = valueToInsert;
            }
            interval = (interval - 1) / 3;
        }

        this.setState(() => {
            return { inputArr: arr2.map(x => x[1]), disableRandom: false }
        })
        for (let i = 0; i < arr2.length; i++) {
            $("#cus-div-id-" + i).css("top", "0");
            $("#cus-div-id-" + i).css("right", "0");
        }

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
                <p>Interval = {this.state.k}</p>
                {this.initArray(this.state.inputArr)}
            </div>
        );
    }
}

export default ShellSort;