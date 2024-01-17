document.addEventListener("DOMContentLoaded", function () {
    var skillButtons = document.querySelectorAll('.skills-list__element');
    var skillCardImage = document.querySelector('.skill-card__image');
    var skillCardName = document.querySelector('.skill-card__name');
    var skillCardPercent = document.querySelector('.skill-card__progress-percent');
    var skillCardProgressBar = document.querySelector('.skill-card__progress-bar div');
    var skillCardDesc = document.querySelector('.skill-card__progress-desc');
  
    // Функция для изменения содержимого правого блока
    function changeSkillContent(imageSrc, name, percent, progressBarWidth, desc) {
      skillCardImage.src = imageSrc;
      skillCardName.textContent = name;
      skillCardPercent.textContent = percent;
      skillCardProgressBar.style.width = progressBarWidth;
      skillCardDesc.textContent = desc;
    }
  
    // Обработчик события клика для каждой левой кнопки
    skillButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Изменение содержимого в зависимости от нажатой кнопки
        if (button.classList.contains('html-button')) {
          changeSkillContent('/img/html.png', 'HTML', '80%', '80%', 'Я обладаю навыками в создании веб-страниц с использованием HTML. Могу легко разрабатывать и настраивать элементы для достижения желаемого визуального и функционального результата.');
        } else if (button.classList.contains('css-button')) {
          changeSkillContent('/img/css.png', 'CSS', '75%', '75%', 'Мои навыки включают в себя стилизацию веб-страниц с использованием CSS. Обладаю опытом создания красочных и удобных в использовании интерфейсов.');
        } else if (button.classList.contains('js-button')) {
          changeSkillContent('/img/js.png', 'JavaScript', '70%', '70%', 'Я знаю и применяю JavaScript для добавления интерактивности на веб-сайтах. Создаю динамичные элементы и обеспечиваю хороший пользовательский опыт.');
        } else if (button.classList.contains('figma-button')) {
          changeSkillContent('/img/Figma2.png', 'Figma', '85%', '85%', 'Владею Figma, мощным инструментом для дизайна и прототипирования, с уверенностью создаю стильные и функциональные интерфейсы.');
        } else if (button.classList.contains('ps-button')) {
          changeSkillContent('/img/adobe-photoshop-logo-1.png', 'Adobe Photoshop', '85%', '85%', 'Мастерство работы в Photoshop позволяет мне трансформировать концепции в эстетически привлекательные графические элементы, подчеркивая визуальное воздействие.');
        } else if (button.classList.contains('il-button')) {
          changeSkillContent('/img/Adobe-Illustrator-Icon.png', 'Adobe Illustrator', '85%', '85%', 'Специализируюсь на Adobe Illustrator, обеспечивая высококачественную векторную графику, от иллюстраций до логотипов, с акцентом на детали и креативность.');
        } else if (button.classList.contains('id-button')) {
          changeSkillContent('/img/id.png', 'Adobe InDesign', '85%', '85%', 'Эффективно использую InDesign для компоновки и верстки документов, создавая гармоничное визуальное представление с учетом каждой детали.');
        }

        // ... Добавьте другие кнопки по аналогии ...
      });
    });


       

  });


  