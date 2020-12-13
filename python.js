let {PythonShell} = require('python-shell')
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
app.get('/', (req, res) => {
 
    PythonShell.run('testing.py', null, function (err, result) {
        console.log(err);
        console.log(result);
        res.send(result);
    })
 
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))