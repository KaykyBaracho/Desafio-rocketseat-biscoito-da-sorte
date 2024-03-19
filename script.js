function mostrarSegundaTela() {
    // Esconde a primeira tela
    document.querySelector('.content1').classList.add('hide');
    // Mostra a segunda tela
    document.querySelector('.content2').classList.remove('hide');
    // Simula a abertura do biscoito
    abrirBiscoito();
}

// function abrirBiscoito() {
//     // Gera um número aleatório de 1 a 10
//     const numeroSorte = Math.floor(Math.random() * 10) + 1;
//     // Define a mensagem com base no número sorteado
//     let mensagem;
//     switch (numeroSorte) {
//         case 1:
//             mensagem = "Você terá sorte no amor.";
//             break;
//         case 2:
//             mensagem = "Uma grande oportunidade se aproxima.";
//             break;
//         // Adicione mais casos conforme desejado
//         default:
//             mensagem = "Sua sorte está por vir.";
//     }
//     // Atualiza o texto da segunda tela com a mensagem sorteada
//     document.querySelector('.content2 h1').textContent = mensagem;
// }

function abrirBiscoito() {
    // Gera um número aleatório de 1 a 10
    const numeroSorte = Math.floor(Math.random() * 10) + 1;
    // Define a mensagem com base no número sorteado
    let mensagem;
    switch (numeroSorte) {
        case 1:
            mensagem = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.";
            break;
        case 2:
            mensagem = "Uma grande oportunidade se aproxima.";
            break;
        // Adicione mais casos conforme desejado
        default:
            mensagem = "Sua sorte está por vir.";
    }
    // Atualiza o texto do parágrafo na segunda tela com a mensagem sorteada
    document.querySelector('.content2 .p-open').textContent = mensagem;
}
