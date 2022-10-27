//      Acesso ao menu
const botaoSanduiche = document.querySelector("#botao-toggle");
const menuSanduiche = document.querySelector("#menu-toggle");

botaoSanduiche.addEventListener("click", (evento) => {
    if(menuSanduiche.classList.contains("aparece")) {
        menuSanduiche.classList.remove("aparece");
    } else {
        menuSanduiche.classList.add("aparece");
    }
})