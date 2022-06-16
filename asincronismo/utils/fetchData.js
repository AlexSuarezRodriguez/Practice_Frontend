let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest(); // instanciamos la conexion
    xhttp.open("GET", url_api, true); // abrir una conexion con el metodo, la ruta y si es asincrono
    // validacion del llamado
    xhttp.onreadystatechange = () => {
      // el state 4 es el ultimo de la peticion
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error", url_api));
      }
    };
    xhttp.send();
  });
};
module.exports = fetchData;
