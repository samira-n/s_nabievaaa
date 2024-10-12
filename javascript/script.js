// Получаем все блоки
const blocks = document.querySelectorAll('.block');
const infoBlocks = document.querySelectorAll('.info_block');

// Добавляем обработчики нажатий на блоки
blocks.forEach(block => {
    block.addEventListener('click', () => {
        // Убираем активный класс у всех блоков
        blocks.forEach(b => b.classList.remove('active'));
        // Добавляем активный класс на текущий блок
        block.classList.add('active');

        // Скрываем все информационные блоки
        infoBlocks.forEach(info => info.classList.remove('active'));
        // Показываем информационный блок, соответствующий нажатому блоку
        const infoId = block.getAttribute('data-info');
        document.getElementById(infoId).classList.add('active');
    });
});

// Активируем блок Languages при загрузке страницы
document.querySelector('[data-info="language_info"]').classList.add('active');
document.getElementById('language_info').classList.add('active');

