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

const numberTel = document.getElementById('numTel');
const numTelMask = {
    mask: '{00} 00000-0000'
};
const maskTel = IMask(numberTel, numTelMask);

document.getElementById("data_ini").addEventListener("change", contDias)
document.getElementById("data_fim").addEventListener("change", contDias)
document.getElementById("dias").addEventListener("input", contFR)
document.getElementById("nAtend").addEventListener("input", contFR)
document.querySelector('#btnCopiar').addEventListener("click", toastCopy) 

const year = new Date().getFullYear()
document.getElementById('ano').innerHTML = year