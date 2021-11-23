const readline = require('readline');
const { client } = require('./rssClient');

exports.input = () => {

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: 'give rss feed url ---->> '
	});

	rl.prompt();

	rl.on('line', (line) => {
		let host;
		let path;

		try {

			let rssUrl = new URL(line.trim());

			host = rssUrl.host;
			path = rssUrl.pathname;

		} catch(e) {

			console.log('Url is not in correct form!');
			rl.prompt();

		}

		client(host, path);

	}).on('close', () => {
		console.log('\nHave a great day!\n');
		process.exit(0);
	});

}