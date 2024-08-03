import {Button} from "./button/Button.js";
import {decButton, incButton} from "../../../data/data.js";

export function ButtonsContainer(){
    let container=document.createElement("div");
    container.classList.add("buttons_container")
    container.append(Button('увеличить', incButton), Button('сбросить', decButton))
    return container
}