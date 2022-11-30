//Acrescenta um 0 à esquerda do dígito
function zeroToLeft(num){
    let value=num.toString().trim()
    if(value.length<2){
        value = `0${num}`
    }
    return value
}

// Separador de milhar
function formatMilhar(num){
    let num1 = num.toString().split("").reverse().join("")
    let resultado = ''
    for(let i=0;i<num1.length;i++){
        resultado += num1[i]
        if (i%3==2 && i!=num1.length-1){
            resultado += `.` 
        }      
    }
    return resultado.split("").reverse().join("")
}

//foramtar Data
function formatDate(data){
    const date = new Date(data)
    const day = zeroToLeft(date.getDate())
    const month = zeroToLeft(date.getMonth()+1)
    const year = date.getFullYear()
    return `${(day)}-${month}-${year}`
}

//Primeira letra da palavra maiúscula
function pretyyCaptalize(_texto){
    let texto = (_texto.trim().toLowerCase()).split(' ')
    let fullTexto = ''
    for(let i=0; i<texto.length; i++){
        fullTexto += `${texto[i].charAt(0).toUpperCase()+texto[i].slice(1)} `
    }
    return fullTexto.trim().replace(' Da ', ' da ').replace(' De ', ' de ').replace(' E ', ' e ').replace(' Do ', ' do ').replace(' Das ', ' das ').replace(' Dos ', ' dos ')
}

//Data de hoje formatada para iniciar o relatório
function todayDate() {
    let d = new Date()
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    let year = d.getFullYear()
    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day
    return [year, month, day].join('-')
}

export {zeroToLeft, formatMilhar, formatDate, pretyyCaptalize, todayDate}