
let tabla = document.getElementById("tabla");

let datos = [
  { fecha: "13/07/2023" , nombre: "Usuario 1", edad: 25, ciudad: "Madrid", razon: "Turismo" },
  { fecha: "23/09/2013", nombre: "Usuario 2", edad: 30, ciudad: "Barcelona", razon: "Trabajo"},
  { fecha: "03/02/2015", nombre: "Usuario 3", edad: 35, ciudad: "Valencia", razon: "Turismo" },
  { fecha: "15/11/2011", nombre: "Usuario 4", edad: 24, ciudad: "Andalucia", razon: "Negocios" }
];


// Creamos la fila de encabezado
let encabezado = tabla.createTHead().insertRow();

// Insertamos los datos del encabezado
for (let key in datos[0]) {
  let th = document.createElement("th");
  th.innerHTML = key.toUpperCase();
  encabezado.appendChild(th);
}

// Creamos las filas de datos
let cuerpo = tabla.createTBody();

// Insertamos los registros
datos.forEach(function(item) {
  let fila = cuerpo.insertRow();
  for (let key in item) {
    let celda = fila.insertCell();
    celda.innerHTML = item[key];
  }
});
