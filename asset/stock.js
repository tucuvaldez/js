// class Vino {
//     constructor(marca, tipoVino, varietal, precio, img, id, stock) {
//         this.marca = marca
//         this.tipoVino = tipoVino
//         this.varietal = varietal
//         this.precio = precio
//         this.img = img
//         this.id = id
//         this.stock = stock
//     }
// }
// const vino1 = new Vino("Los Haroldos", "tinto", "Malbec", 1200,"./img/los-haroldos-estate-malbec-mrbeef.jpg", 1, 15)
// const vino2 = new Vino("Los Haroldos", "tinto", "Cabernet Sauvignon", 900,"./img/Los-haroldos-cabernet.png", 2, 10)
// const vino3 = new Vino("Los Haroldos", "tinto", "Bonarda", 1100,"./img/Los-Haroldos-Bonarda.png" ,3, 12)
// const vino4 = new Vino("Los Haroldos", "blanco", "Chardonnay", 700,"./img/los-haroldos-chardonnay.png", 4, 22)
// const vino5 = new Vino("Los Haroldos", "blanco", "Chenin Dulce", 900,"./img/los-haroldos-chenindulce.png" ,5, 6)
// const vino6 = new Vino("El Esteco - Don David", "tinto", "Syrah", 950,"./img/el-esteco-syrah.jpg" ,6, 9)
// const vino7 = new Vino("Santa Julia", "blanco", "Tardío", 800,"./img/Vino-Santa-Julia-Cosecha.jpg", 7, 12)
// const vino8 = new Vino("Las Perdices", "tinto", "Malbec", 1300,"./img/las-perdices-malbec.png" ,8, 24)
// const vino9 = new Vino("Las Perdices", "tinto", "Cabernet Sauvignon", 1250,"./img/las-perdices-cabernet.png", 9, 12)
// const vino10 = new Vino("Las Perdices", "tinto", "Cabernet Franc", 1150,"./img/las-perdices-cabernetFranc.png" ,10, 16)
// const vino11 = new Vino("Las Perdices", "blanco", "Viognier", 1200,"./img/perdices-viognier.jpg" ,11, 18)
// const vino12 = new Vino("Las Perdices", "blanco", "Sauvignon Blanc", 900,"./img/sauvignon-blanc.png", 12, 18)
// const vino13 = new Vino("Las Perdices", "blanco", "Sweety", 1100,"./img/las-perdices-sweety.png" ,13, 20)
// const vino14 = new Vino("Rutini", "blanco", "Chardonnay", 1300,"./img/Rutini_Chardonnay.jpeg" ,14)
// const vino15 = new Vino("Alamos", "tinto", "Cabernet", 1500,"./img/alamos-cabernet.jpg" ,15)
// const vino16 = new Vino("Alamos", "tinto", "Malbec Reserva", 1400,"./img/alamos-malbec.png",16)
// const vino17 = new Vino("Alamos", "blanco", "Torrontes", 1350,"./img/alamos-torrontes.png" ,17)
// const vino18 = new Vino("Alamos", "blanco", "Semillon", 1250,"./img/alamos-chardonnay.jpg",18)
// const vino19 = new Vino("El Esteco", "tinto", "Cabernet Sauvignon", 1350,"./img/elestecocabernetsauvignon.jpg" ,19)
// const vino20 = new Vino("El Esteco", "blanco", "Blanc de Blancs", 1500,"./img/elesteco-blanc.png", 20)


// /* Creo Array del Objeto para poder buscar */
// let listaVino = [vino1, vino2, vino3, vino4, vino5, vino6, vino7, vino8, vino9, vino10, vino11, vino12, vino13, vino14, vino15, vino16, vino17, vino18, vino19, vino20]
//  console.log(listaVino)
//   let listaVino = [
//         {marca : "Los Aroldos", tipoVino : "tinto", varietal : "Malbec", precio : 1200, id :  1},
//         {marca : "Los Aroldos",tipoVino : "tinto",varietal : "Cabernet Sauvignon",precio : 900,id :  2 },
//         {marca : "Los Aroldos",tipoVino : "tinto",varietal : "Syrah",precio : 1100,id :  3 },
//         {marca : "Los Aroldos",tipoVino : "blanco",varietal : "Chardonnay",precio : 700,id :  4 },
//         {marca : "Los Aroldos",tipoVino : "blanco",varietal : "Chenin",precio : 900,id :  5 },
//         {marca : "El Esteco",tipoVino : "tinto",varietal : "Syrah",precio : 950,id :  6 },
//         {marca : "Los Aroldos",tipoVino : "blanco",varietal : "Cosecha Tardia",precio : 800,id :  7 },
//         {marca : "Las Perdices",tipoVino : "tinto",varietal : "Malbec",precio : 1300,id :  8 },
//         {marca : "Las Perdices",tipoVino : "tinto",varietal : "Syrah",precio : 1250,id :  9 },
//         {marca : "Las Perdices",tipoVino : "tinto",varietal : "Cabernet Franc",precio : 1150,id :  10 },
//         {marca : "Las Perdices",tipoVino : "blanco",varietal : "Cosecha Tardia",precio : 1200,id :  11 },
//         {marca : "Las Perdices",tipoVino : "blanco",varietal : "Moscatel",precio : 900,id :  12 },
//         {marca : "Las Perdices",tipoVino : "blanco",varietal : "Sauvignon Blanc",precio : 1100,id :  13 },
//         {marca : "Las Perdices",tipoVino : "blanco",varietal : "Chenin Blanc",precio : 1300,id :  14 },
//         {marca : "Los Alamos",tipoVino : "tinto",varietal : "Cabernet Franc",precio : 1500,id :  15 },
//         {marca : "Los Alamos",tipoVino : "tinto",varietal : "Pinot Noir",precio : 1400, id : 16 },
//         {marca : "Los Alamos",tipoVino : "blanco",varietal : "Torrontes",precio : 1350,id :  17 },
//         {marca : "Los Alamos",tipoVino : "blanco",varietal : "Semillon", precio : 1250,id :  18 },
//         {marca : "El Esteco",tipoVino : "tinto",varietal : "Blend",precio : 1350,id :  19 },
//         {marca : "El Esteco",tipoVino : "blanco",varietal : "Blend",precio : 1500,id :  20 },
 // ]
