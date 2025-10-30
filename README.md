# Vozes Quilombolas: Literatura e Resistência

![Status do Projeto: Em Desenvolvimento](https://img.shields.io/badge/status-em_desenvolvimento-yellow)

Uma plataforma digital front-end dedicada a catalogar, divulgar e integrar a produção literária de autores quilombolas no cenário nacional.

## 📖 Sobre o Projeto

O projeto **Vozes Quilombolas** é uma aplicação web interativa que busca dar visibilidade e fortalecer a literatura de autores quilombolas. A plataforma serve como um catálogo centralizado onde usuários podem explorar obras, filtrar por região e gênero, e aprender mais sobre os autores e suas sinopses.

Este projeto foi construído com o objetivo de:
* **Mapear e Catalogar:** Criar um acervo digital da produção literária quilombola.
* **Incentivar a Leitura:** Facilitar a descoberta de novas obras e autores.
* **Apoiar Educadores:** Fornecer um recurso para integrar essa literatura ao currículo escolar.

## ✨ Funcionalidades Principais

* **Catálogo de Obras:** Exibição das obras em formato de *cards* interativos.
* **Busca Dinâmica:** Campo de pesquisa para encontrar livros por **título** ou **autor**.
* **Filtragem Avançada:** Menus para filtrar o acervo por **Região** (Norte, Nordeste, etc.) e **Gênero** (Romance, Poesia, etc.).
* **Modal de Detalhes:** Ao clicar em um livro, um modal é exibido com informações completas, incluindo:
    * Capa do livro
    * Título e Autor
    * Sinopse
    * Biografia do Autor(a)
* **Design Responsivo:** Interface adaptada para navegação em dispositivos móveis (celulares e tablets), incluindo um menu *hamburger*.
* **Seções Informativas:** Páginas estáticas sobre o projeto, espaço para educadores e parcerias.

## 🛠️ Tecnologias Utilizadas

Este projeto é construído inteiramente com tecnologias front-end:

* **HTML5:** Para a estrutura semântica do site.
* **Tailwind CSS:** Um framework CSS *utility-first* para a estilização rápida e responsiva da interface.
* **CSS3 (Puro):** Utilizado para estilos personalizados, como o fundo da seção *hero* e as animações do modal (`style.css`).
* **JavaScript (ES6+):** Para toda a interatividade da página, incluindo:
    * Renderização dinâmica do catálogo de livros.
    * Lógica de busca e filtragem.
    * Manipulação do DOM para exibir e fechar o modal.

## 📂 Estrutura de Arquivos

Para que o projeto funcione corretamente, os arquivos devem seguir a estrutura referenciada no `index.html`:

/Vozes-Quilombolas/ | +-- index.html (Página principal) +-- [imagem-do-logo].jpg (Logo usado no header) +-- [imagem-do-icon].jpg (Ícone usado na aba do navegador) | +-- /assents/ | +-- /css/ | | | +-- style.css (Estilos personalizados) | +-- /js/ | +-- script.js (Lógica da aplicação e dados do acervo)


## 🚀 Como Executar o Projeto

Este é um projeto front-end estático. Você não precisa de um servidor complexo para executá-lo.

1.  Clone este repositório para sua máquina local:
    ```bash
    git clone [URL-DO-SEU-REPOSITORIO]
    ```
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

E pronto! O site estará funcionando.

### 💡 Nota sobre os Dados

Atualmente, todos os dados do acervo de livros estão "mockados" (fixos) dentro do arquivo `assents/js/script.js`, na variável `const acervo`.

Em uma próxima versão do projeto, o ideal seria que esses dados viessem de uma API ou
