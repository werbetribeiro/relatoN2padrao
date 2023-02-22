/* import './style.css' */
import IMask from "imask"
import { contDias } from "./utils/countDias";
import { contFR } from "./utils/countFR";
import { autoResize } from "./utils/autoResize.js"
import { relato } from "./utils/relatoFormat";
import { toastCopy } from "./utils/toastCopied";

//previnir que o formulário (input) recarregue ao apertar enter | remover o comportamento padrão do formulário
document.addEventListener('submit', function(e) {
    e.preventDefault()
})

//MASCARAS DO CONTADORES
//Mascara da quantidade de dias
const diasContado = document.getElementById('dias');
const diasMask = {
    mask: Number,
    min: 0,
    max: 90
};
const maskD = IMask(diasContado, diasMask);

//Mascara da quantidade de atendimentos
const nAtenDigitados = document.getElementById('nAtend')
const atendMask = {
    mask: '0'
};
const maskA = IMask(nAtenDigitados, atendMask);

//Mascara de telefone
const numberTel = document.getElementById('numTel');
const numTelMask = {
    mask: '{00} 0000-0000'
};
const maskTel = IMask(numberTel, numTelMask);

//Mascara FATOR R
const fatorMask = document.getElementById('fatoR');
const maskFR = {
    mask: '0{.}00'
};
const maskFatorR = IMask(fatorMask, maskFR);

document.getElementById("data_ini").addEventListener("change", contDias)
document.getElementById("data_fim").addEventListener("change", contDias)
document.getElementById("dias").addEventListener("input", contFR)
document.getElementById("nAtend").addEventListener("input", contFR)
document.querySelector('#btnCopiar').addEventListener("click", toastCopy) 

const year = new Date().getFullYear()
document.getElementById('ano').innerHTML = year



function mudar() {

    const fatorDigitado = document.getElementById('fatoR').value
    parseFloat(fatorDigitado)
    
    if (parseFloat(fatorDigitado) === 1.00) {
        document.getElementById('fatoR').style = "color: #0CD65C;" //Verde
    }
    else if (parseFloat(fatorDigitado) < 1.00 & parseFloat(fatorDigitado) > 0.49) {
        document.getElementById('fatoR').style = "color: #EFF30F;" //Amarelo
    } 
    else if (parseFloat(fatorDigitado) < 0.50) {
        document.getElementById('fatoR').style = "color: #ED1C24;" //Vermelho
    }
    else if (fr == 'Infinity') {
        document.getElementById('fatoR').value = ""
    }
    else if (document.getElementById('fatoR').value = 'NaN') {
        document.getElementById('fatoR').value = ""
    }
}

document.getElementById("fatoR").addEventListener("input", mudar)

function naoAplicaFR() {
    document.getElementById('fatoR').value = 'Não Se Aplica'
}

document.getElementById("nSeAplica").addEventListener("click", naoAplicaFR)