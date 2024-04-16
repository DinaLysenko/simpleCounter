import {data} from "../../../data/data.js";

export function Header() {
    let header = document.createElement('h1')
    header.innerText = data.title
    return header
}