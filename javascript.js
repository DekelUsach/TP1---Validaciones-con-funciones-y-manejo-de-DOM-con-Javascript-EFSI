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

    if (notaMates.value < 0 || notaMates.value > 10 || NoLetras(notaMates.value) == false) {
        if (NoLetras(notaMates.value) == false) {
            avisoMates.innerHTML = "¡No debes usar letras!"
            
        }
        else
        avisoMates.innerHTML = "Numero positivo y menor a 10"

        avisoMates.id = "avisoRed"
    }
    else {
        avisoMates.innerHTML = "Numero positivo y menor a 10"
        avisoMates.id = "avisoGreen"

    }
    if(notaMates.value == ""){
        avisoMates.id = ""
    }

})

// Lengua

notaLengua.addEventListener("input", () => {
    if (notaLengua.value < 0 || notaLengua.value > 10 || NoLetras(notaLengua.value) == false) {
        if (NoLetras(notaLengua.value) == false) {
            avisoLengua.innerHTML = "¡No debes usar letras!"
        }
        else
            avisoLengua.innerHTML = "Numero positivo y menor a 10"

        avisoLengua.id = "avisoRed"
    }
    else {
        avisoLengua.innerHTML = "Numero positivo y menor a 10"
        avisoLengua.id = "avisoGreen"
    }
    if(avisoLengua.value == ""){
        avisoLengua.id = ""
    }
})




// Efsi
notaEFSI.addEventListener("input", () => {
    if (notaEFSI.value < 0 || notaEFSI.value > 10 || NoLetras(notaEFSI.value) == false) {
        if (NoLetras(notaEFSI.value) == false) {
            avisoEFSI.innerHTML = "¡El numero no debe ser letra!"
        }
        else
            avisoEFSI.innerHTML = "Numero positivo y menor a 10"

        avisoEFSI.id = "avisoRed"
    }
    else {
        avisoEFSI.innerHTML = "Numero positivo y menor a 10"
        avisoEFSI.id = "avisoGreen"

    }
    if(avisoEFSI.value == "")
    avisoEFSI.id = ""
})



// Botones
// Promedio
btnPromedio.addEventListener("click", (event) => {

    if ((notaMates.value < 0 || notaMates.value > 10 || notaMates.value == "") || (notaLengua.value < 0 || notaLengua.value > 10 || notaLengua.value == "") || (notaEFSI.value < 0 || notaEFSI > 10 || notaEFSI.value == "") ) {
        event.preventDefault();
    }

    else {
        let promedio = ((parseInt(notaMates.value) + parseInt(notaLengua.value) + parseInt(notaEFSI.value))) / 3;
        if (promedio >= 6) {
            avisoResultado.innerHTML = `<p  style= "color: green;">El promedio es ${promedio}</p>`
        }
        else {
            avisoResultado.innerHTML = `<p style= "color: red;">El promedio es ${promedio}</p>`
        }
    }
    if (notaMates.value == "" || notaLengua.value == "" || notaEFSI.value == "") {
        avisoGeneral.innerHTML = `<p>"Todos los campos deben estar llenos!"</p>`
        avisoResultado.innerHTML = ""
    }
    else if (notaMates.value != "" || notaLengua.value != "" || notaEFSI.value != "") {
        avisoGeneral.innerHTML = ""
    }



})

// Nota mas alta
btrNotaAlta.addEventListener("click", (event) => {
    avisoResultado.innerHTML = "";
    if ((notaMates.value < 0 || notaMates.value > 10 || notaMates.value == "") || (notaLengua.value < 0 || notaLengua.value > 10 || notaLengua.value == "") || (notaEFSI.value < 0 || notaEFSI > 10 || notaEFSI.value == "")) {
        event.preventDefault();
    }

    else {
        let mates = notaMates.value
        let lengua = notaLengua.value
        let efsi = notaEFSI.value

        const arrayNotas = [
            { materia: "Matemáticas", nota: mates },
            { materia: "Lengua", nota: lengua },
            { materia: "EFSI", nota: efsi }
        ];


        arrayNotas.sort(function (a, b) {
            return b.nota - a.nota;
        });

        let i = 0;
        arrayNotas.forEach(item => {
            i++;
            if (item == arrayNotas[0])
                avisoResultado.innerHTML += `<p id = "nota${i}" class="notas" style="color: blue;">${item.materia}: ${item.nota}</p> `;
            else
                avisoResultado.innerHTML += `<p class="notas" id = "nota${i}"style ="">${item.materia}: ${item.nota}</p>`;
        });
        if (arrayNotas[1].nota == arrayNotas[0].nota) {
            const nota = document.querySelector("#nota2")
            console.log(nota)
            nota.style.color = "blue";

        }

        if (arrayNotas[1].nota == arrayNotas[0].nota && arrayNotas[2].nota == arrayNotas[0].nota) {
            const nota2 = document.querySelector("#nota3")
            nota2.style.color = "blue";

        }



    }
    if (notaMates.value == "" || notaLengua.value == "" || notaEFSI.value == "") {
        avisoGeneral.innerHTML = `<p>"Todos los campos deben estar llenos!"</p>`
    }
    else if (notaMates.value != "" || notaLengua.value != "" || notaEFSI.value != "") {
        avisoGeneral.innerHTML = ""
    }
})


function NoLetras(texto) {
    return /^[^a-zA-Z]*$/.test(texto);
}