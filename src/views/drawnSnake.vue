<template>
  <div>
    <canvas id="myCanvas" :width="canvasWidth" :height="canvasHeight">
    </canvas>
  </div>
</template>
<script>
export default {
    data() {
        return {
          canvasWidth:100,
          canvasHeight:80,
          ctx:null,
          headX:0,
          headY:0,
          size:20,
          snakeBodyArr:[],//二维数组先是蛇头，最后蛇尾
          SnakeTimer:null,
          direction:'right',//右
          foodX:null,
          foodY:null,

        };
    },
    methods: {
      //画蛇
      drawnSnake(){
        //蛇头
        this.ctx = document.getElementById('myCanvas').getContext('2d');
        this.ctx.fillStyle='#ff0000';
        this.ctx.fillRect(this.headX,this.headY,this.size,this.size);
        //隐藏的蛇身体
        this.ctx.fillRect(-(this.size*1)+this.headX,this.headY,this.size,this.size);
        this.ctx.fillRect(-(this.size*2)+this.headX,this.headY,this.size,this.size);
        //依次装进蛇身体数组
        this.snakeBodyArr.push([this.headX,this.headY]);
        this.snakeBodyArr.push([-(this.size*1)+this.headX,this.headY]);
        this.snakeBodyArr.push([-(this.size*2)+this.headX,this.headY]);
      },
      //定时器
      snakeGo(){
        clearInterval(this.SnakeTimer);
        this.SnakeTimer = setInterval(this.move,1000)
      },
      //移动
      move(){
        //重绘蛇头
        if(this.direction == 'right'){
          this.headX += this.size;
        }else if(this.direction == 'down'){
          this.headY += this.size;
        }else if(this.direction == 'left'){
          this.headX -= this.size;
        }else if(this.direction == 'up'){ 
          this.headY -= this.size;  
        }  
        this.ctx.fillStyle = '#ff0000';
        let isImpact = false;//没有撞上自己
        console.log('现在蛇身体',this.snakeBodyArr,this.foodX,this,this.foodY)
        for(let i=0;i<this.snakeBodyArr.length;i++){
          if(this.headX === this.snakeBodyArr[i][0] && this.headY === this.snakeBodyArr[i][1] ){
            isImpact = true;
          }
        }
        this.ctx.fillRect(this.headX,this.headY,this.size,this.size);
        //添加蛇头，注意位置
        this.snakeBodyArr.unshift([this.headX,this.headY])

        //如果整个画布画满，提示你赢了
        if(this.snakeBodyArr.length == this.canvasWidth/this.size*this.canvasHeight/this.size){
          console.log('恭喜你，你赢了')
          clearInterval(this.SnakeTimer);
          return false
        }
        //遇到食物
        if(this.headX == this.foodX && this.headY == this.foodY){
          this.setFood();
        }else if(this.headX<0||this.headY<0||this.headX>this.canvasWidth||this.headY>this.canvasHeight){//遇到墙
          console.log('撞到墙了')
          //清除定时器
          clearInterval(this.SnakeTimer);
          return false;
        }else if(isImpact){//遇到自己
          console.log('撞到自己了')
          //清除定时器
          clearInterval(this.SnakeTimer);
          return false;
        }else{//什么都没遇到 删除蛇尾
          let tail = this.snakeBodyArr.pop();
          this.ctx.clearRect(tail[0],tail[1],this.size,this.size);
        }
      },
      //监听keydown事件
      onKeyDown(){
        document.addEventListener('keydown',(e)=>{
          if(e.keyCode===37){
            this.direction = 'left';
          }else if(e.keyCode===38){
            this.direction = 'up';
          }else if(e.keyCode===39){
            this.direction = 'right';
          }else if(e.keyCode===40){
            this.direction = 'down';
          }
        })
      },
      //放食物
      setFood(){
        this.foodX = this.rnd(0,this.canvasWidth/this.size)*this.size;
        this.foodY = this.rnd(0,this.canvasHeight/this.size)*this.size;
        this.ctx.fillStyle = 'gold';
        this.ctx.fillRect(this.foodX,this.foodY,this.size,this.size);
        //食物不能放在蛇的身上，否则，重放
        let overlap = false;//不重叠
        for(let i;i<this.snakeBodyArr.length;i++){
          console.log('进不来',this.foodX ,this.foodY, this.snakeBodyArr)
          if(this.foodX == this.snakeBodyArr[i][0] && this.foodY == this.snakeBodyArr[i][1]){
            alert(5)
            overlap = true;
          }
        }
        if(overlap){
          console.log('重叠了');
          this.ctx.clearRect(this.foodX,this.foodX,this.size,this.size);
          this.setFood();
        }
      },
      //随机数
      rnd(n,m){ //包含0，不包含1
        return parseInt(Math.random()*(m-n)+n);
      },
      
    },
    created(){
    },
    mounted(){
      this.drawnSnake();
      this.setFood();
      this.snakeGo();
      this.onKeyDown();
    }
};




</script>
</html>
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
header {
  display: block;
  margin: 0 auto;
  width: 500px;
  text-align: center;
}
header h1 {
  font-family: Arial;
  font-weight: bold;
}
header #newGameButton {
  display: block;
  margin: 20px auto;
  width: 100px;
  padding: 10px 10px;
  background-color: #8f7a66;
  font-family: Arial;
  color: white;
  border-radius: 10px;
  text-decoration: none;
}
header #newGameButton:hover {
  background-color: #9f8b77;
}
header p {
  font-family: Arial;
  font-size: 25px;
  margin: 20px auto;
}
canvas {
  display: block;
  border: medium double black;
  margin: 4px auto;
}
</style>

