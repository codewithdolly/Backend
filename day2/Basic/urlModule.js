const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
myURL.port= '5000'  //added port

console.log("url is ", myURL);
console.log("url hash is ", myURL.href);