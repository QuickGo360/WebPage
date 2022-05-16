$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "Escribe la respuesta correcta -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "vamos, tienes nombre, verdad?",
                    minlength: "su nombre debe constar de al menos 2 caracteres"
                },
                subject: {
                    required: "vamos, tienes tema, verdad?",
                    minlength: "su tema debe constar de al menos 4 caracteres"
                },
                number: {
                    required: "vamos, tienes un numero, verdad?",
                    minlength: "su número debe constar de al menos 5 caracteres"
                },
                email: {
                    required: "sin correo electrónico, sin mensaje"
                },
                message: {
                    required: "umm... sí, tienes que escribir algo para enviar este formulario.",
                    minlength: "¿eso es todo? ¿De Verdad?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})