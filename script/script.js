let images=$(".thumb"); /*$(".thumb")==document.querySelector(".thumb")*/
// selecciona cualquier imagen con clase thumb
let currentIndex=0

images.click(function(){
    let src_imagen=$(this).attr("src");
    $(".imagen-modal").attr("src",src_imagen);
    //.attr("src") sirve para identificar o leer
    // pero .attr("src",src_imagen) modifica
    // el primer elemento del argumento es
    //el atributo a modificar y el segundo su nuevo valor
    $(".modal").fadeIn();
    //activo .modal con anmacion

//index=$(this).attr("data-index");
    currentIndex=$(this).attr("data-index");
})

$(".close").click(function(){
    $(".modal").fadeOut();
})

$("#prev").click(function(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    let src_imagen = $(images[currentIndex]).attr("src");
    $(".imagen-modal").attr("src", src_imagen);
});

$("#next").click(function(){
    currentIndex = (currentIndex + 1 + images.length) % images.length;
    let src_imagen = $(images[currentIndex]).attr("src");
    $('.imagen-modal').attr("src", src_imagen);
});

/*el truco del % solo funciona si
los index van de 0 a images.length*/

//OJO con images.length , jquery automaticamente crea
/* un array con todos los elementso que forman parte
de una clase por su orden en el arbol html , es decir
el orden en que se encuentran en el html*/ 