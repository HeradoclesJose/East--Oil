$( document ).ready(function() {

  $('.button-collapse').sideNav({
        menuWidth: 350, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
  );

// SCROLLSPY
    $('.scrollspy').scrollSpy({
        scrollOffset:84
    });

    $( "#hamburguesa-blanca" ).click(function() {
      $('.button-collapse').sideNav('hide');
    });

    $( ".navbar-fixed" ).click(function() {
      $('.button-collapse').sideNav('hide');
    });
    
//CONTROL DE MENSAJE

    var $name = $("#NombreyApellido");
    var $email = $("#email");
    var $cellphone = $("#Telefono");
    var $empresa = $("#Empresa");
    var $message = $("#Mensaje");
    
    $("#sendMail").click(function(){

        if(($name.val()=="") || ($email.val()=="") || ($cellphone.val()=="") || ($empresa.val()=="") || ($message.val()=="")){
            $(".hideb-2").addClass("show");
        }else{
            $(".hideb-2").removeClass("show");
            $(".hideb").addClass("show");
            $("#sendMail").addClass("disabled");
        }
    });

});