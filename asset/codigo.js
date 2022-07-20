
// let descuento = 5.99
// /* Creo un Objeto */
// // class Vino {
// //     constructor(tipoVino, varietal, precio, id) {
// //         this.tipoVino = tipoVino
// //         this.varietal = varietal
// //         this.precio = precio
// //         this.id = id
// //     }
// // }
// // const vino1 = new Vino("tinto", "malbec", 59.99, 1)
// // const vino2 = new Vino("tinto", "cabernet", 49.99, 2)
// // const vino3 = new Vino("tinto", "sirah", 69.99, 3)
// // const vino4 = new Vino("blanco", "chardonnay", 59.99, 4)
// // const vino5 = new Vino("blanco", "chenin", 49.99, 5)
// // const vino6 = new Vino("blanco", "cosecha tardia", 69.99, 6)
// // /* Creo Array del Objeto para poder buscar */
// // let listaVino = [vino1, vino2, vino3, vino4, vino5, vino6]
// // console.log(listaVino)
// let tintos = listaVino.filter(vino => vino.tipoVino == "tinto")
// let varietalesTinto = tintos.map(vino => vino.varietal)
// console.log(varietalesTinto)
// let blanco = listaVino.filter(vino => vino.tipoVino == "blanco")
// let varietalesBlanco = blanco.map(vino => vino.varietal)
// // const varietales = listaVino.map(vino => vino.varietal) // Genero un ARRAY "varietales" con el varietal de cada vino 

// /* Creo un Array de compra para carrito E-commerce donde hago el push de las elecciones */
// let compra = []

// let nombre = prompt("Ingrese su nombre: ");
// alert("Hola " + nombre + "!! Bienvenido a la vinoteca Hygge")
// comprarVino() //Creo funcion para comprar 
// function comprarVino() {
//     tipoVino = prompt("Que vino te gustaria? Blanco o Tinto").toLowerCase()
//     while (tipoVino != "blanco" && tipoVino != "tinto") {
//         alert("Intente nuevamente")
//         tipoVino = prompt("Que vino te gustaria? Blanco o Tinto").toLowerCase()
//     }

//     if (tipoVino == "tinto") {
//         varietal = prompt("Que varietal? Sirah - Malbec - Cabernet").toLowerCase()
//         let buscar = listaVino.find(el => el.varietal == varietal)
//         console.log(buscar)
//         //Chequea que el varietal ingresado por prompt, NO (!) coincida ningun parametro (varietal), dentro del Array (varietales)
//         while (!varietalesTinto.includes(varietal)) {
//             alert("Intente nuevamente")
//             varietal = prompt("Que varietal? Sirah - Malbec - Cabernet").toLowerCase()
//             let buscar = listaVino.find(el => el.varietal == varietal)
//             console.log(buscar)
//         }
//         /* De acuerdo a la eleccion realizo un push al carrito */

//         const vino = listaVino.find(vino => vino.varietal == varietal)//Busca dentro de la Lista vino, que coincida el varietal con el ingresado por prompt
//         compra.push(vino)
//         alert("Elegiste " + varietal + ".Excelente eleccion")

//     } else {
//         varietal = prompt("Que varietal? Chenin - Cosecha Tardia - Chardonnay").toLowerCase()
//         let buscar = listaVino.find(el => el.varietal == varietal)
//         console.log(buscar)

//         while (!varietalesBlanco.includes(varietal)) {
//             alert("Intente nuevamente")
//             varietal = prompt("Que varietal? Chenin - Cosecha Tardia - Chardonnay").toLowerCase()
//         }
//         /* De acuerdo a la eleccion realizo un push al carrito */

//         const vino = listaVino.find(vino => vino.varietal == varietal)
//         compra.push(vino)
//         alert("Elegiste " + varietal + ".Excelente eleccion")

//     }
//     let agregar = prompt("Te gustaria agregar más al carrito? (SI / NO )").toLowerCase()
//     while (agregar != "si" && agregar != "no") {
//         alert("Respuesta invalida")
//         agregar = prompt("Te gustaria agregar más al carrito? (SI / NO )").toLowerCase()
//     }
//     if (agregar == "si") {
//         comprarVino()
//     } else {
//         const precioFinal = compra.reduce((acc, el) => acc + el.precio * 1.21 - descuento, 0)
//         alert("El valor final es de $" + Math.round(precioFinal))
//         console.log(Math.round(precioFinal))
//     }
// }


// //Funcion para eliminar productos en el carrito con indexOf, aplicado al map (para encontrar un parametro especifico)
// function eliminarProducto(prodAEliminar) {
//     const index = compra.map(vino => vino.varietal).indexOf(prodAEliminar)
//     compra.splice(index, 1)
// }

// consultaEliminar()
// function consultaEliminar() {
//     if (compra.length > 0) {
//         let varietalCompra = "" //Genero una variante con string vacio, recorro el carrito y le agrego el nombre del parametro
//         for (const vino of compra) {
//             varietalCompra += vino.varietal + ", "
//         }
//         let consulta = prompt("El carrito tiene actualmente " + varietalCompra + "desea eliminar un producto? (Si/No)")
//         if (consulta == "si") {
//             prodAEliminar = prompt("Que varietal desea eliminar?")
//             console.log(prodAEliminar)
//             eliminarProducto(prodAEliminar)
//             console.log(compra)
//             const precioFinal = compra.reduce((acc, el) => acc + el.precio * 1.21 - descuento, 0)
//             alert("El valor final ahora es de $" + Math.round(precioFinal))
//             consultaEliminar()

//         } else {
//             const precioFinal = compra.reduce((acc, el) => acc + el.precio * 1.21 - descuento, 0)
//             alert("El valor final ahora es de $" + Math.round(precioFinal))
//             console.log(Math.round(precioFinal))
//         }
//     }else{
//         alert("El carrito no tiene productos")
//     }
// }

let contenedorProductos = document.getElementById("contenedorProductos")
let carrito = []
let contenedorCarrito = document.getElementById("contenedorCarrito")
let total = document.getElementById("precioTotal")
mostrarProducto()

function mostrarProducto() {
    // contenedorProductos.innerHTML = ""
    listaVino.forEach(item => {

        let div = document.createElement("div")
        div.className = "producto col-12 col-md-4 mt-3"
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${item.img}">
                            <div class="card-body">
                                <h4 class="card-title">${item.marca} </h4>
                                <h5 class="card-title">${item.varietal} </h5>
                                <p class="card-text">El placer de disfrutar un buen vino</p>
                                <p>$ ${item.precio}</p>
                                <a href="#" onclick="agregarCarrito(${item.id})" class="btn" id="botonProducto">Agregar al carrito</a>
                            </div>
                        </div>`
        contenedorProductos.appendChild(div)
    })
}

function agregarCarrito(idVino) {
    let vino = listaVino.find(vino => vino.id === idVino)
    carrito.push(vino)
    let cantidadCarrito = document.getElementById("cantidadCarrito")
    
    actualizarCarrito()

    console.log(carrito)
}

function mostrarCarrito() {
    
    carrito.forEach(item => {
        let div = document.createElement("div")
        div.className = "contenedorCarrito d-flex"
        div.innerHTML = `<p class="col-4 align-items-end">${item.marca}</p>
                        <p class="col-4 align-items-end">${item.varietal}</p>
                        <p class="col-4 align-items-end">Precio: $${item.precio} </p>`
        contenedorCarrito.appendChild(div)
    })
}

function  actualizarCarrito (){
    cantidadCarrito.innerText = carrito.length
    total.innerText = carrito.reduce((acc, el)=> acc + el.precio, 0)
}
//Estoy necesitando ayuda para que el carrito no imprima los elementos que tiene dentro, con cada click, no me doy cuenta como resetearlo 
//para que imprima cada elemento, y no todos los elementos con cada click!! 