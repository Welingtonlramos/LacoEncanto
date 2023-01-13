//      Barra inferior
const voltaTopo = document.querySelector("#botao-topo");
const pesquisa = document.querySelector("#botao-pesquisa");
const notificacao = document.querySelector("#botao-confeccao");

const barraDePesquisa = document.querySelector("#barra-pesquisa");
const background = document.querySelector('.pesquisa-background');


//      Volta ao topo
voltaTopo.addEventListener("click", (evento) => {
    fechaMenu();
    window.scrollTo(0,0);
});


// Pesquisa modelos
pesquisa.addEventListener("click", (evento) => {
    fechaMenu();
    if (barraDePesquisa.classList.contains('some')) {
        barraDePesquisa.classList.remove("some");
    } else {barraDePesquisa.classList.add('some');}
});

background.addEventListener("click", (evento) => {
    barraDePesquisa.classList.add('some');
})

notificacao.addEventListener("click", (evento) => {
    fechaMenu();
});