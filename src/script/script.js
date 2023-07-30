let navlinks = document.querySelectorAll('.navbar a');
let sections = document.querySelectorAll('section');

// Define uma função que será executada quando ocorrer o evento de scroll na página
window.onscroll = () => { 
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

// Verifica se o scroll vertical está dentro dos limites da seção atual (topo dentro da seção)
        if (top >= offset && top < offset + height) {

            // Remove a classe 'active' de todos os links da barra de navegação
            navlinks.forEach(link => {
                link.classList.remove('active');
            });

            // Adiciona a classe 'active' ao link da barra de navegação cujo atributo 'href' contém o ID da seção atual
            document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
        }
    });
};

//dark mode

// Função para alternar o modo dark em todo o documento
function toggleDarkMode() {

    // Seleciona o elemento <body>
    const body = document.getElementById('body');

    // Adiciona ou remove a classe 'dark-mode' no elemento <body>
    body.classList.toggle('dark-mode'); 
}

// Event listener para o clique no botão toggle
const toggleInput = document.getElementById('toggle');
toggleInput.addEventListener('change', toggleDarkMode);