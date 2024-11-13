const promocoesSection = document.getElementById('promocoes');

// Aqui você pode adicionar as promoções dinamicamente
const promocoes = [
    { imagem: './imagens/promo1.png' },
    { imagem: './imagens/promo2.png' },
    { imagem: './imagens/promo3.png' },
];

promocoes.forEach((promocao) => {
    const promocaoElement = document.createElement('div');
    promocaoElement.className = 'promocao';
    promocaoElement.innerHTML = `
        <img src="${promocao.imagem}">
    `;
    promocoesSection.appendChild(promocaoElement);
});