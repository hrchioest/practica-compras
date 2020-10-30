//CONSIGNA:Desarrollar un “carrito de compras” donde el usuario presione sobre cada producto
// y el mismo quede guardado en el carrito. Luego, al oprimir el botón “Comprar”, calcular el
// importe final y mostrar los productos comprados junto con el total a pagar. Solo puede
// comprar una unidad de cada producto.

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

//Creando parte de la tabla tbody
let tbody = document.querySelector("tbody");

for (let i = 0; i < productos.length; i++) {
  let tr = document.createElement("tr");

  let tdNombre = document.createElement("td");
  tdNombre.innerHTML = productos[i].nombre;

  let tdPrecio = document.createElement("td");
  tdPrecio.innerHTML = productos[i].precio;

  //Para mi caso agregué check para similar agregar al carrito de compras:
  let tdCheck = document.createElement("td");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", [i]);
  tdCheck.appendChild(checkbox);

  tr.appendChild(tdNombre);
  tr.appendChild(tdPrecio);
  tr.appendChild(tdCheck);

  tbody.appendChild(tr);
}

//función comprar:
const comprar = () => {
  let precioTotal = 0;
  let productosComprados = "";

  //con la ayuda del atributo checked selecciono los chekeados y
  //desabilito para que no se agregue mas de 1 producto:

  let select = document.querySelectorAll("input");
  select.forEach((item) => {
    if (item.checked) {
      item.disabled = true;
      precioTotal = precioTotal + productos[item.value].precio;
      productosComprados =
        productosComprados + " " + productos[item.value].nombre;
      console.log(productos[item.value].precio);
    }
  });
  let mensaje = document.querySelector(".js-message");

  mensaje.innerHTML =
    "La compra de sus productos fueron : " +
    productosComprados +
    ". Precio total: " +
    " $" +
    precioTotal;
};

const button = document.querySelector("button");
button.addEventListener("click", comprar);
