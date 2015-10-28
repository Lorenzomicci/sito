function principale(){

      $("#btn_invia").click(function(){
      var testo = $("#messaggio").val();
      console.log(testo);
      var form = document.getElementById("form_chat");
      var div = document.createElement("div");
      $(div).html(testo);
      console.log(div);
      $(form).append(div);
      })//click
      
      var nick = false; 
      
     


}//principale

 function nickn(){
 }
