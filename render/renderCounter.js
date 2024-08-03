import {Counter} from "../counter/component/Counter.js";

const root = document.getElementById('root')

export function renderCounter() {
    root.innerHTML = ''
    root.append(Counter())
}