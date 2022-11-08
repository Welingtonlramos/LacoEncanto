//      Barra inferior
const voltaTopo = document.querySelector("#botao-topo");
const pesquisa = document.querySelector("#botao-pesquisa");
const notificacao = document.querySelector("#botao-confeccao");

//      Volta ao topo
voltaTopo.addEventListener("click", (evento) => {
    fechaMenu();
    window.scrollTo(0,0);
});

pesquisa.addEventListener("click", (evento) => {
    fechaMenu();
});

notificacao.addEventListener("click", (evento) => {
    fechaMenu();
});