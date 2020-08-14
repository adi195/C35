class Player{
    constructor(){

    }
    getCount(){
    var playerref = database.ref("playercount");
    playerref.on("value",function(data){
    playercount = data.val();
    }); 
    }
    updateCount(count){    
    database.ref("/").update({playercount:count});
    }
    updateName(Name){
    var pindex ="player"+playercount;
    database.ref(pindex).set({Name:Name});    
    }
}