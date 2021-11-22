const https = require('https');

exports.client = (host, path) => {
	https.get({host: host, path: path}, res => {

		res.on('data', data => {
			process.stdout.write(data);
		});

		res.on('end', () => process.exit(0));
	}).on('error', e => console.log(e));
}

