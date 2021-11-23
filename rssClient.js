const https = require('https');
const parseString = require('xml2js').parseString;

let xmlBuff = '';
let feedArray = [];

exports.client = (host, path) => {
	https.get({host: 'telex.hu', path: '/rss'}, res => {

		res.on('data', data => {
			xmlBuff += data
			
		});

		res.on('end', () => {
			parseString(xmlBuff.toString(), (err, result) => {
				feedArray = [...result['rss']['channel'][0]["item"]];

				feedArray.forEach(element => {
					console.log('Title: ', element.title[0]);
					console.log('Description: ', element.description[0]);
					console.log('Link: ', element.link[0]);

					console.log('\n------------------------oooooooooooooooo------------------------\n');
				});
			});
			process.exit(0)
		});
	}).on('error', e => console.log(e));
}

