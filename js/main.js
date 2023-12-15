// Sheet - Ana Campos, Mariana Godinho

//EFEITO-MENU
window.onload = function () {
    const menu_btn = document.querySelector('.menu');
    const mobile_menu = document.querySelector('.menumovel');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
    mobile_menu.addEventListener('click', function () {
        // Close the menu when a link is clicked
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
    });
}


//EFEITO-ACORDIÃO
// Esta Constante quer dizer que não vai mudar durante o resto da construção do website | Para além disso abixo é como se faz para ter uma animação no + e O
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        // esta variável "currentyActiveAccordionItemHeader" permite com que só se possa selicionar uma aba, fechando a outra
        const currentlyActiveAccordionItemHeader = document.querySelector (".accordion-item-header.active");
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight=0;
        }

        accordionItemHeader.classList.toggle("active");
        // a constante abaixo é o que permite abrir e fechar as abas.
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
            // scrollheight - volta ao tamanho original
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else{
            accordionItemBody.style.maxHeight = 0;
        }
    });
});