const httpStatus = require("http-status-codes"),
utils = require("./utils"),
contentTypes = require("./contentTypes"),
routes = {
    "GET": {},
    "POST": {}
}

exports.get = (url, action) => {
    routes["GET"][url] = action;
}

exports.post = (url, action) => {
    routes["POST"][url] = action;
}

exports.handle = (req, res) => {
    try {
        routes[req.method][req.url](req, res);
    } catch(err) {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/error.html", res);
    }
}