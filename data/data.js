export let data = {
    counterValue: 0,
    title: 'Counter'
}

function onChangeCallback() {

}

export function incButton() {
    data.counterValue++
    onChangeCallback()
}
export function decButton() {
    data.counterValue--
    onChangeCallback()
}

export function setCountValue(onChangeValue) {
    onChangeCallback = onChangeValue
}
