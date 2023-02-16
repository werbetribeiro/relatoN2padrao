import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import { relato } from "./relatoFormat";

export function toastCopy(){
    Toastify({
        text: "Relato Copiado!",
        stopOnFocus: false,
        duration: 1500,
        close: true,
        gravity: "bottom",
        position: "right",
        style: {
            background: "#04D361",
        },
        }).showToast();

    let resumo = relato() 
    navigator.clipboard.writeText(resumo)   

    //apaga o conteúdo do formulário
    /* document.getElementById('formulario').reset() */

    //recarrega o navegador depois de 8 segundos
    setInterval(function () {window.location.reload()}, 3500)
}