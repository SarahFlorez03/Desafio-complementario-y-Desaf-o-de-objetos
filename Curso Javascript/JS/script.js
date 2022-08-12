
//DOM
const lista= document.getElementById("lista")

const arrayLista= ["Quienes Somos", "Menú", "Productos", "Políticas COVID-19"]

arrayLista.forEach(item=>{
  lista.innerHTML += `<li><b>${item} </b> <a href=""> </a></li>`
  
})

const titulo=document.getElementById("titulo");
titulo.textContent= `Desafío complementario DOM`;

const h2=document.getElementById("h2");
h2.textContent= "Nuestros productos"

//Si clikeas el boton sale un alert
let boton = document.getElementById("botonComprar")
boton.onclick = () => {alert("¿Quiere comprar?")};

//Si clickeas la imagen sale un console log
let img = document.getElementById("principal")
img.onclick=()=>{console.log("Body negro ZARA")};

//CODIGO JS QUE DESPUES VOY A ENLAZAR CON EL HTML
// 'use strict';
// const Productos= [
//     { nombre: "Campera", precio: 5000},
//     { nombre: "Joggin", precio: 2500},
//     { nombre: "Remera", precio: 1200},
//     { nombre: "Jeans", precio: 2800},
//     { nombre: "Zapatillas", precio: 8000},
// ];

// let Carrito = []

// let seleccion = prompt("Hola! ¿Desea comprar algún producto? (Si o No)").toLowerCase()

// while (seleccion != "si" && seleccion != "no"){
//     alert ("Por favor ingresa Si o No")
//     seleccion = prompt("Hola! ¿Desea comprar algún producto? (Si o No)")
// }

// if (seleccion== "si"){
//     alert("A continuación nuestra lista de productos")

//     let todosLosProductos = Productos.map((Productos)=> Productos.nombre + " " + Productos.precio+ "$"
//     );

//    alert(todosLosProductos.join(" - "))   
// } else if(seleccion=="no"){
//     alert("Gracias por visitarnos! Nos vemos!")
// }

// while(seleccion != "no"){
//     let producto = prompt ("Agrega un producto a tu carrito")
//     let precio = 0
//     if (producto == "Campera" || producto == "Joggin" || producto == "Remera" || producto == "Jeans" || producto == "Zapatillas" ){
       
//      switch(producto){
//         case "Campera":
//          precio= 5000;
//          break;
//         case "Joggin":
//          precio= 2500;
//         break;
//         case "Remera":
//          precio= 1200;
//          break;    
//         case "Jeans":
//          precio= 2800;
//          break;
//         case "Zapatillas":
//          precio= 8000;
//          break;
// default:
//     break;
//  } 
 
//  let unidades = parseInt (prompt("¿Cuantas unidades quiere llevar?"))

//  Carrito.push({producto, unidades, precio})
//  console.log(Carrito)
// }else {
//     alert ("No tenemos ese producto")
// }
//   seleccion = prompt("¿Desea seguir comprando? (Si o No").toLowerCase()

//   while (seleccion == "no"){
//     alert ("Gracias por la compra! Hasta pronto!")
//   break;
    
// }
//   }

// const total= Carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)

// console.log(`El total a pagar por su compra es: ${total}`)