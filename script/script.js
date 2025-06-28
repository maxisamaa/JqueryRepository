let images=$(".thumb"); /*$(".thumb")==document.querySelector(".thumb")*/
// selecciona cualquier imagen con clase thumb

let ultimotitulo=""

images.click(function(){
    $(".modal").fadeIn();
    let titulo = $(this).data('pelicula');

    // Establecer el valor del campo y hacerlo no editable
    $('#peliculaNombre').val(titulo);
    //activo .modal con anmacion
    ultimotitulo=titulo
})

$(".close").click(function(){
  $(".modal").fadeOut();
})


$(document).ready(function() { 
  $('.reservar-btn').on('click', function() {
    let titulo = $(this).data('pelicula');

    // Establecer el valor del campo y hacerlo no editable
    $('#peliculaNombre').val(titulo);

    // Mostrar el modal (puedes usar un plugin como Bootstrap Modal si prefieres)
    $('.modal').fadeIn();

    ultimotitulo=titulo // let solo se usa para declarar varianles nuevas
  });
});

$(".cancelar").click(function(){
    $(".modal").fadeOut();
});



$(document).ready(function(){
  $("#formularioReserva").submit(function(event){
    event.preventDefault(); // Detiene el submit normal
    if (this.checkValidity()) {
      $(".card-title").text("Tu reserva para " +ultimotitulo+ " ha sido confirmada! ")
      let cantidadNum = $("#cantidadEntradas").val();
      let nombre=$("#nom").val();
      console.log($("#nom")); // Verifica si jQuery encuentra el elemento
      console.log($("#nom").val()); 
      $(".card-text").text("Gracias " + nombre + ", has reservado " + cantidadNum + " entradas para " + ultimotitulo )
      $(".modal").fadeOut();
      $(".card").fadeIn();
    
    } else {
      console.log("Por favor completa todos los campos.");
      this.reportValidity(); 
    }
  });
});

//let titulo = $(contenedor[currentIndex]).attr("data-pelicula"); me dice el titulo si por variable global voy pasando el currentIndex
// modificar tarjeta 








/*$("#prev").click(function(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    let src_imagen = $(images[currentIndex]).attr("src");
    $(".imagen-modal").attr("src", src_imagen);
});*/

//OJO con images.length , jquery automaticamente crea
/* un array con todos los elementso que forman parte
de una clase por su orden en el arbol html , es decir
el orden en que se encuentran en el html*/ 