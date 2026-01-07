// Pantalla principal del juego
let primeraVez = document.getElementById("start");
let save = document.getElementById("save");
let opciones = document.getElementById("opciones");
let exit = document.getElementById("exit");
let first = false;

if (first == false) { 
    primeraVez.addEventListener("click", () => {
        first = true;
        localStorage.setItem("first", first);
    });
}
first = Boolean(localStorage.getItem("first"));
// abrir última sala en la que estuviste
if (sala == 0) {
    let start = document.querySelector("a");
    if (first == false) {
        start.href = "start.html"
    }
    if (localStorage.getItem("sala") == 1) {
        start.href = "start.html"
    }
    // el colegio
     if (localStorage.getItem("sala") == 2) {
        start.href = "/colegio/main_school_2.html"
    }
    if (localStorage.getItem("sala") == 3) {
        start.href = "/colegio/bath_school_3.html"
    }
    if (localStorage.getItem("sala") == 4) {
        start.href = "/colegio/Hallway_school_4.html"
    }
    if (localStorage.getItem("sala") == 5) {
        start.href = "/colegio/Hallway_school_5.html"
    }
    if (localStorage.getItem("sala") == 6) {
        start.href = "/colegio/class_school_6.html"
    }
    if (localStorage.getItem("sala") == 7) {
        start.href = "/colegio/laboratory_school_7.html"
    }
    if (localStorage.getItem("sala") == 8) {
        start.href = "/colegio/book_school_8.html"
    }
    if (localStorage.getItem("sala") == 9) {
        start.href = "/colegio/pc_school_9.html"
    }
    if (localStorage.getItem("sala") == 10) {
        start.href = "/colegio/out_school_10.html"
    }
    // salas de pruebas
    if (localStorage.getItem("sala") == -1) {
        start.href = "app.html"
    }
    if (localStorage.getItem("sala") == -2) {
        start.href = "sobrecarga.html"
    }


}
