import bcrypt from 'bcrypt';

const register = async (password) => {
	const salt = await bcrypt.genSalt(12);
	// console.log(salt);
	const hash = await bcrypt.hash(password, salt);
	console.log(hash); // store hash in database in user's record
};

register('3$GoalEasy');

const login = async (password) => {
	const hash = '$2b$12$z5gAforSyljDotA.wrSYnO/ULIuCifHt6/.4hIvjX759XHPJP7Iv6'; // get hash from user record in database
	// console.log('hash ', hash);
	const result = await bcrypt.compare(password, hash);
	console.log(result);
};

login('3$GoalEasy');

// register('test111');
// login('test000'); // false
// login('test111'); // true
