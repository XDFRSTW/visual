let buttons = document.querySelectorAll(".button");
let ac = 1;

buttons.forEach((button) => {

    let deleter = 1;
    let text = "text" + ac;
    let parrafo = document.getElementById(text);

    function handleSelect() {

        function reset(){
              let textReset = "text" + deleter;
              let parrafoReset = document.getElementById(textReset);
              parrafoReset.style.position = "absolute";
              parrafoReset.style.opacity = "0";
              deleter = deleter + 1;
              buttons.forEach((button) => {
                button.style.backgroundColor = "rgb(255, 255, 255)"
              })
              
        }

        reset()
        reset()
        reset()
        deleter = 1;
        parrafo.style.opacity = "100";
        parrafo.style.position = "static";
        parrafo.style.transition = "0s";
        button.style.backgroundColor = "rgba(220, 220, 220, 1)"

    }

    button.addEventListener("click", handleSelect);
    ac = ac + 1;

})


