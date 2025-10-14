// --- Dados do Acervo (Exemplo) ---
// Em uma aplicação real, estes dados viriam de um banco de dados.
const acervo = [
    {
        id: 1,
        titulo: "Becos da Memória",
        autor: "Conceição Evaristo",
        regiao: "Sudeste",
        genero: "Romance",
        capa: "https://placehold.co/300x450/78350f/ffffff?text=Capa+Livro",
        sinopse: "Uma narrativa poética e contundente sobre a vida em uma favela, as remoções e a força da comunidade negra para preservar suas histórias e memórias.",
        bioAutor: "Maria da Conceição Evaristo de Brito é uma escritora afro-brasileira, nascida em Belo Horizonte. Sua obra aborda temas como a discriminação racial, de gênero e de classe.",
    },
    {
        id: 2,
        titulo: "Cadernos Negros",
        autor: "Cuti (Luiz Silva)",
        regiao: "Sudeste",
        genero: "Conto",
        capa: "https://placehold.co/300x450/a16207/ffffff?text=Capa+Livro",
        sinopse: "Coletânea de contos e poemas que se tornou um marco na literatura afro-brasileira, organizada pelo grupo Quilombhoje, do qual Cuti é um dos fundadores.",
        bioAutor: "Cuti, pseudônimo de Luiz Silva, é um escritor, poeta e dramaturgo paulista, um dos mais importantes expoentes da literatura negra contemporânea no Brasil.",
    },
    {
        id: 3,
        titulo: "Orixás: Orixás em Poemas",
        autor: "Abdias Nascimento",
        regiao: "Sudeste",
        genero: "Poesia",
        capa: "https://placehold.co/300x450/b45309/ffffff?text=Capa+Livro",
        sinopse: "Uma obra que celebra a cosmogonia africana através da poesia, exaltando a força e a beleza dos Orixás e sua influência na cultura brasileira.",
        bioAutor: "Abdias do Nascimento foi um artista plástico, ator, diretor, dramaturgo, e político brasileiro. Um dos maiores ativistas do movimento negro no século XX.",
    },
    {
        id: 4,
        titulo: "A Cor da Ternura",
        autor: "Geny Guimarães",
        regiao: "Sudeste",
        genero: "Infantojuvenil",
        capa: "https://placehold.co/300x450/ca8a04/ffffff?text=Capa+Livro",
        sinopse: "Narra a história de uma menina negra que vive no interior de São Paulo, abordando com sensibilidade as descobertas da infância, o preconceito e a busca por identidade.",
        bioAutor: "Geny Guimarães foi uma escritora mineira, reconhecida por sua contribuição à literatura infantojuvenil com temática afro-brasileira.",
    },
    {
        id: 5,
        titulo: "Terra de Palmares",
        autor: "Allan da Rosa",
        regiao: "Sudeste",
        genero: "Poesia",
        capa: "https://placehold.co/300x450/d97706/ffffff?text=Capa+Livro",
        sinopse: "Poemas que dialogam com a história e a atualidade da luta negra, tendo o Quilombo dos Palmares como símbolo de resistência e liberdade.",
        bioAutor: "Allan da Rosa é escritor, historiador e educador paulistano. Sua obra transita pela poesia, conto e dramaturgia, com forte engajamento social.",
    },
    {
        id: 6,
        titulo: "A Descoberta de si",
        autor: "Miriam Alves",
        regiao: "Sudeste",
        genero: "Conto",
        capa: "https://placehold.co/300x450/eab308/ffffff?text=Capa+Livro",
        sinopse: "Contos que mergulham no universo feminino negro, explorando relações, identidade e o cotidiano de mulheres que enfrentam e transformam suas realidades.",
        bioAutor: "Miriam Alves é uma escritora, poeta e assistente social paulista, integrante do grupo Quilombhoje e uma voz importante na literatura afro-feminina.",
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