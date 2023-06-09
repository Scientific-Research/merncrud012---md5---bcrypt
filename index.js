import md5 from 'md5';

const password = 'secret';
const encryptedPassword = md5(password);

console.log(encryptedPassword);
