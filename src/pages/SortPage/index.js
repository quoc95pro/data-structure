import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//import TimSort from './../../components/Sort/TimSort';
//import QuickSort from './../../components/Sort/QuickSort';

import MergeSort from './../../components/Sort/MergeSort';

import HeapSort from './../../components/Sort/HeapSort';
import RadixSort from './../../components/Sort/RadixSort';
import ShellSort from './../../components/Sort/ShellSort';
import BucketSort from './../../components/Sort/BucketSort';
import CountingSort from './../../components/Sort/CountingSort';
import SelectionSort from './../../components/Sort/SelectionSort';
import BubbleSort from './../../components/Sort/BubbleSort';
import InsertionSort from './../../components/Sort/InsertionSort';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './SortPage.css'
import SortMenu from './../../components/SortMenu';


class SortPage extends Component {
    render() {
        return (
            <Router basename={`${process.env.PUBLIC_URL}/sort`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-3">
                            <SortMenu></SortMenu>
                        </div>

                        <div className="col-md-8 col-sm-8">
                            <Switch>
                                <Route exact path="/SelectionSort" component={SelectionSort} />
                                <Route exact path="/BubbleSort" component={BubbleSort} />
                                <Route exact path="/InsertionSort" component={InsertionSort} />
                                <Route exact path="/CountingSort" component={CountingSort} />
                                <Route exact path="/BucketSort" component={BucketSort} />
                                <Route exact path="/ShellSort" component={ShellSort} />
                                <Route exact path="/RadixSort" component={RadixSort} />
                                <Route exact path="/HeapSort" component={HeapSort} />
                                <Route exact path="/MergeSort" component={MergeSort} />
                                <Route render={() => <div>404 Page Not Found</div>} />
                            </Switch>
                        </div>
                    </div>


                </div>
            </Router>
        );
    }
}

export default SortPage;