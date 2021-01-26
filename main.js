const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
contentTypes = require("./contentTypes"),
router = require("./router"),
utils = require("./utils");

router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/index.html", res);
});

router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res);
});

router.get("/styles.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/styles.css", res);
});

router.get("/form.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/form.html", res);
});

http.createServer(router.handle).listen(port);
console.log(`The server is listening on port: ${port}`)