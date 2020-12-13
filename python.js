let {PythonShell} = require('python-shell')
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
app.get('/:information', (req, res) => {
    var information_array = req.params.information.split(" ");
    var int_array = [];

    for (let i = 0; i<information_array.length; i++)
    {
      int_array.push(parseInt(information_array[i]));
    }

    console.log(int_array);

    let options = {
      args: int_array
    }

    PythonShell.run('decisiontree.py', options, function (err, result) {
        console.log(err);
        console.log(result);
        res.send(result);
    })
 
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))