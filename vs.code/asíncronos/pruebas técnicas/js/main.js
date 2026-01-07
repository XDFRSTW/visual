let texts = document.querySelectorAll(".texto");
let ac = 1;
texts.forEach((text) => {
    let img = "img" + ac;
    let opacity = document.getElementById(img);
    // aparición de la imagen
    function handleOpaTrue() {
        opacity.style.transition = "0.5s";
        opacity.style.opacity = "100%";
        setTimeout(() => {
            opacity.style.width = "115%";
            opacity.style.transition = "60s";
        },250)

    }
    //  desaparición de la imagen
    function handleOpaFalse() {
        opacity.style.transition = "0.5s";
        opacity.style.opacity = "0%";
        setTimeout(() => {
            opacity.style.width = "100%";
            opacity.style.transition = "0s";
        },400)
    }
    text.addEventListener("mouseenter", handleOpaTrue);
    text.addEventListener("mouseleave", handleOpaFalse);
    ac = ac + 1;
})

