import {data} from "../../../data/data.js";

export function Value(){
    let value = document.createElement('h2')
    value.append(data.counterValue)
    return value
}