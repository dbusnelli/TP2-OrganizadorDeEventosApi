const nodemailer = require('nodemailer');

class Mail{
  constructor(user,pass,domain='gmail'){
    // cambie el constructor y puse setters para las validaciones
    this.setUser(user)
    this.setPass(pass)
    // por ahi tendria que validar el dominio tambien
    this.domain = domain;
  }
  setPass(pass){
    // antes me equivoque y le puse || en vez de &&
    if(pass!='' && typeof stringValue){
      this.pass=pass
    }else{
      throw 'contraseña vacia'
    }  
  }
  setUser(user){
    if(this.validateEmail(user)){
      this.user = user;
    }else{
      throw user+' no es un email valido';
    }   
  }
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateArray(array){
    if(Array.isArray(array)){
      array.forEach((element) => {
        if(!this.validateEmail(element)){
          throw element+' no es un email valido'
        }
      })
    }else if(!this.validateEmail(array)){
      throw array+' no es un email valido'
    }
  }

  send(_to,_subject=' ',_text=' '){
    this.validateArray(_to)
    const send = {
      options: {
        from: this.user,
        to: _to,
        subject: _subject,
        text: _text
      },
      transport: nodemailer.createTransport({
        service: this.domain,
        auth: {
          user: this.user,
          pass: this.pass
        }
      }),
      // supuestamente si es json no se puede tener una variable function
      validate: function(error, info){
        if (error) {
          throw error;
        } else {
          console.log('Email sent: ' + info.response)
          // no se como hacer para pasar esto de otra forma
          // por ahi puedo agregar el info.response a un log.txt o algo asi
        }
      }
    };
    // no se si dejar el objeto este asi porque por ahi por el
    // hecho de que es un objeto y no una funcion no puedo
    // poner el email sent de otra manera
    send.transport.sendMail(send.options,send.validate);
  }
}

module.exports = Mail