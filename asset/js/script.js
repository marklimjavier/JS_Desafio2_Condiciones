const BotonCompra = document.querySelector('#BotonCompra')
const resultado = document.querySelector('#respuesta')

//recordatorio: lo mas comico de todo esto es que llevo desde el viernes haciendolo bien pero colocaba las const de suma fuera del addevent, aprovechar el martes para preguntar si los parentesis azules significa que estan tomando el valor
//sticker escogidos por mi sobrina, disculpa si se ven demasiado infantiles profe
BotonCompra.addEventListener('click', () => {
    const suma1 = document.querySelector('#suma1').value
    const suma2 = document.querySelector('#suma2').value
    const suma3 = document.querySelector('#suma3').value

const total = Number(suma1) + Number(suma2) + Number(suma3)
    if (total < 10) {
        resultado.innerHTML = "Llevas " + total + " sticker(s).";
      } else {
        resultado.innerHTML = "Llevas demasiados sticker.";
      }
})


