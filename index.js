var productos = [
  { nombre: "harina 000", precio: 35 },
  { nombre: "pan", precio: 25 },
  { nombre: "papa", precio: 52 },
  { nombre: "palta", precio: 55 },
  { nombre: "fideos", precio: 85 },
  { nombre: "aceite", precio: 350 },
  { nombre: "sopa", precio: 83 },
  { nombre: "mermelada", precio: 108 },
  { nombre: "porotos", precio: 69 },
  { nombre: "lentejas", precio: 85 },
  { nombre: "mandarina", precio: 43 },
  { nombre: "banana", precio: 79 },
  { nombre: "leche de almendras", precio: 145 },
  { nombre: "papel higiénico", precio: 147 },
  { nombre: "lavandina", precio: 55 },
  { nombre: "alcohol en gel", precio: 123 },
  { nombre: "shampo", precio: 400 },
  { nombre: "arroz", precio: 66 },
  { nombre: "harina 0000", precio: 35 },
  { nombre: "salsa de tomate", precio: 35 }
];

// let carritoCompras = [];
// const agregarCarrito = (event) => {
//   if (event.target.checked) {
//     carritoCompras.push();
//   }
// };
let carritoCompras = [];
const agregarCarrito = (event) => {
  console.log(productos[event.target.value]);
  let precioProd = productos[event.target.value];
  carritoCompras.push(precioProd);
};

let tbody = document.querySelector("tbody");

for (let i = 0; i < productos.length; i++) {
  let tr = document.createElement("tr");

  let tdNombre = document.createElement("td");
  tdNombre.innerHTML = productos[i].nombre;

  let tdPrecio = document.createElement("td");
  tdPrecio.innerHTML = productos[i].precio;

  let tdCheck = document.createElement("td");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", [i]);
  tdCheck.appendChild(checkbox);
  checkbox.addEventListener("change", agregarCarrito);

  tr.appendChild(tdNombre);
  tr.appendChild(tdPrecio);
  tr.appendChild(tdCheck);

  tbody.appendChild(tr);
}

const comprar = (event) => {
  let precioTotal = 0;
  let productos = "";

  for (let i = 0; i < carritoCompras.length; i++) {
    precioTotal = precioTotal + carritoCompras[i].precio;
    productos = productos + " " + carritoCompras[i].nombre;
  }
  console.log(precioTotal, productos);
};
const button = document.querySelector("button");
button.addEventListener("click", comprar);
