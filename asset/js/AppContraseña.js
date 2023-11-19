const codigo1 = document.querySelector ("#numeral1")
const codigo2 = document.querySelector ("#numeral2")
const codigo3 = document.querySelector ("#numeral3")
const resultado = document.querySelector ("#respuesta")
const boton = document.querySelector ("#Boton")

boton.addEventListener("click", () => {

    if (codigo1.value == "9" && codigo2.value == "1" && codigo3.value == "1") {
        resultado.innerHTML = "Contraseña 1 Correcta"
    } else if (codigo1.value == "7" && codigo2.value == "1" && codigo3.value == "4") {
        resultado.innerHTML = "Contraseña 2 Correcta"
    } else {
        resultado.innerHTML = "Contraseña Incorrecta"
    }
})
