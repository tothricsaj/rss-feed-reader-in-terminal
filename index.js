const https = require('https');

const host = 'dev.to';
const path = '/feed';

https.get({host: host, path: path}, res => {

	res.on('data', data => {
		process.stdout.write(data);
	});

}).on('error', e => console.log(e));