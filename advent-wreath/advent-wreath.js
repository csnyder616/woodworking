var radius = 8;
var candleRadius = .4375; // 7/8 diameter
var candleRingRadius = 6.5;
var candleColor = '#E49DFC';
var christCandleColor = '#ffffff';

var draw = SVG('plan');
draw.size('100%', '100%');
draw.viewbox(0, 0, radius * 2, radius * 2);
var circle = draw.circle(radius*2).fill('#654d45');

var candle = function(x, y, color) {
    draw.circle(candleRadius * 2).center(x, y).fill(color);
}

candle(radius, radius, christCandleColor);

for (var i = 0; i < 24; i++) {
    var angle = 2 * Math.PI * (i / 24); 
    var xdelta = Math.sin(angle) * candleRingRadius;
    var ydelta = Math.cos(angle) * candleRingRadius;
    candle(radius + xdelta, radius + ydelta, candleColor);
}

draw.text('Wreath radius: ' + radius + '\nCandle radius: ' + candleRadius + '\nCandle ring radius: ' + candleRingRadius).font({
    size: '0.35px'
});
