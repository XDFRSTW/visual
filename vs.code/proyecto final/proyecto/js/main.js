// Todo el código en una función que se ejecuta inmediatamente
(() => {
    // "COOKIES" (No se guardan los datos al salir y volver a entrar)
    localStorage.getItem("localName");
    localStorage.getItem("localCost");
    localStorage.getItem("localAmount");
    // Para saber la página en la que nos encontramos
    let page = document.querySelector(".title");
    // Usando let en todas las variables porque las constantes pueden dar error
    // Funcionalidad del menú en pantallas grandes y medianas
    // Este if previene errores en en js. Solo se ejecuta en la página principal
    if (page.textContent == "FRUTAS MANOLO") {
        let normalMenu = document.querySelector(".big-screen-menu-box")
        let alt = 0;
        function handleShowNormalMenu() {
            if (alt == 0) {
                normalMenu.style.display = "block";
            }
            if (alt == 1) {
                normalMenu.style.display = "none";
            }
            alt = alt + 1;
            if (alt == 2) {
                alt = 0
            }
        }
        let normalButton = document.querySelector(".big-screen-menu-button").addEventListener("click", handleShowNormalMenu);
        // Funcionalidad del menú en pantallas pequeñas (el mismo código)
        let burgerMenu = document.querySelector(".small-screen-menu-box")
        let alt2 = 0;
        function handleShowBurguerMenu() {
            if (alt2 == 0) {
                burgerMenu.style.display = "block";
            }
            if (alt2 == 1) {
                burgerMenu.style.display = "none";
            }
            alt2 = alt2 + 1;
            if (alt2 == 2) {
                alt2 = 0
            }
        }
        let burguerButton = document.querySelector(".small-screen-menu-button").addEventListener("click", handleShowBurguerMenu);
    }

    // Todo el código relacionado con el slider de productos destacados
    if (page.textContent == "Tienda") {
        // Llamando al HTML
        let carrusel = document.querySelectorAll(".marked");
        let left = document.getElementById("carrusel-button-left");
        let right = document.getElementById("carrusel-button-right");
        // El producto que se verá por defecto es el que se encuentra aproximadamente por la mitad de la lista
        let ext = Math.floor(carrusel.length / 2);
        // Producto que se muestra por defecto
        carrusel[ext].style.display = "block";
        // Botón para desplazarse a la izquierda
        function handleLeft() {
            carrusel.forEach((carro) => { carro.style.display = "none" });
            ext = ext - 1;
            if (ext < 0) {
                ext = carrusel.length - 1;
            }
            carrusel[ext].style.display = "block";
        }
        left.addEventListener("click", handleLeft);
        // Botón para desplazarse a la derecha
        function handleRight() {
            carrusel.forEach((carro) => { carro.style.display = "none" });
            ext = ext + 1;
            if (ext > carrusel.length - 1) {
                ext = 0;
            }
            carrusel[ext].style.display = "block";
        }
        right.addEventListener("click", handleRight);

    }
    // Código relacionado con añadir objetos al carrito
    // Relativo a la página tienda
    // Cogemos toda la información que será mostrada en el carrito de la página web
    if (page.textContent == "Tienda") {
        // Estas listas nos permiten traspasar información de un html a otro
        let nombre = [];
        let precio = [];
        let stock = [];
        let addCart = document.querySelectorAll(".add-cart");
        let name = document.querySelectorAll(".name-info");
        let cost = document.querySelectorAll(".cost-info");
        let amount = document.querySelectorAll(".amount-info");
        let confirmed = document.getElementById("ok")
        addCart.forEach((addingButton) => {
            function handleAddCart() {
                // Usamos un for en vez de un for each
                for (i = 0; i < addCart.length; i++) {
                    // La función solo se ejecutará en una posición
                    if (addCart[i] == addingButton) {
                        nombre.push(name[i].textContent)
                        // Proceso para añadir el precio a la lista
                        let money = cost[i].textContent;
                        let word = "";
                        for (j = 0; j < money.length - 5; j++) {
                            word = word + money[j];
                            console.log(money[j]);
                        }
                        precio.push(word);
                        // Proceso para añadir la cantidad de producto a la lista
                        let many = amount[i].textContent;
                        let wordy = "";
                        for (j = 10; j < many.length; j++) {
                            wordy = wordy + many[j];
                            console.log(many[j]);
                        }
                        stock.push(wordy);
                        // Guardando toda la información en el almacenamiento local
                        localStorage.setItem("localName", nombre);
                        localStorage.setItem("localCost", precio);
                        localStorage.setItem("localAmount", stock);
                        console.log(nombre)
                        console.log(precio)
                        console.log(stock)
                    }
                }
                i = 0;
                // Cuando pulsas el botón aparece una caja que desaparece con el paso del tiempo
                confirmed.style.opacity = "85%";
                confirmed.style.display = "block";
                setTimeout(() => {
                    confirmed.style.opacity = "0%";
                    confirmed.style.transition = "1s";
                    setTimeout(() => {
                        confirmed.style.display = "none";
                    }, 800);
                }, 3000);
            }
            addingButton.addEventListener("click", handleAddCart);
        });

    }
    // Relativoa la página carrito
    // Cogemos la información anteriormente almacenada y la mostramos en el carrito
    if (page.textContent == "Carrito") {
        // Esta es la caja en la que vamos a meter todos los datos almacenados
        let addingCart = document.getElementById("add-to-cart");
        // Cogiendo los datos
        let nombre = localStorage.getItem("localName") + ",";
        let precio = localStorage.getItem("localCost") + ",";
        let stock = localStorage.getItem("localAmount") + ",";
        // Variable para formar palabras
        let word = "";
        // Creando listas
        let nombreList = [];
        let precioList = [];
        let stockList = [];
        // Longitud de una de las listas (una vez creadas tendrán la misma longitud)
        let long = 0;
        // Como las longitudes de cada uno de los datos son distintas, no podemos meterlo todo en el mismo for
        // Lista del nombre
        for (i = 0; i < nombre.length; i++) {
            if (nombre[i] == ",") {
                nombreList.push(word);
                word = "";
                long = nombreList.length;
            }
            else {
                word = word + nombre[i];
            }
        }
        // Lista del precio
        for (i = 0; i < precio.length; i++) {
            if (precio[i] == ",") {
                precioList.push(word);
                word = "";
            }
            else {
                word = word + precio[i];
            }
        }
        // Lista del stock
        for (i = 0; i < stock.length; i++) {
            if (stock[i] == ",") {
                stockList.push(word);
                word = "";
            }
            else {
                word = word + stock[i];
            }
        }
        // Añadiendo los datos al carrito
        // Hacemos una función que se ejecuta al pasar un segundo (porque necesitamos tener primero la variable long, sin ella no funciona el carrito)
        setTimeout(() => {
            // Se repetirá el número de veces según la longitud de las listas
            for (k = 0; k < long; k++) {
                // Omitimos las posiciones de la lista eliminadas
                if (nombreList[k] != "") {
                    // Creamos las targetas de los productos
                    let newDiv = document.createElement("div");
                    let newButton = document.createElement("button");
                    let buttonDiv = document.createElement("div");
                    let buttonImage = document.createElement("img");
                    let nameDiv = document.createElement("div");
                    let costDiv = document.createElement("div");
                    let stockDiv = document.createElement("div");
                    let newName = document.createElement("span");
                    let newCost = document.createElement("span");
                    let newStock = document.createElement("span");
                    // Los metemos en sus espacios correspondientes
                    buttonDiv.appendChild(newButton)
                    nameDiv.appendChild(newName);
                    costDiv.appendChild(newCost);
                    stockDiv.appendChild(newStock);
                    newButton.appendChild(buttonImage);
                    newDiv.appendChild(buttonDiv);
                    newDiv.appendChild(nameDiv);
                    newDiv.appendChild(costDiv);
                    newDiv.appendChild(stockDiv);
                    addingCart.appendChild(newDiv)
                    // Les damos el valor que les corresponden y sus clases
                    // Contenedores
                    newDiv.classList.add("product");
                    buttonDiv.classList.add("product-info");
                    stockDiv.classList.add("product-info", "amount-info");
                    costDiv.classList.add("product-info", "cost-info");
                    nameDiv.classList.add("product-info", "name-info");
                    // Información del producto
                    newStock.textContent = "En stock: " + stockList[k];
                    newCost.textContent = precioList[k] + "€/kg";
                    newName.textContent = nombreList[k];
                    // Botón de eliminar del carrito
                    buttonImage.src = "images/cross.svg";
                    buttonImage.classList.add("product-cart");
                    newButton.classList.add("add-cart");
                    newButton.title = "Eliminar del carrito";
                    // Funcionalidad del botón
                    function handleEliminate() {
                        newDiv.remove()
                        for (j = 0; j < nombreList.length; j++) {
                            if (nombreList[j] == newName.textContent) {
                                nombreList[j] = "";
                                precioList[j] = 0;
                                //  No queremos que elimine más de un producto del mismo tipo
                                break
                            }
                        }
                        // Guardando los cambios en la lista (con eliminar los datos en una de las tres listas es suficiente [Puede optimizarse]])
                        localStorage.setItem("localName", nombreList)
                        localStorage.setItem("localCost", precioList)
                    }
                    newButton.addEventListener("click", handleEliminate);
                }
            }

        }, 1000);


    }
    // Código de la página "pay"
    if (page.textContent == "Pagar/estado del envío") {
        let totalCost = document.getElementById("total-cost");
        let timeOut = document.querySelector(".time-left");
        let paying = document.getElementById("pay");
        let bankTarget = document.getElementById("bank");
        let deliveryPlace = document.getElementById("dir");
        let messageBox = document.querySelector(".form-message-box");
        let message = document.getElementById("message");
        // Botón para pagar
        function handlePay() {
            if (bankTarget.value == "") {
                messageBox.style.display = "block";
                message.textContent = "Escriba el número de la targeta bancaria para pagar"
            }
            else {
                messageBox.style.display = "block";
                message.textContent = "Pago realizado con exito"
                timeOut.textContent = "Tiempo estimado : " + precioList.length / 10 + "días";
            }
            setTimeout(() => {
                messageBox.style.display = "none";
            }, 10000)
            // Mensaje muy amistoso, muy visual, muy bonito.
            if (deliveryPlace.value == "" && bankTarget.value != "") {
                alert("Al no haber adherido una dirección, tu comprá nunca llegará a su destino. Aun así tu dinero nos será de gran ayuda. ¡Gracias por tus datos!");
                timeOut.textContent = "Tiempo estimado : " + "Nunca llegará tu pedido";
            }
        }
        paying.addEventListener("click", handlePay);
        // Total del dinero que cuesta tu compra
        let precio = localStorage.getItem("localCost") + ",";
        let precioList = [];
        let word = 0;
        let suma = 0;
        for (i = 0; i < precio.length; i++) {
            if (precio[i] == ",") {
                precioList.push(word);
                word = "";
            }
            else {
                word = word + precio[i];
            }
        }
        // Si no ponemos un tiempo de espera, el precio no se mostrará
        setTimeout(() => {
            for (i = 0; i < precioList.length; i++) {
                suma = suma + Number(precioList[i]);
            }
            // Otro intervalo, porque sino no se muestra el precio
            setTimeout(() => {
                suma = Math.round(suma * 100) / 100;
                totalCost.textContent = "Precio total : " + suma + "€";
            }, 1000)
        }, 1000)

    }
    // Código de los formularios
    if (page.textContent == "Formulario de Datos") {
        // Llamando al HTML
        console.log(page.textContent)
        let formButton = document.querySelectorAll(".form-button")
        let formMessageBox = document.querySelectorAll(".form-message-box")
        let formMessage = document.querySelectorAll(".form-message")
        // Este botón hace aparecer el botón que avisa que el formulario ha sido enviado
        function handleAppear0() {
            formMessageBox[0].style.display = "block";
            setTimeout(() => {
                formMessage[0].textContent = "*El formulario ha sido enviado con exito";
            }, 4000)
        }
        formButton[0].addEventListener("click", handleAppear0);

        // Este botón hace desaparecer el texto que avisa que el formulario ha sido enviado
        function handleDisappear0() {
            formMessageBox[0].style.display = "none";
            formMessage[0].textContent = "...";
        }
        formMessage[0].addEventListener("click", handleDisappear0);
        if (formButton.length == 2) {
            // Este botón hace aparecer el botón que avisa que el formulario ha sido enviado
            function handleAppear1() {
                formMessageBox[1].style.display = "block";
                setTimeout(() => {
                    formMessage[1].textContent = "*El formulario ha sido enviado con exito";
                }, 4000)
            }
            formButton[1].addEventListener("click", handleAppear1);
            // Este botón hace desaparecer el texto que avisa que el formulario ha sido enviado
            function handleDisappear1() {
                formMessageBox[1].style.display = "none";
                formMessage[1].textContent = "...";
            }
            formMessage[1].addEventListener("click", handleDisappear1);

        }

    }
    // Todo el código relacionado con ampliar imágenes
    if (page.textContent == "Tienda") {
        // Creando todo el contenido del HTML que conformará a la imagen ampliada
        let newDiv = document.createElement("div");
        let newButton = document.createElement("button");
        let imageButton = document.createElement("img");
        let newImg = document.createElement("img");
        // Aplicando clases
        newDiv.classList.add("expansion-box");
        newButton.classList.add("expansion-button");
        newImg.classList.add("expansion-image");
        imageButton.classList.add("icon");
        // Colocando objetos en su sitio
        document.body.appendChild(newDiv);
        newDiv.appendChild(newButton);
        newButton.appendChild(imageButton);
        newDiv.appendChild(newImg);
        // Propiedades de la imagen del botón
        imageButton.src = "images/cross.svg";
        // Funcionalidad del botón añadido
        function handleQuit() {
            newDiv.style.display = "none";
        }
        newButton.addEventListener("click", handleQuit);
        // Cuando pulses una imagen que se encuentre en una de estas páginas, se ampliará
        let apmliaciones = document.querySelectorAll("img");
        apmliaciones.forEach((ampliacion) => {
            function handleBigImage() {
                // No la estamos ampliando en realidad
                newImg.src = ampliacion.src;
                newDiv.style.display = "flex";
            }
            ampliacion.addEventListener("click", handleBigImage);
        });
        // Arreglando un error de ampliación de imágenes (no queremos que se amplia la imagen del carrito)
        let fixing = document.querySelectorAll(".product-cart");
        fixing.forEach((fix) => {
            fix.addEventListener("click", handleQuit);
        })
    }

    // Código de las noticias aleatorias
    if (page.textContent == "FRUTAS MANOLO") {
        let title = document.querySelector(".news-title");
        let image = document.querySelector(".news-image");
        let link = document.querySelector(".news-link");
        let text = document.querySelector(".news-small-explain");
        // Aleatoriedad
        let ale = Math.floor(Math.random() * 3);
        if (ale == 0) {
            image.src = "images/not1.png";
            link.href = "Manolo_Noticia_1.html";
            title.textContent = "Las nuevas máquinas de Manolo lo hacen arrasar en el mercado"
            text.textContent = "El mes pasado Manolo se hizo con la valiosísima posesión de los vehículos de agricultura de nueva generación, que son el quíntuple de eficaces que antes. Manolo era un hombre de tradición que como tal cultivaba la tierra, a mano, pero tuvo que aceptar que para no quedarse atrás en el mercado tendría que soportar los nuevos cambios, máquinas en vez de manos.";
        }
        if (ale == 1) {
            image.src = "images/not2_2.png";
            link.href = "Manolo_Noticia_2.html";
            title.textContent = "El secreto de Manolo"
            text.textContent = "La policía descubrió hace un par de días una plantación ilegal de decenas de hectáreas de marihuana, estaban a nombre de `Manolo`. La policía investigó el caso y se reveló que ciertamente Manolo estaba imlicado y era el principal responsable. Manolo lo confirmo todo en su interrogatorio, y ahora la policía busca a los mafiosos que recibían la cosecha."
        }
        if (ale == 2) {
            image.src = "images/not3.png";
            link.href = "Manolo_Noticia_3.html";
            title.textContent = "Plaga de langostas arremete contra los cultivos de Manolo y sus trabajadores"
            text.textContent = "Una plaga de langostas arremetió contra toda la cosecha de verano de Manolo, dejándole sin ventas durante esta temporada. El costo de los daños fue elevadísimo y parte del personal humano de Manolo fue dañado. Varias víctimas mortales y muchos heridos. `¡Esto no volverá ha suceder!`, exclamó Manolo mientras aplastaba una langosta y la remataba."
        }
    }
})();
