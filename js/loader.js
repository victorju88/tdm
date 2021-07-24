 /*$(window).load(function() {
    /* $(".loader").fadeOut("slow"); */
    /*$("shown.bs.modal");
    myModal.show();

});*/
/* var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
}); */
$(document).ready(function(){
  function showPopup(){
    $('.pop-up').addClass('show');
    $('.pop-wrap').addClass('show');
  }
  $('#close').click(function(){
    $('.pop-up').removeClass('show');
    $('.pop-wrap').removeClass('show');
  });
  $('#prueba').click(function(){
    $('.pop-up').addClass('show');
    $('.pop-wrap').addClass('show');
  });
  $('#ServicioDivorcio').click(function(){
    $('.pop-up').addClass('show');
    $('.pop-wrap').addClass('show');
  });
  $('#ServicioDefuncion').click(function(){
    $('.pop-up').addClass('show');
    $('.pop-wrap').addClass('show');
  });
  $('#ServicioNacimiento').click(function(){
    $('.pop-up').addClass('show');
    $('.pop-wrap').addClass('show');
  });
  $('#ServicioCorreccionCurp').click(function(){
    $('.pop-up').addClass('show');
    $('.pop-wrap').addClass('show');
  });
  $('#ServicioFiscal').click(function(){
    $('.pop-up').addClass('show');
    $('.pop-wrap').addClass('show');
  });
  $('#ServicioMatrimonio').click(function(){
    $('.pop-up').addClass('show');
    $('.pop-wrap').addClass('show');
  });
  $('#ServicioHomonimias').click(function(){
    $('.pop-up').addClass('show');
    $('.pop-wrap').addClass('show');
  });
  ServicioFiscal
  /*$('#enviarFormulario').click(function(){
    $('.pop-up').removeClass('show');
    $('.pop-wrap').removeClass('show');
  });*/
  setTimeout(showPopup,50);
});