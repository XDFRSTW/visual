// cientas de miles de variables que repercuten en la historia


// variables de diálogos vistos
let codyDialogue1 = false; // aquí se diría en lo que repercute en la historia el haber visto este diálogo (no tiene porqué repercutir en esta)
let polterDialogue1 = false;

// variables de opciones que repercuten en la historia
// dialogo 1 cody || el valor del número representa la opción escogida
let codyOptions1 = 0; // aquí explicaría lo que haría cada una de las opciones y lo que repercute en la historia (variable a las que se abre acceso)







// otras variables (también repercuten en la historia)
let pin = 0;
let expulsion = false;


// llamando sobrecargas y sus variables
let room = document.getElementById("sala");
let sala = Number(room.textContent);

// otras variables
let hora = 0;
let dia = 0;
let evento = "";
let click = false;
let proxDi = true;
let opcion = 0;








// todo el código relacionado con cargar partida e información extra mostrada por consola
hora = Number(localStorage.getItem("hora"));
dia = Number(localStorage.getItem("dia"));
pin = Number(localStorage.getItem("pin"));
expulsion = Boolean(localStorage.getItem("expulsion"));
codyDialogue1 = Boolean(localStorage.getItem("codyDialogue1"));
codyOptions1 = Number(localStorage.getItem("codyOptions1"));
polterDialogue1 = Boolean(localStorage.getItem("polterDialogue1"));
console.log("hora actual: ");











// Motivos de expulsión





// Botones con interacción
let misteryDoor = document.getElementById("misterious-door");
if (sala == 8) {
    function pinTime() {
        if (dia == 3 && hora == 1) {

        }
        else {
            glob.classList.remove("dialogue-view");
            dialogue.classList.add("dialogue-active");
            name.textContent = "Globglogabgalab";
            name.style.backgroundColor = "rgba(246, 181, 181, 1)";
            nexty = 0;
            function siguiente() {

                if (nexty == 1) {
                    dialogue.classList.remove("dialogue-active");
                    glob.classList.add("dialogue-view");
                    next.removeEventListener("click", siguiente);
                }


                nexty = nexty + 1;
            }
            next.addEventListener("click", siguiente);
            text.textContent = "Aunque lo intentes. Nunca acertarías el pin.";
            if (pin >= 100) {
                text.textContent = "Aléjate de la puerta. O serás expulsado del colegio.";
            }
            if (pin >= 200) {
                text.textContent = "Tú no pintas nada aquí. Estás expulsado de por vida.";
            }
            pin = pin + 1;
            localStorage.setItem("pin", pin);
        }
        if (pin >= 200) {
            expulsion = true;
            localStorage.setItem("expulsion", expulsion);
        }
    }
    misteryDoor.addEventListener("click", pinTime);
}



// dialogos de personajes
let dialogue = document.getElementById("dialogue");
let name = document.getElementById("name");
let text = document.getElementById("text");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let options = document.querySelectorAll(".options");
let next = document.getElementById("next");
let nexty = 0;


// llamando a los personajes del html
let allCharacter = document.querySelectorAll(".characters").forEach((character) => {
    //character.classList.add("characters");
    character.classList.remove("active")
}); // desactivar a todos los personajes actuales

let cody = document.getElementById("cody");
let dog = document.getElementById("dog");
let polter = document.getElementById("polter");
let glob = document.getElementById("glob");
// personaje falso, justo debajo del real
let polterFake = document.getElementById("polter-fake");

// SALA: -1;
// hora: 0; día: 1; evento: "";
if (sala == -1 && hora == 0 && dia == 0) {
    // comienzo del código del diálogo del primer personaje
    function codyD1() {
        // diálogo visto
        codyDialogue1 = true;
        // para que no se señalice el personaje
        cody.classList.remove("dialogue-view");
        cody.removeEventListener("click", codyD1);
        // activar diálogos
        dialogue.classList.add("dialogue-active");
        // nombre del personaje que habla
        name.textContent = "Cody";
        // color del fondo de nombre personalizado
        name.style.backgroundColor = "rgba(255, 176, 108, 1)";
        // siguiente diálogo
        nexty = 0;
        function siguiente() {
            // resto de diálogos

            // esto es un diálogo normal
            if (nexty == 1) {
                text.textContent = "¿Ves a es wechinche de ahí atrás?. Ni se te ocurra llamarle.";
            }

            // esto es un diálogo de opciones que repercute en la historia
            if (nexty == 2) {
                // eliminar la capacidad de avanzar en el diálogo
                next.classList.add("options-hide");
                // opción 1
                function opcion1() {
                    // variable que repercute en la historia
                    codyOptions1 = 1;
                    // te permite seguir avanzando en el diálogo
                    next.classList.remove("options-hide");
                    // destacar la selección
                    options.forEach((option) => { option.classList.remove("select"); })
                    option1.classList.add("select");

                }
                option1.textContent = "Llamarle";
                option1.classList.add("options-active");
                option1.addEventListener("click", opcion1);
                // opción 2
                function opcion2() {
                    codyOptions1 = 2;
                    next.classList.remove("options-hide");
                    options.forEach((option) => { option.classList.remove("select"); });
                    option2.classList.add("select");
                }
                option2.textContent = "No llamarle";
                option2.classList.add("options-active");
                option2.addEventListener("click", opcion2);
            }
            // desactivamos las opciones aunque no sus eventlisteners (puesto que estos serán sobreescritos constantemente) y guardando opciones en el almacenamiento local
            if (nexty == 3) {
                options.forEach((option) => { option.classList.remove("options-active"); });
                localStorage.setItem("codyOptions1", codyOptions1);
                localStorage.setItem("codyDialogue1", codyDialogue1);
            }
            // según la opción escogida anteriormente obtendrás este u el próximo diálogo
            if (codyOptions1 == 1) {
                // entra otro personaje en la conversación
                if (nexty == 3) {
                    polterFake.classList.remove("far");
                    name.textContent = "Polterghast";
                    // color de la caja del nombre personalizado
                    name.style.backgroundColor = "rgba(57, 195, 255, 1)";
                    // primer diálogo del nuevo personaje
                    text.textContent = "wahshwawhshwagshwghgwhgsgawhsgwhag (Que pasa wapo, ¿Qué no usas H&S?).";
                }
                if (nexty == 4) {
                    name.textContent = "Cody";
                    name.style.backgroundColor = "rgba(255, 176, 108, 1)";
                    text.textContent = "[Susurrando en tu oido] Te había dicho que no llamases a este wey. Ahora va a acabar con toda mi aura con su pinche historia del H&S.";
                }
                if (nexty == 5) {
                    name.textContent = "Cody";
                    name.style.backgroundColor = "rgba(255, 176, 108, 1)";
                    text.textContent = "Sorry weggy, pero tengo que largarme, que me está entrando ansiedad.";

                }
                if (nexty == 6) {
                    // un personaje sale de escena
                    cody.classList.remove("active");
                    name.textContent = "Polterghast";
                    name.style.backgroundColor = "rgba(57, 195, 255, 1)";
                    text.textContent = "Noooooooooooooo.";
                }
                // finalización del diálogo en otra de sus posibilidades
                if (nexty == 7) {
                    dialogue.classList.remove("dialogue-active");
                    // esto para evitar errores de fusión entre diálogos
                    next.removeEventListener("click", siguiente);
                    // desactivamos al falso polter y activamos al verdadero
                    polterFake.classList.remove("right");
                    polterFake.classList.remove("active");
                    polter.classList.add("right");
                    polter.classList.add("active");
                }
            }
            if (codyOptions1 == 2) {
                text.textContent = "Gacias por no llamar a ese pinche pendejo. Su aura negativa drenaría todo lo que soy";
                // finalizando el diálogo en una de sus posibilidades
                if (nexty == 4) {
                    dialogue.classList.remove("dialogue-active");
                    // esto para evitar errores de fusión entre diálogos
                    next.removeEventListener("click", siguiente);
                    // reactivar diálogos
                }
            }
            nexty = nexty + 1;



        }
        next.addEventListener("click", siguiente);
        // primer diálogo

        text.textContent = "esquibidi amigo! que ganas tenía de verte.";




    }
    if (codyDialogue1 == false) {
        cody.classList.add("dialogue-view");
        cody.classList.add("active");
        cody.addEventListener("click", codyD1);
    }
    if (codyOptions1 == 2) {
        cody.classList.add("active");
    }
    // fin del código del diálogo del primer personaje
    // añadiendo un segundo diálogo a la escena || comienza el diálogo
    // ESTE EL EL DIÁLOGO BASE A COPIAR CIENTAS DE MILES DE VECES
    function polterD1() {
        // esto para evitar errores de fusión entre diálogos
        polterDialogue1 = true;
        polter.classList.remove("dialogue-view");
        polter.removeEventListener("click", polterD1);
        dialogue.classList.add("dialogue-active");
        name.textContent = "Polterghast";
        name.style.backgroundColor = "rgba(57, 195, 255, 1)";
        // siguiente diálogo
        nexty = 0;
        function siguiente() {

            if (nexty == 1) {
                text.textContent = "Me preocupa. Por eso le pergunto por lo del H&S.";
            }
            if (nexty == 2) {
                dialogue.classList.remove("dialogue-active");
                localStorage.setItem("polterDialogue1", polterDialogue1);
                next.removeEventListener("click", siguiente);
            }
            nexty = nexty + 1;
        }
        next.addEventListener("click", siguiente);
        text.textContent = "¿Qué le pasa a este wey?, siempre le entra ansiedad cuando estoy cerca.";
    }

    if (polterDialogue1 == false) {
        polter.classList.add("dialogue-view");
        polterFake.classList.add("active");
        polterFake.classList.add("far");
        polter.addEventListener("click", polterD1);
    }
    // termina el diálogo
    // esto es para que polter no desaparezca cuando salgas y entres del juego
    if (polterDialogue1 == true) {
        polter.classList.add("active");
        polter.classList.add("right");
    }



}
// SALA: -2;
// hora: 0; día: 1; evento: ""
if (sala == -2 && hora == 0 && dia == 0) {

}
// BIBLIOTECA;
// en cualquier momento
if (sala == 8) {
    function globDefault() {
        glob.classList.remove("dialogue-view");
        glob.removeEventListener("click", globDefault);
        dialogue.classList.add("dialogue-active");
        name.textContent = "Globglogabgalab";
        name.style.backgroundColor = "rgba(246, 181, 181, 1)";
        nexty = 0;
        function siguiente() {

            if (nexty == 1) {
                text.textContent = "Ah. Si. ¿Puedo ayudarte en algo?";
            }
            if (nexty == 2) {
                text.textContent = "¿La puerta?";
            }
            if (nexty == 3) {
                text.textContent = "Es solo un almacén del colegio. Libros, mesas, ... no hay mucho más.";
            }
            if (nexty == 4) {
                text.textContent = "¿Que a qué viene el panel de control? No es de tu incumbencia.";
            }
            if (nexty == 5) {
                dialogue.classList.remove("dialogue-active");
                glob.classList.add("dialogue-view");
                glob.addEventListener("click", globDefault);
                next.removeEventListener("click", siguiente);
            }
            nexty = nexty + 1;
        }
        next.addEventListener("click", siguiente);
        text.textContent = "Delightful! Really delightful! I am the Globglogabgalab. I love books. And this basement is a true treasure .";
    }
    glob.classList.add("dialogue-view");
    glob.classList.add("active");
    glob.classList.add("left-corner");


    glob.addEventListener("click", globDefault);
}









// movimientos del jugador de sala en sala AUN EN DESUSO
// hora = hora + 0.5;
// código relacionado con guardar partida
localStorage.setItem("hora", hora);
localStorage.setItem("dia", dia);
if (sala != 0) {
    localStorage.setItem("sala", sala);
}




console.log("sala: ", sala)

// COSAS QUE NO FUNCIONAN Y ERRORES








// código para bloquear localizaciones (elimina enlaces del html y rellena con texto de bloqueo)







// TERMINAR LA BIBLIOTECA Y LA SALA DE INFORMÁTICA

// PERO ANTES ARREGLA LOS ERRORES DE DIÁLOGOS Y PERSONAJES, PORQUE NO SE ADAPTAN CORRECTAMENTE AL TAMAÑO DE LA PANTALLA.
// PARA ELLO DEBES COLOCAR TODO EL SCRIPT DE LA APARICIÓN DE PERSONAJES Y DIÁLOGOS EN EL JS