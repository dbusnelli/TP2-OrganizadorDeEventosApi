const Mail = require('./mail.js')
const leer = require('./leer.js')
const random = require('./random.js')

function wrongFrom(){
	// test de email que no cumple con las condiciones de la validacion
	const a = new Mail('notAnEmail','estoesunacontraseña','gmail')
}
// tengo que hacer una validacion del dominio y un test, pero como siempre uso
// gmail no se si hace falta
function intPass(){
	const not_a_String = 1
	const b = new Mail('email@ejemplo.com',not_a_String,'gmail')
	// tengo que cambiar porque podes poner ints y te los detecta como strings
	// pero si pongo '' si me tira error
	// por ahi puedo poner pass==NaN o algo asi
}

function wrongTo(){
	// test de si el receptor es un email incorrecto
	const d = new Mail('grupo.cuatro.tp1@gmail.com','grupo4tp1')
	d.send(['gabriel','andres'],'no importa','https://stackoverflow.com/a/46129951')
}
// no se como hacer catch del wrong login cuando pones mal la contraseña

// no se como hacer catch de solo un email invalido y que me aparezca error del resto

// tendria que hacer un modulo nuevo que verifique si el numero recibido es el mismo
// que el numero random enviado
var resultados = ''
function ejecutar(funcion){
	// es un callback que hace try catch de la funcion que le pasan sin parametros
	try{
		funcion()
	}catch(e){
		console.log(e)
		resultados+=e
	}
}
function enviarResultados(){
	// testea si se pueden mandar mails, si anda el modulo leer y random
	// manda los resultados de los errores del test por mail
	const direccion=leer('./auth/direcci.on')
	const pass=leer('./auth/pa.ss')
	const minimo = 0
	const maximo = 2020
	const alAzar=random(minimo,maximo)
	// me fije y el random anterior no andaba, asi que hice uno nuevo
	const f = new Mail(direccion,pass)
	//el valor por default es gmail asi que lo deje vacio
	f.send(direccion,alAzar,'resultados del test: '+resultados)
}
function funciones(){
	// ejecuta todas las funciones del array con un foreach
	const z = [wrongFrom,intPass,wrongTo,enviarResultados]
	z.forEach(element => ejecutar(element))
}
funciones()

