const Snake=function(head,body) {
  this.head=head;
  this.body=body;
}//creates a snake with head and body

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);//pushing the head increasing length of snake
    this.head=this.head.next();
    return this.body.shift();//shifting it decreasing length of snake and maintain it
  },
  grow:function() {
    this.body.unshift(new Position(Infinity,Infinity,this.direction));
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  isTouchedToWall:function () {
    let touchInEast = (this.head.direction=='east' && this.head.x==119);
    let touchInWest = (this.head.direction=='west' && this.head.x==0);
    let touchInNorth = (this.head.direction=='north' && this.head.y==0);
    let touchInSouth = (this.head.direction=='south' && this.head.y==59);
    return touchInEast||touchInWest||touchInNorth||touchInSouth;
  },
  isEatingItself:function () {
    let snakeHeadX=snake.head.x;
    let snakeHeadY=snake.head.y;
    return snake.body.some(function (element) {
      return element.x==snakeHeadX && element.y==snakeHeadY;
    })
  }
}
