import {Header} from "../counter/component/header/Header.js";
import {Main} from "../counter/component/main/Main.js";
import {Button} from "../counter/component/button/Button.js";
import {decButton, incButton} from "../data/data.js";

const root = document.getElementById('root')

export function renderCounter() {
    root.innerHTML = ''
    root.append(Header(),
        Main(),
        Button('inc', incButton),
        Button('dec', decButton))
}