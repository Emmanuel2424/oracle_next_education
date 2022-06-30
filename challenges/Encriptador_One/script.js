
var mensaje = document.querySelectorAll(".input-text-area");
var mensaje_devuelta = document.querySelectorAll("#text-area1");

// evnto onclick del boton de encriptar con JQUERY
$(document).ready(function(){

    $('#obtener').click(function(){
    
        var contenido = $("#text-area1").val();

        /*  aqui mandamos a la funcion encriptar el texto obtenido en el text area
         y a su vez se lo asignamos a la variable textoEncriptado*/
        var textoEncriptado= encriptar(contenido);
    

        mensaje.value = textoEncriptado;
        
    
    })})


  // Funcion para desencriptar

  $(document).ready(function(){

    $('#desencriptar').click(function(){
    

    //aqui extraemos y asignamos el contenido del text area que contiene el texto que vamos a desencriptar    
    var contenido = $("#input-text-area").val();
    // aqui limpiamos en TEXT AREAA
     $("#text-area1").val(" ");


    // aqui mandamos a la funcion desencriptar el contenido del text area que tiene el texto encriptado
    var texto_desEncriptado= desencriptar(contenido);
    
    mensaje_devuelta.value = textodesEncriptado;
  
    
    })
  
  
  })

  //FUNCIONES ENCRIPTAR Y DESENCRIPTAR
function btnencriptar(){
    
    $("#input-text-area").val(mensaje);

}

function btndesencriptar(){

    $("#input-text-area").val(" ");
    
    $("#text-area1").val(mensaje_devuelta);

}


// ENCRIPTADOR
function encriptar (StringParaEncriptar){
    
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","utaf"]]
    
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    //alert("TO LOWER CASE: " + StringParaEncriptar);

    for(let i=0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

  mensaje = StringParaEncriptar;


  btnencriptar();

return StringParaEncriptar;

}

// DESENCRIPTADOR
function desencriptar (StringParaDESEncriptar){
    //alert("Entro a funcion............ DESENCRIPTAR CON EL TEXTO: " + StringParaDESEncriptar);
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["utaf","u"]]
    
    StringParaDESEncriptar = StringParaDESEncriptar.toLowerCase();
    //alert("TO LOWER CASE: " + StringParaDESEncriptar);

    for(let i=0; i< matrizCodigo.length; i++){
        if(StringParaDESEncriptar.includes(matrizCodigo[i][0])){
            StringParaDESEncriptar = StringParaDESEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

  mensaje_devuelta = StringParaDESEncriptar;

  //alert("mensaje DEVUELTS otro text Area: "+ mensaje_devuelta);

  btndesencriptar();


return StringParaDESEncriptar;

}