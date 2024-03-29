let contenedorProductos = document.getElementById("contenedorProductos");
let contenedorCarrito = document.getElementById("contenedorCarrito");
let total = document.getElementById("precioTotal");
let cantidadCarrito = document.getElementById("cantidadCarrito");
let cantEnCart = document.getElementById("cantEnCart");
let botonEliminar = document.getElementById("botonEliminar")
let listaVino
let mostrar = document.getElementById("mostrarProductos");
let filtros = document.getElementById("filtros")

function setStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor))
}
function getStorage(clave) {
    return JSON.parse(localStorage.getItem(clave)) || []
}

const obtenerDatos = async () => {
    try {
        let response = await fetch('../asset/stock.json');
        listaVino = await response.json();
        mostrarProducto(listaVino);
    } catch (error) {
        console.log(error)
    }
}

function mostrarProducto(vinoAMostrar) {
    contenedorProductos.innerHTML = "";
    vinoAMostrar.forEach(item => {
        let div = document.createElement("div");
        div.className = "col-12 col-md-4 mt-3"
        div.innerHTML = `<div class="card " style="width: 20rem">
        <img class="card-img-top" src="${item.img}">
        <div class="card-body">
        <h4 class="card-title">${item.marca} </h4>
        <h5 class="card-title">${item.varietal} </h5>
        <p class="card-text">Enjoy the taste of the finest wine</p>
        <p>$ ${item.precio}</p>
        <button id="${item.id}" class="btnProd">Add to Cart</button>
        </div>
                        </div>`
        contenedorProductos.appendChild(div);

        let btnAgregar = document.getElementById(`${item.id}`);
        btnAgregar.addEventListener('click', () => {
            cart(item)
        })
    })
}

function filtrar(e) {
    let encontrado = listaVino.filter(vino => (vino.varietal).toLowerCase().includes(e.target.value) || (vino.marca).toLowerCase().includes(e.target.value))
    mostrarProducto(encontrado);
}
window.addEventListener('input', filtrar);

function cart(vino) {
    let carrito = getStorage('carrito');
    if (vino.stock == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sorry, we ran out of stock!',

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
    if (carrito.length === 0) {
        contenedorCarrito.innerText = 'Shopping cart empty'
    } else {
        contenedorCarrito.innerHTML = "";
        carrito.forEach(vino => {
            let div = document.createElement("div");
            div.className = "prodEnCarrito row";
            div.innerHTML = `
            <p class="col-3 align-items-end">${vino.marca}</p>
            <p class="col-3 align-items-end">${vino.varietal}</p>
            <p class="col-2 align-items-end">Precio: $${vino.precio} </p>  
                            <p id="cant${vino.id}" class="col-3 align-items-end">Quantity: ${vino.cantidad}</p>                    
                            <button id='button${vino.id}' class="col-1 btn-danger remove-btn"><i class="fa fa-trash-o fa-lg"></i></button>
                            `
            contenedorCarrito.appendChild(div);

            let btnEliminar = document.getElementById(`button${vino.id}`);
            btnEliminar.addEventListener('click', () => {
                checkDelete(vino, btnEliminar);
            })
        })

    }

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
    }

    vino.stock++
    contadorCarrito();
}

function checkDelete(vino, btnEliminar) {
    Swal.fire({
        title: 'Are you sure you want to delete this item?',
        text: "It is going to be deleted, " + vino.marca + " - " + vino.varietal,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete!',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            eliminar(vino, btnEliminar)
        }
    })
}

function buy() {
    let btnComprar = document.getElementById('botonComprar')
    btnComprar.addEventListener('click', () => {
        if (cantEnCart.innerText > 0) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Thanks for your purchase'
            })
            localStorage.clear();
            contadorCarrito();
            mostrarCarrito();
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'error',
                title: 'Shopping cart it is empty'
            })

        }
    })
}

function contadorCarrito() {
    let carrito = getStorage('carrito');
    cantEnCart.innerText = carrito.reduce((acc, el) => acc + el.cantidad, 0);
    cantidadCarrito.innerText = carrito.reduce((acc, el) => acc + el.cantidad, 0);
    total.innerText = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
}

mostrar.addEventListener("click", (e) => {
    contenedorProductos.style.display = 'flex';
    filtros.style.display = 'block'
})

let carrito = getStorage('carrito');
botonEliminar.addEventListener('click', () => {

    localStorage.clear();

    contadorCarrito();
    mostrarCarrito();
})

document.getElementById('checkTinto').addEventListener('change', (e) => {

    if (e.target.checked == true) {
        const vinoTinto = listaVino.filter(vino => vino.tipoVino == "tinto");
        document.getElementById('checkBlanco').checked = false
        mostrarProducto(vinoTinto)
    } else {
        mostrarProducto(listaVino)
    }
})
document.getElementById('checkBlanco').addEventListener('change', (e) => {
    if (e.target.checked == true) {
        const vinoBlanco = listaVino.filter(vino => vino.tipoVino == "blanco");
        document.getElementById('checkTinto').checked = false
        mostrarProducto(vinoBlanco)
    } else {
        if (!document.getElementById('checkTinto').checked) {
            mostrarProducto(listaVino)
        }
    }
})

obtenerDatos()
mostrarCarrito();
contadorCarrito();
buy()