export function relato() {
    let fr = document.getElementById('l-fator').value + ':' + ' ' + `${document.getElementById('fatoR').value} \n\n`
    let problem = document.getElementById('l-problem').innerText + '\n' + `${document.getElementById('problem').value} \n\n`
    let negociations = document.getElementById('l-negociations').innerText + '\n' + `${document.getElementById('negociations').value} \n\n`
    let conclusion = document.getElementById('l-conclusion').innerText + '\n' + `${document.getElementById('conclusion').value} \n\n`
    let dispon = document.getElementById('l-dispon').innerText + '\n' + `${document.getElementById('dispon').value} \n\n`
    let ref = document.getElementById('l-ref').innerText + '\n' + `${document.getElementById('ref').value} \n\n`
    let numb = document.getElementById('l-numb').innerText + '\n' + `${document.getElementById('numTel').value} \n\n`
    let infotec = document.getElementById('l-infotec').innerText + '\n' + `${document.getElementById('infotec').value} \n\n`

    let resumo = fr + problem + negociations + conclusion + dispon + ref + numb + infotec 
    return resumo
}  
   
const relatando = document.querySelectorAll("textarea");

for (let i = 0; i < relatando.length; i++) {
  relatando[i].addEventListener("keyup", relato);
}