let estudianteHogwarts={
    nombre: "",
    edad: "",
    familia: "",
    linaje: "",
    casa:"",
    animalPatronus:"",
    cualidades: "",
    expectoPatronus: function(){
        if(this.animalPatronus === ""){
            console.log("No puedo lanzar Expecto Patronum. !Aun no se cual es mi animal protector");
            console.log("Lo absorbe el Dementor, termina en la enfermeria")
        }else{
            console.log(`Expecto Patronum¡¡ !Aparece, ${this.animalPatronus}`)
        }
    },
    enfrentarDementor:function(){
        this.animalPatronus = defensaContraLasArtesOscuras.generarAnimalPatronus();
        console.log(`Un Dementor aparece`)
        this.expectoPatronus();
    }
};

function calcular(estudianteHogwarts) { 
estudianteHogwarts.nombre = document.getElementById("nombreEstudiante").textContent
    
}

let clases = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout"
    
};

let cena = {
    asignarCasa: function(estudiante) {
        // Determinar la casa según las cualidades y el linaje
        if (estudiante.cualidades.includes("Valor") || estudiante.cualidades.includes("Fuerza") || estudiante.cualidades.includes("Audacia")|| estudiante.linaje === "sangre pura"||estudiante.linaje==="muggle"||estudiante.linaje==="mestizo") {
            estudiante.casa = "Gryffindor";
        } else if (estudiante.cualidades.includes("Justicia") || estudiante.cualidades.includes("Lealtad") || estudiante.cualidades.includes("Paciencia")||estudiante.linaje==="muggle"||estudiante.linaje==="mestizo") {
            estudiante.casa = "Hufflepuff";
        } else if (estudiante.cualidades.includes("Creatividad") || estudiante.cualidades.includes("Erudiccion") || estudiante.cualidades.includes("Inteligencia")|| estudiante.linaje === "sangre pura"||estudiante.linaje==="muggle"||estudiante.linaje==="mestizo") {
            estudiante.casa = "Ravenclaw";
        } else if (estudiante.cualidades.includes("Ambicion") || estudiante.cualidades.includes("Determinacion") || estudiante.cualidades.includes("Astucia") || estudiante.linaje === "sangre pura") {
            estudiante.casa = "Slytherin";
        } else {
            console.log("No se puede determinar la casa. ¡El Sombrero Seleccionador está confundido!");
        }
    }
};


let claseTransformaciones = {
    profesor: clases.transformaciones,
    hora: "9 AM",
    boggartTransformado: null,

    realizarTransformacionRiddikulus: function(){
        if(this.boggartTransformado === null){
            console.log("¡un Boggart aparecion en la clase de transformaciones¡¡ ");


        }else{
            console.log(`!Riddikulus¡ El boggart se transforma y da risa. Es ahora un ${this.boggartTransformado.formaTransformada}`)
        }
    },
    enfrentarBoggart: function(boggart){
        console.log(`!Un boggart ha aprecido en la clase de Transformaciones¡`);
        console.log(` Forma original del boggart: ${boggart.formaOriginal}`);
        this.boggartTransformado={
            formaOriginal: boggart.formaOriginal,
            formaTransformada: "Payaso gracioso"
        };

        this.realizarTransformacionRiddikulus
    }
};

let boggartEjemplo = {
    formaOriginal: "Puerco araña"
}

claseTransformaciones.enfrentarBoggart(boggartEjemplo);

let defensaContraLasArtesOscuras = {
    profesor: clases.defensaContraLasArtesOscuras,
    hora: "10 AM",
    animalPatronus: ["Ciervo", "Aguila", "Dragon", "Fenix", "Tlacuache", "Libelula"],
    generarAnimalPatronus: function(){
        let indiceAleatorio = Math.floor(Math.random()* estudianteHogwarts.animalPatronus.length);
        return this.animalPatronus[indiceAleatorio];

    }
};


estudianteHogwarts.enfrentarDementor();
console.log("Animal del expecto Patronum: ", estudianteHogwarts.animalPatronus)

console.log("Información completa del estudiante:");
console.log(`Nombre: ${estudianteHogwarts.nombre}`);
console.log(`Edad: ${estudianteHogwarts.edad}`);
console.log(`Linaje: ${estudianteHogwarts.linaje}`);
console.log(`Casa: ${estudianteHogwarts.casa}`);
console.log("Animal del Expecto Patronum:", estudianteHogwarts.animalPatronus);
console.log("Cualidades:", estudianteHogwarts.cualidades.join(", "));