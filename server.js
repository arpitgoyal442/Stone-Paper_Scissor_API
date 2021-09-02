
//Importing Stuff
import express from "express"



//App Config
const app=express();
const port=process.env.PORT || 9000;

//Some Constants needed forAPi


//Middlewares
app.use(express.json());



//Routings

app.get("/", async (req,res)=>{
    
    const ans=[];

    
    const outputs=[
        ["Tie","Lose","Win"],
        ["Win","Tie","Win"],
        ["Lose","Win","Tie"]
    ]
    


      for(let i=1;i<=50;i++)
     {
         const single={};
      let num1=Math.floor((Math.random() * 10) + 1);
      

      let num2=Math.floor((Math.random() * 10) + 1);
      
      let num3=Math.floor((Math.random() * 10) + 1);
      let num4=Math.floor((Math.random() * 10) + 1);

      const choicesmapper=["Stone","Paper","Scissor"];


      // I Want All Numbers from 0 to 2
      if(num1>=3)
      num1=num1%3 ;
      if(num2>=3)
      num2=num2%3 ;
      if(num3>=3)
      num3=num3%3 ;
      if(num4>=3)
      num4=num4%3 ;

      const choices={
          player1:choicesmapper[num1],
          player2:choicesmapper[num2],
          player3:choicesmapper[num3],
          player4:choicesmapper[num4],
      }

      const smallans={

        player1_player2: outputs[num1][num2]=="Win"?"player1": ( outputs[num1][num2]=="Lose"?"Player2":"Tie" ),
        player1_player3:outputs[num1][num3]=="Win"?"player1": ( outputs[num1][num3]=="Lose"?"Player3":"Tie" ),
    
        player1_player4:outputs[num1][num4]=="Win"?"player1": ( outputs[num1][num4]=="Lose"?"Player4":"Tie" ),
        player2_player3:outputs[num2][num3]=="Win"?"player2": ( outputs[num2][num3]=="Lose"?"Player3":"Tie" ),
        player2_player4:outputs[num2][num4]=="Win"?"player2": ( outputs[num2][num4]=="Lose"?"Player4":"Tie" ),
        player3_player4:outputs[num3][num4]=="Win"?"player3": ( outputs[num4][num4]=="Lose"?"Player4":"Tie" ),

     }

      let iteration="Iteration"+i;
      single.iteration=iteration
      single.choices=choices;
      single.result=smallans;

      ans.push(single);

   }

    res.json(ans);

})


//Listeners
app.listen(port,()=>{

    console.log("Server Started on Port 9000");
})