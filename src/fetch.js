
export function myFetch(cmd,paramData){
    let url = "https://smartapp.changtu.com/trip8080_mobile_new/mobile/mainNewRequest.htm";
    paramData['orderChannel'] = "1";
    paramData['orderChannel'] = "10032";

    let params = paramData;
    let reqObj = JSON.stringify({cmd: cmd, params: params})
    let reqStr = {
        reqStr: reqObj,
        wx_flag: "1"
    }
    let reqData = '';
    let item;
    for (item in reqStr) {
        reqData += '&' + item + '=' + reqStr[item];
    }

    if (reqData) {
        reqData = reqData.slice(1);
    }
    let result = {};
    fetch(url, {
        method: 'post',
        mode: 'cors',
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: reqData
    }).then((response) => {
        if (response.status != 200) {
            return result;
        }
        response.json().then((responseJson) => {
            return responseJson;
        })
    })

}