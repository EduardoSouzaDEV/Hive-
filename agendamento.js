async function obterValorPorId() {
    alert("obterValorPorId")
    const comboBox = document.getElementById('service');
    const valorSelecionado = comboBox.value;
    let valor;

    switch (valorSelecionado) {
        case 'LASER':
            valor = '50.00';
            break;
        case 'NOSTRIL':
            valor = '40.00';
            break;
        default:
            valor = '50.00';
    }


    return valor;
}

function exibirValor() {
    alert("")
    // Captura o valor do campo de entrada com id 'service'
    var valor = "Pague a reserva: R$" +getValor()
    // Define o texto do elemento h1 com id 'display' para o valor capturado
    document.getElementById('display').innerText = valor;
}

function getValor() {
    alert("getValor")
    // Captura o valor do campo de entrada com id 'service'
    return document.getElementById('service').value;
}