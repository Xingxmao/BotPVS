document.addEventListener('DOMContentLoaded', () => {
    // Загрузка социальных кнопок
    const socialButtonsContainer = document.getElementById('social-buttons');
    data.socialButtons.forEach(button => {
        const buttonElement = document.createElement('a');
        buttonElement.className = 'menu-item';
        buttonElement.href = button.link;
        buttonElement.target = '_blank'; // Открываем соцсети в новой вкладке
        buttonElement.innerHTML = `<i class="${button.icon}"></i><span>${button.text}</span>`;
        socialButtonsContainer.appendChild(buttonElement);
    });

    // Загрузка основного меню
    const mainMenuItemsContainer = document.getElementById('main-menu-items');
    data.mainMenuItems.forEach(item => {
        const menuItem = document.createElement('a');
        menuItem.className = 'menu-item';
        menuItem.href = `#${item.section}`;
        menuItem.innerHTML = `<i class="${item.icon}"></i><span>${item.text}</span>`;
        menuItem.addEventListener('click', (e) => {
            e.preventDefault(); // Отменяем стандартное поведение ссылки
            showSection(item.section);
        });
        mainMenuItemsContainer.appendChild(menuItem);
    });

    // Обработка кликов по карточкам
    document.addEventListener('click', (e) => {
        if (e.target.closest('.card')) {
            const card = e.target.closest('.card');
            const sectionId = card.parentElement.parentElement.querySelector('h1').getAttribute('data-section');
            const itemId = card.getAttribute('data-id');
            if (sectionId && itemId) {
                showDetails(sectionId, itemId);
            }
        }
    });
});

function showSection(sectionId) {
    const mainMenu = document.getElementById('main-menu');
    const dynamicContent = document.getElementById('dynamic-content');
    mainMenu.style.display = 'none';
    dynamicContent.innerHTML = '';

    if (sectionId === 'main-menu') {
        mainMenu.style.display = 'block';
        return;
    }

    const sectionData = data[sectionId];
    if (sectionData) {
        const sectionHTML = `
            <div class="container">
                <h1 data-section="${sectionId}">${sectionId === 'series' ? '🎭 Сериалы' : sectionId === 'films' ? '🎬 Фильмы' : sectionId === 'animation' ? '🤡 Мульты' : '😸 Дорамы'}</h1>
                <div class="card-grid">
                    ${sectionData.map(item => `
                        <div class="card" data-id="${item.id}">
                            <div class="poster-container">
                                <img src="${item.image}" alt="${item.title}">
                            </div>
                            <h3>${item.title}</h3>
                        </div>
                    `).join('')}
                </div>
                <a href="#main-menu" class="menu-item" onclick="showSection('main-menu')">
                    <i class="fas fa-arrow-left"></i>
                    <span>Назад</span>
                </a>
            </div>
        `;
        dynamicContent.innerHTML = sectionHTML;
    }
}

function showDetails(sectionId, itemId) {
    const mainMenu = document.getElementById('main-menu');
    const dynamicContent = document.getElementById('dynamic-content');
    mainMenu.style.display = 'none';
    dynamicContent.innerHTML = '';

    const sectionData = data[sectionId];
    if (sectionData) {
        const item = sectionData.find(i => i.id === itemId);
        if (item) {
            const detailsHTML = `
                <div class="details-container">
                    <h1>${item.title}</h1>
                    <p>${item.description}</p>
                    <div class="details-buttons">
                        ${item.links.map(link => `
                            <a href="${link.link}" target="_blank">
                                <i class="${link.icon}"></i>
                                <span>${link.text}</span>
                            </a>
                        `).join('')}
                    </div>
                    <a href="#main-menu" class="menu-item" onclick="showSection('main-menu')">
                        <i class="fas fa-arrow-left"></i>
                        <span>Назад</span>
                    </a>
                </div>
            `;
            dynamicContent.innerHTML = detailsHTML;
        }
    }
}
// ПОИСК
function performSearch() {
    const searchText = searchInput.value.toLowerCase();
    const mainMenu = document.getElementById('main-menu');
    const dynamicContent = document.getElementById('dynamic-content');

    // Собираем все релизы из всех категорий
    const allReleases = [
        ...(data.series || []),
        ...(data.films || []),
        ...(data.animation || []),
        ...(data.dorama || [])
    ];

    if (searchText === '') {
        mainMenu.style.display = 'block';
        dynamicContent.innerHTML = '';
        return;
    }

    // Фильтруем релизы по названию и описанию
    const filteredReleases = allReleases.filter(release => 
        release.title.toLowerCase().includes(searchText) || 
        (release.description && release.description.toLowerCase().includes(searchText))
    );

    mainMenu.style.display = 'none';
    dynamicContent.innerHTML = '';

    if (filteredReleases.length > 0) {
        const searchResultsHTML = `
            <div class="container">
                <h1>Результаты поиска</h1>
                <div class="card-grid">
                    ${filteredReleases.map(release => `
                        <div class="card" data-id="${release.id}" data-section="${release.section || 'series'}">
                            <div class="poster-container">
                                <img src="${release.image}" alt="${release.title}">
                            </div>
                            <h3>${release.title}</h3>
                        </div>
                    `).join('')}
                </div>
                <a href="#main-menu" class="menu-item" onclick="showSection('main-menu')">
                    <i class="fas fa-arrow-left"></i>
                    <span>Назад</span>
                </a>
            </div>
        `;
        dynamicContent.innerHTML = searchResultsHTML;

        // Добавляем обработчики кликов для карточек
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', () => {
                const sectionId = card.getAttribute('data-section');
                const itemId = card.getAttribute('data-id');
                showDetails(sectionId, itemId);
            });
        });
    } else {
        dynamicContent.innerHTML = `
            <div class="container">
                <h1>Ничего не найдено</h1>
                <a href="#main-menu" class="menu-item" onclick="showSection('main-menu')">
                    <i class="fas fa-arrow-left"></i>
                    <span>Назад</span>
                </a>
            </div>
        `;
    }
}

// Находим элементы поиска
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Добавляем обработчики событий
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function showDetails(sectionId, itemId) {
    const mainMenu = document.getElementById('main-menu');
    const dynamicContent = document.getElementById('dynamic-content');
    mainMenu.style.display = 'none';
    dynamicContent.innerHTML = '';

    const sectionData = data[sectionId];
    if (sectionData) {
        const item = sectionData.find(i => i.id === itemId);
        if (item) {
            const detailsHTML = `
                <div class="details-container">
                    <h1>${item.title}</h1>
                    <p>${item.description}</p>
                    <div class="details-buttons">
                        ${item.links.map(link => `
                            <a href="${link.link}" target="_blank">
                                <i class="${link.icon}"></i>
                                <span>${link.text}</span>
                            </a>
                        `).join('')}
                    </div>
                    <a href="#main-menu" class="menu-item" onclick="showSection('main-menu')">
                        <i class="fas fa-arrow-left"></i>
                        <span>Назад</span>
                    </a>
                </div>
            `;
            dynamicContent.innerHTML = detailsHTML;
        }
    }
}


