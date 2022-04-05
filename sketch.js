var hexs = [];
var palet1 = ["#d65780","#c9b1bd","#9dd1f1","#f4b860","#aceb98"];
var expalete = ["#f4442e","#fff05a","#690500","#ffd2ac"];
var palet3 = ["#3f7cac","#17c3b2","#ffcb77","#fef9ef","#fe6d73"];
var palet4 = ["#00000","#44000","#442211","#941023","#ab0a33"];

function setup() {
  
  background(0);
  createCanvas(600, 400);
  var randseed= random([0,1])
  var thescalar = [30,15][randseed];
  var hexrow =[10,20][randseed];
  var hexcol = hexrow;
  var mypalette = random([palet1,palet3,palet4,expalete]);

  // hexs.push(new Hexagon(startx,starty,thescalar));
  // hexs.push(new Hexagon(startx+100,starty,thescalar,random(palet3),90));
  // hexs.push(new Hexagon(startx+100,starty+174,thescalar,random(palet3),90));

  // hexs.push(new Hexagon(startx+100 + 3*thescalar,starty,thescalar,random(palet3),90));
  // hexs.push(new Hexagon(startx+100+ 3*thescalar,starty+174,thescalar,random(palet3),90));

  // hexs.push(new Hexagon(startx+100+1.5*thescalar,starty+87,thescalar,random(palet3),90));
 
  var redactres =random([true,false]);
  var animatedbasics = random([true,false]);
  for (let i=0;i<hexrow;i+=1.5){
    for (let j=0;j<hexcol;j+=1){
      var newx= (i*2*thescalar);
      var newy=(j*2*thescalar);

      hexs.push(new Hexagon(newx,newy,thescalar,random(mypalette),90,false,false,true));
      hexs.push(new Hexagon(newx+1.5*thescalar,newy+thescalar,thescalar,mypalette[2],90,true,animatedbasics,redactres));

      // hexs.push(new Hexagon(newx+1.5*thescalar,newy+1*thescalar,thescalar,palet3[1],90));
      // hexs.push(new Hexagon(newx+3*thescalar,newy,thescalar,palet3[2],90));

  }
}
}

function draw() {
  // background(0,10);
  for (let i=0;i<hexs.length;i++)
  {
    hexs[i].show();

    hexs[i].move();
  }
}
