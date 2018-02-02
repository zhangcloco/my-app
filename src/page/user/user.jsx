import React from 'react'
import {connect} from 'react-redux'
import UserInfo from './userInfo'
import Login from '../login/login'
import {log_state} from '../../action/login.js'
import App from '../../components/banner/banner'
// import {push} from 'react-router-redux'

class User extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const {dispatch} = this.props
        dispatch(log_state())
        console.log(this.props.loginstate)
        //  const {dispatch} = this.props
        // dispatch(push('/Passenger'))
        
    }

    componentWillReceiveProps(nextProps){
        const {dispatch} = this.props  
        console.log(nextProps.loginstate)
        if(nextProps.loginstate === 1) {
           alert("登录成功")
        //    dispatch(push('/'))
        window.location.href = "./Passenger";
        }
	}

    render() {
        return (
            <div>
                <App />
                {this.props.loginstate === 1 && <UserInfo />}
                {this.props.loginstate !== 1 && <Login />}
            </div>
        )
    }
}

function mapStateToProps(userInfo) {
    let {login} = userInfo
    return login
}

export default connect(mapStateToProps)(User)