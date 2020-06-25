const send = require('./send')

const destinatario = 'grupo.cuatro.tp1@gmail.com'
//test 1
function enviarMailCorrectoConAsuntoyMensaje(){
	let resultado = {
		error: false,
		mensaje: ''
	}
	try{
		const asunto = 'test 1'
		const mensaje = 'enviarMailCorrectoConAsuntoyMensaje'
		send(destinatario,asunto,mensaje)
	}catch(e){
		resultado.error = true
		resultado.mensaje += e
	}
	return resultado
}
//test 2
function enviarMailConAsuntoVacio(){
	let resultado = {
		error: false,
		mensaje: ''
	}
	try{
		send(destinatario)
	}catch(e){
		resultado.error = true
		resultado.mensaje += e
	}
	return resultado
}
//test 3
function enviarMailConAsuntoVacioAVariosDestinatarios(){
	const destinatarios = [destinatario,'grupo.cuatro.tp1@gmail.com']
	let resultado = {
		error: false,
		mensaje: ''
	}
	try{
		send(destinatarios)
	}catch(e){
		resultado.error = true
		resultado.mensaje += e
	}
	return resultado
}
//test 4
function enviarMailCorrectoAVariosDestinatarios(){
	const destinatarios = [destinatario,'grupo.cuatro.tp1@gmail.com']
	let resultado = {
		error: false,
		mensaje: ''
	}
	try{
		const asunto = 'test 4'
		const mensaje = 'enviarMailCorrectoAVariosDestinatarios'
		send(destinatarios,asunto,mensaje)
	}catch(e){
		resultado.error = true
		resultado.mensaje += e
	}
	return resultado
}
//test 5
function enviarMailSinMensaje(){
	const destinatarios = [destinatario,'grupo.cuatro.tp1@gmail.com']
	let resultado = {
		error: false,
		mensaje: ''
	}
	try{
		const asunto = 'test 4'
		send(destinatarios,asunto)
	}catch(e){
		resultado.error = true
		resultado.mensaje += e
	}
	return resultado
}

function main(){
	const tests = [
		enviarMailCorrectoConAsuntoyMensaje,
		enviarMailConAsuntoVacio,
		enviarMailConAsuntoVacioAVariosDestinatarios,
		enviarMailCorrectoAVariosDestinatarios,
		enviarMailSinMensaje
	]
	const sent = 'mail enviado correctamente'
	let done = 0
	let passed = 0
	let errors = 0

	console.log('test de modulo de emails')

	for (const test of tests){
		console.log('test '+(done+1))
		let x = test()
		if(x.error){
			errors++
			console.log(x.mensaje)
		}else{
			passed++
			console.log(sent)
		}
		done++
		console.log('')
	}
	console.log('errores: '+errors)
	console.log('pasados: '+passed)
	console.log('terminados: '+done)
}
main()