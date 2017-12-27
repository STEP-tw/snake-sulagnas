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
    let touchInEast = (snake.head.direction=='east' && snake.head.x==120);
    let touchInWest = (snake.head.direction=='west' && snake.head.x==-1);
    let touchInNorth = (snake.head.direction=='north' && snake.head.y==-1);
    let touchInSouth = (snake.head.direction=='south' && snake.head.y==60);
    return touchInEast||touchInWest||touchInNorth||touchInSouth;
  },
  isOverLapping:function () {
    
  }
}
