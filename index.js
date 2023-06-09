import md5 from 'md5';

const password = 'pa$$word!!lyin';
const encryptedPassword = md5(password);

console.log(encryptedPassword);
