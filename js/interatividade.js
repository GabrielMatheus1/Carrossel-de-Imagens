// coleta de varias informações com a mesma classe // 
const botoesFlex = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacao = document.querySelectorAll(".informacao");

// função geral para cada botao //
botoesFlex.forEach((botao, indice) => {

    // evento que todos os botões faram //
    botao.addEventListener("click", () => {

        // buscara o botão com a classe //
        const botaoSelecionado = document.querySelector(".selecionado");

        // removera a classe de qual estiver //
        botaoSelecionado.classList.remove("selecionado");

        // add no botão que sera clicado //
        botao.classList.add("selecionado");

        // mesmo esquema dos botões so que para imagens //
        const imagemselecionado = document.querySelector(".selecionada");

        // removera a classe de qual estiver //
        imagemselecionado.classList.remove("selecionada");

        // add a classe de acordo com o botão selecionaod com o indice //
        imagens[indice].classList.add("selecionada");

        // mesmo esquema das imagens com o indice para exibir as informações //     
        const informacaoAtiva = document.querySelector(".ativa");

        // removera a classe do item q tiver //
        informacaoAtiva.classList.remove("ativa");

        // add a classe de acordo com o botão selecionaod com o indice //
        informacao[indice].classList.add("ativa");
    });
});