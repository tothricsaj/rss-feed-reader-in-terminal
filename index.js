const { input } = require('./userInput');
const { colors } = require('./colors');

function main() {
	const welcome = `
	${colors.Bright}${colors.BgGreen}${colors.FgWhite}
	Welcome!
	This is a terminal rss feed reader!
	${colors.Reset}
	`;
	console.log(welcome);
	input();
}

main();