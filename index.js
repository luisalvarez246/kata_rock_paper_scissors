#!/usr/bin/env node

class RockPaperScissors {

inputValidation(play)
{
	const a = "rock";
	const b = "paper";
	const c = "scissors";
	const d = "lizard";
	const e = "spock";

	return (play === a || play === b || play === c || play === d || play === e);
}

ftParsing(play1, play2)
{
	if (typeof play1 !== "string" || typeof play2 !== "string")
		return ("Either argument is not a string");
	if (this.inputValidation(play1.toLowerCase()) === false)
		return (play1);
	if (this.inputValidation(play2.toLowerCase()) === false)
		return (play2);
	else
		return (1);
}

getWinner(play1, play2)
{
	if (play1 === play2)
		return (0);
	else if (play1 === "rock" && (play2 === "lizard" || play2 === "scissors"))
		return (1);
	else if (play1 === "paper" && (play2 === "rock" || play2 === "spock"))
		return (1);
	else if (play1 === "scissors" && (play2 === "paper" || play2 === "lizard"))
		return (1);
	else if (play1 === "lizard" && (play2 === "paper" || play2 === "spock"))
		return (1);
	else if (play1 === "spock" && (play2 === "rock" || play2 === "scissors"))
		return (1);
	else
		return (-1);
}

rockPaperScissors(play1, play2)
{
	const	parsing = this.ftParsing(play1, play2);
	const	array = ["rock", "lizard", "paper", "scissors", "spock"];
	let		result;

	if (typeof parsing === "string")
		return (`Bad input ${parsing}, valid arguments are ${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}, ${array[4]}`);
	result = this.getWinner(play1.toLowerCase(), play2.toLowerCase());
	if (result === 1)
		return ("Player1 Wins");
	else if (result === 0)
		return ("It's a draw");
	else
		return ("Player2 Wins");
}
}

module.exports = RockPaperScissors;