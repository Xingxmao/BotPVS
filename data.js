const data = {
    socialButtons: [
        { icon: 'fab fa-vk', text: 'VK', link: 'https://vk.com/voiceprojectstudio' },
        { icon: 'fab fa-telegram', text: 'Телеграм', link: 'https://t.me/vpsfilm' },
        { icon: 'fas fa-video', text: 'Рутуб', link: 'https://rutube.ru/channel/41747349/' },
        { icon: 'fas fa-question-circle', text: 'Вопросы', link: 'https://t.me/mister_t_voice' }
    ],
    mainMenuItems: [
        { icon: 'fas fa-tv', text: '🎭 Сериалы', section: 'series' },
        { icon: 'fas fa-film', text: '🎬 Фильмы', section: 'films' },
        { icon: 'fas fa-smile', text: '🤡 Мульты', section: 'animation' },
        { icon: 'fas fa-heart', text: '😸 Дорамы', section: 'dorama' }
    ],
    series: [
        { id: 'penguin', title: 'Пингвин', image: 'https://i.imgur.com/Coza50L.jpeg', description: 'Действие сериала происходит вскоре после того, как Загадочник взрывает дамбу, что приводит к наводнению и тысячам жертв в Готэм-сити. Хаос в городе многократно усиливается из-за смерти криминального авторитета Кармайна Фальконе. Поскольку будущее самой могущественной преступной семьи висит на волоске, Освальд Кобблпот, он же Пингвин, видит в этом отличную возможность стать новым главой криминального мира. Конкуренцию ему составляет дочь Фальконе София — безжалостная серийная убийца, недавно освободившаяся из лечебницы Аркхем.', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+1hEaOJ8UxKc1YTIy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12345.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/penguin' }
        ]},
        { id: 'ones-of-us', title: 'Одни из нас', image: 'https://i.imgur.com/28UPhyd.jpeg', description: 'События сериала разворачиваются на руинах человеческой цивилизации, которая оказалась на грани вымирания из-за пандемии неизлечимой грибковой инфекции, превращающей людей в кровожадных монстров. Фарцовщик Джоэл Миллер, ставший циничным и жестоким после смерти дочери, сопровождает через всю Америку 14-летнюю Элли, невосприимчивую к вирусу, которая может оказаться ключом к созданию вакцины. На своем пути они встречают враждебных военных, безжалостных бандитов, мутировавших зомби и прочие опасности постапокалиптического мира.', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+ElwE54bcMIY0M2Ri' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        { id: 'kabinet', title: 'Кабинет Редкостей', image: 'https://via.placeholder.com/350x530', description: 'Сериал-антология представляет восемь ужасных историй, специально отобранных мексиканским режиссером Гильермо дель Торо. Приобретя права на заброшенный склад, Ник находит три старинных тома о том, как вызывать демонов. Расхититель могил Масон, оказавшись в ужасном финансовом положении, решает раскопать могилу недавно похороненного аристократа. Доктор Карл Уинтерс проводит вскрытие нескольких шахтеров, недавно погибших, еще не догадываясь, что в теле одного из них обитает инопланетный паразит.', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+fQ3NDdxtiHszMjhi' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        { id: 'pacient', title: 'Пациент', image: 'https://via.placeholder.com/350x530', description: 'Описание сериала Одни из нас...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+wtnhJ9_a5Y0zNzc6' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        { id: 'Andor', title: 'Андор', image: 'https://via.placeholder.com/350x530', description: 'Описание сериала Одни из нас...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+Zd1JnRnAVJk3MzAy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        { id: 'Vlastelin_kolec', title: 'Властелин колец', image: 'https://via.placeholder.com/350x530', description: 'Описание сериала Одни из нас...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+FDqNg2dEfNBkNWM6' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        { id: 'mando_1', title: 'Мандалорец 1', image: 'https://via.placeholder.com/350x530', description: 'Описание сериала Одни из нас...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+-ajj6LUUUAJmMjdi' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        { id: 'mando_2', title: 'Мандалорец 2', image: 'https://via.placeholder.com/350x530', description: 'Описание сериала Одни из нас...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+DcY_Co7MHaNhMzBi' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        { id: 'mando_3', title: 'Мандалорец 3', image: 'https://via.placeholder.com/350x530', description: 'Описание сериала Одни из нас...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+aahkmmYttYUwNGUy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        { id: 'Upload_1', title: 'Загрузка 1', image: 'https://via.placeholder.com/350x530', description: 'Описание сериала Одни из нас...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+0Ccqz9-zU8g2MWYyn' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        { id: 'Upload_2', title: 'Загрузка 2', image: 'https://via.placeholder.com/350x530', description: 'Описание сериала Одни из нас...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+Cdkk0TSoZRE0Yzcy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        { id: 'Loki', title: 'Локи', image: 'https://via.placeholder.com/350x530', description: 'Описание сериала Одни из нас...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+Ut2t23SgGMg5OGE6' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        { id: 'Vedmak_3', title: 'Ведьмак 3', image: 'https://via.placeholder.com/350x530', description: 'Описание сериала Одни из нас...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+cLq48SlicOYyZDEy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        { id: 'blagie_2', title: 'Благие знамения 2', image: 'https://via.placeholder.com/350x530', description: 'Описание сериала Одни из нас...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+u3lHBDvvN2ZmNzZi' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        { id: 'pokolenie_vi', title: 'Поколение ВИ', image: 'https://via.placeholder.com/350x530', description: 'Описание сериала Одни из нас...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+uTYLfpjEkjNkMmMy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        { id: 'Upload_3', title: 'Загрузка 3', image: 'https://via.placeholder.com/350x530', description: 'Описание сериала Одни из нас...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+K29ZRjsD25kxYTMy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/series/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/ones-of-us' }
        ]},
        
    ],
    films: [
        { id: 'pinocchio', title: 'Пиноккио Дель Торо', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Пиноккио Дель Торо...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+GskMJIn3nt1lMjQy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12345.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/pinocchio' }
        ]},
        { id: 'entergalactic', title: 'Энтергалактик', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+omp578nJorkxOGUy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'Chip', title: 'Чип и Дейл', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+H9OkdZ6Ggh9kMGRi' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'NewYorkBog', title: 'Боги Нью-Йорка', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+7eDYyhC9DXY5ZTVi' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'puth', title: 'Путь-Во все тяжкое', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+a5YQLqG4Z9QyNGNi' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'and1', title: 'Нерассказанное взлёт и падение AND1', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+p6EW5ABSaT45MjAy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'spawn', title: 'Спаун', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+AQkjbWpgwPQzZjEy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'blazhenstvo', title: 'Блаженство', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+LE-HlSGbf404YTAy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'neznakomca', title: 'Два далеких незнакомца', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+z5BKNYtUJ4llN2Zi' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'Tetris', title: 'Тетрис', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+apduCQ3IkpkzYjk6' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'Vzakone', title: 'Родители в законе', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+JkvKkpZwwMEyYjZi' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'bezObid', title: 'Без Обид', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+qDPj2YZz1DFlMGNi' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'Wonka', title: 'Вонка', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+pHYdpXSD06tjNDI6' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'stambul', title: 'Посадка на рейс в Стамбул', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+yl8qjlmrsupmNmZi' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'bednie', title: 'Бедные-несчастные', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+wVqykuw20ksyYTNi' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'devanddragon', title: 'Дева и дракон', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+wocanqFGtJwwMzAy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'music', title: 'Музыка', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+RvxX2IyL6hM4ZjUy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'luna_2', title: 'Мятежная Луна, часть 2', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+NGfeF1_IAvE3YjQ6' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
    ],
    animation: [
        { id: 'zveropolis', title: 'Зверополис', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Пиноккио Дель Торо...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+EJmhMOQx7WA3M2M6' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12345.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/pinocchio' }
        ]},
        { id: 'skitaniya', title: 'Кулинарные скитания', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+13KZ8w2tWoEwNTMy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'Mario', title: 'Супер Братья Марио', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+mHvEhRvOuoM5ZTIy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'zavtra_jo', title: 'Завтрашний Джо', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+d7tThOXSTt83ZTgy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'Elementarno', title: 'Элементарно', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+JC5ykrweSQs2NjRi' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]},
        { id: 'Leo', title: 'Лео', image: 'https://via.placeholder.com/350x530', description: 'Описание фильма Энтергалактик...', links: [
            { icon: 'fab fa-telegram', text: 'Telegram', link: 'https://t.me/+0kwy8nhxqiAwZmUy' },
            { icon: 'fas fa-globe', text: 'Сайт', link: 'https://rezka.ag/films/12346.html' },
            { icon: 'fas fa-download', text: 'Торрент', link: 'https://example.com/torrent/entergalactic' }
        ]}
    ]
    // Добавьте аналогичные данные для мультов и дорам
};
