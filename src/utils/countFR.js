export function contFR() {
    let dc = document.getElementById('dias').value
    let nnn = document.getElementById('nAtend').value
    let rtc = dc / 90
    let fr = 1 / nnn * rtc
    document.getElementById('fatoR').value = fr.toFixed(2)
    if (fr === 1) {
        document.getElementById('fatoR').style = "color: #0CD65C;" //Verde
    }
    else if (fr < 1 & fr > 0.49) {
        document.getElementById('fatoR').style = "color: #EFF30F;" //Amarelo
    } 
    else if (fr < 0.50) {
        document.getElementById('fatoR').style = "color: #ED1C24;" //Vermelho
    }
    else if (fr == 'Infinity') {
        document.getElementById('fatoR').value = ""
    }
    else if (document.getElementById('fatoR').value = 'NaN') {
        document.getElementById('fatoR').value = ""
    }
}