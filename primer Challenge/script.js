
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


//==================VALIDAR LETRAS==========
function sololetras(e) {
    key=e.keyCode || e.which;
 
    teclado=String.fromCharCode(key);

    letras="abcdefghijklmnopqrstuvwxyz";
 
    especiales="8-13-37-38-46-164";
 
    teclado_especial=false;
 
    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
            break;
        }
    }
 
    if(letras.indexOf(teclado)==-1 && !teclado_especial){
        alert("Ingrese datos validos!!")
        return false;
    }
 
}

//==================ENCRIPTAR==========
function encriptar() {

 var string = document.getElementById("input-texto").value;

 var result = string.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

 document.getElementById("texto2").value = result;

}



//==================DESENCRIPTAR==========
function desencriptar() {

 var string1 = document.getElementById("input-texto").value;

 var result1 = string1.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

 document.getElementById("texto2").value = result1;

}

//==================COPIAR==========
function copiar() {
    var texto = document.getElementById("texto2");
    texto2.select();
    texto2.setSelectionRange(0, 99999);
    document.execCommand("copy")
}
