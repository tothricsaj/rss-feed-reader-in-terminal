const readline = require('readline');

exports.input = () => {

	console.log('running user input');

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: 'give rss feed url ---->> '
	});

	rl.prompt();

	rl.on('line', (line) => {
		try {

			let rssUrl = new URL(line.trim());
			console.log(rssUrl);

		} catch(e) {

			console.log('Url is not in correct form!');
			rl.prompt();

		}

	}).on('close', () => {
		console.log('\nHave a great day!\n');
		process.exit(0);
	});

}