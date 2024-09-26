const perguntas = [
    {
        pergunta: 'Qual é a raça de cachorro mais popular do mundo?',
        resposta: 'O Labrador Retriever.'
    },
    {
        pergunta: 'Qual é a expectativa de vida média de um cachorro?',
        resposta: 'De 10 a 15 anos, dependendo da raça.'
    },
    {
        pergunta: 'Como se chama o sentido mais aguçado dos cães?',
        resposta: 'O olfato, que é bem melhor que o dos humanos.'
    },
    {
        pergunta: 'Os cães podem sentir emoções humanas?',
        resposta: 'Sim, estudos mostram que cães podem perceber emoções através do olhar e do tom de voz.'
    },
    {
        pergunta: 'Qual é o maior cachorro do mundo?',
        resposta: 'O Grande Danês é frequentemente considerado o maior cachorro.'
    },
    {
        pergunta: 'O que significa quando um cachorro abana o rabo?',
        resposta: 'Geralmente indica felicidade ou excitação, mas pode ter outros significados dependendo do contexto.'
    },
    {
        pergunta: 'Qual raça é conhecida por ser o melhor cão de terapia?',
        resposta: 'O Labrador Retriever e o Golden Retriever são populares como cães de terapia.'
    },
    {
        pergunta: 'Os cães podem ser treinados para detectar doenças?',
        resposta: 'Sim, alguns cães são treinados para detectar doenças como câncer e diabetes.'
    },
    {
        pergunta: 'Qual é a raça de cachorro mais inteligente?',
        resposta: 'O Border Collie é frequentemente considerado a raça mais inteligente.'
    },
    {
        pergunta: 'Quantos dentes tem um cachorro adulto?',
        resposta: 'Um cachorro adulto tem 42 dentes.'
    },
];

let container = document.getElementById('container');

function criaCartao(pergunta, resposta) {
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    cartao.addEventListener('click', viraCartao); 

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <div class="cartao_conteudo_pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao_conteudo_resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    container.appendChild(cartao); 
}

perguntas.forEach(p => {
    criaCartao(p.pergunta, p.resposta);
});
