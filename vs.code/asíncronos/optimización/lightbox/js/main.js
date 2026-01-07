let rugaFake = document.getElementById("rugas");
let but = document.getElementById("buta");
let budy = document.getElementById("budy");

let big = false;
let small = false;

function handleDoes() {

    

    if (small == false) {
        setTimeout(() => {
            rugaFake.style.width = "18.75rem";
        }, 100)
        setTimeout(() => {
            rugaFake.style.width = "18.3rem";
        }, 300)
        setTimeout(() => {
            rugaFake.style.width = "18rem";
        }, 400)
        setTimeout(() => {
            rugaFake.style.width = "17.7rem";
        }, 500)
        setTimeout(() => {
            rugaFake.style.width = "17.4rem";
        }, 600)
        setTimeout(() => {
            rugaFake.style.width = "17.05rem";
        }, 700)
        setTimeout(() => {
            rugaFake.style.width = "16.6rem";
        }, 800)
        setTimeout(() => {
            rugaFake.style.width = "16.4rem";
        }, 900)
        setTimeout(() => {
            rugaFake.style.width = "15.625rem";
            big = true;
        }, 1000)
        
    }

}
function handleDo() {
    if (big == true) {
        rugaFake.style.width = "28rem";
        but.style.fontSize = "4rem";
        but.style.width = "4rem";
    }
    small = true;
}
function handleDone(){
    big = false;
    rugaFake.style.width = "18.75rem";
    but.style.fontSize = "0rem";
    but.style.width = "0rem";
    small = false;
}


rugaFake.addEventListener("click", handleDo);
rugaFake.addEventListener("mouseenter", handleDoes);
but.addEventListener("click", handleDone);

// PODRÍA HABER SIDO OPTIMIZADO SI SE HUBIERA USADO EL ESTILO TRANSICIÓN, PARA EVITAR LÍOS EN ANIMACIONES INNECESARIAS




