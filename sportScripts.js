var gameID = "";

document.getElementById("dateSubmit").addEventListener("click", function(event) {
  event.preventDefault();
   date = document.getElementById("date").value;
  if (date === "")
    return;
  console.log(date);
  
  //gameOnDate();
  
	console.log("sup dude");
  //scores();
  getScore(7631);
});


function gameOnDate(){
  var url = "https://api-nba-v1.p.rapidapi.com/games/date/" + date;
  console.log(url);
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
      console.log(json);
      
       console.log(json.api.games.length);
     
      for(let i = 0; i < json.api.games.length; i++){
        console.log("match up");
        console.log(json.api.games[i].hTeam.fullName + " vs. " + json.api.games[i].vTeam.fullName);
      }
      getScore(7631);
    })
.catch(err => {
	console.log(err);
});



}


function scores(){
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
    })
.catch(err => {
	console.log(err);
});
    
    
}

function getScore(gameID){
  fetch("https://api-nba-v1.p.rapidapi.com/gameDetails/7631", {
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
      console.log(json.api.game[0].vTeam.score.points);
      });
  }


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
      */