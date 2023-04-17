function criptografar(traducao){
    document.querySelector("#aviso").removeAttribute("style");
    var areaTexto = document.querySelector("#texto");
    var area_padrao = document.querySelector("#padrao");
    var area_resultado = document.querySelector("#resultado");
    var texto_o = document.querySelector("#texto_o");
    const texto = areaTexto.value;
    if (texto != ""){
        var leia = ""
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#aviso").style.color = "red";
                document.querySelector("#aviso").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_padrao.classList.remove("invisivel");
                area_resultado.classList.add("invisivel");
                return;
            }
            if(texto[i] == 'a'){
                leia += traducao["a"] ;
            }
            else if(texto[i] == 'e'){
                leia += traducao["e"];
            }
            else if(texto[i] == 'i'){
                leia += traducao["i"]; 
            }
            else if(texto[i] == 'o'){
                leia += traducao["o"]; 
            }
            else if(texto[i] == 'u'){
                leia += traducao["u"]; 
            }
            else{
                leia += texto[i];
            }
        }

        area_padrao.classList.add("invisivel");
        area_resultado.classList.remove("invisivel");
        texto_o.innerHTML = leia;
    }

    return;

}

function descriptografar(traducao){
    document.querySelector("#aviso").removeAttribute("style");
    var areaTexto = document.querySelector("#texto");
    var texto = areaTexto.value;
    var area_padrao = document.querySelector("#padrao");
    var area_resultado = document.querySelector("#resultado");
    var texto_o = document.querySelector("#texto_o");
    if (texto != ""){
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#aviso").style.color = "red";
                document.querySelector("#aviso").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_padrao.classList.remove("invisivel");
                area_resultado.classList.add("invisivel");
                return;
            }
        }
        area_padrao.classList.add("invisivel");
        area_resultado.classList.remove("invisivel");
        texto = texto.replace(new RegExp(traducao["a"], "g"), "a");
        texto = texto.replace(new RegExp(traducao["e"], "g"), "e");
        texto = texto.replace(new RegExp(traducao["i"], "g"), "i");
        texto = texto.replace(new RegExp(traducao["o"], "g"), "o");
        texto = texto.replace(new RegExp(traducao["u"], "g"), "u");
        texto_o.innerHTML = texto;
    }
    return;
}

function clipboard(){
    const texto_o = document.querySelector("#texto_o");
    navigator.clipboard.writeText(texto_o.value);
}

const criptografa = document.querySelector('#criptografa');
const descriptografa = document.querySelector('#descriptografa');
const copy = document.querySelector('#copiar');

var traducao = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

criptografa.addEventListener( 'click', function() {criptografar(traducao);} );
descriptografa.addEventListener( 'click', function() {descriptografar(traducao);} );
copy.addEventListener( 'click', function() {clipboard();} );