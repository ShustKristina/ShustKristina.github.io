# ShustKristina.github.io

ТЕМА сайта: АКТИВНЫЙ ОТДЫХ


ЦЕЛЬ сайта: собрать воедино все места активного отдыха, расписать преимущества того либо иного места, а также предоставить информацию 
о пунктах проката снаряжения.


Для создания сайта использовались HTML, CSS, JS.


При маленьком разрешении экрана меняется порядок блоков в footer, на странице "ОТЗЫВЫ" меняются местами Форма и Отзывы; 
также при малом разрешении экрана (для мобильных усройств) вместо картинки-бэкграунда использован однотонный фон на главной странице, 
не показываются анимированные карандаш (главная страница) и письмо (страница Отзывы); убран прелоадер;
блоки при большой ширине экрана выстраивались (в основном) в строку и занимали 30%-50% от ширины окна, с уменьшением 
ширины блоки были выстроены в колонку, убраны margin и padding и ширина блоков уже была выставлена 90%-100%.
Переходы были осуществлены в тех местах, где из-за текстовой информации блоки стали занимать по высоте очень много места; картинки влияли на точки 
перехода, а также зрительное восприятие информации.
Для больших разрешений экрана (более 1500px) ограничена ширина;  


Переходы по страницам сайта осуществляется при помощи ссылок.

Использован скролл-эффект при переключении к якорям страницы (подключен плагин); эффект "картинки-перевертыша"(с помощью transform(rotate) (страница Прокат снаряжения),
эффект "звонящей трубки" ( использован keyframes, box-shadow); при наведении курсора на ссылки они меняют цвет/бэкграунд/жирность/размер;
пишущий карандаш (использован keyframes); реалистичный планшет (box-shadow); фото в виде стопочки на странице Велотуризм(transform); 
эффект "прелоадер" (плагин); всплывающая подсказка в фотогалерее на страницах Лыжи, сноуборд и Лазертаг, пейнтбол (изменение прозрачности);
карандаш, кнопки (linear-gradient); эффект нажатия на кнопку (transform(scale)); выдвигающийся лист на странице Отзывы (keyframes);
плавное раскрытие фотогалерии на странице Велотуризм (плагин).


Проверялась работоспособность в браузерах:
-Google Chrome, версия 59..63 + на моб.устройствах с этим же браузером(все работает)
-IE11, IE10 (анимация svg не работает); IE9 и ниже(display: flex не работает)
-Opera, версии 45.0-49.0 (все работает)
-Яндекс.Браузер, версия 17.0 (все работает)
-Mozila Firefox, версия 53.0-57.0.1 (все работает)
-браузер на моб.устройстве Xiaomi, V9.2.8 (все работает)
-Safari (все работает)

Сайт проверялся также с помощью сервиса https://www.browserling.com/
