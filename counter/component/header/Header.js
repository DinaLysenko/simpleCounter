import {data} from "../../../data/data.js";

export function Header() {
    let header = document.createElement('h1')
    header.classList.add('header')
    header.innerText = `MAX VALUE: ${data.maxValue}`
    return header
}