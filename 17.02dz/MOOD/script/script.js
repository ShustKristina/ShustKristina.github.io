  function randomDiap(n, m) {
      return Math.floor(Math.random() * (m - n + 1)) + n;
  }

  function mood(colorsCount) {
      var colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
      var colorHash = {};
      console.log('цветов: ' + colorsCount);

      while (Object.keys(colorHash).length < colorsCount) { 

          var n = randomDiap(1, 7);
          var colorName = colors[n];

          for (var i = 1; i <= colorsCount; i++) {
              if (colorName in colorHash) {
                  continue;
              }
              else {
                  colorHash[colorName] = true;

              }
              console.log(colorName);
          }
      }
  }

  mood(3);