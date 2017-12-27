let snake=undefined;
let food=undefined;
let numberOfRows=60;
let numberOfCols=120;

let animator=undefined;

const showGameOver=function () {
  console.log('gameOver');
}

const animateSnake=function() {
  let oldHead=snake.getHead();
  let oldTail=snake.move();
  let head=snake.getHead();
  paintBody(oldHead);//getting the black body
  unpaintSnake(oldTail);//removing the last tail
  paintHead(head);//getting the new red head
  if(snake.isTouchedToWall() || snake.isOverLapping()){
    clearInterval(animator);
    showGameOver();
  }
  if(head.isSameCoordAs(food)) {//eat the food
    console.log(snake.head);
    console.log(snake.body);
    console.log('==========');
    snake.grow();
    createFood(numberOfRows,numberOfCols);
    drawFood(food);
  }
}

const changeSnakeDirection=function(event) {
  switch (event.code) {
    case "KeyA":
      snake.turnLeft();//turn left repect to the current position pressing a
      break;
    case "KeyD":
      snake.turnRight();//turn right repect to the current position pressing d
      break;
    case "KeyC":
      snake.grow();//pressing c we can increase lenght of snake
      break;
    default:
  }
}

const addKeyListener=function() {
  let grid=document.getElementById("keys");
  grid.onkeyup=changeSnakeDirection;
  grid.focus();//creating the blue focus as border
}

const createSnake=function() {
  let tail=new Position(12,10,"east");//starting from this position
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();

  snake=new Snake(head,body);
}

const createFood=function(numberOfRows,numberOfCols) {
  food=generateRandomPosition(numberOfCols,numberOfRows);
}

const startGame=function() {
  createSnake();
  drawGrids(numberOfRows,numberOfCols);
  drawSnake(snake);
  createFood(numberOfRows,numberOfCols);
  drawFood(food);
  addKeyListener();
  animator=setInterval(animateSnake,140);
}

window.onload=startGame;
