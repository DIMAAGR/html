
// Obtem os dados da página selecionada (clicada)
// e, então, os exibe na pagina atual sem a necessidade de ir para a proxima página!

 function showSelectedPageContentOnActualPage() {
    // O querySelectorAll irá procurar todas as referências existentes do que estiver entre ( ) no documento html
    // e então irá gerar uma lista com os mesmos

    document.querySelectorAll('a').forEach( listOfPageLinks => {
        listOfPageLinks.onclick = function(event) {
      
            event.preventDefault() // Impede que a ação padrão ocorra
            const content = document.getElementById('conteudo')  // Vai obter o local onde será exibido os dados da página escolhida
           
            if(event.currentTarget.target.toLowerCase() != '_blank') {
                fetch(listOfPageLinks.href).then(async response =>  {
                    content.innerHTML =  await response.text();
                });
            } else {
                content.innerHTML = '';
            }
        }
    })
}
