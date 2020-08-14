class Form{
    constructor(){

    }
    display(){
        var title = createElement("H1");
        var greeting = createElement("H2");
        var input = createInput("Name");
        var button = createButton("Play");
        title.html("Ghost of Tsukishima");
        title.position(130,10);
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var Name = input.value()
            playercount = playercount + 1;
            player.updateCount(playercount);
            player.updateName(Name);
            greeting.html("Hello "+Name);
            greeting.position(130,160);
        });
    }
}