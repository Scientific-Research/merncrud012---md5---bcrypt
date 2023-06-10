import bcrypt from 'bcrypt';

const register = async (password) => {
	const salt = await bcrypt.genSalt(16);
	// console.log(salt);
	const hash = await bcrypt.hash(password, salt);
	console.log(hash); // store hash in database in user's record
};

// register('ölkölk');

const login = async (password) => {
	const hash = '$2b$16$bGw4URlT02ODtdovLNQKROsULtsx7eFQAexrTZ9g7PoU7xF17EtQK'; // get hash from user record in database
	// console.log('hash ', hash);
	const result = await bcrypt.compare(password, hash);
	console.log(result);
};

login('ölkölk');

// register('test111');
// login('test000'); // false
// login('test111'); // true
