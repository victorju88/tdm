function correo() {
   console.log("Entre");
   var nombre = document.getElementById('username').value;
   var email = document.getElementById('email').value;
   var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   var subject = document.getElementById('subject').value;
   var phone = document.getElementById('phone').value;
   var message = document.getElementById('message').value;
   if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
      /*alert("Escribe tu Nombre correctamente");*/
      document.getElementById("username").focus();
      Swal.fire({
         title: '¡Error!',
         text: 'Escribe tu nombre correctamente',
         icon: 'error',
         confirmButtonText: 'Aceptar'
       })
      document.getElementById("username").focus();
      return false;
   } else
   if(!(reg.test(email))){
      // alert("Escribe un correo correcto correctamente");
      document.getElementById("email").focus();
      Swal.fire({
         title: '¡Error!',
         text: 'Escribe tu email correctamente',
         icon: 'error',
         confirmButtonText: 'Aceptar'
       })
      document.getElementById("email").focus();
      return false;
   }else
   if(subject == null || subject.length == 0 || /^\s+$/.test(subject)){
      // alert("Escribe el Asunto");
      document.getElementById("subject").focus();
      Swal.fire({
         title: '¡Error!',
         text: 'Escribe el nombre de tu empresa correctamente',
         icon: 'error',
         confirmButtonText: 'Aceptar'
       })
      document.getElementById("subject").focus();
      return false;
   }else
   if(!(/^\d{10}$/.test(phone))){
      // alert("Escribe un número válido de WhatsApp de 10 caracteres");
      document.getElementById("phone").focus();
      Swal.fire({
         title: '¡Error!',
         text: 'Escribe un número válido de WhatsApp de 10 caracteres',
         icon: 'error',
         confirmButtonText: 'Aceptar'
       })
      document.getElementById("phone").focus();
      return false;
   }
   if(message == null || message.length == 0 || /^\s+$/.test(message)){
      // alert("Escribe tu Mensaje");
      document.getElementById("message").focus();
      Swal.fire({
         title: '¡Error!',
         text: 'Escribe tu Mensaje correctamente',
         icon: 'error',
         confirmButtonText: 'Aceptar'
       })
      document.getElementById("message").focus();
      return false;
   }else
   Swal.fire({
      position: 'top-middle',
      icon: 'success',
      title: 'Su mensaje ha sido enviado correctamente',
      showConfirmButton: false,
      timer: 1500
    });
   const data = new URLSearchParams([['nombre', nombre], ['email', email], ['phone', phone], ['subject', subject], ['message', message]]);
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  fetch('https://gruporyc.com.mx:8081/send-email', {
     method: 'POST',
     body: data
  })
  .then(function(response) {
     if(response.ok) {
      //   alert('Su mensaje ha sido enviado. Nos contactaremos con usted por medio de su numero o correo electronico, muchas gracias por la confianza.');
         return response.text()       
     } else {
         throw 'Error en la llamada Ajax';
     }
  })
  .catch(function(err) {
  });
  }                                                                                                                                                                                     

  /*funcion 2*/
  function correo2() {
   console.log("Entre");
   var nombre = document.getElementById('username2').value;
   var email = document.getElementById('email2').value;
   var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   var subject = document.getElementById('subject2').value;
   var phone = document.getElementById('phone2').value;
   var message = document.getElementById('message2').value;
   if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
      /*alert("Escribe tu Nombre correctamente");*/
      document.getElementById("username").focus();
      Swal.fire({
         title: '¡Error!',
         text: 'Escribe tu nombre correctamente',
         icon: 'error',
         confirmButtonText: 'Aceptar'
       })
      document.getElementById("username").focus();
      return false;
   } else
   if(!(reg.test(email))){
      // alert("Escribe un correo correcto correctamente");
      document.getElementById("email").focus();
      Swal.fire({
         title: '¡Error!',
         text: 'Escribe tu email correctamente',
         icon: 'error',
         confirmButtonText: 'Aceptar'
       })
      document.getElementById("email").focus();
      return false;
   }else
   if(subject == null || subject.length == 0 || /^\s+$/.test(subject)){
      // alert("Escribe el Asunto");
      document.getElementById("subject").focus();
      Swal.fire({
         title: '¡Error!',
         text: 'Escribe el nombre de tu empresa correctamente',
         icon: 'error',
         confirmButtonText: 'Aceptar'
       })
      document.getElementById("subject").focus();
      return false;
   }else
   if(!(/^\d{10}$/.test(phone))){
      // alert("Escribe un número válido de WhatsApp de 10 caracteres");
      document.getElementById("phone").focus();
      Swal.fire({
         title: '¡Error!',
         text: 'Escribe un número válido de WhatsApp de 10 caracteres',
         icon: 'error',
         confirmButtonText: 'Aceptar'
       })
      document.getElementById("phone").focus();
      return false;
   }
   if(message == null || message.length == 0 || /^\s+$/.test(message)){
      // alert("Escribe tu Mensaje");
      document.getElementById("message").focus();
      Swal.fire({
         title: '¡Error!',
         text: 'Escribe tu Mensaje correctamente',
         icon: 'error',
         confirmButtonText: 'Aceptar'
       })
      document.getElementById("message").focus();
      return false;
   }else
   Swal.fire({
      position: 'top-middle',
      icon: 'success',
      title: 'Su mensaje ha sido enviado correctamente',
      showConfirmButton: false,
      timer: 1500
    });
   const data = new URLSearchParams([['nombre', nombre], ['email', email], ['phone', phone], ['subject', subject], ['message', message]]);
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  fetch('https://gruporyc.com.mx:8081/send-email', {
     method: 'POST',
     body: data
  })
  .then(function(response) {
     if(response.ok) {
      //   alert('Su mensaje ha sido enviado. Nos contactaremos con usted por medio de su numero o correo electronico, muchas gracias por la confianza.');
         return response.text()       
     } else {
         throw 'Error en la llamada Ajax';
     }
  })
  .catch(function(err) {
  });
  }            