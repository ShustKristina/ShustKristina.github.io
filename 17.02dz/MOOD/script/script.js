  function randomDiap(n, m) {
      return Math.floor(Math.random() * (m - n + 1)) + n;
  }

  function mood(colorsCount) {
      var colorHash = {};
      var colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
      console.log('цветов: ' + colorsCount);
      while (Object.keys(colorHash).length < colorsCount) {
          do {
              var n = randomDiap(1, 7); 
              var unicColor = true; //цвет встречается впервые

              for (var i = 0; i < colorsCount; i++) {
                  var colorName = colors[n];
                  if (colorName == colorHash[i]) {  //проверка, есть ли случайно выбранный цвет в хэше
                      unicColor = false;  //если да, то это не уникальный цвет
                      break; //прекращение выполнения цикла
                  }
                   colorHash[colorName] = 1; //если нет, то происходит добавление цвета в хэш
              }
          } while (!unicColor) 
      }
      console.log(colorHash);
  }

  mood(3);