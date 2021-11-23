const https = require('https');
const parseString = require('xml2js').parseString;
const { colors } = require('./colors');

let xmlBuff = '';
let feedArray = [];

exports.client = (host, path) => {
	https.get({host: host, path: path}, res => {

		res.on('data', data => {
			xmlBuff += data
			
		});

		res.on('end', () => {
			parseString(xmlBuff.toString(), (err, result) => {
				feedArray = [...result['rss']['channel'][0]["item"]];

				feedArray.forEach(element => {
					console.log(`${colors.Bright}${colors.FgGreen}${element.title[0]}${colors.Reset}\n`);
					console.log(`${colors.FgGreen}${element.description[0]}${colors.Reset}`);
					console.log(`${element.link[0]}`);

					console.log(`\n${colors.BgRed}${colors.FgWhite}------------------------oooooooooooooooo------------------------${colors.Reset}\n`);
				});
			});
			process.exit(0)
		});
	}).on('error', e => console.log(e));
}

