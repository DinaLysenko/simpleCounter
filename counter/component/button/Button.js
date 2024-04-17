
export function Button(name, func){
    let button=document.createElement('button')
    button.append(name)
    button.addEventListener('click', func)
    return button
}