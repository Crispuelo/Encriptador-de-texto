



document.getElementById("B-encriptar").addEventListener("click", encriptar)
document.getElementById("B-desencriptar").addEventListener("click", desencriptar)
document.getElementById("B-copiar").addEventListener("click", copiar)



function encriptar(){
 let texto = document.getElementById("texto-entrada").value

if(texto == ""){
   alert("el campo de texto no debe estar vacío")
}

    
    texto=texto.replace(/e/mg, "enter")
    texto=texto.replace(/i/mg, "imes")
    texto=texto.replace(/a/mg, "ai")
    texto=texto.replace(/o/mg, "ober")
    texto=texto.replace(/u/mg, "ufat")


    document.getElementById("texto-resultado").innerHTML = texto
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("B-copiar").style.visibility ="visible";



}

function desencriptar(){


        let texto = document.getElementById("texto-entrada").value
       
       if(texto == ""){
          alert("el campo de texto no debe estar vacío")
       }
       
           
           texto=texto.replace(/enter/mg, "e")
           texto=texto.replace(/imes/mg, "i")
           texto=texto.replace(/ai/mg, "a")
           texto=texto.replace(/ober/mg, "o")
           texto=texto.replace(/ufat/mg, "u")
       
       
           document.getElementById("texto-resultado").innerHTML = texto
           document.getElementById("muñeco").style.display = "none";
           document.getElementById("B-copiar").style.visibility ="visible";
       
}

function copiar(){

    textoCopiar = document.getElementById("texto-resultado") 
    textoCopiar.select()
    document.execCommand("copy")
    alert("Texto Copiado!")
}