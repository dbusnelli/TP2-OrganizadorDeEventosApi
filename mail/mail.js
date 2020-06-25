const nodemailer = require('nodemailer');

class Mail{
  constructor(user,pass,domain='gmail'){
    this.setUser(user)
    this.setPass(pass)
    this.domain = domain;
  }
  toString(){
    return this.user
  }
  setPass(pass){
    if(pass!='' && typeof pass){
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

  validateText(text,error){
    if(text==error){
      throw 'el '+error+' no puede estar vacio'
    }
  }

  send(_to,_subject='asunto',_text='mensaje'){
    this.validateArray(_to)
    this.validateText(_subject,'asunto')
    this.validateText(_text,'mensaje')
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
      validate: function(error, info){
        if (error) {
          throw error;
        }
      }
    };
    send.transport.sendMail(send.options,send.validate);
  }
}

module.exports = Mail