var contain = document.getElementById('cont');

class Tank {
    constructor(posx) {
        this.x = posx; this.y = 320;
        this.createTank = function () {
            var tank = document.getElementById('tank');
            tank.style.left = this.x + 'px';
            tank.style.top = this.y + 'px';                        
            return tank;
        };

        this.element = this.createTank();
        this.updatePositionX = function (offset) {
            this.x += offset;
            this.element.style.left = this.x + 'px';
        };    
    }
}

var inc=0;
var cloudsInterval = setInterval(function(){
  cloud.style.backgroundPosition = '0px '+inc+'px';
  inc += 1.1;
},10);

var tank = new Tank(200);

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