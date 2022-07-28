let contenedorProductos = document.getElementById("contenedorProductos");
let contenedorCarrito = document.getElementById("contenedorCarrito");
let total = document.getElementById("precioTotal");
let cantidadCarrito = document.getElementById("cantidadCarrito");
const vinoTinto = listaVino.filter(vino => vino.tipoVino == "tinto");
console.log(vinoTinto);
const vinoBlanco = listaVino.filter(vino => vino.tipoVino == "blanco");
console.log(vinoBlanco);

function setStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor))
    
}
function getStorage(clave) {
    return JSON.parse(localStorage.getItem(clave)) || []
}



function mostrarProducto(listaVino) {
    contenedorProductos.innerHTML = "";
    listaVino.forEach(item => {
        
        let div = document.createElement("div");
        div.className = "col-12 col-md-4 mt-3"
        div.innerHTML = `<div class="card " style="width: 18rem;">
        <img class="card-img-top" src="${item.img}">
        <div class="card-body">
        <h4 class="card-title">${item.marca} </h4>
        <h5 class="card-title">${item.varietal} </h5>
        <p class="card-text">El placer de disfrutar un buen vino</p>
        <p>$ ${item.precio}</p>
        <button id="${item.id}" class="btnProd">Agregar al carrito</button>
        </div>
        </div>`
        contenedorProductos.appendChild(div);
        
        let btnAgregar = document.getElementById(`${item.id}`);
        btnAgregar.addEventListener('click', () => {
            cart(`${item.id}`)
        })
    })
}
// mostrarProducto(vinoTinto)
// mostrarProducto(vinoBlanco)
mostrarProducto(listaVino)

function cart(itemId) {
    let carrito = getStorage('carrito');
    let vino = listaVino.find(vino => vino.id == itemId)
    if(carrito.some(vino => vino.id == itemId)){
        let index = carrito.findIndex(vino => vino.id == itemId)
        carrito[index].cantidad++
        setStorage('carrito', carrito)
    }else{
        carrito.push({...vino, cantidad: 1})
        setStorage('carrito', carrito)
        contadorCarrito()
    }
    
    
    setStorage("carrito", carrito);
    contenedorCarrito.innerHTML = "";
    carrito.forEach(vino => {
        let div = document.createElement("div")
        div.className = "prodEnCarrito row"
        div.innerHTML = `
        <p class="col-3 align-items-end">${vino.marca}</p>
        <p class="col-3 align-items-end">${vino.varietal}</p>
        <p class="col-3 align-items-end">Precio: $${vino.precio} </p>  
        <p class="col-3 align-items-end">Cantidad: ${vino.cantidad}</p>                    
        <button id='button${vino.id}' class="col-3 btn-danger remove-btn"><i class="fa fa-trash-o fa-lg"></i></button>
        `
        contenedorCarrito.appendChild(div);
        const btnEliminar = document.getElementById(`button${vino.id}`);
        btnEliminar.addEventListener("click", () => {
            let carrito = getStorage('carrito');
            //estoy intentando descifrar como lograr que se modifique en el storage tambien, pude hacer que se disminuya la cantidad en uno,
            //cuando elimino un objeto, pero me cuesta acceder para poder realizar la suma y resta del total, de cantidades en storage, y que se 
            //modifique obviamente todo eso al agregar o quitar un producto.
            if(vino.cantidad > 1 ){
                vino.cantidad--
                for (let i =0; i< localStorage.length; i++) {
                    let clave = localStorage.key(clave[i]);
                    if (carrito.itemId == `button${vino.id}`) {
                        carrito.splice(i, 1);
                        setStorage('carrito',carrito)
                    }
                }
                contadorCarrito()
            }else{
                btnEliminar.parentElement.remove();
                
                
                // carrito.forEach(vino => vino.id == 'button${vino.id}')
                // let index = carrito.indexOf(vino)

                console.log(carrito)
                // carrito.splice(index, 1)
                contadorCarrito();
            }


        })
        
        contadorCarrito()
        
    })
    console.log(carrito);
}

function filtrar(e){
    //solo me filtra por uno solo, cuando agrego el or || no me funciona, no se que hice mal
    let encontrado = listaVino.filter(vino => (vino.varietal).toLowerCase().includes(e.target.value)) || (vino.marca).toLowerCase().includes(e.target.value)
    mostrarProducto(encontrado)
    
}
window.addEventListener('keydown', filtrar)


function contadorCarrito() {
    let carrito = getStorage('carrito');
    cantidadCarrito.innerText = carrito.reduce((acc, el) => acc + el.cantidad, 0)
    total.innerText = carrito.reduce((acc, el) => acc + el.precio, 0)
}

