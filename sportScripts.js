var gameID = "";
var homeScoresArray = ["hi"];
var visScoresArray = ["hi"];
var gameCard="";
var liveCard="";

document.getElementById("dateSubmit").addEventListener("click", function(event) {
  event.preventDefault();
   date = document.getElementById("date").value;
  if (date === "")
    return;
  //console.log(date);
  document.getElementById("gamesResults").innerHTML = "";
  document.getElementById("noGames").innerHTML = "";
  
  
  gameOnDate();
  date = "";
  
	//console.log("sup dude");
  //scores();
});


function gameOnDate(){
  var url = "https://api-nba-v1.p.rapidapi.com/games/date/" + date;
  //console.log(url);
  fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "0b681261bfmshb3b933862fa5a94p1dd128jsncefb43c69e35"
	}
})
.then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log("this JSON" + json);
      console.log(json);
      
      
      
       //console.log(json.api.games.length);
       
       let gameCard = "";
       
       
       if(json.api.games.length === 0){
            console.log("No Live Games");
            
            gameCard+= '<div class=wrapper>';
            gameCard+= '<h2 class="bg-text3">No Games Played On That Date </h2>';
            gameCard+= '</div>';   
            
            setTimeout(function() {document.getElementById("noGames").innerHTML = gameCard;
          }, 700);
      }
       
      else{
     
          for(let i = 0; i < json.api.games.length; i++){
             //console.log(json.api.games[i].hTeam.nickName + ' vs. ' + json.api.games[i].vTeam.nickName);
              //console.log("points " + json.api.games[i].hTeam.score.points);
              
             
            
             setTimeout(function() { 
                gameCard +='<div class="card1 card">';
                gameCard +='<div class="card-body">';
                gameCard +='<h5 class="card-title">'+ json.api.games[i].hTeam.nickName + ' \t vs. \t ' + json.api.games[i].vTeam.nickName + '</h5>';
                gameCard +='<h6 class="card-subtitle mb-2 text-muted">Final</h6>';
                gameCard +='<h5 class="card-text">' + json.api.games[i].hTeam.score.points + ' ------- ' +  json.api.games[i].vTeam.score.points +  '</h5>';
                gameCard +='</div>';
                gameCard +='</div>';
            ;}, 700);
            
          }
          setTimeout(function() {document.getElementById("gamesResults").innerHTML = gameCard;
          }, 700);
      }
      
      
      
      
      
       
       
    })
.catch(err => {
	console.log(err);
});



}


function scores(){
    console.log("fetching live Scores");
    fetch("https://api-nba-v1.p.rapidapi.com/games/live/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "0b681261bfmshb3b933862fa5a94p1dd128jsncefb43c69e35"
	}
})
.then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);
      let liveCard="";
      
      if(json.api.games.length === 0){
            console.log("No Live Games");
            
            liveCard+= '<div class=wrapper>';
            liveCard+= '<h2 class="bg-text3">No Games Are Being Played</h2>';
            liveCard+= '</div>';                
      }
      
      else{
      
          for(let i = 0; i < json.api.games.length; i++){
             //console.log(json.api.games[i].hTeam.nickName + ' vs. ' + json.api.games[i].vTeam.nickName);
              //console.log("points " + json.api.games[i].hTeam.score.points);
             
            
             setTimeout(function() { 
                liveCard +='<div class="card1 card">';
                liveCard +='<div class="card-body">';
                liveCard +='<h5 class="card-title">'+ json.api.games[i].hTeam.nickName + ' \t vs. \t ' + json.api.games[i].vTeam.nickName + '</h5>';
                liveCard +='<h6 class="card-subtitle mb-2 text-muted">' + json.api.games[i].currentPeriod + ' ' + json.api.games[i].clock + '</h6>';
                liveCard +='<h5 class="card-text">' + json.api.games[i].hTeam.score.points + ' ------- ' +  json.api.games[i].vTeam.score.points +  '</h5>';
                liveCard +='</div>';
                liveCard +='</div>';
            ;}, 700);
            
          }
      }
      setTimeout(function() {document.getElementById("liveUpdates").innerHTML = liveCard;
          }, 700);
      
      
      
      
      
      
      
      
    })
.catch(err => {
	console.log(err);
});
    
    
}

// function getScore(gameID){
//   //console.log("GI = " + gameID);
  
//   fetch("https://api-nba-v1.p.rapidapi.com/gameDetails/" + gameID, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "0b681261bfmshb3b933862fa5a94p1dd128jsncefb43c69e35"
// 	}
// })
// .then(function(response) {
//       return response.json();
//     }).then(function(json) {	
//       console.log("inScore");
//       console.log(json);
      
//       homeScoresArray.push(json.api.game[0].hTeam.score.points);
//       visScoresArray.push(json.api.game[0].vTeam.score.points);
      
//       });
//   }


/*let app = new Vue({
        el: "#root",
        data: {
          gameScore:"",
          homeTeam:"",
          visTeam:""
          },
        methods:{
          addScore(){
           
            }
          }
      })
      
      
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
      
      
      
      
      
      */
      
      
      