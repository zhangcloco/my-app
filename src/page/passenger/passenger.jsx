
import React from 'react';
// import {connect} from 'react-redux';
import PsgList from './psgList';
import {queryOftenContactReq} from '../../service/demoReq.js'


const USER_INFO = {
    "测试1": "LtYFboxfbjFuasOOaqOnOigGCVQhDEHwszOvqZxzKYyCRUqOyzsDvyvNPometEcTjUpQSMNkONpfCXUA" +
            "UJlyCCKHoBZjeaTtsoSk",
    "测试2": "HBXEdBCrGoWjSHaQghJSZzkMWvAhlhnqdwWGqbXitXdVEEMoPPUApQTexXlPjqijltpIixyZEmneDwBl" +
            "KVibyGUaUIVZRGRfQSdn",
    "测试3": "SJCdFMIYDApODIZMTfybZBRrtLOHNEaYglQKkXcljFLYqxSBLQKqBnAMUQkTQiwjlFZngCxClJAPyksF" +
            "cZyPsbkACAeAGYUUKkMW"
}

class Passenger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {userId:"111"};
        this.onChange = this.onChange.bind(this);
    }

    async onChange(event) {
        let params = {};
        params.userId = event.target.value;
        let returnObj = await queryOftenContactReq(params);
        console.log(returnObj);
        let detail = returnObj.detail||{};
        this.setState({
            psgList:detail.oftenContact
        });
        // this.setState({userId:event.target.value});
        // console.log(event.target.value);
    }

    componentDidMount() {//生命周期初始化
        const defaultUserId = Object.keys(USER_INFO)[3];
        this.setState({userId:USER_INFO[defaultUserId]});
    }

    render() {
        return (
            <div>
                <h2>用户</h2>
                    <select onChange={this.onChange}>
                        {
                        Object.keys(USER_INFO).map(
                            userName => <option key={userName} value={USER_INFO[userName]}>{userName}</option>
                        )
                        }
                    </select>
                <PsgList psgList={this.state.psgList}/>

            </div>
        );
    }
}    

export default Passenger;


