const path = require("path")

function resumeController(req, res) {
    const htmlPath = path.join(__dirname, "../views/form.html")
    res.setHeader('content-type', 'text/html');

    res.sendFile(htmlPath)

    const data = {

    }
}

module.exports = resumeController