import React from 'react'
import ReactDOM from 'react-dom'
import requestUtil from '../../fetch.js'
import {BrowserRouter, Router, Route, Link} from 'react-router-dom'
import PsgInfo from './psgInfo'
import {hashHistory} from 'react-router'
import createHistory from 'history/createBrowserHistory'
const history = createHistory();

export default class PsgList extends React.Component {

    constructor() {
        super();
        this.goPsgInfo = this.goPsgInfo.bind(this);
        this.state = {psgObj:{}};
    }


    goPsgInfo = (obj) => {
        // e.preventDefault();
        console.log("选中的是")
        console.log(obj);
        obj.flag = true;
        this.setState({psgObj:obj})
        // history.push({
        //     pathname: '/Passenger/PsgInfo',
        //     query: {
        //         psgObj:obj
        //     },
        // })
    }
   
    render() {
        const numbers = this.props.psgList||[];
        console.log(numbers);
        // const posts = [
        //     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        //     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
        // ];
        return (
            <div>
                    <div>
                        <h2>乘客</h2>
                        {numbers.map((item) => 
                            <div key={item.pkmemberContactId} onClick={this.goPsgInfo.bind(this,item)}>{item.name}</div>
                            // <PsgName data={item}/>
                            // return <div key={item.pkmemberContactId} onClick={()=>this.goPsgInfo(item)}>{item.name}</div>

                        )}
                    </div>
                    <PsgInfo psgObj={this.state.psgObj}/>
            </div>
            
        )
    }
}




