/*async function test(){

    //--Al crear un evento--

    //Buscar una direccion y traer coord
    let coordDondeSeHaceLaBusqueda = await apiCoordIP.verUbicacion()
    let coord1 = await apiBuscarDirec.buscarDireccion('Rivadavia 6000',coordDondeSeHaceLaBusqueda)




    //---Para ver la distancia--

    //El sistema se fija las coord de la ip del usuario  que quiere saber la distancia
    let coord2 = await apiCoordIP.verUbicacion()

    //El sistema se fija la distancia entre dos coord
    let distancia = await calcularDistancia.calcularDistancia(coord1,coord2)



    console.log('La distancia a la que esta el evento es de '+distancia+' kilometros')
}*/