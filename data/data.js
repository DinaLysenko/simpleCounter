export let data = {
    currentValue: 0,
    maxValue: 10
}

function onChangeCallback() {

}

export function incButton() {
    if(data.currentValue < data.maxValue) {
        data.currentValue++
    }
    onChangeCallback()
}
export function decButton() {
    if(data.currentValue > 0) {
        data.currentValue--
        console.log(data.currentValue)
    }

    onChangeCallback()
}

export function setCountValue(onChangeValue) {
    onChangeCallback = onChangeValue
}
