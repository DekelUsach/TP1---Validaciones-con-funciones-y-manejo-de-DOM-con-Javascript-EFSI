const notaMates = document.querySelector(".notaMates")
const notaLengua = document.querySelector(".notaLengua")
const notaEFSI = document.querySelector(".notaEFSI")
const formulario = document.querySelector(".formu")
// Avisos queryselector
const avisoMates = document.querySelector(".avisoMates")
const avisoLengua = document.querySelector(".avisoLengua")
const avisoEFSI = document.querySelector(".avisoEFSI")
const avisoGeneral = document.querySelector(".avisoGeneral")
const avisoResultado = document.querySelector(".avisoResultado")
// Botones
const btnPromedio = document.querySelector(".promedio")
const btrNotaAlta = document.querySelector(".notaAlta")


// Matematicas
notaMates.addEventListener("input", () => {

    if (notaMates.value < 0 || notaMates.value > 10) {
        avisoMates.innerHTML = "¡El numero debe ser positivo y menor a 10!"
    }
    else {
        avisoMates.innerHTML = "";
    }

})

// Lengua

notaLengua.addEventListener("input", () => {
    if (notaLengua.value < 0 || notaLengua.value > 10) {
        avisoLengua.innerHTML = "¡El numero debe ser positivo y menor a 10!"
    }
    else {
        avisoLengua.innerHTML = "";
    }
})




// Efsi
notaEFSI.addEventListener("input", () => {
    if (notaEFSI.value < 0 || notaEFSI.value > 10) {
        avisoEFSI.innerHTML = "¡El numero debe ser positivo y menor a 10!"
    }
    else {
        avisoEFSI.innerHTML = "";
    }

})



// Botones
btnPromedio.addEventListener("click", (event) => {

    if ((notaMates.value < 0 || notaMates.value > 10 || notaMates.value == "") || (notaLengua.value < 0 || notaLengua.value > 10 || notaLengua.value == "") || (notaEFSI.value < 0 || notaEFSI > 10 || notaEFSI.value == "")) {
        event.preventDefault();
    }

    else{
        avisoResultado.innerHTML = "El promedio es " + ((parseInt(notaMates.value) + parseInt(notaLengua.value)+ parseInt(notaEFSI.value))/3) 

    }
    if (notaMates.value == "" || notaLengua.value == "" || notaEFSI.value == "") {
        avisoGeneral.innerHTML = "Todos los campos deben estar llenos!"
    }
    else if (notaMates.value != "" || notaLengua.value != "" || notaEFSI.value != "") {
        avisoGeneral.innerHTML = ""
    }

    

})

btrNotaAlta.addEventListener("click",(event)=>
{
    if ((notaMates.value < 0 || notaMates.value > 10 || notaMates.value == "") || (notaLengua.value < 0 || notaLengua.value > 10 || notaLengua.value == "") || (notaEFSI.value < 0 || notaEFSI > 10 || notaEFSI.value == "")) {
        event.preventDefault();
    }
    else{
        
        
        let mates = notaMates.value
        let lengua = notaLengua.value
        let efsi = notaEFSI.value

        const arrayNotas = [mates,lengua,efsi]

        console.log(arrayNotas.sort(function(a,b){return b-a}))
        




    }
    if (notaMates.value == "" || notaLengua.value == "" || notaEFSI.value == "") {
        avisoGeneral.innerHTML = "Todos los campos deben estar llenos!"
    }
    else if (notaMates.value != "" || notaLengua.value != "" || notaEFSI.value != "") {
        avisoGeneral.innerHTML = ""
    }
})