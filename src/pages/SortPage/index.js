import React, { Component } from 'react';
import BubbleSort from './../../components/Sort/BubbleSort';
//import InsertionSort from './../../components/Sort/InsertionSort';
import './SortPage.css'

class SortPage extends Component {
    render() {
        return (
            <div>
                SortPage
                <BubbleSort></BubbleSort>
                {/* <InsertionSort ></InsertionSort> */}
            </div>
        );
    }
}

export default SortPage;