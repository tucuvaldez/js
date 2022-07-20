class Vino {
    constructor(marca, tipoVino, varietal, precio, img, id) {
        this.marca = marca
        this.tipoVino = tipoVino
        this.varietal = varietal
        this.precio = precio
        this.img = img
        this.id = id
    }
}
const vino1 = new Vino("Los Aroldos", "tinto", "Malbec", 1200,"./img/vino.jpg", 1)
const vino2 = new Vino("Los Aroldos", "tinto", "Cabernet Sauvignon", 900,"./img/vino.jpg", 2)
const vino3 = new Vino("Los Aroldos", "tinto", "Syrah", 1100,"./img/vino.jpg" ,3)
const vino4 = new Vino("Los Aroldos", "blanco", "Chardonnay", 700,"./img/vino.jpg", 4)
const vino5 = new Vino("Los Aroldos", "blanco", "Chenin", 900,"./img/vino.jpg" ,5)
const vino6 = new Vino("El Esteco", "tinto", "Syrah", 950,"./img/vino.jpg" ,6)
const vino7 = new Vino("Los Aroldos", "blanco", "Cosecha Tardia", 800,"./img/vino.jpg", 7)
const vino8 = new Vino("Las Perdices", "tinto", "Malbec", 1300,"./img/vino.jpg" ,8)
const vino9 = new Vino("Las Perdices", "tinto", "Syrah", 1250,"./img/vino.jpg", 9)
const vino10 = new Vino("Las Perdices", "tinto", "Cabernet Franc", 1150,"./img/vino.jpg" ,10)
const vino11 = new Vino("Las Perdices", "blanco", "Cosecha Tardia", 1200,"./img/vino.jpg" ,11)
const vino12 = new Vino("Las Perdices", "blanco", "Moscatel", 900,"./img/vino.jpg", 12)
const vino13 = new Vino("Las Perdices", "blanco", "Sauvignon Blanc", 1100,"./img/vino.jpg" ,13)
const vino14 = new Vino("Las Perdices", "blanco", "Chenin Blanc", 1300,"./img/vino.jpg" ,14)
const vino15 = new Vino("Los Alamos", "tinto", "Cabernet Franc", 1500,"./img/vino.jpg" ,15)
const vino16 = new Vino("Los Alamos", "tinto", "Pinot Noir", 1400,"./img/vino.jpg",16)
const vino17 = new Vino("Los Alamos", "blanco", "Torrontes", 1350,"./img/vino.jpg" ,17)
const vino18 = new Vino("Los Alamos", "blanco", "Semillon", 1250,"./img/vino.jpg",18)
const vino19 = new Vino("El Esteco", "tinto", "Blend", 1350,"./img/vino.jpg" ,19)
const vino20 = new Vino("El Esteco", "blanco", "Blend", 1500,"./img/vino.jpg", 20)


/* Creo Array del Objeto para poder buscar */
let listaVino = [vino1, vino2, vino3, vino4, vino5, vino6, vino7, vino8, vino9, vino10, vino11, vino12, vino13, vino14, vino15, vino16, vino17, vino18, vino19, vino20]
// console.log(listaVino)
// let listaVino = [
//     // {marca : "Los Aroldos", tipoVino : "tinto", varietal : "Malbec", precio : 1200, id :  1},
//     // {marca : "Los Aroldos",tipoVino : "tinto",varietal : "Cabernet Sauvignon",precio : 900,id :  2 },
//     // {marca : "Los Aroldos",tipoVino : "tinto",varietal : "Syrah",precio : 1100,id :  3 },
//     // {marca : "Los Aroldos",tipoVino : "blanco",varietal : "Chardonnay",precio : 700,id :  4 },
//     // {marca : "Los Aroldos",tipoVino : "blanco",varietal : "Chenin",precio : 900,id :  5 },
//     // {marca : "El Esteco",tipoVino : "tinto",varietal : "Syrah",precio : 950,id :  6 },
//     // {marca : "Los Aroldos",tipoVino : "blanco",varietal : "Cosecha Tardia",precio : 800,id :  7 },
//     // {marca : "Las Perdices",tipoVino : "tinto",varietal : "Malbec",precio : 1300,id :  8 },
//     // {marca : "Las Perdices",tipoVino : "tinto",varietal : "Syrah",precio : 1250,id :  9 },
//     // {marca : "Las Perdices",tipoVino : "tinto",varietal : "Cabernet Franc",precio : 1150,id :  10 },
//     // {marca : "Las Perdices",tipoVino : "blanco",varietal : "Cosecha Tardia",precio : 1200,id :  11 },
//     // {marca : "Las Perdices",tipoVino : "blanco",varietal : "Moscatel",precio : 900,id :  12 },
//     // {marca : "Las Perdices",tipoVino : "blanco",varietal : "Sauvignon Blanc",precio : 1100,id :  13 },
//     // {marca : "Las Perdices",tipoVino : "blanco",varietal : "Chenin Blanc",precio : 1300,id :  14 },
//     // {marca : "Los Alamos",tipoVino : "tinto",varietal : "Cabernet Franc",precio : 1500,id :  15 },
//     // {marca : "Los Alamos",tipoVino : "tinto",varietal : "Pinot Noir",precio : 1400, id : 16 },
//     // {marca : "Los Alamos",tipoVino : "blanco",varietal : "Torrontes",precio : 1350,id :  17 },
//     // {marca : "Los Alamos",tipoVino : "blanco",varietal : "Semillon", precio : 1250,id :  18 },
//     // {marca : "El Esteco",tipoVino : "tinto",varietal : "Blend",precio : 1350,id :  19 },
//     // {marca : "El Esteco",tipoVino : "blanco",varietal : "Blend",precio : 1500,id :  20 },
// ]
