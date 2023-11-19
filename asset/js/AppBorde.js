//no se si es una mala practica usar las funciones de esta forma, esta la consegui en internet pero aun asi lo entrego de esta forma porque tengo una confusion inmensa para aplicar addevent, la aplicaicon de if y else no son problema porque me base en el ejemplo de la anterior clase y respondio.
function toggleBorder() {
    const element = document.querySelector('.Sticker')
    const currentBorder = element.style.border

    if (currentBorder === '2px solid red') {
        element.style.border = '0px'
    } else {
        element.style.border = '2px solid red'
    }
}
