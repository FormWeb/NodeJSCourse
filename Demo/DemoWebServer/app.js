const http = require("http")
const url = require("url")

const students = [
    {name: "Jules", age: 25},
    {name: "Jane", age: 35}
]

const getData = (req) => {
    return new Promise((resolve, reject) => {
        let body = ""
        req.on("data", (data) => {
            body = body + data
        })
        req.on("end", () => {
            resolve(JSON.parse(body))
        })
    })
}

http.createServer((req, res) => {
    const currentUrl = url.parse(req.url, true)
    const path = currentUrl.pathname
    const query = currentUrl.query

    console.log(path)
    console.log(query)

    res.writeHead(200, { "Content-Type" : "application/json"})

    if (path === "/student" && req.method === "GET") {
        res.write(JSON.stringify(students))
        res.end()
    }

    if (path === "/student" && req.method === "POST") {
        getData(req)
            .then((data) => {
                students.push(data)
                res.write(JSON.stringify({ message : "Student added "}))
                res.end()
            })
    }
})
.listen(7070)