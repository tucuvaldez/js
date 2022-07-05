const suma = (a , b , c) => a + b + c
const suma2 = (a, b) => a + b
const resta = (a , b) => a - b 
const iva = x => x * 0.21
let precioVino = 0
const descuento = 9.99
const vinoPremium = 99.99
let precioFinal = resta (suma(precioVino , vinoPremium , iva (precioVino)) , descuento)

let nombre = prompt("Ingrese su nombre: ");
alert("Hola " + nombre + "!! Bienvenido a la vinoteca Hygge")
let eleccion = prompt("Ingrese su tipo de vino - Blanco o Tinto")
while(eleccion != "blanco" && eleccion != "tinto"){
    alert("La opcion es incorrecta")
    eleccion = prompt("Ingrese su tipo de vino - Blanco o Tinto")
}
if(eleccion == "tinto"){
    let tinto = prompt("Que varietal te gustaria? - Cabernet, Malbec, Sirah").toLowerCase()
    while(tinto != "cabernet" && tinto != "malbec" && tinto != "sirah"){
        alert("La opcion es incorrecta")
        eleccion = prompt("Que varietal te gustaria? - Cabernet, Malbec, Sirah")
    }
    if (tinto == "cabernet"){
        precioVino = 59.99
    }if (tinto == "malbec"){
        precioVino = 69.99
    }if (tinto == "sirah"){
        precioVino = 49.99
    }
while(tinto != "pagar"){
    switch(tinto){
        case "cabernet":
            alert("Elegiste Cabernet. Excelente eleccion!")
            break
        case "malbec":
            alert("Elegiste Malbec. Excelente eleccion! ")
            break
        case "sirah":
            alert("Elegiste Sirah. Excelente eleccion! ")
            break
        default:
            alert("Por favor intenta de nuevo")
            break     
    }
    tinto = prompt("Poné pagar para ir al carrito").toLowerCase()
} 

}else{
    let blanco = prompt("Que varietal te gustaria? - Chardonnay o Cosecha Tardia").toLowerCase()
    while(blanco != "chardonnay" && blanco != "cosecha" && blanco != "cosecha tardia"){
        alert("La opcion es incorrecta")
        blanco = prompt("Que varietal te gustaria? - Chardonnay o Cosecha Tardia")
    }
    if (blanco == "chardonnay"){
        precioVino = 65.99
    }
    if (blanco == "cosecha tardia"){
        precioVino = 56.99
    }
    while(blanco != "pagar"){
        switch(blanco){
            case "chardonnay":
                alert("Elegiste Chardonnay. Excelente eleccion! ")
                break
            case "cosecha tardia":
                alert("Elegiste Cosecha Tardia. Excelente eleccion! ")
                break
            default:
                alert("Por favor intenta de nuevo")
                break     
        }
        blanco = prompt("Poné pagar para ir al carrito").toLowerCase()
    }
}


let clase = prompt("Te gustaria nuetra botella premium? (SI / NO )").toLowerCase()
while(clase != "si" && clase != "no"){
    alert("Respuesta invalida")
    clase = prompt("Te gustaria nuetra botella premium? (SI / NO )").toLowerCase()
}

if(clase == "si"){
    precioFinal = resta (suma(precioVino , vinoPremium , iva (precioVino)) , descuento)
    alert("El valor final es de  " + precioFinal)
}else{
    precioFinal = resta (suma2(precioVino , iva(precioVino)) , descuento)
    alert("El valor final es de  " + precioFinal)
}