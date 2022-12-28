
// Obtem os dados da página selecionada (clicada)
// e, então, os exibe na pagina atual sem a necessidade de ir para a proxima página!

 function showSelectedPageContentOnActualPage() {
    // O querySelectorAll irá procurar todas as referências existentes do que estiver entre ( ) no documento html
    // e então irá gerar uma lista com os mesmos

    document.querySelectorAll('a').forEach( listOfPageLinks => {
        listOfPageLinks.onclick = function(event) {
        event.preventDefault() // Impede que a ação padrão ocorra
        const content = document.getElementById('conteudo')  // Vai obter o local onde será exibido os dados da página escolhida
        fetch(listOfPageLinks.href)
            .then(response => response.text())
            .then(html => content.innerHTML = html) // Vai Cuspir no local o html da página escolhida
        }
    })

}