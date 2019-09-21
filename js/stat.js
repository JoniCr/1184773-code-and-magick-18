'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var FONT = 'normal normal 16px/1 "PT Mono", monospace';
var FONT_COLOR = '#000';
var FONT_HEIGHT = 20;
var GAP = 50;
var SPACE = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = GAP + BAR_WIDTH;
var BAR_COLOR_DEFAULT = 'rgba(255, 0, 0, 1)';
var BAR_TEXT_X = CLOUD_X + BAR_WIDTH;
var BAR_TEXT_Y = CLOUD_Y + CLOUD_HEIGHT - SPACE;
var BAR_Y = BAR_HEIGHT - BAR_WIDTH - SPACE;
var BAR_X = CLOUD_X + BAR_WIDTH;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};


var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


var randomColor = function () {
  var randomNumber = Math.random() * 100;
  var color = 'hsl(250,80%,' + randomNumber + '%)';
  return color;
};


window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + SPACE, CLOUD_Y + SPACE, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';


  var renderBars = function () {

    var currentBarHeight = (BAR_HEIGHT * times[i]) / maxTime;

    ctx.fillStyle = names[i] === 'Вы' ? BAR_COLOR_DEFAULT : randomColor();
    ctx.fillText(names[i], BAR_TEXT_X + (BAR_GAP) * i, BAR_TEXT_Y);
    ctx.fillRect(BAR_X + (BAR_GAP) * i, BAR_Y + BAR_HEIGHT - currentBarHeight, BAR_WIDTH, currentBarHeight);
    ctx.fillText(Math.floor(times[i]), BAR_TEXT_X + (BAR_GAP) * i, BAR_TEXT_Y - BAR_HEIGHT - BAR_WIDTH + SPACE);

  };

  for (var i = 0; i < names.length; i++) {
    renderBars(ctx, names[i], randomColor, times[i], maxTime);
  }


  ctx.fillStyle = FONT_COLOR;
  ctx.font = FONT;
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_HEIGHT, CLOUD_Y + FONT_HEIGHT + SPACE);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_HEIGHT, CLOUD_Y + FONT_HEIGHT + FONT_HEIGHT + SPACE);

};
