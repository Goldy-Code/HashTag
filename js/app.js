//// VELIK
let hashTag = () => {
	let str = prompt('');
	// str = str.trim();
	str = str.split(' ');
	let newStr = '#';
	for (const i of str) {
		if (!(i == '')) {
			newStr += i[0].toUpperCase() + i.slice(1).toLowerCase()
		}
	}
	return console.log(newStr);
}
hashTag();

//// NE VELIK
let tagHash = () => {
	let str = prompt('');
	let newStr = str.trim()
		.split(' ')
		.map((words) => words == '' ? words : words[0].toUpperCase() + words.slice(1).toLowerCase())
		.join('');
	let tag = '#' + newStr;
	return console.log(tag);
}
// tagHash();
