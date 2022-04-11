const getRequestData = (req) => {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (data) => {
            body += data;
        });

        req.on("end", () => {
            resolve(JSON.parse(body));
        });
    })
}

module.exports = getRequestData