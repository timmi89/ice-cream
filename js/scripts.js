$(document).ready(function() {

  var flavors = ["mint chocolate chip", "chocolate", "chocolate chip cookie dough", "strawberry cheescake"];




  $("button#cream").click(function() {
    flavors.forEach(function(flavor){
    //  document.write('i love ' + flavor + '!');
     $("p#flavor").html('i love ' + flavor + '!');
   });
  });

});
