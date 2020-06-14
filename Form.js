class Form{
     constructor(){
          var input = createInput("name");
          var button = createButton("play");
          var gretting = createElement('h3');
     }

     hide(){
          this.gretting.hide();
          this.button.hide();
          this.input.hide();
     }

     display(){
          var title = createElement('h2');
          title.html("Car Racing Game");
          title.position(130,10);

          this.input.position(100,200);
          this.button.position(300,200);

          button.mousePressed(function(){
               this.input.hide();
               this.button.hide();
               player.name = this.input.value();
               playerCount = playerCount+1;
               player.index = playerCount;
               player.update(name);
               player.updateCount(playerCount);
               gretting.html("Hello"+name);
               gretting.position(200,200);
          })

     }
}