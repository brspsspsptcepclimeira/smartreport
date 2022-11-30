import { pretyyCaptalize} from './functions.mjs'

document.querySelector('#btn-corpuses-description').addEventListener('click', ()=>{
    describeCorpuses()
})

function describeCorpuses(){
    let nome = pretyyCaptalize(document.querySelector('#nome-person').value)
    let sexo = document.getElementsByName('sexo-corpuses')
    let idade = document.querySelector('#idade-corpuses').value
    if(nome==''){
        nome = 'Corpo, por ora, não identificado, de'
    }else{
        nome = `Corpo apresentado como sendo de ${nome},`
    }
    if(sexo[0].checked){
        nome = `${nome} pessoa do sexo masculino`
    }else if(sexo[1].checked){
        nome = `${nome} pessoa do sexo feminino`
    }
    if(idade===null || idade===undefined || idade===''){
        nome = `${nome}, cuja idade, quando da morte, não foi determinada.`
    }else{
        nome = `${nome} que, quando em vida, atingiu a idade de ${idade} anos.`
    }
    let texto = `<br><br><br><br><p><h2>Descrição Para Exame Perinecroscópicos</h2>
    <h3>Identificação</h3>
    <p>${nome}</p>

    <h2>Metodologia</h2>
    <h3>Suicídio</h3>
    <p>O exame consistiu na busca por objetos, instrumentos ou substâncias que pudessem ter sido empregadas de forma violenta contra a pessoa e produzir lesão corporal ou morte, e também por vestígios da presença ou da participação de outrem quando da morte.</p>

    <h2>IML</h2>
    <p>A descrição minuciosa do cadáver, suas características e determinação da causa da morte, são objetos de laudo pericial a ser expedido pelo Instituto Médico Legal.</p>`

    document.querySelector('#corpuses-descricao').innerHTML = texto
}