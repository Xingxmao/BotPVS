// Проверка загрузки данных
console.log('Данные загружены:', Object.keys(data));
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

let currentPage = 1;
const itemsPerPage = 6; // Показываем 6 релизов на странице (3 релиза × 2 строки)

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
        currentPage = 1;
        const paginatedData = sectionData.slice(0, itemsPerPage);

        const sectionHTML = `
            <div class="container">
                <h1 data-section="${sectionId}">${sectionId === 'series' ? '🎭 Сериалы' : sectionId === 'films' ? '🎬 Фильмы' : sectionId === 'animation' ? '🤡 Мульты' : '😸 Дорамы'}</h1>
                <div class="card-grid">
                    ${paginatedData.map(item => `
                        <div class="card" data-id="${item.id}" data-section="${sectionId}" onclick="showDetails('${sectionId}', '${item.id}')">
                            <div class="poster-container">
                                <img src="${item.image}" alt="${item.title}">
                            </div>
                            <h3>${item.title}</h3>
                        </div>
                    `).join('')}
                </div>
                ${sectionData.length > itemsPerPage ? `
                    <button class="load-more-button" onclick="loadMore('${sectionId}')">Загрузить еще</button>
                ` : ''}
                <a href="#main-menu" class="menu-item back-button" onclick="showSection('main-menu')">
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
                    <div class="poster-container">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <p>${item.description}</p>
                    <div class="details-buttons">
                        ${item.links.map(link => `
                            <a href="${link.link}" target="_blank">
                                <i class="${link.icon}"></i>
                                <span>${link.text}</span>
                            </a>
                        `).join('')}
                    </div>
                    <a href="#main-menu" class="menu-item back-button" onclick="showSection('main-menu')">
                        <i class="fas fa-arrow-left"></i>
                        <span>Назад</span>
                    </a>
                </div>
            `;
            dynamicContent.innerHTML = detailsHTML;
        }
    }
}

function loadMore(sectionId) {
    const sectionData = data[sectionId];
    const dynamicContent = document.getElementById('dynamic-content');
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = sectionData.slice(startIndex, endIndex);

    if (paginatedData.length > 0) {
        const cardGrid = dynamicContent.querySelector('.card-grid');
        paginatedData.forEach(item => {
            const cardHTML = `
                <div class="card" data-id="${item.id}" data-section="${sectionId}" onclick="showDetails('${sectionId}', '${item.id}')">
                    <div class="poster-container">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <h3>${item.title}</h3>
                </div>
            `;
            cardGrid.insertAdjacentHTML('beforeend', cardHTML);
        });

        currentPage++;

        // Скрываем кнопку "Загрузить еще", если больше нет данных
        if (endIndex >= sectionData.length) {
            dynamicContent.querySelector('.load-more-button').style.display = 'none';
        }
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
            
            ${item.rutubeId ? `
            <div class="rutube-container">
                <iframe src="https://rutube.ru/embed/${item.rutubeId}/" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>
            ` : ''}
            
            <p>${item.description}</p>
            <div class="details-buttons">
                ${item.links.map(link => `
                    <a href="${link.link}" target="_blank">
                        <i class="${link.icon}"></i>
                        <span>${link.text}</span>
                    </a>
                `).join('')}
            </div>
            <a href="#main-menu" class="menu-item back-button" onclick="showSection('main-menu')">
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
        ...(data.series || []).map(release => ({ ...release, section: 'series' })), // Добавляем раздел 'series'
        ...(data.films || []).map(release => ({ ...release, section: 'films' })),   // Добавляем раздел 'films'
        ...(data.animation || []).map(release => ({ ...release, section: 'animation' })), // Добавляем раздел 'animation'
        ...(data.dorama || []).map(release => ({ ...release, section: 'dorama' }))  // Добавляем раздел 'dorama'
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
                        <div class="card" data-id="${release.id}" data-section="${release.section}">
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

// Новинка
// =============================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ (ДОЛЖНЫ БЫТЬ В НАЧАЛЕ)
// =============================================

function getType(section) {
    const typeMap = {
        series: 'Сериал',
        films: 'Фильм',
        animation: 'Мультфильм',
        dorama: 'Дорама'
    };
    return typeMap[section] || 'Другое';
}

function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    } catch (e) {
        console.error('Некорректная дата:', dateString);
        return 'Дата неизвестна';
    }
}

// =============================================
// ОСНОВНАЯ ЛОГИКА НОВЫХ РЕЛИЗОВ (ОБНОВЛЕННЫЙ)
// =============================================

function loadFeaturedReleases() {
    const container = document.getElementById('featured-releases');
    if (!container) return;

    try {
        const featuredItems = getFeaturedItems();
        container.innerHTML = generateFeaturedHTML(featuredItems);
        addFeaturedEventListeners();
    } catch (error) {
        handleFeaturedError(container, error);
    }
}

function getFeaturedItems() {
    const sections = ['series', 'films', 'animation', 'dorama'];
    return sections
        .flatMap(section => 
            (data[section] || [])
                .filter(item => item.featured)
                .map(item => ({ ...item, section }))
        )
        .sort((a, b) => {
            const dateCompare = new Date(b.dateAdded) - new Date(a.dateAdded);
            return dateCompare !== 0 ? dateCompare : a.title.localeCompare(b.title);
        })
        .slice(0, 3);
}

function generateFeaturedHTML(items) {
    if (items.length === 0) {
        return '<div class="no-results">Нет новых релизов</div>';
    }
    
    return items.map(item => `
        <div class="release-item" 
             data-section="${item.section}" 
             data-id="${item.id}">
            <div class="release-info">
                <h3 class="release-title">${item.title}</h3>
                <div class="release-meta">
                    <span class="release-badge ${item.section}">
                        ${getType(item.section)}
                    </span>
                </div>
            </div>
            <button class="watch-btn" aria-label="Смотреть">
                <i class="fas fa-play"></i>
                <span>Смотреть</span>
            </button>
        </div>
    `).join('');
}

function addFeaturedEventListeners() {
    document.querySelectorAll('.watch-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.closest('.release-item');
            const section = parent.dataset.section;
            const id = parent.dataset.id;
            showDetails(section, id);
        });
    });
}

// Остальные функции без изменений

function handleFeaturedError(container, error) {
    console.error('Ошибка загрузки релизов:', error);
    container.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            Ошибка загрузки. Попробуйте обновить страницу.
        </div>
    `;
}

// =============================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedReleases();
    // Остальная инициализация...
});


