document.addEventListener('DOMContentLoaded', () => {
    // Загрузка социальных кнопок
    const socialButtonsContainer = document.getElementById('social-buttons');
    data.socialButtons.forEach(button => {
        const buttonElement = document.createElement('a');
        buttonElement.className = 'menu-item';
        buttonElement.href = button.link;
        buttonElement.target = '_blank';
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
        menuItem.addEventListener('click', () => showSection(item.section));
        mainMenuItemsContainer.appendChild(menuItem);
    });

    // Обработка кликов по ссылкам
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.target !== '_blank') {
                e.preventDefault();
                window.open(link.href, '_blank');
            }
        });
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
                <h1>${sectionId === 'series' ? '🎭 Сериалы' : sectionId === 'films' ? '🎬 Фильмы' : sectionId === 'animation' ? '🤡 Мульты' : '😸 Дорамы'}</h1>
                <div class="card-grid">
                    ${sectionData.map(item => `
                        <div class="card" onclick="showDetails('${sectionId}', '${item.id}')">
                            <img src="${item.image}" alt="${item.title}">
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

// Находим элементы
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

function performSearch() {
    const searchText = searchInput.value.toLowerCase();
    const mainMenu = document.getElementById('main-menu');
    const dynamicContent = document.getElementById('dynamic-content');

    // Собираем все релизы, проверяя, что каждый ключ существует и является массивом
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

    const filteredReleases = allReleases.filter(release => 
        release.title.toLowerCase().includes(searchText) || 
        release.description.toLowerCase().includes(searchText)
    );

    mainMenu.style.display = 'none';
    dynamicContent.innerHTML = '';

    if (filteredReleases.length > 0) {
        const searchResultsHTML = `
            <div class="container">
                <h1>Результаты поиска</h1>
                <div class="card-grid">
                    ${filteredReleases.map(release => `
                        <div class="card" onclick="showDetails('${release.id}')">
                            <img src="${release.image}" alt="${release.title}">
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


