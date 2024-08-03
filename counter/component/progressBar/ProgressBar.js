import {data} from "../../../data/data.js";

export function ProgressBar() {
    const container = document.createElement('div')
    container.classList.add("progress-bar-container")
    const progressBar = document.createElement('div')
    progressBar.classList.add("progress-bar")
    progressBar.style.width = `${(data.currentValue / data.maxValue) * 100}%`
    container.append(progressBar)

    return container
}