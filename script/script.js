let images=$(".thumb"); /*$(".thumb")==document.querySelector(".thumb")*/
// selecciona cualquier imagen con clase thumb
let currentIndex=0

images.click(function(){
    $(".modal").fadeIn();
    //activo .modal con anmacion
})

$(".close").click(function(){
    $(".modal").fadeOut();
})

$("#prev").click(function(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    let src_imagen = $(images[currentIndex]).attr("src");
    $(".imagen-modal").attr("src", src_imagen);
});

//OJO con images.length , jquery automaticamente crea
/* un array con todos los elementso que forman parte
de una clase por su orden en el arbol html , es decir
el orden en que se encuentran en el html*/ 

$(document).ready(function() { 
  $('.reservar-btn').on('click', function() {
    let titulo = $(this).data('pelicula');

    // Establecer el valor del campo y hacerlo no editable
    $('#pelicula-nombre').val(titulo);

    // Mostrar el modal (puedes usar un plugin como Bootstrap Modal si prefieres)
    $('.modal').fadeIn();
  });
});



$(".confirmar, .cancelar").click(function(){
    $(".modal").fadeOut();
});
