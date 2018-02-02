import React from 'react';
import {Link} from 'react-router-dom';

export default class PsgInfo extends React.Component {
    render() {
        // let psgObj = this.props.location.query.psgObj||{};
        let psgObj = this.props.psgObj||{};
        console.log("展示的值")
        console.log(psgObj);
        if (psgObj.flag) {
            return (
                <div>
                <h2>详情</h2>
                <p>姓名：{psgObj.name}</p>
                <p>{psgObj.cardTypeName}：{psgObj.cardCode}</p>
                <p>生日：{psgObj.birthDay}</p>
                <p>手机号：{psgObj.mobile}</p>
                </div>
            )
        }else{
            return <div><h2>详情</h2></div>
        }
        
    }
}

// PsgInfo = (props= {}) => {
//     let flag = props.flag;
//     let psgObj = props.psgObj;
//     if(flag) {
//         return (
//             <div>
//               <p>姓名：{psgObj.name}</p>
//               <p>{psgObj.cardTypeName}：{psgObj.cardCode}</p>
//               <p>生日：{psgObj.birthDay}</p>
//               <p>手机号：{psgObj.mobile}</p>
//             </div>
//         )
//     }else{
//         return <div>暂无信息</div>
//     }
// }