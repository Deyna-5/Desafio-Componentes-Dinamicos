$(document).on("ready turbolinks:load", function(){
       $("#message_alert").hide();

       $('#alert').click(function(){
              $("#message_alert").show()
       });

       $('#close').click(function(){
              $("#message_alert").hide()
       });
})

