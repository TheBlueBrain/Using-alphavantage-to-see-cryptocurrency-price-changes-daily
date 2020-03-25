fs = require('fs');
var date= new Date(Date.now() - 1 * 86400000 - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]
var date1= new Date(Date.now() - 0 * 86400000 - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]
var cur=['btc', 'eth','ltc', 'nano'];
const alpha = require('alphavantage')({ key: '5L9ZNJJNF6NQ94NK'});
var f = '';
var liu='';
var liu1='';
var liu2='';
let liuliu = '';
let liu4 = 'Bitcoin \n';
alpha.crypto.daily('btc', 'eur').then(data => {
	let a = data['Time Series (Digital Currency Daily)'][date1]['4a. close (EUR)'];
	let b = data['Time Series (Digital Currency Daily)'][date]['4a. close (EUR)'];
	f =liu4 + a + '\n' + b + '\n'; 
	
}).catch(err => { console.error(err);});

alpha.crypto.daily('eth', 'eur').then(data => {
	let a = 'Ethereum \n';
	let b = data['Time Series (Digital Currency Daily)'][date1]['4a. close (EUR)'];
	let c = data['Time Series (Digital Currency Daily)'][date]['4a. close (EUR)'];
	liu = a + b + '\n' + c + '\n';
	
}).catch(err => { console.error(err);});

alpha.crypto.daily('ltc', 'eur').then(data => {
	let a = 'Litecoin \n' ;
	let b = data['Time Series (Digital Currency Daily)'][date1]['4a. close (EUR)'];
	let c = data['Time Series (Digital Currency Daily)'][date]['4a. close (EUR)'];
	liu1 = a + b + '\n' + c + '\n';
	
}).catch(err => { console.error(err);});

alpha.crypto.daily('nano', 'eur').then(data => {
	let a = 'Nanocoin \n';
	let b = data['Time Series (Digital Currency Daily)'][date1]['4a. close (EUR)'];
	let c = data['Time Series (Digital Currency Daily)'][date]['4a. close (EUR)'];
	liu2 = a + b + '\n' + c;

}).catch(err => { console.error(err);});

setTimeout(g, 10000);
function g(){
	liuliu = f + liu + liu1 + liu2;
	fs.writeFile('THIsSHELL.csv',liuliu,function(err){
	if(err) return console.log(err);	
	});
	}
