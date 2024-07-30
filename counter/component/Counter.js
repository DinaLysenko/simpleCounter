import {Header} from "./header/Header.js";
import {Main} from "./main/Main.js";

export function Counter(){
    const container=document.createElement('div')
    container.classList.add('counter')
    container.append(Header(), Main())
    return container
}