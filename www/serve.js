var express = require('express');
var app = express();
app.use(express.static("./"));
const port = 3002;
app.listen(port, function () {
	console.info(`listening on port ${port}`);
});