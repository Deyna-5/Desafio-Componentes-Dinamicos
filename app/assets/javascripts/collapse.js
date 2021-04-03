$(document).on("ready turbolinks:load", function(){
       $("#message_collapse").hide();

       $('#collapse').click(function(){
              $("#message_collapse").slideToggle('900')
       });
})