// coleta de varias informações com a mesma classe // 
const botoesFlex = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacao = document.querySelectorAll(".informacao");

// função geral para cada botao //
botoesFlex.forEach((botao, indice) => {

    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".selecionado");

        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const imagemselecionado = document.querySelector(".selecionada");
        imagemselecionado.classList.remove("selecionada");

        imagens[indice].classList.add("selecionada");

        const informacaoAtiva = document.querySelector(".ativa");
        informacaoAtiva.classList.remove("ativa");

        informacao[indice].classList.add("ativa");
    });
});