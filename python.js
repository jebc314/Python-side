let {PythonShell} = require('python-shell')
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
app.get('/:information', (req, res) => {

    let options = {
      args: [req.params.information]
    }

    PythonShell.run('testing.py', options, function (err, result) {
        console.log(err);
        console.log(result);
        res.send(result);
    })
 
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))