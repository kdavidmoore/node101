// we don't have access to host objects in node (window, document, etc.)
// but we still have the native JS objects (Math, arrays, Object, Date, for/while/if, etc.)
// also note that jQuery and AngularJS will not work because they get attached to the window object
var http = require('http');
// console.log(http);

// what does fs do?
var fs = require("fs");

function renderHomePage(request, response) {
	response.writeHead(200,{"content-type": "text/html"});
	// why are we making this a global variable?
	homePageHtml = fs.readFileSync("homePage.html");
	response.write(homePageHtml);
	response.end();
}

function renderAboutPage(request, response) {
	response.writeHead(200,{"content-type": "text/html"});
	aboutPageHtml = fs.readFileSync("aboutPage.html");
	response.write(aboutPageHtml);
	response.end();
}

function renderErrorPage(request, response) {
	response.writeHead(404);
	errorPageHtml = fs.readFileSync("404.html");
	response.write(errorPageHtml);
	response.end();
}

// on the http object you just created, call the createServer method, which takes a callback...
var server = http.createServer(function(request, response) {
	// as a response, put a status code of 200 in the header
	// the 200 status code means 'OK'
	// also put in the header that we are sending back plain text
	// response.writeHead(200, {"content-type": "text/html"});
	// console.log(request.url);
	if (request.url == "/") {
		renderHomePage(request, response);
	} else if (request.url == '/about-rocks') {
		renderAboutPage(request, response);
	} else {
		renderErrorPage(request, response);
	}
	// response.write("<h1>Hello, World</h1>");
	response.end();
});

// createServer has a listen method
server.listen(8000);
console.log('Our server is listening on port 8000...');
// it's going to keep listening until you tell it otherwise
