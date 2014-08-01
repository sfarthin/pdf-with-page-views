var express = require("express"),
	app 	= express(),
	pageViews = 0;

app.get("/", function(req,res) {
	pageViews++;
	// http://expressjs.com/api#res.sendfile
	res.sendfile(__dirname + "/example.pdf");
});

app.get("/stats", function(req,res) {
	res.end("Page Views:" + pageViews);
});

app.listen(process.env.PORT || 3001);