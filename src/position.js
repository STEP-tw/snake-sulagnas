const _directions=["north","east","south","west","north"];

const randomDirection=function() {
  let index=generateRandomNumberBetween(0,_directions.length);
  return _directions[index];
}//it will give any one position of direction list

const Position=function(x,y,direction) {
  this.x=x;
  this.y=y;
  this.direction=direction;
}//it will take any f the position and go to a certain position

const actions={};//it will give position in any specific direction

actions.east=(x,y)=>[x+1,y];
actions.west=(x,y)=>[x-1,y];
actions.north=(x,y)=>[x,y-1];
actions.south=(x,y)=>[x,y+1];

Position.prototype.next=function() {
  let nextCoord=actions[this.direction](this.x,this.y);//it will move 1 step in same direction
  return new Position(nextCoord[0],nextCoord[1],this.direction);//creates new position moving 1step
}

Position.prototype.turnLeft=function() {
  let currentIndex=_directions.lastIndexOf(this.direction);
  let newDirection=_directions[currentIndex-1];//it will give next direction synchronously
  return new Position(this.x,this.y,newDirection);
}

Position.prototype.turnRight=function() {
  let currentIndex=_directions.indexOf(this.direction);
  let newDirection=_directions[currentIndex+1];
  return new Position(this.x,this.y,newDirection);
}

Position.prototype.isSameCoordAs=function(other) {
  return this.x==other.x && this.y==other.y;
}

Position.prototype.getCoord=function() {
  return [this.x,this.y];//gives a list of co-ord
}

const generateRandomPosition=function(maxX,maxY) {
  let x=generateRandomNumberBetween(0,maxX);//gives a new x-coord
  let y=generateRandomNumberBetween(0,maxY);//gives a new y-coord
  let direction=randomDirection();//gives a new direction
  return new Position(x,y,direction);//gives a new Position
}
