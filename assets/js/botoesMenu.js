//      Acesso ao menu
const botaoSanduiche = document.querySelector("#botao-toggle");
const barrasMenuSanduiche = document.querySelector("#barras-menu");
const menuSanduiche = document.querySelector("#menu-toggle");
const foraDoMenu = document.querySelector("#imagem-voltar");

//      Abre e fecha menu
botaoSanduiche.addEventListener("click", (evento) => {
    abreOuFechaMenu();
});

//      Volta ao clicar fora do menu
foraDoMenu.addEventListener("click", (evento) => {
    abreOuFechaMenu();
});

function abreOuFechaMenu() {
    if(menuSanduiche.classList.contains("aparece")) {
        menuSanduiche.classList.remove("aparece");
        foraDoMenu.classList.remove("aparece");
        barrasMenuSanduiche.classList.remove("fa-arrow-left");
        barrasMenuSanduiche.classList.add("fa-bars");
    } else {
        menuSanduiche.classList.add("aparece");
        foraDoMenu.classList.add("aparece");
        barrasMenuSanduiche.classList.add("fa-arrow-left");
        barrasMenuSanduiche.classList.remove("fa-bars");
    }
}

function fechaMenu() {
    menuSanduiche.classList.remove("aparece");
    foraDoMenu.classList.remove("aparece");
}

//      Acesso ao Login 
const botaoUsuario = document.querySelector("#botao-perfil");

//      Abre e fecha perfil
botaoUsuario.addEventListener("click", (evento) => {
    fechaMenu();
});