function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// cambie random porque antes no andaba bien
// tenia ganas de no nombrar la funcion y exportarla directo pero el
// tema es que si hago eso despues es mas dificil si quiero agregar
// mas funciones, asi que lo deje asi
module.exports = random