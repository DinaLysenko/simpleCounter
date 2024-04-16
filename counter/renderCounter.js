import {Header} from "./component/header/Header.js";
import {Value} from "./component/value/Value.js";
import {Button} from "./component/button/Button.js";

export function renderCounter(){
    document.body.innerText=''
    document.body.append(Header())
    document.body.append(Value())
    document.body.append(Button('inc'))
}