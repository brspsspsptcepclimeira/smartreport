

document.querySelector('#veiculo-descrever').addEventListener('click', ()=>{
    descrever()
})

function descrever(){
    let tipo = captalize(document.querySelector('#veiculo-tipo').value)
    let marca = captalize(document.querySelector('#veiculo-marca').value)
    let modelo = captalize(document.querySelector('#veiculo-modelo').value)
    let cor = document.querySelector('#veiculo-cor').value.trim().toLowerCase()
    let placa = document.querySelector('#veiculo-placa').value.trim().toUpperCase()
    let chassi = document.querySelector('#veiculo-chassi').value.trim().toUpperCase()
    let motor = document.querySelector('#veiculo-motor').value.trim().toUpperCase()
    let placaFake = document.querySelector('#veiculo-placa-fake').value.trim().toUpperCase()
    let chassiFake = document.querySelector('#veiculo-chassi-fake').value.trim().toUpperCase()
    let motorFake = document.querySelector('#veiculo-motor-fake').value.trim().toUpperCase()
    /* let apresentado = `${tipo} da marca ${marca}, modelo ${modelo}, na cor ${cor}`
    let identificado = '' */

    texto = `<br><br><br><br><h2>Vistoria Básica - Placa, Chassi e Motor OKs</h2>
    <p>${tipo} da marca ${marca}, modelo ${modelo}, na cor ${cor}.</p>
    <h3>Placa de Identificação</h3>
    <p>Sua Placa de Identificação se apresentava íntegra, sem sinais de violação ou de alteração, fixada e lacrada à estrutura do veículo, exibindo os dígitos ${placa}.</p>
    <h3>Numeração do Chassi</h3>
    <p>Na estrutura do veículo, sobre a área destinada a gravação da numeração do chassi, a superfície se apresentava íntegra, sem sinais de alteração, exibindo os dígitos ${chassi}.</p>
    <h3>Numeração do Motor</h3>
    <p>No motor, sobre a área destinada a gravação de sua numeração, a superfície se apresentava íntegra, sem sinais de alteração, exibindo os dígitos ${motor}.</p>
    
    <h2>Textos Para Placas de Identificação</h2>

    <h3>Identificação Pela Placa Lacrada</h3>
    <p>Veículo identificado por sua Placa de Identificação que se encontrava fixada e lacrada à sua estrutura, sem apresentar sinais de violação ou de alteração, exibindo os dígitos ${placa}.</p>

    <h3>Identificação Pela Placa Mercosul</h3>
    <p>Veículo identificado por sua Placa de Identificação que se encontrava fixada à sua estrutura, sem apresentar sinais de violação ou de alteração, exibindo os dígitos ${placa}.</p>

    <h3>Placa de Identificação Ausente</h3>
    <p>O veículo foi apresentado sem placa de identificação fixada à sua estrutura, portanto não foi possível identificar o veículo por meio desse sinal identificador.</p>

    <h3>Placa Com Arame Rompido</h3>
    <p>A Placa de Identificação exibia os dígitos ${placa}, porém o arame de seu lacre se encontrava seccionado, de forma que não se encontrava lacrada à estrutura do veículo, apontando para violação desse sinal identificador.</p>
    
    <h3>Placa Descaracterizada com Pintura</h3>
    <p>Placa de Identificação adulterada, exibindo os dígitos ${placaFake} repintados sobre os dígitos originais. Após aplicação de reagente adequado, a pintura não original foi removida, revelando os dígitos ${placa}.</p>
    
    <h3>Placa Descaracterizada com Fita</h3>
    <p>Placa de Identificação adulterada, exibindo os dígitos ${placaFake}, alterados pela sobreposição de pequenos segmentos de fita adesiva preta sobre os dígitos originais. Após a remoção dos segmentos de fita, restaram os dígitos originais ${placa}.</p>
    
    <h3>Placa Descaracterizada Por Raspagem</h3>
    <p>Placa de Identificação adulterada, exibindo os dígitos ${placaFake}, alterados pela supressão parcial, por meio de raspagem, de alguns de seus dígitos. Considerando-se as descontinuidades descorrentes da referida raspagem sobre a superfície da placa, infere-se que sua numeração original era ${placa}.</p>
    
    <h2>Textos Para Chassi</h2>
    
    <h3>Identificado Pelo Chassi</h3>
    <p>Veículo identificado pela numeração do chassi gravada em sua estrutura, que se apresentava íntegra, sem sinais de alteração, exibindo os dígitos ${chassi}.</p>
    
    <h3>Metalográfico Positivo</h3>
    <p>Na estrutura do veículo, sobre a área destinada à gravação da numeração do chassi, a superfície do substrato metálico se apresentava deformada, com marcas profundas de desbaste, martelamento e perfurações, de forma a suprimir a numeração originalmente gravada. Após realização de ensaio metalográfico, foram revelados os dígitos ${chassi}.</p>
    
    <h2>Exemplos de Descrição de Danos</h2>

    <h3>Frontal, Colisão ou Choque</h3>
    <p>Na parte frontal, à esquerda, na altura do terço inferior e do terço médio, apresentava deformações, fraturas, amolgamentos e marcas de atrito consistentes com força de contato orientada na direção horizontal e no sentido da dianteira para a traseira.</p>`    

    document.querySelector('#veiculos-descricao').innerHTML = texto
}

function captalize(_texto){
    let texto = _texto.trim()
    if(texto.length<1){
        return
    }
    return texto.charAt(0).toUpperCase()+texto.slice(1)
}