
function get_score() {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {
			console.log("Response: "+this.responseText);
			var response = JSON.parse(this.responseText);
			var human_wins = document.getElementById("num_human_wins");
			var computer_wins = document.getElementById("num_computer_wins");
			var draws = document.getElementById("num_draws");
			human_wins.innerHTML = response[0].score;
			computer_wins.innerHTML = response[1].score;
			draws.innerHTML = response[2].score;
		}
	};
	request.open("GET", "http://localhost:8080/api/game/score", true);
	request.send();
}
function load_game() {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState ==4 && this.status ==200) {
			console.log("Response: " +this.responseText);
			var response = JSON.parse(this.responseText);
		}
	}
	request.open("GET", "http://localhost:8080/api/game",true);
	request.send();
}