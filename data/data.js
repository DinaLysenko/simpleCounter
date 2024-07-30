export let data = {
    currentValue: 0,
    maxValue: 10
}

function onChangeCallback() {

}

export function incButton() {
    data.currentValue++
    onChangeCallback()
}
export function decButton() {
    data.currentValue--
    onChangeCallback()
}

export function setCountValue(onChangeValue) {
    onChangeCallback = onChangeValue
}
