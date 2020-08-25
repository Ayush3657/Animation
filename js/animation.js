var contain = document.getElementById('cont');

function Tank(posx){
  this.x = posx; this.y = 320;
  this.createTank = function() {
    var tank = document.createElement('div');
    tank.style.width = '70vw';
    tank.style.height = '80vh';
    tank.style.position = 'absolute';
    tank.style.left = this.x + 'px';
    tank.style.top = this.y +'px';
    tank.style.background = "url('./assets/tank.png')";
    tank.style.backgroundRepeat = 'no-repeat';
    tank.style.backgroundSize = '15%';
    road.appendChild(tank);
    return tank;
  }

  this.element = this.createTank();

  this.updatePositionX = function(offset){
    this.x += offset;
    this.element.style.left = this.x + 'px';
  }

  this.str = function(){
    return this.posx;
  }
}

var tank = new Tank(400);
var increment=0;
var backgroundInterval = setInterval(function(){
  road.style.backgroundPosition = '0px '+increment+'px';
  increment += 1;
},10);

document.onkeydown = function(event){
  switch (event.keyCode) {
    // A  
    case 65:
      tank.updatePositionX(-2)
      break;
    // D
    case 68:
      tank.updatePositionX(2);
      break;
  }
};