// const button = document.querySelectorAll("button");
// let text = document.querySelectorAll("p");


// function handleDo ()
// {
//     let num = 0;
//     text.forEach((p) => {
//         p.style.height = "10rem"
//     })


//     button.forEach((but) => {
//         num = num + 1;
//         but.textContent = num;
//     })
// }

// button.forEach((but) => {

//     but.addEventListener("click", handleDo)

// });

// Han sido usados temporizaciones para la realización de las animaciones

const buttonA = document.getElementById("butA");
let textA = document.getElementById("textA");
let a = false;

const buttonB = document.getElementById("butB");
let textB = document.getElementById("textB");
let b = false;

const buttonC = document.getElementById("butC");
let textC = document.getElementById("textC");
let c = false;

const buttonD = document.getElementById("butD");
let textD = document.getElementById("textD");
let d = false;

// CÓDIGO DEL BOTÓN 1
function handleDoA() {
    a = true;
    setTimeout(() => {
        textA.style.height = "0.1rem";
        if (b == true) {
            textB.style.height = "6.4rem";
         
        }
        if (c == true) {
            textC.style.height = "6.4rem";
          
        }
        if (d == true) {
            textD.style.height = "6.4rem";
      ;
        }

    }, 100)
    setTimeout(() => {
        textA.style.height = "0.2rem";
        if (b == true) {
            textB.style.height = "3.2rem";
        
        }
        if (c == true) {
            textC.style.height = "3.2rem";
    
        }
        if (d == true) {
            textD.style.height = "3.2rem";
         
        }


    }, 200)
    setTimeout(() => {
        textA.style.height = "0.4rem";
        if (b == true) {
            textB.style.height = "1.6rem";
          
        }
        if (c == true) {
            textC.style.height = "1.6rem";
       
        }
        if (d == true) {
            textD.style.height = "1.6rem";
         
        }

    }, 300)
    setTimeout(() => {
        textA.style.height = "0.8rem";
        if (b == true) {
            textB.style.height = "0.8rem";
           
        }
        if (c == true) {
            textC.style.height = "0.8rem";
          
        }
        if (d == true) {
            textD.style.height = "0.8rem";
         
        }


    }, 400)
    setTimeout(() => {
        textA.style.height = "1.6rem";
        if (b == true) {
            textB.style.height = "0.4rem";
        
        }
        if (c == true) {
            textC.style.height = "0.4rem";
          
        }
        if (d == true) {
            textD.style.height = "0.4rem";
         
        }


    }, 500)
    setTimeout(() => {
        textA.style.height = "3.2rem";
        if (b == true) {
            textB.style.height = "0.2rem";
           
        }
        if (c == true) {
            textC.style.height = "0.2rem";

        }
        if (d == true) {
            textD.style.height = "0.2rem";

        }


    }, 600)
    setTimeout(() => {
        textA.style.height = "6.4rem";
        textA.style.fontSize = "1rem";
        if (b == true) {
            b = false;
        }
        if (c == true) {
            c = false;
        }
        if (d == true) {
            d = false;
        }
        if (b == false) {
            textB.style.height = "0rem";
            textB.style.fontSize = "0rem";
        }
        if (c == false) {
            textC.style.height = "0rem";
            textC.style.fontSize = "0rem";
        }
        if (d == false) {
            textD.style.height = "0rem";
            textD.style.fontSize = "0rem";
        }


    }, 700)




}
// CÓDIGO DEL BOTÓN 2
function handleDoB() {
    b = true;
    setTimeout(() => {
        textB.style.height = "0.1rem";
        if (a == true) {
            textA.style.height = "6.4rem";
       
        }
        if (c == true) {
            textC.style.height = "6.4rem";
          
        }
        if (d == true) {
            textD.style.height = "6.4rem";
            
        }

    }, 100)
    setTimeout(() => {
        textB.style.height = "0.2rem";
        if (a == true) {
            textA.style.height = "3.2rem";
           
        }
        if (c == true) {
            textC.style.height = "3.2rem";
           
        }
        if (d == true) {
            textD.style.height = "3.2rem";
          
        }


    }, 200)
    setTimeout(() => {
        textB.style.height = "0.4rem";
        if (a == true) {
            textA.style.height = "1.6rem";
          
        }
        if (c == true) {
            textC.style.height = "1.6rem";
            
        }
        if (d == true) {
            textD.style.height = "1.6rem";
           
        }

    }, 300)
    setTimeout(() => {
        textB.style.height = "0.8rem";
        if (a == true) {
            textA.style.height = "0.8rem";
       
        }
        if (c == true) {
            textC.style.height = "0.8rem";
            
        }
        if (d == true) {
            textD.style.height = "0.8rem";
            
        }


    }, 400)
    setTimeout(() => {
        textB.style.height = "1.6rem";
        if (a == true) {
            textA.style.height = "0.4rem";
           
        }
        if (c == true) {
            textC.style.height = "0.4rem";
           
        }
        if (d == true) {
            textD.style.height = "0.4rem";
          
        }


    }, 500)
    setTimeout(() => {
        textB.style.height = "3.2rem";
        if (a == true) {
            textA.style.height = "0.2rem";
            
        }
        if (c == true) {
            textC.style.height = "0.2rem";
            
        }
        if (d == true) {
            textD.style.height = "0.2rem";
            
        }


    }, 600)
    setTimeout(() => {
        textB.style.height = "6.4rem";
        textB.style.fontSize = "1rem";
        if (a == true) {
           a = false;
        }
        if (c == true) {
           c = false;
        }
        if (d == true) {
            d = false;
        }
        if (a == false) {
            textA.style.height = "0rem";
            textA.style.fontSize = "0rem";
        }
        if (c == false) {
            textC.style.height = "0rem";
            textC.style.fontSize = "0rem";
        }
        if (d == false) {
            textD.style.height = "0rem";
            textD.style.fontSize = "0rem";
        }


    }, 700)
}
// CÓDIGO DEL BOTÓN 3
function handleDoC() {
    c = true;
    setTimeout(() => {
        textC.style.height = "0.1rem";
        if (b == true) {
            textB.style.height = "6.4rem";
         
        }
        if (a == true) {
            textA.style.height = "6.4rem";
          
        }
        if (d == true) {
            textD.style.height = "6.4rem";
      ;
        }

    }, 100)
    setTimeout(() => {
        textC.style.height = "0.2rem";
        if (b == true) {
            textB.style.height = "3.2rem";
        
        }
        if (a == true) {
            textA.style.height = "3.2rem";
    
        }
        if (d == true) {
            textD.style.height = "3.2rem";
         
        }


    }, 200)
    setTimeout(() => {
        textC.style.height = "0.4rem";
        if (b == true) {
            textB.style.height = "1.6rem";
          
        }
        if (a == true) {
            textA.style.height = "1.6rem";
       
        }
        if (d == true) {
            textD.style.height = "1.6rem";
         
        }

    }, 300)
    setTimeout(() => {
        textC.style.height = "0.8rem";
        if (b == true) {
            textB.style.height = "0.8rem";
           
        }
        if (a == true) {
            textA.style.height = "0.8rem";
          
        }
        if (d == true) {
            textD.style.height = "0.8rem";
         
        }


    }, 400)
    setTimeout(() => {
        textC.style.height = "1.6rem";
        if (b == true) {
            textB.style.height = "0.4rem";
        
        }
        if (a == true) {
            textA.style.height = "0.4rem";
          
        }
        if (d == true) {
            textD.style.height = "0.4rem";
         
        }


    }, 500)
    setTimeout(() => {
        textC.style.height = "3.2rem";
        if (b == true) {
            textB.style.height = "0.2rem";
           
        }
        if (a == true) {
            textA.style.height = "0.2rem";

        }
        if (d == true) {
            textD.style.height = "0.2rem";

        }


    }, 600)
    setTimeout(() => {
        textC.style.height = "6.4rem";
        textC.style.fontSize = "1rem";
        if (b == true) {
            b = false;
        }
        if (a == true) {
            a = false;
        }
        if (d == true) {
            d = false;
        }
        if (b == false) {
            textB.style.height = "0rem";
            textB.style.fontSize = "0rem";
        }
        if (a == false) {
            textA.style.height = "0rem";
            textA.style.fontSize = "0rem";
        }
        if (d == false) {
            textD.style.height = "0rem";
            textD.style.fontSize = "0rem";
        }


    }, 700)




}
// CÓDIGO DEL BOTÓN 4
function handleDoD() {
     d = true;
    setTimeout(() => {
        textD.style.height = "0.1rem";
        if (b == true) {
            textB.style.height = "6.4rem";
         
        }
        if (c == true) {
            textC.style.height = "6.4rem";
          
        }
        if (a == true) {
            textA.style.height = "6.4rem";
      ;
        }

    }, 100)
    setTimeout(() => {
        textD.style.height = "0.2rem";
        if (b == true) {
            textB.style.height = "3.2rem";
        
        }
        if (c == true) {
            textC.style.height = "3.2rem";
    
        }
        if (a == true) {
            textA.style.height = "3.2rem";
         
        }


    }, 200)
    setTimeout(() => {
        textD.style.height = "0.4rem";
        if (b == true) {
            textB.style.height = "1.6rem";
          
        }
        if (c == true) {
            textC.style.height = "1.6rem";
       
        }
        if (a == true) {
            textA.style.height = "1.6rem";
         
        }

    }, 300)
    setTimeout(() => {
        textD.style.height = "0.8rem";
        if (b == true) {
            textB.style.height = "0.8rem";
           
        }
        if (c == true) {
            textC.style.height = "0.8rem";
          
        }
        if (a == true) {
            textA.style.height = "0.8rem";
         
        }


    }, 400)
    setTimeout(() => {
        textD.style.height = "1.6rem";
        if (b == true) {
            textB.style.height = "0.4rem";
        
        }
        if (c == true) {
            textC.style.height = "0.4rem";
          
        }
        if (a == true) {
            textA.style.height = "0.4rem";
         
        }


    }, 500)
    setTimeout(() => {
        textD.style.height = "3.2rem";
        if (b == true) {
            textB.style.height = "0.2rem";
           
        }
        if (c == true) {
            textC.style.height = "0.2rem";

        }
        if (a == true) {
            textA.style.height = "0.2rem";

        }


    }, 600)
    setTimeout(() => {
        textD.style.height = "6.4rem";
        textD.style.fontSize = "1rem";
        if (b == true) {
            b = false;
        }
        if (c == true) {
            c = false;
        }
        if (a == true) {
            a = false;
        }
        if (b == false) {
            textB.style.height = "0rem";
            textB.style.fontSize = "0rem";
        }
        if (c == false) {
            textC.style.height = "0rem";
            textC.style.fontSize = "0rem";
        }
        if (a == false) {
            textA.style.height = "0rem";
            textA.style.fontSize = "0rem";
        }


    }, 700)
}

buttonA.addEventListener("click", handleDoA);
buttonB.addEventListener("click", handleDoB);
buttonC.addEventListener("click", handleDoC);
buttonD.addEventListener("click", handleDoD);


// PODRÍA HABERSE OPTIMIZADO (MUCHÍSIMO) USANDO FOREACH