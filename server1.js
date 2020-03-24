let fs = require('fs');
let p = [];
let li = [];
let readLine = require('readline');
async function plbl(){
	var a = fs.createReadStream('THIsSHELL.csv');
		let r1 = readLine.createInterface({
		input: a,
		crlfDelay: Infinity
	});
	let k = 0;
	for await (var lin of r1){
		p.push(lin);
	}
}
plbl();
function h(){
	for(var l = 0; l<4;l++){
		let y=parseFloat(p[3*l+1]);
		let x=parseFloat(p[3*l+2]);
		let ans = y*100/x-100;
		li.push(ans);
	}
	var jh=t();
	var ok=o();
	console.log("Bigest gain is " + p[3*jh] + " with " + li[jh] + '%');
	console.log("Bigest loss is " + p[3*ok] + " with " + li[ok] + '%');

}
setTimeout(h,10000);
function t(){
	let kj=li[0];
	let as=0;
	for(var l=1;l<li.length;l++){
		if(kj<li[l]){
			kj=li[l];as=l;
		}
	}
	return as;
}
function o(){
	let kj=li[0];
	let as=0;
	for(var l=1;l<li.length;l++){
		if(kj>li[l]){
			kj=li[l];as=l;
		}
	}
	return as;
}
