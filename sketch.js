var hypnoticBall, database;
var canvas;
var background;
var gameState = 0;
var playerCount;
var player;
var form;
var game;


function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
 /*if(playerCount === 4){
  game.update(1);

  if(gameState === 1){
    game.play();
  }
 } */
}

function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
