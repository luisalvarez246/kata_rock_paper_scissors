const Game = require("./index")

describe("Verify inputValidation for this game", () =>
{
	test("rock should return true", () =>
	{
		//Arrange
		let	play = "rock";
		let expectedResult = true;
		let game = new Game();
		//Act
		let	result = game.inputValidation(play);
		//Assert
		expect(result).toBe(expectedResult);
	})
	test("paper should return true", () =>
	{
		//Arrange
		let	play = "paper";
		let expectedResult = true;
		let game = new Game();
		//Act
		let	result = game.inputValidation(play);
		//Assert
		expect(result).toBe(expectedResult);
	})
	test("scissors should return true", () =>
	{
		//Arrange
		let	play = "scissors";
		let expectedResult = true;
		let game = new Game();
		//Act
		let	result = game.inputValidation(play);
		//Assert
		expect(result).toBe(expectedResult);
	})
	test("lizard should return true", () =>
	{
		//Arrange
		let	play = "lizard";
		let expectedResult = true;
		let game = new Game();
		//Act
		let	result = game.inputValidation(play);
		//Assert
		expect(result).toBe(expectedResult);
	})
	test("spock should return true", () =>
	{
		//Arrange
		let	play = "spock";
		let expectedResult = true;
		let game = new Game();
		//Act
		let	result = game.inputValidation(play);
		//Assert
		expect(result).toBe(expectedResult);
	})
	test("whatever should return false", () =>
	{
		//Arrange
		let	play = "whatever";
		let expectedResult = false;
		let game = new Game();
		//Act
		let	result = game.inputValidation(play);
		//Assert
		expect(result).toBe(expectedResult);
	})
	test("89 should return false", () =>
	{
		//Arrange
		let	play = "89";
		let expectedResult = false;
		let game = new Game();
		//Act
		let	result = game.inputValidation(play);
		//Assert
		expect(result).toBe(expectedResult);
	})
})

describe("Verify ftParsing for this game", () =>
{
	test("89 and LIzaRD should return play1", () =>
	{
		//Arrange
		let	play = [89, "LIzaRD"];
		let expectedResult = "Either argument is not a string";
		let game = new Game();
		//Act
		let	result = game.ftParsing(play[0], play[1]);
		//Assert
		expect(result).toBe(expectedResult);
	})
	test("somestr and LIzaRD should return play1", () =>
	{
		//Arrange
		let	play = ["somestr", "LIzaRD"];
		let expectedResult = play[0];
		let game = new Game();
		//Act
		let	result = game.ftParsing(play[0], play[1]);
		//Assert
		expect(result).toBe(expectedResult);
	})
	test("rock and somestr should return play2", () =>
	{
		//Arrange
		let	play = ["rock", "somestr"];
		let expectedResult = play[1];
		let game = new Game();
		//Act
		let	result = game.ftParsing(play[0], play[1]);
		//Assert
		expect(result).toBe(expectedResult);
	})
	test("ROCK and LIzaRD should return 1", () =>
	{
		//Arrange
		let	play = ["ROCK", "LIzaRD", "paer", "SciSSors", "SpoCk"];
		let expectedResult;
		let game = new Game();
		let result;
		//Assert
		for (let i = 0; i < play.length - 1; i++)
		{
			expectedResult = 1;
			if (i === 1)
				expectedResult = play[i + 1];
			else if (i === 2)
				expectedResult = play[i];
			result = game.ftParsing(play[i], play[i + 1]);
			expect(result).toBe(expectedResult);
		}
	})
})

describe("Verify getWinner", () =>
{
	test("player1 plays rock", () =>
	{
		//Arrange
		const	play = ["rock", "lizard", "paper", "scissors", "spock"];
		const	expectedResultWin = 1;
		const	expectedResultLose = -1;
		const	expectedResultDraw = 0;
		let		game = new Game();
		//Act
		const	resultA = game.getWinner(play[0], play[1]);
		const	resultB = game.getWinner(play[0], play[2]);
		const	resultC = game.getWinner(play[0], play[3]);
		const	resultD = game.getWinner(play[0], play[4]);
		const	resultE = game.getWinner(play[0], play[0]);
		//Assert
		expect(resultA).toBe(expectedResultWin);
		expect(resultB).toBe(expectedResultLose);
		expect(resultC).toBe(expectedResultWin);
		expect(resultD).toBe(expectedResultLose);
		expect(resultE).toBe(expectedResultDraw);
	})
	test("player1 plays lizard", () =>
	{
		//Arrange
		const	play = ["rock", "lizard", "paper", "scissors", "spock"];
		const	expectedResultWin = 1;
		const	expectedResultLose = -1;
		const	expectedResultDraw = 0;
		let		game = new Game();
		//Act
		const	resultA = game.getWinner(play[1], play[0]);
		const	resultB = game.getWinner(play[1], play[2]);
		const	resultC = game.getWinner(play[1], play[3]);
		const	resultD = game.getWinner(play[1], play[4]);
		const	resultE = game.getWinner(play[1], play[1]);
		//Assert
		expect(resultA).toBe(expectedResultLose);
		expect(resultB).toBe(expectedResultWin);
		expect(resultC).toBe(expectedResultLose);
		expect(resultD).toBe(expectedResultWin);
		expect(resultE).toBe(expectedResultDraw);
	})
	test("player1 plays paper", () =>
	{
		//Arrange
		const	play = ["rock", "lizard", "paper", "scissors", "spock"];
		const	expectedResultWin = 1;
		const	expectedResultLose = -1;
		const	expectedResultDraw = 0;
		let		game = new Game();
		//Act
		const	resultA = game.getWinner(play[2], play[0]);
		const	resultB = game.getWinner(play[2], play[1]);
		const	resultC = game.getWinner(play[2], play[3]);
		const	resultD = game.getWinner(play[2], play[4]);
		const	resultE = game.getWinner(play[2], play[2]);
		//Assert
		expect(resultA).toBe(expectedResultWin);
		expect(resultB).toBe(expectedResultLose);
		expect(resultC).toBe(expectedResultLose);
		expect(resultD).toBe(expectedResultWin);
		expect(resultE).toBe(expectedResultDraw);
	})
	test("player1 plays scissors", () =>
	{
		//Arrange
		const	play = ["rock", "lizard", "paper", "scissors", "spock"];
		const	expectedResultWin = 1;
		const	expectedResultLose = -1;
		const	expectedResultDraw = 0;
		let		game = new Game();
		//Act
		const	resultA = game.getWinner(play[3], play[0]);
		const	resultB = game.getWinner(play[3], play[1]);
		const	resultC = game.getWinner(play[3], play[2]);
		const	resultD = game.getWinner(play[3], play[4]);
		const	resultE = game.getWinner(play[3], play[3]);
		//Assert
		expect(resultA).toBe(expectedResultLose);
		expect(resultB).toBe(expectedResultWin);
		expect(resultC).toBe(expectedResultWin);
		expect(resultD).toBe(expectedResultLose);
		expect(resultE).toBe(expectedResultDraw);
	})
	test("player1 plays spock", () =>
	{
		//Arrange
		const	play = ["rock", "lizard", "paper", "scissors", "spock"];
		const	expectedResultWin = 1;
		const	expectedResultLose = -1;
		const	expectedResultDraw = 0;
		let		game = new Game();
		//Act
		const	resultA = game.getWinner(play[4], play[0]);
		const	resultB = game.getWinner(play[4], play[1]);
		const	resultC = game.getWinner(play[4], play[2]);
		const	resultD = game.getWinner(play[4], play[3]);
		const	resultE = game.getWinner(play[4], play[4]);
		//Assert
		expect(resultA).toBe(expectedResultWin);
		expect(resultB).toBe(expectedResultLose);
		expect(resultC).toBe(expectedResultLose);
		expect(resultD).toBe(expectedResultWin);
		expect(resultE).toBe(expectedResultDraw);
	})
})

describe("Verify rockPaperScissors", () =>
{
	test("player1 wins", () =>
	{
		//Arrange
		const	play = ["rOCk", "lizARD", "Paper", "SCissors", "SPOCK"];
		const	expectedResult = "Player1 Wins";
		let		game = new Game();
		//Act
		const	resultA = game.rockPaperScissors(play[0], play[1]);
		const	resultB = game.rockPaperScissors(play[3], play[2]);
		const	resultC = game.rockPaperScissors(play[4], play[0]);
		const	resultD = game.rockPaperScissors(play[2], play[0]);
		const	resultE = game.rockPaperScissors(play[1], play[4]);
		//Assert
		expect(resultA).toBe(expectedResult);
		expect(resultB).toBe(expectedResult);
		expect(resultC).toBe(expectedResult);
		expect(resultD).toBe(expectedResult);
		expect(resultE).toBe(expectedResult);
	})
	test("player2 wins", () =>
	{
		//Arrange
		const	play = ["rOCk", "lizARD", "Paper", "SCissors", "SPOCK"];
		const	expectedResult = "Player2 Wins";
		let		game = new Game();
		//Act
		const	resultA = game.rockPaperScissors(play[1], play[0]);
		const	resultB = game.rockPaperScissors(play[2], play[3]);
		const	resultC = game.rockPaperScissors(play[0], play[4]);
		const	resultD = game.rockPaperScissors(play[0], play[2]);
		const	resultE = game.rockPaperScissors(play[4], play[1]);
		//Assert
		expect(resultA).toBe(expectedResult);
		expect(resultB).toBe(expectedResult);
		expect(resultC).toBe(expectedResult);
		expect(resultD).toBe(expectedResult);
		expect(resultE).toBe(expectedResult);
	})
	test("draw", () =>
	{
		//Arrange
		const	play = ["rOCk", "lizARD", "Paper", "SCissors", "SPOCK"];
		const	expectedResult = "It's a draw";
		let		game = new Game();
		//Act
		const	resultA = game.rockPaperScissors(play[0], play[0]);
		const	resultB = game.rockPaperScissors(play[3], play[3]);
		const	resultC = game.rockPaperScissors(play[4], play[4]);
		const	resultD = game.rockPaperScissors(play[2], play[2]);
		const	resultE = game.rockPaperScissors(play[1], play[1]);
		//Assert
		expect(resultA).toBe(expectedResult);
		expect(resultB).toBe(expectedResult);
		expect(resultC).toBe(expectedResult);
		expect(resultD).toBe(expectedResult);
		expect(resultE).toBe(expectedResult);
	})
	test("error input not string", () =>
	{
		//Arrange
		const	play = [404, "lizARD"];
		const	array = ["rock", "lizard", "paper", "scissors", "spock"];
		const	expectedResult = `Bad input Either argument is not a string, valid arguments are ${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}, ${array[4]}`;
		let		game = new Game();
		//Act
		const	resultA = game.rockPaperScissors(play[0], play[1]);
		const	resultB = game.rockPaperScissors(play[1], play[0]);
		//Assert
		expect(resultA).toBe(expectedResult);
		expect(resultB).toBe(expectedResult);
	})
	test("error invalid argument", () =>
	{
		//Arrange
		const	play = ["Vader", "lizARD", "spock", "Tano"];
		const	array = ["rock", "lizard", "paper", "scissors", "spock"];
		const	expectedResultA = `Bad input ${play[0]}, valid arguments are ${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}, ${array[4]}`;
		const	expectedResultB = `Bad input ${play[3]}, valid arguments are ${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}, ${array[4]}`;
		let		game = new Game();
		//Act
		const	resultA = game.rockPaperScissors(play[0], play[1]);
		const	resultB = game.rockPaperScissors(play[2], play[3]);
		//Assert
		expect(resultA).toBe(expectedResultA);
		expect(resultB).toBe(expectedResultB);
	})
})