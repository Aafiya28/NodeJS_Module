const myURL = new URL('https://example.org:3000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#xyz';

console.log(myURL);