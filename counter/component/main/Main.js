import {ButtonsContainer} from "../buttonsContainer/ButtonsContainer.js";
import {ProgressBar} from "../progressBar/ProgressBar.js";
import {CurrentValue} from "../currentValue/CurrentValue.js";


export function Main(){
    let container = document.createElement('main')
    container.classList.add('main')
    container.append(CurrentValue(), ProgressBar(), ButtonsContainer() )
    return container
}