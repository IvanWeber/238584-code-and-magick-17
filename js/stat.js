'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var Y_GAP = 45;
var X_GAP = 10;
var FONT_GAP = 20;
var BAR_CHART_GAP = 200;
var BAR_CHART_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TIME_GAP = 5;
var PLAYER_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var PLAYERS_BAR_COLOR = 'rgba(0,0,255,' + Math.random() + ')';
var players = ['Вы', 'Иван', 'Юлия', 'Анна'];
var times = [2500, 3000, 2000, 6000];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + X_GAP, CLOUD_Y + Y_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + X_GAP, CLOUD_Y + Y_GAP + FONT_GAP);

  ctx.fillStyle = PLAYER_BAR_COLOR;
  ctx.fillText(players[0], CLOUD_X + X_GAP, CLOUD_Y + Y_GAP + FONT_GAP + BAR_CHART_GAP);
  ctx.fillText(Math.round(times[0]), CLOUD_X + X_GAP, CLOUD_Y + Y_GAP + 2 * FONT_GAP + BAR_CHART_HEIGHT - Math.round(times[0] * BAR_CHART_HEIGHT / Math.max.apply(null, times)) - TIME_GAP);
  ctx.fillRect(CLOUD_X + X_GAP, CLOUD_Y + Y_GAP + 2 * FONT_GAP + BAR_CHART_HEIGHT - Math.round(times[0] * BAR_CHART_HEIGHT / Math.max.apply(null, times)), BAR_WIDTH, Math.round(times[0] * BAR_CHART_HEIGHT / Math.max.apply(null, times)));

  ctx.fillStyle = PLAYERS_BAR_COLOR;
  ctx.fillText(players[1], CLOUD_X + X_GAP + BAR_WIDTH + BAR_GAP, CLOUD_Y + Y_GAP + FONT_GAP + BAR_CHART_GAP);
  ctx.fillText(Math.round(times[1]), CLOUD_X + X_GAP + BAR_WIDTH + BAR_GAP, CLOUD_Y + Y_GAP + 2 * FONT_GAP + BAR_CHART_HEIGHT - Math.round(times[1] * BAR_CHART_HEIGHT / Math.max.apply(null, times)) - TIME_GAP);
  ctx.fillRect(CLOUD_X + X_GAP + BAR_WIDTH + BAR_GAP, CLOUD_Y + Y_GAP + 2 * FONT_GAP + BAR_CHART_HEIGHT - Math.round(times[1] * BAR_CHART_HEIGHT / Math.max.apply(null, times)), BAR_WIDTH, Math.round(times[1] * BAR_CHART_HEIGHT / Math.max.apply(null, times)));

  ctx.fillStyle = PLAYERS_BAR_COLOR;
  ctx.fillText(players[2], CLOUD_X + X_GAP + 2 * (BAR_WIDTH + BAR_GAP), CLOUD_Y + Y_GAP + FONT_GAP + BAR_CHART_GAP);
  ctx.fillText(Math.round(times[2]), CLOUD_X + X_GAP + 2 * (BAR_WIDTH + BAR_GAP), CLOUD_Y + Y_GAP + 2 * FONT_GAP + BAR_CHART_HEIGHT - Math.round(times[2] * BAR_CHART_HEIGHT / Math.max.apply(null, times)) - TIME_GAP);
  ctx.fillRect(CLOUD_X + X_GAP + 2 * (BAR_WIDTH + BAR_GAP), CLOUD_Y + Y_GAP + 2 * FONT_GAP + BAR_CHART_HEIGHT - Math.round(times[2] * BAR_CHART_HEIGHT / Math.max.apply(null, times)), BAR_WIDTH, Math.round(times[2] * BAR_CHART_HEIGHT / Math.max.apply(null, times)));

  ctx.fillStyle = PLAYERS_BAR_COLOR;
  ctx.fillText(players[3], CLOUD_X + X_GAP + 3 * (BAR_WIDTH + BAR_GAP), CLOUD_Y + Y_GAP + FONT_GAP + BAR_CHART_GAP);
  ctx.fillText(Math.round(times[3]), CLOUD_X + X_GAP + 3 * (BAR_WIDTH + BAR_GAP), CLOUD_Y + Y_GAP + 2 * FONT_GAP + BAR_CHART_HEIGHT - Math.round(times[3] * BAR_CHART_HEIGHT / Math.max.apply(null, times)) - TIME_GAP);
  ctx.fillRect(CLOUD_X + X_GAP + 3 * (BAR_WIDTH + BAR_GAP), CLOUD_Y + Y_GAP + 2 * FONT_GAP + BAR_CHART_HEIGHT - Math.round(times[3] * BAR_CHART_HEIGHT / Math.max.apply(null, times)), BAR_WIDTH, Math.round(times[3] * BAR_CHART_HEIGHT / Math.max.apply(null, times)));
};
