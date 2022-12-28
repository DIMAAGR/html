# Olá bem vindo a esse repositório!

bom, se você está aqui espero que goste do que venha a ver nele, este reposítorio tem várias informações e dados sobre meus projetos da minha faculdade envolvendo HTML, o ano que o repositório foi criado é 2022 e a faculdade que estou cursando é Engenharia de Software!

---------------------------------------------------------

### Um pouco sobre o html

A especificação da HTML foi criada a partir da junção de dois padrões: o SGML e o HyTime. O primeiro, SGML (Standard Generalized Markup Language), é, na verdade, um padrão ISO que especifica as regras para a criação de linguagens de marcação que sejam independentes de plataforma.

Já o HyTime (Hypermedia/Time-Based Structuring Language.)é um padrão desenvolvido pela ISO com o objetivo de possibilitar que hiperdocumentos hipermídia pudessem ser descritos em função de sua estrutura e conteúdo e, consequentemente, utilizados por quaisquer sistemas conformantes (NEWCOMB et al., 1991).

### A anatomia no HTML

- **<tag>**  O HTML funciona com tags, as tags podem ou não serem fechadas (podem ter corpo ou não).
- Uma tag pode ter filhos ou não.

- Exemplo de uso de TAG no HTML:
 ```html
<tag> 
    <bla>
        <opa>Texto</opa>
        <opa>Texto</opa>
        <opa>Texto</opa>
    </bla>
</tag>
 ``` 

 - Exemplos de TAGS sem corpo no HTML:
 ```html
    <!-- HTML --> <meta><br><input>
 ```

 - Exemplos de TAGS com parâmetros no HTML:
 ```html

    <!-- O HTML tem tags que usam paramestros -->
    <tag param1 = "valor1" param2 = "valor2">
    
    <!-- Exemplo de TAG com parâmetro que existe no HTML -->
    <input type="tex" cpf>
```


### Entendendo a anatomia de uma página no HTML

Antes é necessário entender como que funciona a semântica no HTML, o HTML é organizado em **blocos**, esses blocos servem para varias coisas sendo uma das principais a organização da página, dessa forma é posível usar **TAGS** que determinem a organização daquela página, dentre elas estão: 

- **<header>** cabeçalho.
- **<nav>** navegador.
- **<section>** sessão funcionamento "parecido" com o article do html.
- **<aside>** menu lateral.
- **<footer>** rodapé.

Exemplos de uso da semântica no arquivo anatomia_html.html.