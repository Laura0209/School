// function showCoords(event) {
// var sw = window.innerWidth;
// var sh = window.innerHeight;
// var px = event.clientX;
// var py = event.clientY;
// }
var Pointer = function () {

var color01 = "#77d290";
var color02 = "#77d290";
var color03 = "#f2e7cd";
var color04 = "#f2e7cd";

function Pointcircle(){

var sw = window.innerWidth;
var sh = window.innerHeight;
var px = event.clientX;
var py = event.clientY;
var ran01 = Math.floor((Math.random() * 4) + 1);
var ran02 = Math.floor((Math.random() * sw) + 1);
var ran03 = Math.floor((Math.random() * sh) + 1);


	var p = Raphael(0, 0, sw, sh);

p.canvas.style.position = "fixed";
p.canvas.style.zIndex = "-100";

	var circle01 = p.circle( px, py, 70)
      .attr({
        fill : color01, // #00FFFF cyan
        stroke : "none",
        cursor :  "pointer"
        });

	var circle02 = p.circle( px, py, 40)
      .attr({
        fill : color03, // #00FFFF cyan
        stroke : "none",
        cursor :  "pointer"
        });

var anim = Raphael.animation({cx: px, cx: ran02, cy: py, cy: ran03}, 2000, "elastic");

circle01.animate(anim);
circle02.animate(anim);
}


function Drawcircle(){

var sw = window.innerWidth;
var sh = window.innerHeight;
var px = event.clientX;
var py = event.clientY;
var ran01 = Math.floor((Math.random() * 4) + 1);
var ran02 = Math.floor((Math.random() * sw) + 1);
var ran03 = Math.floor((Math.random() * sh) + 1);
var ran04 = Math.floor((Math.random() * sw) + 1);
var ran05 = Math.floor((Math.random() * sh) + 1);
var color;

	var p = Raphael(0, 0, sw, sh);

p.canvas.style.position = "fixed";
p.canvas.style.zIndex = "-100";

	var circle01 = p.circle( px, py + 25, 15)
      .attr({
        fill : color01, // #00FFFF cyan
        stroke : "none",
        cursor :  "pointer"
        });

	var circle02 = p.circle( px, py - 25, 15)
      .attr({
        fill : color02, // #00FFFF cyan
        stroke : "none",
        cursor :  "pointer"
        });

	var circle03 = p.circle( px - 25, py, 15)
      .attr({
        fill : color03, // #00FFFF cyan
        stroke : "none",
        cursor :  "pointer"
        });	

    var circle04 = p.circle( px + 25, py, 15)
      .attr({
        fill : color04, // #00FFFF cyan
        stroke : "none",
        cursor :  "pointer"
        });	
	
    

	var anim = Raphael.animation({cx: px, cx: ran02, cy: py, cy: ran03}, 2000, "elastic");
	var anim03 = Raphael.animation({cx: px - 25, cx: ran04 + 20, cy: py, cy: ran03}, 2000, "elastic");
	var anim04 = Raphael.animation({cx: px + 25, cx: ran02 + 30, cy: py, cy: ran05}, 2000, "elastic");

	circle01.animate(anim);
	circle02.animate(anim);
	circle03.animate(anim03);
	circle04.animate(anim04);

};

    function Draw(){
	return Drawcircle();
    };
};