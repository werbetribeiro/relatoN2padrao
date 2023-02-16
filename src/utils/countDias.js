export function contDias() {

const segundo = 1000
const minuto = segundo * 60
const hora = minuto * 60
const dia = hora * 24

//Armazena os valores das datas nas variáveis
let data_ini = new Date(document.getElementById('data_ini').value)
let data_fim = new Date(document.getElementById('data_fim').value)
//Calculo das datas
let contatDias = data_fim.getTime() - data_ini.getTime() 
//Imprime o resultado
let aletDias = Math.floor(contatDias / dia)
parseInt(aletDias)
document.getElementById('dias').value = parseInt(aletDias) 
console.log(document.getElementById('dias').value)

if (document.getElementById('dias').value > 90) {
    alert(`A contagem foi de ${aletDias} dias. Para cálculo de FATOR R, são levados em conta apenas os últimos 90 dias.`)
    document.getElementById('dias').value = 90
}
else if (document.getElementById('dias').value < 0) {
    alert(`A contagem foi de ${aletDias}. Para valores menor que 1, usar FATOR R: 0.01`)
    document.getElementById('dias').value = ""
    document.getElementById('fatoR').value = 0.01
}
contFR()
}