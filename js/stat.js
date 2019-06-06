'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = '16px "PT Mono" sans-serif';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 110, 55);
  ctx.fillText('Список результатов:', 110, 75);

  ctx.fillText('Вы', 110, 95);
  ctx.fillRect(160, 79, 430, 20);

  ctx.fillText('Иван', 110, 125);
  ctx.fillRect(160, 109, 430, 20);

  ctx.fillText('Юлия', 110, 155);
  ctx.fillRect(160, 139, 430, 20);

  ctx.fillText('Анна', 110, 185);
  ctx.fillRect(160, 169, 430, 20);
};
