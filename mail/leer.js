const fs = require('fs')

function leerInfo(path,separador){
  return separar(leer(path),separador)
}
function leer(path){
  return fs.readFileSync(path,'utf-8')
}
function separar(string,separador){
  return string.split(separador)
}
function crearMail(info){
  return {
	  emisor: info[0],
	  clave: info[1],
	  receptor: info[2],
	  tema: info[3],
	  mensaje: info[4],
	  dominio: info[5]
  }
}
module.exports = leer