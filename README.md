<h1>Домашнее задание по Vue №3 (рефакторинг кода)</h1>
<p>Store вынесен в отдельный файл src/stores/settings.js </p>
<p>Многие функции перенесены в отдельный файл src/utils/utils.js</p>
<p></p>
<p>В игре три страницы (view) HomeView, GameView, GameOverView. HomeView содержит поле ввода имени игрока, выбор тренируемых действий (сложение, вычетание, умножение и деление) и кнопку начала игры. Страница GameOverView отображает сообщение о результатах игры - победа или поражение</p>
<p>Страница GameView содержит игровой процесс: нужно за 15 секунд выбрать один из четырех вариантов.</p>
<p>Использован фреймворк bootstrap</p>
<p>Проверка:<ul><li>npm i</li>
<li>npm run dev</li></ul></p>
<hr>
<p>24.04.2024 - рефакторинг кода</p>
<p>05.04.2024 - Добавлен игровой процесс. Для победы необходимо правильно решить 5 примеров за 15 секунд</p>
<p>27.03.2024 - Добавлена обработка выбора проверяемых действий (+, -, *, /) и ввод имени игрока. Если длина имени игрока менее 3 символов или не выбрано ниодно действие (+, -, *, /), то кнопка начала игры неактивна</p>
