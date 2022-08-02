let contenedorProductos = document.getElementById("contenedorProductos");
let contenedorCarrito = document.getElementById("contenedorCarrito");
let total = document.getElementById("precioTotal");
let cantidadCarrito = document.getElementById("cantidadCarrito");
let cantEnCart = document.getElementById("cantEnCart");
let botonEliminar = document.getElementById("botonEliminar")
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
        div.innerHTML = `<div class="card " style="width: 20rem">
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
            cart(item)
        })
    })
}
// mostrarProducto(vinoTinto)
// mostrarProducto(vinoBlanco)
mostrarProducto(listaVino);
mostrarCarrito();
contadorCarrito();

function cart(vino) {
    let carrito = getStorage('carrito');
    if (vino.stock == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No tenemos más stock de este vino!',
            
          })
    } else {

        vino.stock--
        if (carrito.some(item => item.id == vino.id)) {

            let index = carrito.findIndex(item => item.id == vino.id);
            carrito[index].cantidad++;
            carrito[index].stock--
        } else {

            carrito.push({ ...vino, cantidad: 1 });
        }

        setStorage('carrito', carrito);
        mostrarCarrito()
        contadorCarrito();
    }

}

function mostrarCarrito() {
    let carrito = getStorage('carrito');
    contenedorCarrito.innerHTML = "";
    carrito.forEach(vino => {
        let div = document.createElement("div");
        div.className = "prodEnCarrito row";
        div.innerHTML = `
                            <p class="col-3 align-items-end">${vino.marca}</p>
                            <p class="col-3 align-items-end">${vino.varietal}</p>
                            <p class="col-2 align-items-end">Precio: $${vino.precio} </p>  
                            <p id="cant${vino.id}" class="col-3 align-items-end">Cantidad: ${vino.cantidad}</p>                    
                            <button id='button${vino.id}' class="col-1 btn-danger remove-btn"><i class="fa fa-trash-o fa-lg"></i></button>
                        `
        contenedorCarrito.appendChild(div);

        let btnEliminar = document.getElementById(`button${vino.id}`);
        btnEliminar.addEventListener('click', () => {
            checkDelete(vino, btnEliminar);
        })
    })
}

function eliminar(vino, btnEliminar) {

    let carrito = getStorage('carrito');

    let index = carrito.findIndex(item => item.id == vino.id);

    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
        carrito[index].stock++;
        let cant = document.getElementById(`cant${carrito[index].id}`);
        cant.innerText = `Cantidad: ${carrito[index].cantidad}`;
        setStorage('carrito', carrito);

    } else {
        carrito.splice(index, 1);
        setStorage('carrito', carrito);
        btnEliminar.parentElement.remove();
        console.log(carrito);
    }
    vino.stock++
    contadorCarrito();
}

function checkDelete(vino, btnEliminar, ) {
    Swal.fire({
        title: 'Estás seguro de eliminar este producto?',
        text: "Se elimininará, " + vino.marca + " - " + vino.varietal,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            eliminar(vino, btnEliminar) 
        } 
    })
}

function limpiar(){
    let carrito = getStorage('carrito');
    botonEliminar.addEventListener('click', () => {
        
        localStorage.clear(carrito);

        contadorCarrito();     
        mostrarCarrito();
    })
}

limpiar()


function filtrar(e) {
    //solo me filtra por uno solo, cuando agrego el or || no me funciona, no se que hice mal
    let encontrado = listaVino.filter(vino => (vino.varietal).toLowerCase().includes(e.target.value) || (vino.marca).toLowerCase().includes(e.target.value))
    mostrarProducto(encontrado);

}
window.addEventListener('input', filtrar);

function contadorCarrito() {
    let carrito = getStorage('carrito');
    cantEnCart.innerText = carrito.reduce((acc, el) => acc + el.cantidad, 0);
    cantidadCarrito.innerText = carrito.reduce((acc, el) => acc + el.cantidad, 0);
    total.innerText = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
}
