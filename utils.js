const fs = require("fs"),
httpStatus = require("http-status-codes"),
contentTypes = require("./contentTypes");

module.exports = {
    getFile: (path, res) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
                res.end("<h1>There was error serving content from the server.</h1>");
            }
            res.end(data);
        });
    }
}
