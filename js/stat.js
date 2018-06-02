'use strict';

(function () {

  window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(160, 20, 420, 270);

    ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
    ctx.fillRect(150, 10, 420, 270);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';

    ctx.fillText('Ура вы победили!\nСписок результатов:', 170, 40);
    // ctx.fillText('Список результатов:', 170, 60);

    var max = -1;
    var maxIndex = -1;

    for (var i = 0; i < times.length; i++) {
      if (times[i] > max) {
        max = times[i];
        maxIndex = i;
      }
    }

    var histogramHeight = 150;
    var step = histogramHeight / (max - 0);

    ctx.fillText('Худшее время: ' + Math.floor(max) + 'мс у игрока ' +
      names[maxIndex], 170, 70);

    var barWidth = 50; // px Ширина одной полоски
    var indent = 110; // px Отступ между полосками
    var initialX = 170; // px Начальная координата X
    var initialY = 100; // px Начальная координата Y

    for (i = 0; i < times.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
      }

      ctx.fillRect(initialX + indent * i, // X
          histogramHeight - times[i] * step + initialY, // Y
          barWidth, // Width
          times[i] * step); // Height


      ctx.fillStyle = 'Black';
      ctx.fillText(Math.round(times[i]), // Text
          (initialX + indent * i) + 5, // X
          (histogramHeight - times[i] * step + initialY) - 5); // Y

      ctx.fillStyle = 'Black';
      ctx.fillText(names[i],
          initialX + indent * i + 5,
          initialY + histogramHeight + 20);
    }
  };

})();
