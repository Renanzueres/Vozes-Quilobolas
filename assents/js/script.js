// --- Dados do Acervo (Exemplo) ---
// Em uma aplicação real, estes dados viriam de um banco de dados.
const acervo = [
    {
        id: 1,
        titulo: "Becos da Memória",
        autor: "Conceição Evaristo",
        regiao: "Sudeste",
        genero: "Romance",
        capa: "https://m.media-amazon.com/images/I/81rKkgH1vgL.jpg",
        sinopse: "Uma narrativa poética e contundente sobre a vida em uma favela, as remoções e a força da comunidade negra para preservar suas histórias e memórias.",
        bioAutor: "Maria da Conceição Evaristo de Brito é uma escritora afro-brasileira, nascida em Belo Horizonte. Sua obra aborda temas como a discriminação racial, de gênero e de classe.",
    },
    {
        id: 2,
        titulo: "Cadernos Negros",
        autor: "Cuti (Luiz Silva)",
        regiao: "Sudeste",
        genero: "Conto",
        capa: "https://www.quilombhoje.com.br/livraria/wp-content/uploads/2018/03/CN40-capa-1.png",
        sinopse: "Coletânea de contos e poemas que se tornou um marco na literatura afro-brasileira, organizada pelo grupo Quilombhoje, do qual Cuti é um dos fundadores.",
        bioAutor: "Cuti, pseudônimo de Luiz Silva, é um escritor, poeta e dramaturgo paulista, um dos mais importantes expoentes da literatura negra contemporânea no Brasil.",
    },
    {
        id: 3,
        titulo: "Orixás: Orixás em Poemas",
        autor: "Abdias Nascimento",
        regiao: "Sudeste",
        genero: "Poesia",
        capa: "https://image.isu.pub/210225131416-3f14d32271e4d8454f50b6158a52c064/jpg/page_1_social_preview.jpg",
        sinopse: "Uma obra que celebra a cosmogonia africana através da poesia, exaltando a força e a beleza dos Orixás e sua influência na cultura brasileira.",
        bioAutor: "Abdias do Nascimento foi um artista plástico, ator, diretor, dramaturgo, e político brasileiro. Um dos maiores ativistas do movimento negro no século XX.",
    },
    {
        id: 4,
        titulo: "A Cor da Ternura",
        autor: "Geny Guimarães",
        regiao: "Sudeste",
        genero: "Infantojuvenil",
        capa: "https://m.media-amazon.com/images/I/71oOTzKkEHL._AC_UF1000,1000_QL80_.jpg",
        sinopse: "Narra a história de uma menina negra que vive no interior de São Paulo, abordando com sensibilidade as descobertas da infância, o preconceito e a busca por identidade.",
        bioAutor: "Geny Guimarães foi uma escritora mineira, reconhecida por sua contribuição à literatura infantojuvenil com temática afro-brasileira.",
    },
    {
        id: 5,
        titulo: "Quilombos resistência ao escravismo",
        autor: "Clovis moura",
        regiao: "Nordeste",
        genero: "Sociológico",
        capa: "https://http2.mlstatic.com/D_NQ_NP_861220-MLB44101985688_112020-O.webp",
        sinopse: "A obra argumenta que os quilombos não foram apenas locais de refúgio, mas unidades organizativas com vida social, política e econômica própria, exemplificadas pela República de Palmares, e que a luta quilombola foi fundamental para desgastar e pressionar o fim do regime escravista. ",
        bioAutor: "Clóvis Steiger de Assis Moura foi um intelectual negro sui generis. Ao longo da vida, dedicou-se a diversas atividades como jornalista, poeta, historiador, sociólogo e pensador marxista. Clóvis Moura nasceu em Amarante, município do estado do Piauí, em 10 de junho de 1925.",
    },
    {
        id: 6,
        titulo: "Devir quilomba",
        autor: "Mariléa de Almeida",
        regiao: "Sudeste",
        genero: "Histórico",
        capa: "https://cdn.awsli.com.br/2551/2551876/produto/2434853482959771e45.jpg",
        sinopse: "O olhar que Mariléa de Almeida lança sobre as mulheres quilombolas, suas biografias e seus projetos serve para descrever como o afeto é um elemento constituinte de seus espaços de vida, seus projetos coletivos, suas lutas políticas.",
        bioAutor: "Mariléa de Almeida nasceu em 1973, na cidade de Vassouras (RJ). Doutora em História pela Universidade Estadual de Campinas (Unicamp), sua tese recebeu, em 2020, menção honrosa no Prêmio de Teses Ecléa Bosi, promovido pela Associação Brasileira de História Oral.Escritora das encruzilhadas, seus textos mesclam história, literatura, filosofia e psicanálise.",
    },
    {
        id: 7,
        titulo: "O quilombismo: documentos de uma militância pan-africanista",
        autor: "Abdias Nascimento",
        regiao: "Sudeste",
        genero: "Histórico",
        capa: "https://m.media-amazon.com/images/I/61xUUngN0AL._AC_UF1000,1000_QL80_.jpg",
        sinopse: "O livro reúne documentos, discursos e escritos de Abdias Nascimento que refletem sua militância em prol dos direitos dos afro-brasileiros e sua visão pan-africanista.",
        bioAutor: "Abdias do Nascimento foi um artista plástico, ator, diretor, dramaturgo, e político brasileiro. Um dos maiores ativistas do movimento negro no século XX.",
    },
    {
        id: 8,
        titulo: "Comunidades Quilombolas na Amazônia",
        autor: "Ellen Rodrigues da Silva",
        regiao: "Norte",
        genero: "Acadêmico",
        capa: "https://editoraappris.com.br/wp-content/uploads/2023/11/9786525050744.jpg",
        sinopse: "Aborda as experiências e identidades em reconstrução na Comunidade Quilombola Tambaí-açu, localizada no município de Mocajuba, no Pará.",
        bioAutor:"A autora Ellen Rodrigues da Silva é conhecida por seus trabalhos acadêmicos e publicações que abordam questões sobre comunidades quilombolas e educação na Amazônia.",
    },
    {
        id: 9,
        titulo:"Comunidades Quilombolas: Outras Formas de (Re)Existências" ,
        autor:"Ana Angélica Leal Barbosa" ,
        regiao:"Nordeste" ,
        genero:"Histórico" ,
        capa:"https://editoraappris.com.br/wp-content/uploads/2022/05/1605187769-ana-angelica-leal-capa-1.jpg",
        sinopse:"O livro traz a realidade de seis comunidades quilombolas localizadas na zona rural e uma na zona urbana, todas situadas no estado da Bahia. A obra apresenta as lutas, desafios e conquistas dessas comunidades, destacando suas histórias, culturas e formas de resistência diante das adversidades enfrentadas ao longo do tempo." ,
        bioAutor:"Ana Angélica Leal Barbosa é uma acadêmica, geneticista, bióloga e professora brasileira. É conhecida por suas pesquisas na área de comunidades quilombolas e seus estudos em genética humana.",
    },
    {
        id: 10,
        titulo:"Mocambos e quilombos" ,
        autor:"Flávio dos Santos Gomes" ,
        regiao:"Sudeste" ,
        genero:"Histórico" ,
        capa:"https://m.media-amazon.com/images/I/91UDlH+rJhS._AC_UF1000,1000_QL80_.jpg",
        sinopse:"Um resgate da história dos quilombos no Brasil e seus desdobramentos até os dias de hoje é o tema deste livro, que nos mostra uma situação mais atual e complexa do que podemos imaginar.",
        bioAutor:"É doutor em História Social pela Unicamp e professor dos programas de pós-graduação em Arqueologia , História Comparada e História. É pesquisador Cientista do Nosso Estado da Faperj e atua no Laboratório de Estudos de História Atlântica das Sociedades Coloniais e Pós-coloniais do Instituto de História da UFRJ.",
    },
    {
        id: 11,
        titulo:"Crítica da colonialidade em oito ensaios" ,
        autor:"Rita Segato" ,
        regiao:"Centro-Oeste" ,
        genero:"Acadêmico" ,
        capa:"https://m.media-amazon.com/images/I/81JJ9Gm1jJL.jpg",
        sinopse:"Neste livro, Rita Segato reúne oito ensaios que abordam a crítica da colonialidade do poder, do saber e do ser, propondo uma antropologia por demanda que questiona as estruturas coloniais ainda presentes na sociedade contemporânea.",
        bioAutor:"Rita Laura Segato, nascida na Argentina, é uma renomada antropóloga, professora e ativista feminista, com vasta contribuição para a teoria decolonial. Reconhecida internacionalmente, é uma das principais referências no pensamento feminista latino-americano. Seu trabalho acadêmico e ativista se concentra em temas como gênero, violência, racismo e as persistências do colonialismo nas estruturas de poder.",
    },
    {
        id: 12,
        titulo:"Liberdade por um fio" , 
        autor:"João José ReisJoão José Reis" ,
        regiao:"Nordeste" ,
        genero:"histórico" ,
        capa:"https://m.media-amazon.com/images/I/71W-FZ+f4dL._AC_UF1000,1000_QL80_.jpg",
        sinopse:"Este livro examina a complexa rede de relações sociais, políticas e econômicas que sustentaram o sistema escravista no Brasil, destacando as estratégias de resistência dos escravizados e as tensões que levaram ao seu colapso.",
        bioAutor:"João José Reis é um historiador brasileiro, professor titular da Universidade Federal da Bahia (UFBA) e pesquisador do CNPq. É reconhecido por suas contribuições à história social do Brasil, especialmente no estudo da escravidão e das populações afro-brasileiras.",
    },
    {
        id: 13,
        titulo:"Trajetória de um afro-baiano nas letras e lutas Bahia" ,
        autor:"Manuel Querino" ,
        regiao:"Nordeste" ,
        genero:"Sociológico" ,
        capa:"https://m.media-amazon.com/images/I/71L2HjKA1XL._SY342_.jpg",
        sinopse:"Obra pioneira que documenta a resistência dos afro-brasileiros desde o período colonial até o início do século XX, destacando as lutas por liberdade e igualdade.",
        bioAutor:"Manuel Querino foi um historiador, antropólogo e político brasileiro, nascido em Salvador. É considerado um dos primeiros intelectuais negros do Brasil e um importante defensor da cultura afro-brasileira.",
    },
    {
        id: 14,
        titulo:"Quilombos. Memórias e Histórias de Comunidades Quilombolas",
        autor:"Carlos Alexandre B. Plínio Dos Santos",
        regiao:"Sul",
        genero:"Histórico",
        capa:"https://m.media-amazon.com/images/I/51x4AWTtxpL._SY342_.jpg",
        sinopse:"Este livro traz memórias e histórias de comunidades quilombolas reúne uma diversidade de estudo sobre fatos, narrativas e processos vivenciados por essas comunidades no Mato Grosso do sul e no Piauí e, mais recentemente, pelo movimento nacional de comunidades negras rurais quilombolas, na defesa de seus direitos étnicos e territoriais."
    },
    {
        id: 15,
        titulo:"Revoltas escravas no Brasil",
        autor:"João José Reis",
        regiao:"Nordeste",
        genero:"Conto",
        capa:"https://m.media-amazon.com/images/I/91kVLyAgpdL._SY342_.jpg",
        sinopse:"O livro reúne uma série de relatos sobre revoltas de escravos no Brasil colonial, destacando as motivações, estratégias e consequências dessas insurreições.",
        bioAutor:"João José Reis é um historiador brasileiro, professor titular da Universidade Federal da Bahia (UFBA) e pesquisador do CNPq. É reconhecido por suas contribuições à história social do Brasil, especialmente no estudo da escravidão e das populações afro-brasileiras.",
    },
    {
        id: 16,
        titulo:"Úrsula",
        autor:"Maria Firmina dos Reis",
        regiao:"Nordeste",
        genero:"Romance",
        capa:"https://cadernosdomundointeiro.com.br/img/capas/ursula-capa.jpg",
        sinopse:"O romance Úrsula foi publicado em 1859 e é uma obra fundamental da literatura abolicionista brasileira. ",
        bioAutor:" Maria Firmina dos Reis foi uma professora, compositora e escritora brasileira, considerada a primeira romancista negra da América Latina. Publicou em 1859 o livro Úrsula, considerado o primeiro romance abolicionista do Brasil e também fundou uma escola mista para filhas e filhos de lavradores.",


    }
];

// --- Lógica da Aplicação ---
document.addEventListener('DOMContentLoaded', () => {
    const booksGrid = document.getElementById('booksGrid');
    const searchInput = document.getElementById('searchInput');
    const regionFilter = document.getElementById('regionFilter');
    const genreFilter = document.getElementById('genreFilter');
    const noResults = document.getElementById('noResults');

    const bookModal = document.getElementById('bookModal');
    const modalBackdrop = bookModal;

    // Função para renderizar os livros
    const renderBooks = (booksToRender) => {
        booksGrid.innerHTML = '';
        if (booksToRender.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
        booksToRender.forEach(book => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer';
            card.innerHTML = `
                <img src="${book.capa}" alt="Capa do livro ${book.titulo}" class="w-full h-72 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-lg">${book.titulo}</h3>
                    <p class="text-stone-600">${book.autor}</p>
                </div>
            `;
            card.addEventListener('click', () => openModal(book));
            booksGrid.appendChild(card);
        });
    };

    // Função para filtrar e buscar
    const filterAndSearch = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedRegion = regionFilter.value;
        const selectedGenre = genreFilter.value;

        const filteredBooks = acervo.filter(book => {
            const matchesSearch = book.titulo.toLowerCase().includes(searchTerm) || book.autor.toLowerCase().includes(searchTerm);
            const matchesRegion = !selectedRegion || book.regiao === selectedRegion;
            const matchesGenre = !selectedGenre || book.genero === selectedGenre;
            return matchesSearch && matchesRegion && matchesGenre;
        });
        renderBooks(filteredBooks);
    };
    
    // Função para abrir o modal
    const openModal = (book) => {
        const modalContent = bookModal.querySelector('.modal-content');
        modalContent.innerHTML = `
            <div class="p-6 md:p-8">
                <div class="flex justify-end">
                    <button id="closeModalBtn" class="text-stone-500 hover:text-stone-800 text-3xl leading-none">&times;</button>
                </div>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="md:col-span-1">
                        <img src="${book.capa}" alt="Capa do livro ${book.titulo}" class="w-full rounded-lg shadow-lg">
                    </div>
                    <div class="md:col-span-2">
                        <h2 class="text-3xl font-bold text-amber-800">${book.titulo}</h2>
                        <p class="text-xl text-stone-700 mt-1 mb-4">${book.autor}</p>
                        <div class="flex gap-2 mb-4">
                            <span class="bg-amber-100 text-amber-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">${book.regiao}</span>
                            <span class="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">${book.genero}</span>
                        </div>
                        <h4 class="font-bold mt-6 mb-2">Sinopse</h4>
                        <p class="text-stone-600">${book.sinopse}</p>
                        <h4 class="font-bold mt-6 mb-2">Sobre o Autor(a)</h4>
                        <p class="text-stone-600">${book.bioAutor}</p>
                        <div class="mt-8">
                            <a href="#" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">Onde Comprar</a>
                            <button class="ml-4 bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold py-2 px-4 rounded-lg transition duration-300">Adicionar à Lista Escolar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        bookModal.classList.remove('hidden');
        setTimeout(() => {
            modalBackdrop.classList.remove('opacity-0');
            modalBackdrop.classList.add('opacity-100');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }, 10);

        document.getElementById('closeModalBtn').addEventListener('click', closeModal);
    };

    // Função para fechar o modal
    const closeModal = () => {
        const modalContent = bookModal.querySelector('.modal-content');
        modalBackdrop.classList.remove('opacity-100');
        modalBackdrop.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            bookModal.classList.add('hidden');
        }, 300);
    };

    // Event Listeners
    searchInput.addEventListener('input', filterAndSearch);
    regionFilter.addEventListener('change', filterAndSearch);
    genreFilter.addEventListener('change', filterAndSearch);
    bookModal.addEventListener('click', (e) => {
        if (e.target === bookModal) {
            closeModal();
        }
    });

    // Menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    // Fecha menu mobile ao clicar no link
     mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });


    // Renderização inicial
    renderBooks(acervo);
});