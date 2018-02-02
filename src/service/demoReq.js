import { fetchCtw } from "../requestUtil";

export function queryOftenContactReq(reqData) {
    reqData.cmd = 'queryOftenContact';
    return fetchCtw(reqData,"POST");
}