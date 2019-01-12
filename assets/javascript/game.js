$(document).ready(function() {
  
  var Random=Math.floor(Math.random()*102+19);

  $('#gScore').text(Random);

  var crystal1 = Math.floor(Math.random()*12+1)
  var crystal2 = Math.floor(Math.random()*12+1)
  var crystal3 = Math.floor(Math.random()*12+1)
  var crystal4 = Math.floor(Math.random()*12+1)

  var userScore = 0
  var win = 0
  var lose = 0


  $('#win').text(win);
  $('#lose').text(lose);


  function reset(){
      Random=Math.floor(Math.random()*102+19);
      console.log(Random)
      $('#gScore').text(Random);
      userScore= 0;
      $('#gScore').text(Random);
      } 


  function win(){
      alert("Congrats! You won!");
          win++; 
          $('#win').text(win);
          reset();
          }
          // Display losses
      function lose(){
      alert ("Sorry! You lose!");
          lose++;
          $('#lose').text(lose);
          reset()
      }


      $('#crystal1').click(function(){
          userScore = userScore + crystal1;
          console.log("New User Score = " + userScore);
          $('#uScore').text(userScore); 
              
              if (userScore == Random){
                win();
              }
              else if ( userScore > Random){
                lose();
              }   
        })  


        $('#crystal2').click(function(){
          userScore = userScore + crystal2;
          console.log("New User Score = " + userScore);
          $('#gScore').text(userScore); 
                
              if (userScore == Random){
                win();
              }
              else if ( userScore > Random){
                lose();
              }   
        })  


        $('#crystal3').click(function(){
          userScore = userScore + crystal3;
          console.log("New User Score= " + userScore);
          $('#uScore').text(userScore); 
              
              if (userScore == Random){
                win();
              }
              else if ( userScore > Random){
                lose();
              }   
        })  


        $('#crystal4').click(function(){
          userScore = userScore + crystal4;
          console.log("New User Score = " + userScore);
          $('#gScore').text(userScore); 
                
              if (userScore == Random){
                win();
              }
              else if ( userScore > Random){
                lose();
              }   
        })  



        





});










