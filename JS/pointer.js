// function showCoords(event) {
// var sw = window.innerWidth;
// var sh = window.innerHeight;
// var px = event.clientX;
// var py = event.clientY;
// }
// var Pointer = function(){

// var color01 = "#77d290";
// var color02 = "#77d290";
// var color03 = "#f2e7cd";
// var color04 = "#f2e7cd";

// function Pointcircle(){

// var sw = window.innerWidth;
// var sh = window.innerHeight;
// var px = event.clientX;
// var py = event.clientY;
// var ran01 = Math.floor((Math.random() * 4) + 1);
// var ran02 = Math.floor((Math.random() * sw) + 1);
// var ran03 = Math.floor((Math.random() * sh) + 1);


// 	var p = Raphael(0, 0, sw, sh);

// p.canvas.style.position = "fixed";
// p.canvas.style.zIndex = "-100";

// 	var circle01 = p.circle( px, py, 70)
//       .attr({
//         fill : color01, // #00FFFF cyan
//         stroke : "none",
//         cursor :  "pointer"
//         });

// 	var circle02 = p.circle( px, py, 40)
//       .attr({
//         fill : color03, // #00FFFF cyan
//         stroke : "none",
//         cursor :  "pointer"
//         });

// var anim = Raphael.animation({cx: px, cx: ran02, cy: py, cy: ran03}, 2000, "elastic");

// circle01.animate(anim);
// circle02.animate(anim);
// }

var col01 = "#77d290";
var col02 = "#77d290";
var col03 = "#ffffff";
var col04 = "#ffffff";

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
var ran06 = Math.floor((Math.random() * sh) + 1);

    var p = Raphael(0, 0, sw, sh);

p.canvas.style.position = "fixed";
p.canvas.style.zIndex = "-100";

var obj = "";
var fill = "";
var attr = {};

	circle01 = p.circle( px, py, 15)
      .attr({
        fill : col01, // #00FFFF cyan
        stroke : "none",
        cursor :  "pointer"
        });

	circle02 = p.circle( px, py, 15)
      .attr({
        fill : col02, // #00FFFF cyan
        stroke : "none",
        cursor :  "pointer"
        });

	circle03 = p.circle( px, py, 7)
      .attr({
        fill : col03, // #00FFFF cyan
        stroke : "none",
        cursor :  "pointer"
        });	

    circle04 = p.circle( px, py, 15)
      .attr({
        fill : col04, // #00FFFF cyan
        stroke : "none",
        cursor :  "pointer"
        });



// };	

// function Drawcircle(){

	       var anim = Raphael.animation({cx: px, cx: ran02, cy: py, cy: ran03}, 2000, "elastic");
           var anim02 = Raphael.animation({cx: px, cx: ran02, cy: py, cy: ran06}, 2000, "elastic");
	       var anim03 = Raphael.animation({cx: px, cx: ran04 + 20, cy: py, cy: ran03}, 2000, "elastic");
	       var anim04 = Raphael.animation({cx: px, cx: ran02 + 30, cy: py, cy: ran05}, 2000, "elastic");

	       circle01.animate(anim);
	       circle02.animate(anim02);
	       circle03.animate(anim03);
	       circle04.animate(anim04);
     


    // var update = function(obj, fill){
    //     var p = Raphael(0, 0, sw, sh);
    //     obj.attr({fill: attr.fill});
    // }

    // update();




      

      // obj.attr({fill: fill});

        
        
    };

function colour(element, color01){
    if (element === "circle01") {
        col01 = color01;
    };

    if (element === "circle02") {
        col02 = color01;
    };

    if (element === "circle03") {
        col03 = color01;
    };

    if (element === "circle04") {
        col04 = color01;
    };

    console.log(color01);
};
        // return{
        //     attr: attr({
        //         fill : fill, // #00FFFF cyan
        //         stroke : stroke
        //     });
        // }

    // function Draw(){
    // return Drawcircle();
    // }
    // function Draw(){
    // return Drawcircle();
    // };