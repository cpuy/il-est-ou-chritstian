var christianXLeft = 202;
var christianXRight = 222;
var christianMiddleX = (christianXRight - christianXLeft) / 2;
var christianYTop = 175;
var christianYBottom = 200;
var christianMiddleY = (christianYBottom - christianYTop) / 2;

var charlieXLeft = 500;
var charlieXRight = 510;
var charlieYTop = 270;
var charlieYBottom = 300;


var oldx = 0;
var oldy = 0;

function isInChristian(x, y) {
   return x > christianXLeft && x < christianXRight && y > christianYTop && y < christianYBottom;
}

function isInCharlie(x, y) {
   return x > charlieXLeft && x < charlieXRight && y > charlieYTop && y < charlieYBottom;
}

function isRefroidising(indiceX, indiceY) {
   return indiceY > oldy || indiceX > oldx;
}


function tuChauffeOuTuRefroidi(x, y) {
   var indiceX = Math.abs(christianMiddleX - x);
   var indiceY = Math.abs(christianMiddleY - y);

   if (isInChristian(x, y)) {
        $('#tiptip_content').html('Gagn&eacute; !!! Il est la !!!');
   } else if (isInCharlie(x, y)) {
        $('#tiptip_content').html('Mais nan. Ca c&#145;est Charlie !');
   } else if (isRefroidising(indiceX, indiceY)) {
	$('#tiptip_content').text('Tu refroidis');
   } else {
	$('#tiptip_content').text('Tu chauffes');
   }
   oldx = indiceX;
   oldy = indiceY;
}
