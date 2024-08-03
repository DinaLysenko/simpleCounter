import {data} from "../../../data/data.js";

export function CurrentValue(){
    const container=document.createElement('div')
    container.classList.add('current-value')
    const span=document.createElement('span')
    span.innerText = `${data.currentValue}`
    container.append(span)
    return container
}