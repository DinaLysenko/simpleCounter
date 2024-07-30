

export function Main(){
    let container = document.createElement('main')
    container.classList.add('main')
    container.append(CurrentValue(), ProgressBar(), ButtonsContainer() )
    return container
}