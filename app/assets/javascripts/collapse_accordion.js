$(document).on('ready turbolinks:load', function(){
       $(".panel").hide();

       $("#accordion1").click(function(){
              $("#panel1").slideToggle('900');

              $("#panel2").hide('slow');
              $("#panel3").hide("slow");
       });

       $("#accordion2").click(function(){
              $("#panel2").slideToggle('900');

              $("#panel3").hide("slow");
              $("#panel1").hide("slow");
       });

       $("#accordion3").click(function(){
              $("#panel3").slideToggle('900');

              $("#panel2").hide('slow');
              $("#panel1").hide("slow");
       })

})