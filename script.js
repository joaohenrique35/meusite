/**
 * SCRIPT PARA O SITE PESSOAL DE JOÃO HENRIQUE SANTIAGO
 * Funcionalidades: Menu responsivo, animação ao rolar, filtro de projetos e botão voltar ao topo.
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- MENU RESPONSIVO ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });


    // --- ANIMAÇÃO AO ROLAR (REVEAL) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;

            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Executar uma vez no carregamento


    // --- BOTÃO VOLTAR AO TOPO ---
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // --- FILTRO DE PROJETOS ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover classe active de todos os botões e adicionar ao clicado
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                    // Pequeno delay para a animação de fade-in ao filtrar
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });


    // --- FORMULÁRIO DE CONTATO (SIMULAÇÃO) ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aqui você poderia adicionar a lógica para enviar o e-mail real
        // Por enquanto, apenas exibimos um feedback visual
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Obrigado, João! Sua mensagem foi simulada com sucesso. (Este é um exemplo de site estático)');
            btn.innerText = originalText;
            btn.disabled = false;
            contactForm.reset();
        }, 1500);
    });

});
